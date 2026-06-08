import re
import json
from itertools import product

INFILE = r"c:\Projects\moj-web\gamepad\gamepad\games\flow\index.html"
OUTJSON = r"c:\Projects\moj-web\tools\levels_fixed.json"

text = open(INFILE, 'r', encoding='utf-8').read()

m = re.search(r"const LEVELS = \[([\s\S]*?)\];", text)
if not m:
    print('LEVELS block not found')
    raise SystemExit(1)
block = m.group(1)

# Parse simple LEVELS structure: entries like { size:5, pairs:[{c:0,r1:0,c1:0,r2:4,c2:0}, ...] }
level_pattern = re.compile(r"\{\s*size\s*:\s*(\d+)\s*,\s*pairs\s*:\s*\[([^\]]*)\]\s*\}")
pair_pattern = re.compile(r"\{\s*c\s*:\s*(\d+)\s*,\s*r1\s*:\s*(\d+)\s*,\s*c1\s*:\s*(\d+)\s*,\s*r2\s*:\s*(\d+)\s*,\s*c2\s*:\s*(\d+)\s*\}")

levels = []
for lm in level_pattern.finditer(block):
    size = int(lm.group(1))
    pairs_txt = lm.group(2)
    pairs = []
    for pm in pair_pattern.finditer(pairs_txt):
        pairs.append({
            'c': int(pm.group(1)),
            'r1': int(pm.group(2)), 'c1': int(pm.group(3)),
            'r2': int(pm.group(4)), 'c2': int(pm.group(5)),
        })
    levels.append({'size': size, 'pairs': pairs})

print(f'Parsed {len(levels)} levels')

# Solver adapted from JS: backtracking path allocation

def solvable_level(lv):
    R = lv['size']; C = lv['size']
    pairs = [({'r':p['r1'],'c':p['c1']},{'r':p['r2'],'c':p['c2']}) for p in lv['pairs']]
    occ = [[False]*C for _ in range(R)]
    order = sorted(range(len(pairs)), key=lambda i: abs(pairs[i][0]['r']-pairs[i][1]['r'])+abs(pairs[i][0]['c']-pairs[i][1]['c']))
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]
    def inb(r,c): return 0<=r<R and 0<=c<C
    def neigh(r,c):
        for dr,dc in dirs:
            nr,nc=r+dr,c+dc
            if inb(nr,nc): yield nr,nc
    
    def backtrack(idx):
        if idx==len(order): return True
        pi = order[idx]
        s,e = pairs[pi]
        # quick BFS
        from collections import deque
        dq=deque()
        dist=[[-1]*C for _ in range(R)]
        dq.append((s['r'],s['c'])); dist[s['r']][s['c']]=0
        while dq:
            r,c=dq.popleft()
            if r==e['r'] and c==e['c']: break
            for nr,nc in neigh(r,c):
                if dist[nr][nc]==-1 and not occ[nr][nc]:
                    dist[nr][nc]=dist[r][c]+1; dq.append((nr,nc))
        if dist[e['r']][e['c']]==-1: return False
        maxDepth = dist[e['r']][e['c']] + 4
        visited=[[False]*C for _ in range(R)]
        path=[]
        def dfs(r,c,depth):
            if depth>maxDepth: return False
            if r==e['r'] and c==e['c']:
                # mark path
                marks=[(s['r'],s['c'])]+path[:]
                for mr,mc in marks: occ[mr][mc]=True
                ok = backtrack(idx+1)
                if ok: return True
                for mr,mc in marks: occ[mr][mc]=False
                return False
            # order neighbors towards end
            neighs=sorted(list(neigh(r,c)), key=lambda t: abs(t[0]-e['r'])+abs(t[1]-e['c']))
            for nr,nc in neighs:
                if visited[nr][nc] or occ[nr][nc]: continue
                visited[nr][nc]=True; path.append((nr,nc))
                if dfs(nr,nc,depth+1): return True
                path.pop(); visited[nr][nc]=False
            return False
        visited[s['r']][s['c']]=True
        return dfs(s['r'],s['c'],0)
    return backtrack(0)

# Verify current levels
unsolved = []
for i,lv in enumerate(levels):
    ok = solvable_level(lv)
    print(f'Level {i+1} solvable: {ok}')
    if not ok: unsolved.append(i)

# Attempt fixes: for each unsolved level, try moving endpoints within radius 2
fixed_any = False
for idx in unsolved:
    lv = levels[idx]
    R = lv['size']; C = lv['size']
    occupied = [[False]*C for _ in range(R)]
    # mark endpoints of other pairs as occupied
    for j,p in enumerate(lv['pairs']):
        if j==0: pass
    # Try moving endpoints small distance
    print(f'Attempting fix for level {idx+1}')
    original = [dict(p) for p in lv['pairs']]
    found = False
    # generate candidate positions for each endpoint: within radius 2
    def candidates(r,c):
        res=[]
        for dr in range(-1,2):
            for dc in range(-1,2):
                nr, nc = r+dr, c+dc
                if 0<=nr<R and 0<=nc<C:
                    res.append((nr,nc))
        return res
    # For combinatorial explosion control, try single-endpoint moves first
    for pi,p in enumerate(lv['pairs']):
        for endpoint in (1,2):
            if endpoint==1:
                orig_r,orig_c = p['r1'],p['c1']
            else:
                orig_r,orig_c = p['r2'],p['c2']
            for nr,nc in candidates(orig_r,orig_c):
                # skip if same
                if nr==orig_r and nc==orig_c: continue
                # create modified level
                newlv = {'size':lv['size'], 'pairs':[dict(x) for x in lv['pairs']]}
                if endpoint==1:
                    newlv['pairs'][pi]['r1']=nr; newlv['pairs'][pi]['c1']=nc
                else:
                    newlv['pairs'][pi]['r2']=nr; newlv['pairs'][pi]['c2']=nc
                if solvable_level(newlv):
                    print(f'Fixed level {idx+1} by moving pair {pi} endpoint {endpoint} to {(nr,nc)}')
                    levels[idx]=newlv
                    fixed_any=True; found=True; break
            if found: break
        if found: break
    if not found:
        # try swapping endpoints between pairs (simple heuristic)
        for a,b in product(range(len(lv['pairs'])), repeat=2):
            if a>=b: continue
            newlv = {'size':lv['size'], 'pairs':[dict(x) for x in lv['pairs']]}
            # swap first endpoints
            newlv['pairs'][a]['r1'], newlv['pairs'][b]['r1'] = newlv['pairs'][b]['r1'], newlv['pairs'][a]['r1']
            newlv['pairs'][a]['c1'], newlv['pairs'][b]['c1'] = newlv['pairs'][b]['c1'], newlv['pairs'][a]['c1']
            if solvable_level(newlv):
                print(f'Fixed level {idx+1} by swapping pair endpoints {a} and {b}')
                levels[idx]=newlv; fixed_any=True; found=True; break
        if not found:
            print(f'Could not auto-fix level {idx+1}')

print('Fixed any:', fixed_any)
# Write out modified JS block
out_lines = []
for lv in levels:
    pairs_txt = []
    for p in lv['pairs']:
        pairs_txt.append(f"{'{'}c:{p['c']},r1:{p['r1']},c1:{p['c1']},r2:{p['r2']},c2:{p['c2']}{'}'}")
    out_lines.append('  { size:%d, pairs:[%s] }' % (lv['size'], ','.join(pairs_txt)))
new_block = ',\n'.join(out_lines)
open(OUTJSON,'w',encoding='utf-8').write(new_block)
print('Wrote fixed levels to', OUTJSON)
