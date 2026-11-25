/* Sleep Detective – spúšťa sa v <head> ešte pred vykreslením stránky.
   Je v samostatnom súbore, lebo Content-Security-Policy v index.html nedovoľuje skripty vložené priamo do stránky. */
  // Zvolený vzhľad nastavíme ešte pred vykreslením, aby stránka neblikla inými farbami.
  try {
    var st = JSON.parse(localStorage.getItem('sleepDetective.settings.v1') || '{}');
    if (/^(dark|light|system)$/.test(st.theme)) document.documentElement.setAttribute('data-theme', st.theme);
  } catch (e) { /* bez úložiska platí tmavý vzhľad */ }
