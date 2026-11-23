/* Health Companion – šifrovanie údajov heslom (WebCrypto: PBKDF2-SHA256 + AES-GCM 256).
   Bez závislostí; funguje v prehliadači aj v Node.js (testy). Heslo sa neukladá – ukladá sa len soľ.
   Ak heslo zabudnete, údaje sa nedajú obnoviť. */
(function (root) {
  'use strict';

  var WC = (typeof crypto !== 'undefined' && crypto.subtle) ? crypto : require('crypto').webcrypto;
  var ITERATIONS = 210000;
  var enc = new TextEncoder(), dec = new TextDecoder();

  function toB64(buf) {
    var b = new Uint8Array(buf), s = '';
    for (var i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
    return btoa(s);
  }

  function fromB64(s) {
    var bin = atob(s), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function newSalt() {
    return toB64(WC.getRandomValues(new Uint8Array(16)));
  }

  // Kľúč z hesla a soli (saltB64). Pomalé úmyselne (PBKDF2).
  function deriveKey(passphrase, saltB64) {
    return WC.subtle.importKey('raw', enc.encode(String(passphrase)), 'PBKDF2', false, ['deriveKey'])
      .then(function (base) {
        return WC.subtle.deriveKey(
          { name: 'PBKDF2', salt: fromB64(saltB64), iterations: ITERATIONS, hash: 'SHA-256' },
          base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
      });
  }

  // Šifrovanie bajtov: vráti { iv (b64), ct (ArrayBuffer) }.
  function encryptBytes(key, data) {
    var iv = WC.getRandomValues(new Uint8Array(12));
    var buf = data instanceof ArrayBuffer ? data : (ArrayBuffer.isView(data) ? data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) : data);
    return WC.subtle.encrypt({ name: 'AES-GCM', iv: iv }, key, buf).then(function (ct) {
      return { iv: toB64(iv), ct: ct };
    });
  }

  // Rozšifrovanie bajtov: vráti ArrayBuffer; pri zlom kľúči vyhodí chybu.
  function decryptBytes(key, ivB64, ct) {
    return WC.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(ivB64) }, key, ct);
  }

  // Text -> { iv, ct (b64) }, vhodné pre JSON.
  function encryptText(key, text) {
    return encryptBytes(key, enc.encode(text)).then(function (r) {
      return { iv: r.iv, ct: toB64(r.ct) };
    });
  }

  function decryptText(key, ivB64, ctB64) {
    return decryptBytes(key, ivB64, fromB64(ctB64).buffer).then(function (buf) {
      return dec.decode(buf);
    });
  }

  // Obálka pre zálohu: použije kľúč a soľ profilu (heslo sa nikam neukladá).
  function seal(key, saltB64, text) {
    return encryptText(key, text).then(function (r) {
      return { schema: 'health-companion', version: 1, encrypted: true, kdf: 'PBKDF2-SHA256', iterations: ITERATIONS, salt: saltB64, iv: r.iv, ct: r.ct };
    });
  }

  // Otvorenie zálohy heslom: kľúč sa odvodí zo soli v obálke.
  function open(passphrase, envelope) {
    if (!envelope || !envelope.encrypted || !envelope.salt) return Promise.reject(new Error('not-encrypted'));
    return deriveKey(passphrase, envelope.salt).then(function (key) {
      return decryptText(key, envelope.iv, envelope.ct);
    });
  }

  var api = {
    ITERATIONS: ITERATIONS, toB64: toB64, fromB64: fromB64, newSalt: newSalt, deriveKey: deriveKey,
    encryptBytes: encryptBytes, decryptBytes: decryptBytes, encryptText: encryptText, decryptText: decryptText,
    seal: seal, open: open
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SB = api;
})(typeof self !== 'undefined' ? self : this);
