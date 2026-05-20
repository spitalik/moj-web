const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");
const waveEl = document.getElementById("wave");
const shieldEl = document.getElementById("shield");
const weaponHeatEl = document.getElementById("weaponHeat");
const tipEl = document.getElementById("tip");
const startOverlay = document.getElementById("startOverlay");
const gameOverOverlay = document.getElementById("gameOverOverlay");
const finalScoreEl = document.getElementById("finalScore");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const joystickEl = document.getElementById("joystick");
const stickEl = document.getElementById("stick");
const firePadEl = document.getElementById("firePad");
const GAME_TEXT = {
  en: {
    score: "Score", wave: "Wave", shield: "Shield", kicker: "Orbital combat arcade",
    intro: "Fly through asteroid swarms, destroy drones and collect energy before the debris belt swallows you.",
    controlMove: "WASD / arrows", controlFire: "Space / fire", controlMobile: "Mobile: joystick + FIRE", controlPause: "Pause: P",
    start: "Start mission", missionOver: "Mission complete", finalScore: "Final score:",
    gameOverLead: "Your squadron pulled back to the docks. Repair the shields and try to push deeper into the sector.",
    restart: "Fly again", weaponEnergy: "Weapon energy", mobileControls: "Mobile controls", fire: "Fire",
    tipDefault: "Collect blue cores for faster shooting and green cells to repair your shield.",
    tipRapid: "Plasma accelerator active: triple volley for a few seconds.",
    tipShield: "Shield repaired. Green cells can keep you alive in long waves.",
    tipDamage: "Shield hit. Move diagonally so the swarm has a harder time surrounding you.",
    paused: "Paused. Press P to restart the sector.", resumed: "Mission continues."
  },
  sk: {
    score: "Skore", wave: "Vlna", shield: "Stit", kicker: "Orbitalna bojova arkada",
    intro: "Prelet cez roj asteroidov, rozstrielaj drony a zbieraj energiu skor, nez ta pohlti pas trosiek.",
    controlMove: "WASD / sipky", controlFire: "Medzernik / palba", controlMobile: "Mobil: joystick + FIRE", controlPause: "Pauza: P",
    start: "Spustit misiu", missionOver: "Misia ukoncena", finalScore: "Konecne skore:",
    gameOverLead: "Tvoja letka sa stiahla na doky. Oprav stity a skus prerazit hlbsie do sektora.",
    restart: "Letiet znova", weaponEnergy: "Energia zbrane", mobileControls: "Mobilne ovladanie", fire: "Strelba",
    tipDefault: "Zbieraj modre jadra pre rychlejsiu strelbu a zelene bunky pre opravu stitu.",
    tipRapid: "Plazmovy urychlovac aktivny: trojita salva na par sekund.",
    tipShield: "Stit opraveny. Zelene bunky ta vedia podrzat v dlhych vlnach.",
    tipDamage: "Zasah do stitu. Pohybuj sa diagonalne, roj ta horsie obkluci.",
    paused: "Pauza. Stlac P a sektor sa znova zastavi.", resumed: "Misia pokracuje."
  },
  es: {
    score: "Puntos", wave: "Oleada", shield: "Escudo", kicker: "Arcade de combate orbital",
    intro: "Cruza enjambres de asteroides, destruye drones y recoge energia antes de que te alcance el cinturon de restos.",
    controlMove: "WASD / flechas", controlFire: "Espacio / disparar", controlMobile: "Movil: joystick + FIRE", controlPause: "Pausa: P",
    start: "Iniciar mision", missionOver: "Mision terminada", finalScore: "Puntuacion final:",
    gameOverLead: "Tu escuadron vuelve a los muelles. Repara los escudos e intenta avanzar mas en el sector.",
    restart: "Volar otra vez", weaponEnergy: "Energia del arma", mobileControls: "Controles moviles", fire: "Disparar",
    tipDefault: "Recoge nucleos azules para disparar mas rapido y celulas verdes para reparar el escudo.",
    tipRapid: "Acelerador de plasma activo: triple descarga durante unos segundos.",
    tipShield: "Escudo reparado. Las celulas verdes ayudan en oleadas largas.",
    tipDamage: "Impacto en el escudo. Muevete en diagonal para evitar que te rodeen.",
    paused: "Pausa. Pulsa P para reanudar el sector.", resumed: "La mision continua."
  },
  de: {
    score: "Punkte", wave: "Welle", shield: "Schild", kicker: "Orbitales Kampf-Arcade",
    intro: "Fliege durch Asteroidenschwarme, zerstoere Drohnen und sammle Energie, bevor dich das Truemmerfeld verschluckt.",
    controlMove: "WASD / Pfeile", controlFire: "Leertaste / Feuer", controlMobile: "Mobil: Joystick + FIRE", controlPause: "Pause: P",
    start: "Mission starten", missionOver: "Mission beendet", finalScore: "Endpunktzahl:",
    gameOverLead: "Deine Staffel zieht sich zu den Docks zurueck. Repariere die Schilde und dringe tiefer in den Sektor vor.",
    restart: "Nochmal fliegen", weaponEnergy: "Waffenenergie", mobileControls: "Mobile Steuerung", fire: "Feuer",
    tipDefault: "Sammle blaue Kerne fuer schnelleres Feuer und gruene Zellen zur Schildreparatur.",
    tipRapid: "Plasmabeschleuniger aktiv: Dreifachsalve fuer ein paar Sekunden.",
    tipShield: "Schild repariert. Gruene Zellen helfen in langen Wellen.",
    tipDamage: "Schildtreffer. Bewege dich diagonal, damit dich der Schwarm schwerer einkreist.",
    paused: "Pause. Druecke P, um den Sektor fortzusetzen.", resumed: "Mission laeuft weiter."
  },
  fr: {
    score: "Score", wave: "Vague", shield: "Bouclier", kicker: "Arcade de combat orbital",
    intro: "Traverse des essaims d'asteroides, detruis les drones et collecte l'energie avant que les debris ne t'engloutissent.",
    controlMove: "WASD / fleches", controlFire: "Espace / tir", controlMobile: "Mobile : joystick + FIRE", controlPause: "Pause : P",
    start: "Lancer la mission", missionOver: "Mission terminee", finalScore: "Score final :",
    gameOverLead: "Ton escadron rejoint les docks. Repare les boucliers et tente d'aller plus loin dans le secteur.",
    restart: "Revoler", weaponEnergy: "Energie de l'arme", mobileControls: "Commandes mobiles", fire: "Tirer",
    tipDefault: "Collecte les noyaux bleus pour tirer plus vite et les cellules vertes pour reparer le bouclier.",
    tipRapid: "Accelerateur plasma actif : triple salve pendant quelques secondes.",
    tipShield: "Bouclier repare. Les cellules vertes aident dans les longues vagues.",
    tipDamage: "Bouclier touche. Deplace-toi en diagonale pour eviter l'encerclement.",
    paused: "Pause. Appuie sur P pour reprendre le secteur.", resumed: "La mission continue."
  }
};
GAME_TEXT.pt = {
  score: "Pontos", wave: "Onda", shield: "Escudo", kicker: "Arcade de combate orbital",
  intro: "Voe por enxames de asteroides, destrua drones e colete energia antes que o campo de destrocos o engula.",
  controlMove: "WASD / setas", controlFire: "Espaco / disparar", controlMobile: "Movel: joystick + FIRE", controlPause: "Pausa: P",
  start: "Iniciar missao", missionOver: "Missao terminada", finalScore: "Pontuacao final:",
  gameOverLead: "Seu esquadrao voltou aos hangares. Repare os escudos e tente avancar mais fundo no setor.",
  restart: "Voar de novo", weaponEnergy: "Energia da arma", mobileControls: "Controles moveis", fire: "Disparar",
  tipDefault: "Colete nucleos azuis para atirar mais rapido e celulas verdes para reparar o escudo.",
  tipRapid: "Acelerador de plasma ativo: rajada tripla por alguns segundos.",
  tipShield: "Escudo reparado. Celulas verdes ajudam em ondas longas.",
  tipDamage: "Escudo atingido. Mova-se na diagonal para dificultar o cerco.",
  paused: "Pausado. Pressione P para continuar o setor.", resumed: "A missao continua."
};
GAME_TEXT.it = {
  score: "Punteggio", wave: "Ondata", shield: "Scudo", kicker: "Arcade di combattimento orbitale",
  intro: "Vola tra sciami di asteroidi, distruggi droni e raccogli energia prima che la cintura di detriti ti inghiotta.",
  controlMove: "WASD / frecce", controlFire: "Spazio / fuoco", controlMobile: "Mobile: joystick + FIRE", controlPause: "Pausa: P",
  start: "Avvia missione", missionOver: "Missione conclusa", finalScore: "Punteggio finale:",
  gameOverLead: "La tua squadra torna ai moli. Ripara gli scudi e prova a spingerti piu a fondo nel settore.",
  restart: "Vola di nuovo", weaponEnergy: "Energia arma", mobileControls: "Comandi mobile", fire: "Fuoco",
  tipDefault: "Raccogli nuclei blu per sparare piu in fretta e celle verdi per riparare lo scudo.",
  tipRapid: "Acceleratore al plasma attivo: tripla salva per pochi secondi.",
  tipShield: "Scudo riparato. Le celle verdi aiutano nelle ondate lunghe.",
  tipDamage: "Scudo colpito. Muoviti in diagonale per non farti circondare.",
  paused: "Pausa. Premi P per riprendere il settore.", resumed: "La missione continua."
};
GAME_TEXT.ru = {
  score: "Счёт", wave: "Волна", shield: "Щит", kicker: "Орбитальная аркада боя",
  intro: "Пролетай сквозь рои астероидов, уничтожай дроны и собирай энергию, пока тебя не накрыл пояс обломков.",
  controlMove: "WASD / стрелки", controlFire: "Пробел / огонь", controlMobile: "Моб.: джойстик + FIRE", controlPause: "Пауза: P",
  start: "Начать миссию", missionOver: "Миссия завершена", finalScore: "Итоговый счёт:",
  gameOverLead: "Эскадрилья отступила к докам. Почини щиты и попробуй пройти сектор глубже.",
  restart: "Лететь снова", weaponEnergy: "Энергия оружия", mobileControls: "Мобильное управление", fire: "Огонь",
  tipDefault: "Собирай синие ядра для быстрой стрельбы и зелёные ячейки для ремонта щита.",
  tipRapid: "Плазменный ускоритель активен: тройной залп на несколько секунд.",
  tipShield: "Щит восстановлен. Зелёные ячейки помогают в длинных волнах.",
  tipDamage: "Попадание в щит. Двигайся по диагонали, чтобы рою было сложнее окружить тебя.",
  paused: "Пауза. Нажми P, чтобы продолжить.", resumed: "Миссия продолжается."
};
GAME_TEXT.tr = {
  score: "Puan", wave: "Dalga", shield: "Kalkan", kicker: "Yorunge savas arcade",
  intro: "Asteroit surulerinden gec, dronlari yok et ve enkaz kusagi seni yutmadan enerji topla.",
  controlMove: "WASD / oklar", controlFire: "Bosluk / ates", controlMobile: "Mobil: joystick + FIRE", controlPause: "Duraklat: P",
  start: "Gorevi baslat", missionOver: "Gorev tamamlandi", finalScore: "Final puani:",
  gameOverLead: "Filon doklara cekildi. Kalkanlari onar ve sektorde daha derine ilerle.",
  restart: "Tekrar uc", weaponEnergy: "Silah enerjisi", mobileControls: "Mobil kontroller", fire: "Ates",
  tipDefault: "Daha hizli ates icin mavi cekirdekleri, kalkan onarimi icin yesil hucreleri topla.",
  tipRapid: "Plazma hizlandirici aktif: birkac saniye uclu salvo.",
  tipShield: "Kalkan onarildi. Yesil hucreler uzun dalgalarda yardim eder.",
  tipDamage: "Kalkan darbe aldi. Surunun seni sarmasini zorlastirmak icin capraz hareket et.",
  paused: "Duraklatildi. Devam etmek icin P'ye bas.", resumed: "Gorev devam ediyor."
};
GAME_TEXT.ja = {
  score: "スコア", wave: "ウェーブ", shield: "シールド", kicker: "軌道戦闘アーケード",
  intro: "小惑星の群れを抜け、ドローンを破壊し、デブリ帯に飲み込まれる前にエネルギーを集めよう。",
  controlMove: "WASD / 矢印", controlFire: "スペース / 射撃", controlMobile: "モバイル: joystick + FIRE", controlPause: "一時停止: P",
  start: "ミッション開始", missionOver: "ミッション終了", finalScore: "最終スコア:",
  gameOverLead: "部隊はドックへ撤退した。シールドを修理し、さらに深いセクターへ進もう。",
  restart: "もう一度飛ぶ", weaponEnergy: "武器エネルギー", mobileControls: "モバイル操作", fire: "射撃",
  tipDefault: "青いコアで射撃速度アップ、緑のセルでシールドを修理。",
  tipRapid: "プラズマ加速器作動: 数秒間トリプルショット。",
  tipShield: "シールド修理完了。緑のセルは長いウェーブで役立つ。",
  tipDamage: "シールド被弾。斜めに動くと囲まれにくい。",
  paused: "一時停止中。Pで再開。", resumed: "ミッション続行。"
};
GAME_TEXT.ko = {
  score: "점수", wave: "웨이브", shield: "보호막", kicker: "궤도 전투 아케이드",
  intro: "소행성 무리를 뚫고 드론을 파괴하며 잔해 지대에 삼켜지기 전에 에너지를 모으세요.",
  controlMove: "WASD / 방향키", controlFire: "스페이스 / 발사", controlMobile: "모바일: joystick + FIRE", controlPause: "일시정지: P",
  start: "임무 시작", missionOver: "임무 종료", finalScore: "최종 점수:",
  gameOverLead: "편대가 도크로 후퇴했습니다. 보호막을 수리하고 더 깊은 구역에 도전하세요.",
  restart: "다시 비행", weaponEnergy: "무기 에너지", mobileControls: "모바일 조작", fire: "발사",
  tipDefault: "파란 코어는 빠른 사격, 초록 셀은 보호막 수리에 사용됩니다.",
  tipRapid: "플라즈마 가속기 활성화: 잠시 동안 3연발.",
  tipShield: "보호막 수리 완료. 초록 셀은 긴 웨이브에서 유용합니다.",
  tipDamage: "보호막 피격. 대각선으로 움직이면 포위되기 어렵습니다.",
  paused: "일시정지. P를 누르면 재개됩니다.", resumed: "임무 계속."
};
GAME_TEXT.zh = {
  score: "得分", wave: "波次", shield: "护盾", kicker: "轨道战斗街机",
  intro: "穿过小行星群，摧毁无人机，在残骸带吞没你之前收集能量。",
  controlMove: "WASD / 方向键", controlFire: "空格 / 开火", controlMobile: "移动端: joystick + FIRE", controlPause: "暂停: P",
  start: "开始任务", missionOver: "任务结束", finalScore: "最终得分:",
  gameOverLead: "你的小队撤回了船坞。修复护盾，再次深入该星区。",
  restart: "再次起飞", weaponEnergy: "武器能量", mobileControls: "移动端控制", fire: "开火",
  tipDefault: "收集蓝色核心加快射击，收集绿色能量格修复护盾。",
  tipRapid: "等离子加速器已启动：数秒内三连发。",
  tipShield: "护盾已修复。绿色能量格能帮助你撑过长波次。",
  tipDamage: "护盾受击。斜向移动能让敌群更难包围你。",
  paused: "已暂停。按 P 继续。", resumed: "任务继续。"
};

const activeLang = (typeof getLang === "function" ? getLang() : localStorage.getItem("gamepad_lang") || "en");
const copy = GAME_TEXT[activeLang] || GAME_TEXT.en;
const scoreLocale = { sk: "sk-SK", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-PT", it: "it-IT", ru: "ru-RU", tr: "tr-TR", ja: "ja-JP", ko: "ko-KR", zh: "zh-CN", en: "en-US" }[activeLang] || "en-US";
function sfT(key) { return copy[key] || GAME_TEXT.en[key] || key; }
function formatScore(value) { return Math.floor(value).toLocaleString(scoreLocale); }
function applyTranslations() {
  document.documentElement.lang = activeLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = key === "back" && typeof t === "function" ? t("back") : sfT(key);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", sfT(el.dataset.i18nAria));
  });
  document.title = "Starfall Squadron";
}

const WORLD = { width: 960, height: 620 };
const keys = new Set();
const pointer = { active: false, x: WORLD.width / 2, y: WORLD.height / 2 };
const touchMove = { active: false, pointerId: null, x: 0, y: 0 };
const touchFire = { active: false, pointerId: null };
const rand = (min, max) => Math.random() * (max - min) + min;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

let rafId = 0;
let lastTime = 0;
let state;

function createState() {
  return {
    running: false,
    paused: false,
    score: 0,
    wave: 1,
    shake: 0,
    spawnTimer: 0,
    asteroidTimer: 0,
    powerTimer: 6,
    stars: Array.from({ length: 150 }, () => ({
      x: Math.random() * WORLD.width,
      y: Math.random() * WORLD.height,
      z: rand(0.35, 1.7),
      twinkle: Math.random() * Math.PI * 2
    })),
    bullets: [],
    enemies: [],
    asteroids: [],
    particles: [],
    powerups: [],
    player: {
      x: WORLD.width / 2,
      y: WORLD.height - 96,
      vx: 0,
      vy: 0,
      r: 18,
      shield: 100,
      heat: 0,
      fireCooldown: 0,
      rapid: 0,
      invincible: 1.4
    }
  };
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.setTransform(canvas.width / WORLD.width, 0, 0, canvas.height / WORLD.height, 0, 0);
}

function startGame() {
  state = createState();
  state.running = true;
  startOverlay.classList.remove("active");
  gameOverOverlay.classList.remove("active");
  lastTime = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
}

function endGame() {
  state.running = false;
  finalScoreEl.textContent = formatScore(state.score);
  gameOverOverlay.classList.add("active");
}

function loop(time) {
  const dt = Math.min((time - lastTime) / 1000, 0.033);
  lastTime = time;
  if (state.running && !state.paused) update(dt);
  draw(time / 1000);
  if (state.running) rafId = requestAnimationFrame(loop);
}

function update(dt) {
  const player = state.player;
  state.score += dt * 7;
  state.wave = 1 + Math.floor(state.score / 650);
  state.shake = Math.max(0, state.shake - dt * 22);
  player.fireCooldown = Math.max(0, player.fireCooldown - dt);
  player.heat = Math.max(0, player.heat - dt * 0.46);
  player.rapid = Math.max(0, player.rapid - dt);
  player.invincible = Math.max(0, player.invincible - dt);
  updateStars(dt);
  updatePlayer(dt);
  spawnEnemies(dt);
  spawnAsteroids(dt);
  spawnPowerups(dt);
  updateObjects(dt);
  handleCollisions();
  updateHud();
}

function updateStars(dt) {
  for (const star of state.stars) {
    star.y += (42 + state.wave * 7) * star.z * dt;
    star.twinkle += dt * star.z * 2;
    if (star.y > WORLD.height + 8) {
      star.y = -8;
      star.x = Math.random() * WORLD.width;
    }
  }
}

function updatePlayer(dt) {
  const p = state.player;
  let ax = 0;
  let ay = 0;
  if (keys.has("arrowleft") || keys.has("a")) ax -= 1;
  if (keys.has("arrowright") || keys.has("d")) ax += 1;
  if (keys.has("arrowup") || keys.has("w")) ay -= 1;
  if (keys.has("arrowdown") || keys.has("s")) ay += 1;
  if (pointer.active) {
    ax += clamp((pointer.x - p.x) / 130, -1, 1);
    ay += clamp((pointer.y - p.y) / 130, -1, 1);
  }
  if (touchMove.active) {
    ax += touchMove.x;
    ay += touchMove.y;
  }
  const len = Math.hypot(ax, ay) || 1;
  p.vx += (ax / len) * 980 * dt;
  p.vy += (ay / len) * 980 * dt;
  p.vx *= 0.84;
  p.vy *= 0.84;
  p.x = clamp(p.x + p.vx * dt, 32, WORLD.width - 32);
  p.y = clamp(p.y + p.vy * dt, 54, WORLD.height - 38);
  if (keys.has(" ") || pointer.active || touchFire.active) fire();
}

function fire() {
  const p = state.player;
  const rapid = p.rapid > 0;
  if (p.fireCooldown > 0 || p.heat > 0.96) return;
  p.fireCooldown = rapid ? 0.075 : 0.14;
  p.heat += rapid ? 0.045 : 0.072;
  const count = rapid ? 3 : 2;
  for (let i = 0; i < count; i += 1) {
    const offset = (i - (count - 1) / 2) * (rapid ? 13 : 9);
    state.bullets.push({ x: p.x + offset, y: p.y - 18, vx: offset * 1.8, vy: -760, r: 4, damage: rapid ? 16 : 20, life: 1.2 });
  }
}

function spawnEnemies(dt) {
  state.spawnTimer -= dt;
  if (state.spawnTimer > 0) return;
  const gap = clamp(1.05 - state.wave * 0.075, 0.34, 1.05);
  state.spawnTimer = rand(gap * 0.55, gap * 1.25);
  const type = Math.random() < Math.min(0.25 + state.wave * 0.035, 0.58) ? "hunter" : "drone";
  state.enemies.push({
    type,
    x: rand(50, WORLD.width - 50),
    y: -34,
    vx: rand(-70, 70),
    vy: type === "hunter" ? rand(95, 140) : rand(70, 115),
    r: type === "hunter" ? 21 : 17,
    hp: type === "hunter" ? 58 + state.wave * 7 : 34 + state.wave * 5,
    phase: rand(0, Math.PI * 2)
  });
}

function spawnAsteroids(dt) {
  state.asteroidTimer -= dt;
  if (state.asteroidTimer > 0) return;
  state.asteroidTimer = rand(0.45, clamp(1.4 - state.wave * 0.08, 0.55, 1.4));
  const radius = rand(18, 48);
  state.asteroids.push({
    x: rand(radius, WORLD.width - radius),
    y: -radius,
    vx: rand(-45, 45),
    vy: rand(105, 190) + state.wave * 8,
    r: radius,
    spin: rand(-2.2, 2.2),
    angle: rand(0, Math.PI * 2),
    hp: radius * 1.9
  });
}

function spawnPowerups(dt) {
  state.powerTimer -= dt;
  if (state.powerTimer > 0) return;
  state.powerTimer = rand(7, 11);
  state.powerups.push({ x: rand(60, WORLD.width - 60), y: -24, vy: rand(92, 125), r: 15, type: Math.random() < 0.55 ? "rapid" : "shield", phase: rand(0, Math.PI * 2) });
}

function updateObjects(dt) {
  state.bullets = state.bullets.filter((b) => {
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.life -= dt;
    return b.life > 0 && b.y > -20;
  });
  for (const e of state.enemies) {
    e.phase += dt * 2.5;
    if (e.type === "hunter") e.vx = clamp(e.vx + Math.sign(state.player.x - e.x) * 62 * dt, -145, 145);
    e.x += (e.vx + Math.sin(e.phase) * 46) * dt;
    e.y += e.vy * dt;
    if (e.x < e.r || e.x > WORLD.width - e.r) e.vx *= -1;
  }
  state.enemies = state.enemies.filter((e) => e.y < WORLD.height + 70 && e.hp > 0);
  for (const a of state.asteroids) {
    a.x += a.vx * dt;
    a.y += a.vy * dt;
    a.angle += a.spin * dt;
    if (a.x < a.r || a.x > WORLD.width - a.r) a.vx *= -1;
  }
  state.asteroids = state.asteroids.filter((a) => a.y < WORLD.height + 80 && a.hp > 0);
  for (const p of state.powerups) {
    p.y += p.vy * dt;
    p.phase += dt * 4;
  }
  state.powerups = state.powerups.filter((p) => p.y < WORLD.height + 35);
  state.particles = state.particles.filter((p) => {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.985;
    p.vy *= 0.985;
    p.life -= dt;
    return p.life > 0;
  });
}

function handleCollisions() {
  const player = state.player;
  for (const bullet of state.bullets) {
    for (const enemy of state.enemies) {
      if (distance(bullet, enemy) < bullet.r + enemy.r) {
        bullet.life = 0;
        enemy.hp -= bullet.damage;
        burst(bullet.x, bullet.y, "#4df0c0", 5);
        if (enemy.hp <= 0) destroyTarget(enemy, enemy.type === "hunter" ? 150 : 90);
        break;
      }
    }
    for (const asteroid of state.asteroids) {
      if (bullet.life <= 0) break;
      if (distance(bullet, asteroid) < bullet.r + asteroid.r) {
        bullet.life = 0;
        asteroid.hp -= bullet.damage;
        burst(bullet.x, bullet.y, "#ffcf5a", 4);
        if (asteroid.hp <= 0) destroyTarget(asteroid, Math.floor(asteroid.r * 4));
      }
    }
  }
  for (const enemy of state.enemies) {
    if (distance(player, enemy) < player.r + enemy.r) {
      damagePlayer(enemy.type === "hunter" ? 22 : 16);
      enemy.hp = 0;
      burst(enemy.x, enemy.y, "#ff6f61", 18);
    }
  }
  for (const asteroid of state.asteroids) {
    if (distance(player, asteroid) < player.r + asteroid.r * 0.86) {
      damagePlayer(Math.floor(asteroid.r * 0.58));
      asteroid.hp = 0;
      burst(asteroid.x, asteroid.y, "#ffcf5a", 22);
    }
  }
  for (const power of state.powerups) {
    if (distance(player, power) < player.r + power.r) {
      if (power.type === "rapid") {
        player.rapid = 7;
        tipEl.textContent = sfT("tipRapid");
      } else {
        player.shield = clamp(player.shield + 30, 0, 100);
        tipEl.textContent = sfT("tipShield");
      }
      power.y = WORLD.height + 100;
      burst(power.x, power.y, power.type === "rapid" ? "#63c7ff" : "#4df0c0", 20);
    }
  }
}

function damagePlayer(amount) {
  const p = state.player;
  if (p.invincible > 0) return;
  p.shield -= amount;
  p.invincible = 0.72;
  state.shake = 12;
  tipEl.textContent = sfT("tipDamage");
  burst(p.x, p.y, "#ff6f61", 24);
  if (p.shield <= 0) endGame();
}

function destroyTarget(target, points) {
  state.score += points;
  state.shake = Math.max(state.shake, 4);
  burst(target.x, target.y, target.type === "hunter" ? "#ff6f61" : "#ffcf5a", 26);
}

function burst(x, y, color, count) {
  for (let i = 0; i < count; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(55, 330);
    state.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, color, size: rand(1.6, 4.8), life: rand(0.28, 0.82) });
  }
}

function updateHud() {
  scoreEl.textContent = formatScore(state.score);
  waveEl.textContent = state.wave;
  shieldEl.textContent = `${Math.max(0, Math.ceil(state.player.shield))}%`;
  weaponHeatEl.style.transform = `scaleX(${clamp(1 - state.player.heat, 0, 1)})`;
}

function draw(t) {
  ctx.save();
  ctx.clearRect(0, 0, WORLD.width, WORLD.height);
  if (state?.shake) ctx.translate(rand(-state.shake, state.shake), rand(-state.shake, state.shake));
  drawBackground(t);
  if (state) {
    drawPowerups(t);
    drawBullets();
    drawEnemies();
    drawAsteroids();
    drawPlayer(t);
    drawParticles();
    drawVignette();
  }
  ctx.restore();
}

function drawBackground(t) {
  const gradient = ctx.createLinearGradient(0, 0, 0, WORLD.height);
  gradient.addColorStop(0, "#04100f");
  gradient.addColorStop(0.52, "#071b1b");
  gradient.addColorStop(1, "#100c1a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WORLD.width, WORLD.height);
  for (const star of state.stars) {
    const pulse = 0.55 + Math.sin(star.twinkle + t) * 0.35;
    ctx.fillStyle = `rgba(220, 255, 246, ${clamp(pulse * star.z, 0.2, 0.95)})`;
    ctx.fillRect(star.x, star.y, star.z * 1.5, star.z * 12);
  }
  ctx.strokeStyle = "rgba(77, 240, 192, 0.08)";
  for (let y = (t * 42) % 44; y < WORLD.height; y += 44) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WORLD.width, y + 28);
    ctx.stroke();
  }
}

function drawPlayer(t) {
  const p = state.player;
  ctx.save();
  ctx.translate(p.x, p.y);
  if (p.invincible > 0 && Math.floor(t * 18) % 2 === 0) ctx.globalAlpha = 0.55;
  ctx.shadowColor = p.rapid > 0 ? "#63c7ff" : "#4df0c0";
  ctx.shadowBlur = 24;
  ctx.fillStyle = "#e9fff7";
  ctx.beginPath();
  ctx.moveTo(0, -25);
  ctx.lineTo(20, 22);
  ctx.lineTo(0, 12);
  ctx.lineTo(-20, 22);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = p.rapid > 0 ? "#63c7ff" : "#4df0c0";
  ctx.beginPath();
  ctx.moveTo(-9, 17);
  ctx.lineTo(0, 35 + Math.sin(t * 22) * 7);
  ctx.lineTo(9, 17);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = `rgba(77, 240, 192, ${0.18 + p.shield / 160})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 31, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawBullets() {
  ctx.save();
  ctx.shadowColor = "#4df0c0";
  ctx.shadowBlur = 15;
  for (const b of state.bullets) {
    ctx.fillStyle = "#baffef";
    ctx.beginPath();
    ctx.roundRect(b.x - 2.5, b.y - 14, 5, 22, 3);
    ctx.fill();
  }
  ctx.restore();
}

function drawEnemies() {
  for (const e of state.enemies) {
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.rotate(Math.sin(e.phase) * 0.18);
    ctx.shadowColor = e.type === "hunter" ? "#ff6f61" : "#ffcf5a";
    ctx.shadowBlur = 18;
    ctx.fillStyle = e.type === "hunter" ? "#ff6f61" : "#ffcf5a";
    ctx.beginPath();
    ctx.moveTo(0, 23);
    ctx.lineTo(24, -13);
    ctx.lineTo(8, -4);
    ctx.lineTo(0, -22);
    ctx.lineTo(-8, -4);
    ctx.lineTo(-24, -13);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#241015";
    ctx.fillRect(-7, -2, 14, 8);
    ctx.restore();
  }
}

function drawAsteroids() {
  for (const a of state.asteroids) {
    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.rotate(a.angle);
    ctx.fillStyle = "#79634d";
    ctx.strokeStyle = "#ffcf5a";
    ctx.lineWidth = 2;
    ctx.shadowColor = "rgba(255, 207, 90, 0.45)";
    ctx.shadowBlur = 14;
    ctx.beginPath();
    for (let i = 0; i < 9; i += 1) {
      const angle = (i / 9) * Math.PI * 2;
      const r = a.r * (0.78 + ((i * 37) % 10) / 42);
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

function drawPowerups(t) {
  for (const p of state.powerups) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(t * 2);
    ctx.shadowColor = p.type === "rapid" ? "#63c7ff" : "#4df0c0";
    ctx.shadowBlur = 18;
    ctx.strokeStyle = p.type === "rapid" ? "#63c7ff" : "#4df0c0";
    ctx.lineWidth = 3;
    ctx.strokeRect(-12, -12, 24, 24);
    ctx.fillStyle = "rgba(255,255,255,0.86)";
    ctx.beginPath();
    ctx.arc(0, 0, 5 + Math.sin(p.phase) * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawParticles() {
  for (const p of state.particles) {
    ctx.globalAlpha = clamp(p.life * 1.8, 0, 1);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawVignette() {
  const gradient = ctx.createRadialGradient(WORLD.width / 2, WORLD.height / 2, WORLD.height * 0.2, WORLD.width / 2, WORLD.height / 2, WORLD.width * 0.72);
  gradient.addColorStop(0, "rgba(0,0,0,0)");
  gradient.addColorStop(1, "rgba(0,0,0,0.52)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WORLD.width, WORLD.height);
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * WORLD.width;
  pointer.y = ((event.clientY - rect.top) / rect.height) * WORLD.height;
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  keys.add(key);
  if (key === " " || key.startsWith("arrow")) event.preventDefault();
  if (key === "p" && state?.running) {
    state.paused = !state.paused;
    tipEl.textContent = state.paused ? sfT("paused") : sfT("resumed");
    if (!state.paused) {
      lastTime = performance.now();
      rafId = requestAnimationFrame(loop);
    }
  }
});
window.addEventListener("keyup", (event) => keys.delete(event.key.toLowerCase()));

canvas.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch") return;
  pointer.active = true;
  canvas.setPointerCapture(event.pointerId);
  canvasPoint(event);
});
canvas.addEventListener("pointermove", (event) => {
  if (pointer.active) canvasPoint(event);
});
canvas.addEventListener("pointerup", () => { pointer.active = false; });
canvas.addEventListener("pointercancel", () => { pointer.active = false; });

function updateJoystick(event) {
  const rect = joystickEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const max = rect.width * 0.34;
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;
  const length = Math.hypot(dx, dy);
  const limited = Math.min(length, max);
  const nx = length > 0 ? dx / length : 0;
  const ny = length > 0 ? dy / length : 0;
  const visualX = nx * limited;
  const visualY = ny * limited;

  touchMove.x = clamp(dx / max, -1, 1);
  touchMove.y = clamp(dy / max, -1, 1);
  if (length > max) {
    touchMove.x = nx;
    touchMove.y = ny;
  }
  stickEl.style.transform = `translate(calc(-50% + ${visualX}px), calc(-50% + ${visualY}px))`;
}

function resetJoystick() {
  touchMove.active = false;
  touchMove.pointerId = null;
  touchMove.x = 0;
  touchMove.y = 0;
  joystickEl.classList.remove("is-active");
  stickEl.style.transform = "translate(-50%, -50%)";
}

joystickEl.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  touchMove.active = true;
  touchMove.pointerId = event.pointerId;
  joystickEl.classList.add("is-active");
  joystickEl.setPointerCapture(event.pointerId);
  updateJoystick(event);
});

joystickEl.addEventListener("pointermove", (event) => {
  if (!touchMove.active || touchMove.pointerId !== event.pointerId) return;
  event.preventDefault();
  updateJoystick(event);
});

joystickEl.addEventListener("pointerup", (event) => {
  if (touchMove.pointerId === event.pointerId) resetJoystick();
});

joystickEl.addEventListener("pointercancel", (event) => {
  if (touchMove.pointerId === event.pointerId) resetJoystick();
});

firePadEl.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  touchFire.active = true;
  touchFire.pointerId = event.pointerId;
  firePadEl.classList.add("is-firing");
  firePadEl.setPointerCapture(event.pointerId);
});

function resetFire(event) {
  if (event && touchFire.pointerId !== event.pointerId) return;
  touchFire.active = false;
  touchFire.pointerId = null;
  firePadEl.classList.remove("is-firing");
}

firePadEl.addEventListener("pointerup", resetFire);
firePadEl.addEventListener("pointercancel", resetFire);

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

applyTranslations();
state = createState();
resizeCanvas();
draw(0);



