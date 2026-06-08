import re

INFILE = r"c:\Projects\moj-web\gamepad\gamepad\games\flow\index.html"
OUTFILE = r"c:\Projects\moj-web\tools\levels_safe_block.txt"

text = open(INFILE,'r',encoding='utf-8').read()
m = re.search(r"const LEVELS = \[([\s\S]*?)\];", text)
if not m:
    print('LEVELS not found'); raise SystemExit(1)
block = m.group(1)

# parse level sizes and pair counts
level_pattern = re.compile(r"\{\s*size\s*:\s*(\d+)\s*,\s*pairs\s*:\s*\[([^\]]*)\]\s*\}")
levels = []
for lm in level_pattern.finditer(block):
    size = int(lm.group(1))
    pairs_txt = lm.group(2)
    # count pairs by counting '{' in pairs_txt
    pair_count = pairs_txt.count('{')
    levels.append((size,pair_count))

out_lines = []
for (size,n) in levels:
    pairs = []
    for i in range(n):
        col = i % size
        pairs.append("{c:%d,r1:0,c1:%d,r2:%d,c2:%d}" % (i, col, size-1, col))
    out_lines.append('  { size:%d, pairs:[%s] }' % (size, ','.join(pairs)))
new_block = ',\n'.join(out_lines)
open(OUTFILE,'w',encoding='utf-8').write(new_block)
print('Wrote safe LEVELS block to', OUTFILE)
