// Space Shooter Game
(function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    let gameState = {
        score: 0,
        lives: 3,
        ship: { x: 0, y: 0, width: 40, height: 40 },
        bullets: [],
        enemies: [],
        particles: [],
        gameOver: false,
        keys: {}
    };
    
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth * (window.devicePixelRatio || 1);
        canvas.height = container.clientHeight * (window.devicePixelRatio || 1);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        
        gameState.canvasWidth = container.clientWidth;
        gameState.canvasHeight = container.clientHeight;
        gameState.ship.x = gameState.canvasWidth / 2;
        gameState.ship.y = gameState.canvasHeight - 100;
    }
    
    function init() {
        resizeCanvas();
        updateUI();
        requestAnimationFrame(gameLoop);
    }
    
    function spawnEnemy() {
        if (gameState.gameOver) return;
        
        gameState.enemies.push({
            x: Math.random() * (gameState.canvasWidth - 30),
            y: -30,
            width: 30,
            height: 30,
            speed: 1 + Math.random() * 2
        });
        
        // Spawn next enemy
        setTimeout(spawnEnemy, 1000 + Math.random() * 2000);
    }
    
    function shoot() {
        if (gameState.gameOver) return;
        
        gameState.bullets.push({
            x: gameState.ship.x,
            y: gameState.ship.y - 20,
            width: 4,
            height: 15,
            speed: 8
        });
    }
    
    function createExplosion(x, y) {
        for (let i = 0; i < 10; i++) {
            gameState.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                life: 1,
                decay: 0.03 + Math.random() * 0.05,
                size: 2 + Math.random() * 3,
                color: Math.random() > 0.5 ? '#ff6b6b' : '#ffd93d'
            });
        }
    }
    
    function update() {
        if (gameState.gameOver) {
            // Update particles only
            gameState.particles = gameState.particles.filter(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                return p.life > 0;
            });
            return;
        }
        
        // Move ship
        if (gameState.keys.left) gameState.ship.x -= 5;
        if (gameState.keys.right) gameState.ship.x += 5;
        gameState.ship.x = Math.max(20, Math.min(gameState.canvasWidth - 20, gameState.ship.x));
        
        // Move bullets
        gameState.bullets = gameState.bullets.filter(b => {
            b.y -= b.speed;
            return b.y > -10;
        });
        
        // Move enemies
        gameState.enemies = gameState.enemies.filter(e => {
            e.y += e.speed;
            
            // Check collision with bullets
            for (let i = gameState.bullets.length - 1; i >= 0; i--) {
                const b = gameState.bullets[i];
                if (b.x < e.x + e.width && b.x + b.width > e.x &&
                    b.y < e.y + e.height && b.y + b.height > e.y) {
                    gameState.bullets.splice(i, 1);
                    createExplosion(e.x + e.width/2, e.y + e.height/2);
                    gameState.score += 100;
                    updateUI();
                    return false;
                }
            }
            
            // Check collision with ship
            if (e.x < gameState.ship.x + gameState.ship.width &&
                e.x + e.width > gameState.ship.x - gameState.ship.width/2 &&
                e.y < gameState.ship.y + gameState.ship.height &&
                e.y + e.height > gameState.ship.y - gameState.ship.height/2) {
                gameState.lives--;
                updateUI();
                createExplosion(e.x + e.width/2, e.y + e.height/2);
                if (gameState.lives <= 0) {
                    endGame();
                }
                return false;
            }
            
            // Remove if off screen
            if (e.y > gameState.canvasHeight + 30) {
                return false;
            }
            return true;
        });
        
        // Update particles
        gameState.particles = gameState.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            return p.life > 0;
        });
    }
    
    function draw() {
        // Clear
        ctx.fillStyle = '#0a0a2a';
        ctx.fillRect(0, 0, gameState.canvasWidth, gameState.canvasHeight);
        
        // Draw stars
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        for (let i = 0; i < 50; i++) {
            const x = (i * 137 + 50) % gameState.canvasWidth;
            const y = ((Date.now() * 0.05 + i * 100) % gameState.canvasHeight);
            ctx.fillRect(x, y, 2, 2);
        }
        
        // Draw bullets
        ctx.fillStyle = '#00ffff';
        gameState.bullets.forEach(b => {
            ctx.fillRect(b.x - b.width/2, b.y, b.width, b.height);
            // Glow effect
            ctx.fillStyle = 'rgba(0, 255, 255, 0.3)';
            ctx.fillRect(b.x - b.width, b.y, b.width * 2, b.height);
            ctx.fillStyle = '#00ffff';
        });
        
        // Draw enemies
        gameState.enemies.forEach(e => {
            ctx.fillStyle = '#ff4444';
            ctx.beginPath();
            ctx.moveTo(e.x, e.y + e.height);
            ctx.lineTo(e.x + e.width/2, e.y);
            ctx.lineTo(e.x + e.width, e.y + e.height);
            ctx.closePath();
            ctx.fill();
        });
        
        // Draw ship
        ctx.fillStyle = '#4d96ff';
        ctx.beginPath();
        const sx = gameState.ship.x;
        const sy = gameState.ship.y;
        ctx.moveTo(sx, sy - 20);
        ctx.lineTo(sx - 15, sy + 15);
        ctx.lineTo(sx + 15, sy + 15);
        ctx.closePath();
        ctx.fill();
        
        // Ship glow
        ctx.fillStyle = 'rgba(77, 150, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(sx, sy + 15, 10, 0, Math.PI);
        ctx.fill();
        
        // Draw particles
        gameState.particles.forEach(p => {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }
    
    function updateUI() {
        document.getElementById('scoreValue').textContent = gameState.score;
        document.getElementById('livesValue').textContent = gameState.lives;
    }
    
    function endGame() {
        gameState.gameOver = true;
        document.getElementById('gameOver').classList.remove('hidden');
        document.getElementById('finalScore').textContent = gameState.score;
    }
    
    function restart() {
        gameState.score = 0;
        gameState.lives = 3;
        gameState.bullets = [];
        gameState.enemies = [];
        gameState.particles = [];
        gameState.gameOver = false;
        gameState.ship.x = gameState.canvasWidth / 2;
        gameState.ship.y = gameState.canvasHeight - 100;
        document.getElementById('gameOver').classList.add('hidden');
        updateUI();
        spawnEnemy();
    }
    
    // Game loop
    function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }
    
    // Input handling
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a') gameState.keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd') gameState.keys.right = true;
        if (e.key === ' ' || e.key === 'ArrowUp') {
            e.preventDefault();
            shoot();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a') gameState.keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd') gameState.keys.right = false;
    });
    
    // Touch controls
    let touchX = 0;
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        touchX = e.touches[0].clientX;
        shoot();
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const dx = e.touches[0].clientX - touchX;
        gameState.ship.x += dx;
        gameState.ship.x = Math.max(20, Math.min(gameState.canvasWidth - 20, gameState.ship.x));
        touchX = e.touches[0].clientX;
    });
    
    // Mouse controls
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        gameState.ship.x = e.clientX - rect.left;
        gameState.ship.x = Math.max(20, Math.min(gameState.canvasWidth - 20, gameState.ship.x));
    });
    
    canvas.addEventListener('click', () => shoot());
    
    // Restart button
    document.getElementById('restartBtn').addEventListener('click', restart);
    
    // Window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize game
    init();
    spawnEnemy();
    
    // Update language on load
    updateGameLanguage();
})();