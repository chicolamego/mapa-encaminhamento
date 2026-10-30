// Modo Consulta: setores técnicos, administrativo e tradução de relatos
const dcm={red:'dr',purple:'dp',teal:'dt',orange:'do',green:'dg'};

function buildConsulta(){
  const br=document.getElementById('branches');
  let th=D.setores.map(s=>`<div class="sb open" data-s>
    <div class="shd" onclick="this.parentElement.classList.toggle('open')">
      <div class="sdot" style="background:${s.cor};box-shadow:0 0 6px ${s.cor}"></div>
      <div class="snm" style="color:${s.cor}">${s.name}${s.ramal?' — Ramal '+s.ramal:''}</div>
      <div class="schev">▼</div>
    </div>
    <div class="sprods">
      <div style="font-size:10px;color:var(--dim);margin-bottom:5px">Produtos:</div>
      ${s.produtos.map(p=>'<span class="pt">'+p+'</span>').join('')}
      <div style="font-size:10px;color:var(--dim);margin:7px 0 4px">Motivos técnicos:</div>
      ${s.motivos.map(m=>'<span class="pt">'+m+'</span>').join('')}
    </div></div>`).join('');
  let ah=D.adm.map(a=>`<div class="ar" data-s>
    <div class="aic">${a.icon}</div>
    <div class="acc"><div class="alb">${a.label}</div><div class="arl">${a.relatos}</div>${a.obs?'<div class="aob">'+a.obs+'</div>':''}</div>
    <div class="adt ${dcm[a.cor]||'dt'}">${a.destino}</div>
  </div>`).join('');
  br.innerHTML=`
    <div class="branch tec" id="br-tec">
      <div class="bhd" onclick="toggleBranch('br-tec')">
        <span style="font-size:20px">🔧</span>
        <div><div style="font-size:14px;font-weight:700">Solicitação Técnica</div><div style="font-size:11px;color:rgba(255,255,255,.45)">Depende do produto — clique para recolher</div></div>
        <span class="bhd-chev">▼</span>
      </div>
      <div class="bbody">${th}</div>
    </div>
    <div class="branch adm" id="br-adm">
      <div class="bhd" onclick="toggleBranch('br-adm')">
        <span style="font-size:20px">📋</span>
        <div><div style="font-size:14px;font-weight:700">Solicitação Administrativa</div><div style="font-size:11px;color:rgba(255,255,255,.45)">Destino fixo — clique para recolher</div></div>
        <span class="bhd-chev">▼</span>
      </div>
      <div class="bbody">${ah}</div>
    </div>`;
  const rg=document.getElementById('rg');
  rg.innerHTML=D.relatos.map(r=>`<div class="rc" data-s><div class="rc-top"><div><div class="rb">${r.motivo}</div><div class="rse">${r.setor}</div></div></div><div class="rtx">${r.txt}</div></div>`).join('');
}
