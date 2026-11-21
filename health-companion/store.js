/* Health Companion – úložisko v IndexedDB (len v tomto zariadení).
   Stores: profiles (údaje profilu, alebo jeho zašifrovaný obsah) a files (prílohy).
   Všetky funkcie vracajú Promise. Používa sa len v prehliadači. */
var HCStore = (function () {
  'use strict';

  var DB_NAME = 'health-companion';
  var DB_VERSION = 1;
  var dbPromise = null;

  function open() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      if (!window.indexedDB) { reject(new Error('no-indexeddb')); return; }
      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains('profiles')) db.createObjectStore('profiles', { keyPath: 'id' });
        if (!db.objectStoreNames.contains('files')) {
          var files = db.createObjectStore('files', { keyPath: 'id' });
          files.createIndex('byProfile', 'profileId', { unique: false });
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
      req.onblocked = function () { reject(new Error('blocked')); };
    });
    dbPromise.catch(function () { dbPromise = null; });
    return dbPromise;
  }

  // Jedna transakcia; fn dostane objectStore a vracia IDBRequest.
  function run(storeName, mode, fn) {
    return open().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeName, mode);
        var store = tx.objectStore(storeName);
        var req = fn(store, tx);
        tx.oncomplete = function () { resolve(req ? req.result : undefined); };
        tx.onerror = function () { reject(tx.error); };
        tx.onabort = function () { reject(tx.error || new Error('aborted')); };
      });
    });
  }

  function listProfiles() {
    return run('profiles', 'readonly', function (s) { return s.getAll(); }).then(function (list) {
      return (list || []).sort(function (a, b) { return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0; });
    });
  }
  function getProfile(id) {
    return run('profiles', 'readonly', function (s) { return s.get(id); });
  }
  function putProfile(rec) {
    return run('profiles', 'readwrite', function (s) { return s.put(rec); });
  }

  function getFile(id) {
    return run('files', 'readonly', function (s) { return s.get(id); });
  }
  function putFile(rec) {
    return run('files', 'readwrite', function (s) { return s.put(rec); });
  }
  function deleteFile(id) {
    return run('files', 'readwrite', function (s) { return s.delete(id); });
  }
  function listFiles(profileId) {
    return run('files', 'readonly', function (s) { return s.index('byProfile').getAll(profileId); });
  }

  // Zmaže profil a všetky jeho prílohy.
  function deleteProfile(id) {
    return listFiles(id).then(function (files) {
      return run('profiles', 'readwrite', function (s) { return s.delete(id); }).then(function () {
        return Promise.all(files.map(function (f) { return deleteFile(f.id); }));
      });
    });
  }

  return {
    open: open, listProfiles: listProfiles, getProfile: getProfile, putProfile: putProfile,
    getFile: getFile, putFile: putFile, deleteFile: deleteFile, listFiles: listFiles, deleteProfile: deleteProfile
  };
})();
