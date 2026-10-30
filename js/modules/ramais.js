// Ramais: renderização e filtro
function buildRamais(){
  const rw=document.getElementById('ramais-wrap');
  const ramais=D.ramais||[];
  const isComercial=g=>g.grupo.toLowerCase().includes('comercial');
  const col1=ramais.filter(g=>!isComercial(g));
  const col2=ramais.filter(g=>isComercial(g));

  function renderGrupo(g){
    return `<div class="lg"><div class="lgt">${g.grupo}</div><div class="lgrid">${g.itens.map(it=>`<div class="lcard" style="cursor:default">
      <div class="llbl">${it.label}</div>
      ${it.cargo?'<div style="font-size:10px;color:var(--dim);margin-bottom:4px">'+it.cargo+'</div>':''}
      ${it.ramal?'<div style="font-size:17px;font-weight:700;font-family:JetBrains Mono,monospace;color:#22c97a;margin:2px 0">📞 '+it.ramal+'</div>':''}
      ${it.email?'<div style="font-size:10px;color:#0dcfb8;margin-top:2px">✉️ '+it.email+'</div>':''}
      ${it.horario?'<div style="font-size:10px;color:var(--dim);margin-top:2px">🕐 '+it.horario+'</div>':''}
      ${it.obs?'<div class="lobs" style="margin-top:3px">📱 '+it.obs+'</div>':''}
    </div>`).join('')}</div></div>`;
  }

  rw.innerHTML=`<div class="ramais-two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:0;align-items:start">
    <div style="padding-right:24px;border-right:1px solid rgba(255,255,255,.07)">
      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--dim);margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.07)">
        🏢 Setores &amp; Equipes
      </div>
      ${col1.map(renderGrupo).join('')}
    </div>
    <div style="padding-left:24px">
      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--dim);margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.07)">
        📍 Comercial por Região
      </div>
      ${col2.map(renderGrupo).join('')}
    </div>
  </div>`;
}

function filterRamais(q){
  document.getElementById('ramais-scl').style.display=q?'block':'none';
  var t=q.toLowerCase();
  document.querySelectorAll('#ramais-wrap .lcard').forEach(function(c){
    c.style.display=(!q||c.textContent.toLowerCase().indexOf(t)>=0)?'flex':'none';
  });
  document.querySelectorAll('#ramais-wrap .lg').forEach(function(g){
    var any=false;
    g.querySelectorAll('.lcard').forEach(function(c){if(c.style.display!=='none')any=true;});
    g.style.display=any?'block':'none';
  });
}
function clearRamaisSearch(){document.getElementById('ramais-search').value='';filterRamais('');}
