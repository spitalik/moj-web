(()=>{
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  let W = innerWidth, H = innerHeight;
  const DPR = Math.min(devicePixelRatio||1,2);
  canvas.width = W * DPR; canvas.height = H * DPR; canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  ctx.scale(DPR,DPR);

  // Grid settings
  const TILE = 18; // px
  const COLS = Math.floor(W / TILE);
  const ROWS = Math.floor(H / TILE);

  const types = {EMPTY:0,WALL:1,ORE:2,EXIT:3};

  let grid = new Uint8Array(COLS*ROWS);
  let player = {x:0,y:0,hp:100,score:0};
  let enemies = [];

  function idx(x,y){return y*COLS + x}

  function resize(){ W = innerWidth; H = innerHeight; canvas.width = W*DPR; canvas.height = H*DPR; canvas.style.width=W+'px'; canvas.style.height=H+'px'; ctx.setTransform(DPR,0,0,DPR,0,0); }
  addEventListener('resize', ()=>{resize();});

  // dungeon generation: random walk + fog of walls
  function gen(){
    grid.fill(types.WALL);
    let x = Math.floor(COLS/2), y = Math.floor(ROWS/2);
    grid[idx(x,y)] = types.EMPTY;
    for(let i=0;i< (COLS*ROWS*3); i++){
      const dir = Math.floor(Math.random()*4);
      if(dir===0) x++; if(dir===1) x--; if(dir===2) y++; if(dir===3) y--;
      x = Math.max(1, Math.min(COLS-2, x)); y = Math.max(1, Math.min(ROWS-2,y));
      grid[idx(x,y)] = types.EMPTY;
      // carve neighbors occasionally
      if(Math.random()<0.25){
        grid[idx(Math.max(1,Math.min(COLS-2,x+1)),y)] = types.EMPTY;
        grid[idx(Math.max(1,Math.min(ROWS-2,y+1)),x)] = types.EMPTY;
      }
    }
    // scatter ores
    for(let i=0;i< (COLS*ROWS*0.03); i++){
      let rx = 1+Math.floor(Math.random()*(COLS-2));
      let ry = 1+Math.floor(Math.random()*(ROWS-2));
      if(grid[idx(rx,ry)]===types.WALL){grid[idx(rx,ry)] = types.ORE}
    }
    // place exit
    for(let tries=0; tries<200; tries++){
      let rx = Math.floor(Math.random()*COLS); let ry = Math.floor(Math.random()*ROWS);
      if(grid[idx(rx,ry)]===types.EMPTY){grid[idx(rx,ry)]=types.EXIT;break}
    }
    // place player near center
    player.x = Math.floor(COLS/2); player.y = Math.floor(ROWS/2); player.hp = 100; player.score = 0;
    enemies = [];
    // spawn enemies
    for(let i=0;i< Math.floor(COLS*ROWS*0.003); i++){
      let rx=0,ry=0; do{rx = 1+Math.floor(Math.random()*(COLS-2)); ry = 1+Math.floor(Math.random()*(ROWS-2));}while(grid[idx(rx,ry)]!==types.EMPTY);
      enemies.push({x:rx,y:ry,hp:10});
    }
    updateHUD();
  }

  function updateHUD(){ document.getElementById('score').textContent = player.score; document.getElementById('health').textContent = player.hp; }

  // input
  const keys = {};
  addEventListener('keydown', e=>{keys[e.key]=true; if(e.key==='r') gen(); if(e.key===' ') {mine(); e.preventDefault()} });
  addEventListener('keyup', e=>{keys[e.key]=false});

  function canWalk(x,y){ if(x<0||y<0||x>=COLS||y>=ROWS) return false; return grid[idx(x,y)]!==types.WALL && grid[idx(x,y)]!==types.ORE; }

  function mine(){ // mine tile in facing direction (based on last key)
    let dx=0,dy=0; if(keys.ArrowUp) dy=-1; else if(keys.ArrowDown) dy=1; else if(keys.ArrowLeft) dx=-1; else if(keys.ArrowRight) dx=1; else {dx=0;dy=0}
    if(dx===0&&dy===0) return;
    const tx = player.x+dx, ty = player.y+dy;
    if(tx<0||ty<0||tx>=COLS||ty>=ROWS) return;
    if(grid[idx(tx,ty)]===types.WALL || grid[idx(tx,ty)]===types.ORE){
      // break it
      if(grid[idx(tx,ty)]===types.ORE){ player.score += 10; playSound('coin'); }
      else { player.score += 1; playSound('hit'); }
      grid[idx(tx,ty)] = types.EMPTY;
      updateHUD();
    }
  }

  function step(dt){
    // movement
    let moved=false;
    if(keys.ArrowUp && canWalk(player.x,player.y-1)){ player.y--; moved=true}
    if(keys.ArrowDown && canWalk(player.x,player.y+1)){ player.y++; moved=true}
    if(keys.ArrowLeft && canWalk(player.x-1,player.y)){ player.x--; moved=true}
    if(keys.ArrowRight && canWalk(player.x+1,player.y)){ player.x++; moved=true}

    // enemies move randomly
    enemies.forEach(e=>{
      if(Math.random()<0.6) return;
      const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
      const [dx,dy] = dirs[Math.floor(Math.random()*dirs.length)];
      const nx = e.x+dx, ny = e.y+dy;
      if(nx===player.x && ny===player.y){ player.hp -= 8; playSound('ouch'); updateHUD(); }
      if(nx>=0 && ny>=0 && nx<COLS && ny<ROWS && grid[idx(nx,ny)]===types.EMPTY){ e.x=nx; e.y=ny }
    });

    if(player.hp<=0){ showMessage('You Died — Press R to restart', true); }
  }

  // rendering
  function render(){
    ctx.clearRect(0,0,W,H);
    // ambient background glow
    ctx.fillStyle = '#050417'; ctx.fillRect(0,0,W,H);

    // draw grid visible area
    for(let y=0;y<ROWS;y++){
      for(let x=0;x<COLS;x++){
        const t = grid[idx(x,y)];
        const px = x*TILE, py = y*TILE;
        if(t===types.WALL){
          // neon wall
          ctx.fillStyle = '#0c0820'; ctx.fillRect(px,py,TILE,TILE);
          ctx.save(); ctx.shadowColor = 'rgba(0,240,255,0.08)'; ctx.shadowBlur = 10; ctx.fillStyle = '#0e1a3a'; ctx.fillRect(px+2,py+2,TILE-4,TILE-4); ctx.restore();
        } else if(t===types.ORE){
          // ore glimmer
          ctx.fillStyle = '#081022'; ctx.fillRect(px,py,TILE,TILE);
          ctx.save(); ctx.fillStyle = '#ff2dcb'; ctx.shadowBlur = 18; ctx.shadowColor = 'rgba(255,45,203,0.7)'; ctx.beginPath(); ctx.arc(px+TILE/2,py+TILE/2,TILE*0.28,0,Math.PI*2); ctx.fill(); ctx.restore();
        } else if(t===types.EXIT){
          ctx.fillStyle = '#071025'; ctx.fillRect(px,py,TILE,TILE);
          ctx.save(); ctx.fillStyle = '#00f0ff'; ctx.shadowBlur = 24; ctx.shadowColor = 'rgba(0,240,255,0.6)'; ctx.fillRect(px+4,py+4,TILE-8,TILE-8); ctx.restore();
        } else {
          // floor
          ctx.fillStyle = 'rgba(10,6,20,0.4)'; ctx.fillRect(px,py,TILE,TILE);
        }
      }
    }

    // draw player
    ctx.save(); ctx.translate(player.x*TILE+TILE/2, player.y*TILE+TILE/2);
    ctx.fillStyle = '#00f0ff'; ctx.shadowBlur = 18; ctx.shadowColor = 'rgba(0,240,255,0.8)';
    ctx.beginPath(); ctx.arc(0,0,TILE*0.4,0,Math.PI*2); ctx.fill(); ctx.restore();

    // draw enemies
    enemies.forEach(e=>{
      ctx.save(); ctx.translate(e.x*TILE+TILE/2, e.y*TILE+TILE/2);
      ctx.fillStyle = '#ff2dcb'; ctx.shadowBlur = 14; ctx.shadowColor = 'rgba(255,45,203,0.7)';
      ctx.beginPath(); ctx.rect(-TILE*0.35,-TILE*0.35,TILE*0.7,TILE*0.7); ctx.fill(); ctx.restore();
    });
  }

  let last = performance.now();
  function loop(t){
    const dt = (t-last)/1000; last = t;
    step(dt);
    render();
    requestAnimationFrame(loop);
  }

  function showMessage(text, persistent){
    let overlay = document.getElementById('overlay');
    if(!overlay){ overlay = document.createElement('div'); overlay.id='overlay'; document.body.appendChild(overlay); }
    overlay.textContent = text;
    overlay.style.color = persistent ? '#ff2dcb' : '#00f0ff';
  }

  // simple WebAudio FX
  const audioCtx = new (window.AudioContext||window.webkitAudioContext)();
  function playSound(name){
    const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
    o.type = name==='coin'?'sine':'square'; o.frequency.value = name==='coin'?880:200;
    g.gain.value = 0.0001; o.connect(g); g.connect(audioCtx.destination);
    const t = audioCtx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.15,t+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.25);
    o.start(t); o.stop(t+0.3);
  }

  // start
  gen();
  resize();
  requestAnimationFrame(loop);

})();
