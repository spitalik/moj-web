// ==================== GAMES DATABASE ====================
const gamesData = [
    // Action Games (1-15)
    { id: 1, title: "Space Shooter", category: "action", icon: "🚀", rating: 4.8, plays: 15234, badge: "popular", path: "game1" },
    { id: 2, title: "Ninja Slice", category: "action", icon: "🥷", rating: 4.6, plays: 12450, badge: null, path: "game2" },
    { id: 3, title: "Zombie Survival", category: "action", icon: "🧟", rating: 4.7, plays: 18900, badge: "new", path: "game3" },
    { id: 4, title: "Robot Battle", category: "action", icon: "🤖", rating: 4.5, plays: 9870, badge: null, path: "game4" },
    { id: 5, title: "Dragon Fighter", category: "action", icon: "🐉", rating: 4.9, plays: 22100, badge: "popular", path: "game5" },
    { id: 6, title: "Samurai Duel", category: "action", icon: "⚔️", rating: 4.4, plays: 7650, badge: null, path: "game6" },
    { id: 7, title: "Alien Invasion", category: "action", icon: "👾", rating: 4.3, plays: 11200, badge: null, path: "game7" },
    { id: 8, title: "Cyber Runner", category: "action", icon: "🏃", rating: 4.6, plays: 14500, badge: "new", path: "game8" },
    { id: 9, title: "Pirate Battle", category: "action", icon: "🏴‍☠️", rating: 4.7, plays: 16700, badge: null, path: "game9" },
    { id: 10, title: "Mech Warrior", category: "action", icon: "🦾", rating: 4.5, plays: 8900, badge: null, path: "game10" },
    
    // Puzzle Games (16-30)
    { id: 16, title: "Memory Match", category: "puzzle", icon: "🧠", rating: 4.8, plays: 25600, badge: "popular", path: "game16" },
    { id: 17, title: "2048 Challenge", category: "puzzle", icon: "🔢", rating: 4.7, plays: 31200, badge: "popular", path: "game17" },
    { id: 18, title: "Sudoku Master", category: "puzzle", icon: "📝", rating: 4.6, plays: 18900, badge: null, path: "game18" },
    { id: 19, title: "Block Puzzle", category: "puzzle", icon: "🧱", rating: 4.5, plays: 14500, badge: null, path: "game19" },
    { id: 20, title: "Color Sort", category: "puzzle", icon: "🎨", rating: 4.4, plays: 12300, badge: "new", path: "game20" },
    { id: 21, title: "Jigsaw Puzzle", category: "puzzle", icon: "🧩", rating: 4.3, plays: 9800, badge: null, path: "game21" },
    { id: 22, title: "Math Genius", category: "puzzle", icon: "➗", rating: 4.6, plays: 15600, badge: null, path: "game22" },
    { id: 23, title: "Pattern Finder", category: "puzzle", icon: "🔍", rating: 4.2, plays: 7200, badge: null, path: "game23" },
    { id: 24, title: "Logic Grid", category: "puzzle", icon: "📊", rating: 4.5, plays: 11000, badge: null, path: "game24" },
    { id: 25, title: "Tangram", category: "puzzle", icon: "🔷", rating: 4.7, plays: 13400, badge: "new", path: "game25" },
    
    // Arcade Games (31-45)
    { id: 31, title: "Snake Classic", category: "arcade", icon: "🐍", rating: 4.9, plays: 45000, badge: "popular", path: "game31" },
    { id: 32, title: "Tetris Block", category: "arcade", icon: "🧊", rating: 4.8, plays: 38900, badge: "popular", path: "game32" },
    { id: 33, title: "Flappy Bird", category: "arcade", icon: "🐤", rating: 4.7, plays: 34000, badge: null, path: "game33" },
    { id: 34, title: "Brick Breaker", category: "arcade", icon: "🧱", rating: 4.6, plays: 27800, badge: null, path: "game34" },
    { id: 35, title: "Pac-Man", category: "arcade", icon: "👻", rating: 4.9, plays: 52000, badge: "popular", path: "game35" },
    { id: 36, title: "Space Invaders", category: "arcade", icon: "🛸", rating: 4.5, plays: 23400, badge: null, path: "game36" },
    { id: 37, title: "Pinball", category: "arcade", icon: "🎱", rating: 4.4, plays: 18900, badge: null, path: "game37" },
    { id: 38, title: "Frogger", category: "arcade", icon: "🐸", rating: 4.3, plays: 15600, badge: "new", path: "game38" },
    { id: 39, title: "Asteroids", category: "arcade", icon: "☄️", rating: 4.6, plays: 21200, badge: null, path: "game39" },
    { id: 40, title: "Galaga", category: "arcade", icon: "🎯", rating: 4.7, plays: 26700, badge: null, path: "game40" },
    
    // Strategy Games (46-60)
    { id: 46, title: "Chess Master", category: "strategy", icon: "♟️", rating: 4.8, plays: 28900, badge: "popular", path: "game46" },
    { id: 47, title: "Checkers", category: "strategy", icon: "⭕", rating: 4.5, plays: 16700, badge: null, path: "game47" },
    { id: 48, title: "Tower Defense", category: "strategy", icon: "🏰", rating: 4.7, plays: 23400, badge: "new", path: "game48" },
    { id: 49, title: "Tic Tac Toe", category: "strategy", icon: "❌", rating: 4.2, plays: 34500, badge: null, path: "game49" },
    { id: 50, title: "Connect Four", category: "strategy", icon: "🟡", rating: 4.4, plays: 19800, badge: null, path: "game50" },
    { id: 51, title: "Go Game", category: "strategy", icon: "⚫", rating: 4.6, plays: 12300, badge: null, path: "game51" },
    { id: 52, title: "Battleship", category: "strategy", icon: "🚢", rating: 4.3, plays: 14500, badge: null, path: "game52" },
    { id: 53, title: "Dominoes", category: "strategy", icon: "🁄", rating: 4.1, plays: 9800, badge: null, path: "game53" },
    { id: 54, title: "Mahjong", category: "strategy", icon: "🀄", rating: 4.7, plays: 18900, badge: "popular", path: "game54" },
    { id: 55, title: "Risk Battle", category: "strategy", icon: "🗺️", rating: 4.5, plays: 15600, badge: null, path: "game55" },
    
    // Word Games (61-70)
    { id: 61, title: "Word Search", category: "word", icon: "🔤", rating: 4.6, plays: 23400, badge: null, path: "game61" },
    { id: 62, title: "Crossword", category: "word", icon: "✏️", rating: 4.5, plays: 18900, badge: null, path: "game62" },
    { id: 63, title: "Scrabble", category: "word", icon: "📚", rating: 4.7, plays: 26700, badge: "popular", path: "game63" },
    { id: 64, title: "Wordle", category: "word", icon: "🟩", rating: 4.9, plays: 45000, badge: "popular", path: "game64" },
    { id: 65, title: "Hangman", category: "word", icon: "💀", rating: 4.3, plays: 31200, badge: null, path: "game65" },
    { id: 66, title: "Anagram", category: "word", icon: "🔄", rating: 4.2, plays: 9800, badge: null, path: "game66" },
    { id: 67, title: "Typing Race", category: "word", icon: "⌨️", rating: 4.4, plays: 14500, badge: "new", path: "game67" },
    { id: 68, title: "Word Connect", category: "word", icon: "🔗", rating: 4.5, plays: 16700, badge: null, path: "game68" },
    { id: 69, title: "Spelling Bee", category: "word", icon: "🐝", rating: 4.6, plays: 12300, badge: null, path: "game69" },
    { id: 70, title: "Letter Drop", category: "word", icon: "📝", rating: 4.1, plays: 7800, badge: null, path: "game70" },
    
    // Card Games (71-80)
    { id: 71, title: "Solitaire", category: "card", icon: "🃏", rating: 4.8, plays: 38900, badge: "popular", path: "game71" },
    { id: 72, title: "Blackjack", category: "card", icon: "🂡", rating: 4.6, plays: 25600, badge: null, path: "game72" },
    { id: 73, title: "Poker", category: "card", icon: "♦️", rating: 4.5, plays: 31200, badge: null, path: "game73" },
    { id: 74, title: "Hearts", category: "card", icon: "♥️", rating: 4.3, plays: 18900, badge: null, path: "game74" },
    { id: 75, title: "Spades", category: "card", icon: "♠️", rating: 4.4, plays: 16700, badge: null, path: "game75" },
    { id: 76, title: "Rummy", category: "card", icon: "🀄", rating: 4.2, plays: 14500, badge: "new", path: "game76" },
    { id: 77, title: "Bridge", category: "card", icon: "🌉", rating: 4.1, plays: 9800, badge: null, path: "game77" },
    { id: 78, title: "Crazy Eights", category: "card", icon: "8️⃣", rating: 4.3, plays: 12300, badge: null, path: "game78" },
    { id: 79, title: "Go Fish", category: "card", icon: "🐟", rating: 4.0, plays: 11200, badge: null, path: "game79" },
    { id: 80, title: "War", category: "card", icon: "⚔️", rating: 3.9, plays: 15600, badge: null, path: "game80" },
    
    // Reflex Games (81-100)
    { id: 81, title: "Reaction Test", category: "reflex", icon: "⚡", rating: 4.5, plays: 23400, badge: null, path: "game81" },
    { id: 82, title: "Color Tap", category: "reflex", icon: "🎯", rating: 4.4, plays: 18900, badge: null, path: "game82" },
    { id: 83, title: "Quick Math", category: "reflex", icon: "🧮", rating: 4.3, plays: 16700, badge: "new", path: "game83" },
    { id: 84, title: "Speed Clicker", category: "reflex", icon: "🖱️", rating: 4.2, plays: 14500, badge: null, path: "game84" },
    { id: 85, title: "Dodge Master", category: "reflex", icon: "💨", rating: 4.6, plays: 21200, badge: null, path: "game85" },
    { id: 86, title: "Catch Fruit", category: "reflex", icon: "🍎", rating: 4.7, plays: 17800, badge: null, path: "game86" },
    { id: 87, title: "Whack-a-Mole", category: "reflex", icon: "🔨", rating: 4.8, plays: 34500, badge: "popular", path: "game87" },
    { id: 88, title: "Simon Says", category: "reflex", icon: "🎵", rating: 4.5, plays: 12300, badge: null, path: "game88" },
    { id: 89, title: "Tap Dance", category: "reflex", icon: "💃", rating: 4.1, plays: 9800, badge: null, path: "game89" },
    { id: 90, title: "Lightning Round", category: "reflex", icon: "🌩️", rating: 4.4, plays: 15600, badge: "new", path: "game90" },
    
    // Additional games to reach 100
    { id: 11, title: "Jetpack Flyer", category: "action", icon: "🚀", rating: 4.3, plays: 8900, badge: null, path: "game11" },
    { id: 12, title: "Super Punch", category: "action", icon: "👊", rating: 4.4, plays: 10200, badge: null, path: "game12" },
    { id: 13, title: "Knight Quest", category: "action", icon: "🛡️", rating: 4.5, plays: 11500, badge: null, path: "game13" },
    { id: 14, title: "Wizard Duel", category: "action", icon: "🧙", rating: 4.6, plays: 13800, badge: "new", path: "game14" },
    { id: 15, title: "Archer Master", category: "action", icon: "🏹", rating: 4.2, plays: 9400, badge: null, path: "game15" },
    { id: 26, title: "Maze Runner", category: "puzzle", icon: "🌀", rating: 4.4, plays: 10900, badge: null, path: "game26" },
    { id: 27, title: "Number Link", category: "puzzle", icon: "🔗", rating: 4.1, plays: 6700, badge: null, path: "game27" },
    { id: 28, title: "Shape Match", category: "puzzle", icon: "◼️", rating: 4.2, plays: 8500, badge: null, path: "game28" },
    { id: 29, title: "Gravity Switch", category: "puzzle", icon: "🔄", rating: 4.5, plays: 12100, badge: "new", path: "game29" },
    { id: 30, title: "Pipe Connect", category: "puzzle", icon: "🔧", rating: 4.3, plays: 9500, badge: null, path: "game30" },
    { id: 41, title: "Pong", category: "arcade", icon: "🏓", rating: 4.7, plays: 29800, badge: "popular", path: "game41" },
    { id: 42, title: "Arkanoid", category: "arcade", icon: "🎾", rating: 4.5, plays: 18900, badge: null, path: "game42" },
    { id: 43, title: "Centipede", category: "arcade", icon: "🐛", rating: 4.2, plays: 12300, badge: null, path: "game43" },
    { id: 44, title: "Q*Bert", category: "arcade", icon: "🟪", rating: 4.1, plays: 9800, badge: null, path: "game44" },
    { id: 45, title: "Donkey Kong", category: "arcade", icon: "🦍", rating: 4.8, plays: 35600, badge: "popular", path: "game45" },
    { id: 56, title: "Othello", category: "strategy", icon: "⚪", rating: 4.3, plays: 8900, badge: null, path: "game56" },
    { id: 57, title: "Backgammon", category: "strategy", icon: "🎲", rating: 4.4, plays: 11200, badge: null, path: "game57" },
    { id: 58, title: "Mancala", category: "strategy", icon: "🕳️", rating: 4.2, plays: 7600, badge: null, path: "game58" },
    { id: 59, title: "Shogi", category: "strategy", icon: "🏯", rating: 4.5, plays: 13400, badge: "new", path: "game59" },
    { id: 60, title: "Stratego", category: "strategy", icon: "🎖️", rating: 4.6, plays: 16700, badge: null, path: "game60" },
    { id: 91, title: "Falling Stars", category: "reflex", icon: "⭐", rating: 4.3, plays: 12000, badge: null, path: "game91" },
    { id: 92, title: "Bubble Pop", category: "reflex", icon: "🫧", rating: 4.6, plays: 19800, badge: null, path: "game92" },
    { id: 93, title: "Swipe Master", category: "reflex", icon: "👆", rating: 4.2, plays: 10500, badge: null, path: "game93" },
    { id: 94, title: "Rhythm Tap", category: "reflex", icon: "🥁", rating: 4.5, plays: 14500, badge: "new", path: "game94" },
    { id: 95, title: "Laser Dodge", category: "reflex", icon: "🔴", rating: 4.7, plays: 18900, badge: null, path: "game95" },
    { id: 96, title: "Gravity Ball", category: "reflex", icon: "⚽", rating: 4.4, plays: 11200, badge: null, path: "game96" },
    { id: 97, title: "Swipe Color", category: "reflex", icon: "🎨", rating: 4.1, plays: 8900, badge: null, path: "game97" },
    { id: 98, title: "Jump Master", category: "reflex", icon: "🦘", rating: 4.5, plays: 15600, badge: null, path: "game98" },
    { id: 99, title: "Split Second", category: "reflex", icon: "⏱️", rating: 4.3, plays: 13400, badge: null, path: "game99" },
    { id: 100, title: "Ultimate Reflex", category: "reflex", icon: "🏆", rating: 4.8, plays: 24500, badge: "popular", path: "game100" }
];

// Helper function to get game URL
function getGameUrl(game) {
    return `games/${game.path}/index.html`;
}

// Helper function to get localized game title
function getGameTitle(game, lang = 'en') {
    // You can add game-specific translations here
    // For now, games use their default titles
    return game.title;
}