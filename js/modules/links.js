// Links úteis
function buildLinks(){
  const lw=document.getElementById('links-wrap');
  lw.innerHTML=D.links.map(g=>`<div class="lg"><div class="lgt">${g.grupo}</div><div class="lgrid">${g.itens.map(it=>`<a class="lcard" href="${it.url}" target="_blank"><div class="llbl">${it.label}</div><div class="lurl">${it.url}</div>${it.obs?'<div class="lobs">'+it.obs+'</div>':''}</a>`).join('')}</div></div>`).join('');
}
