// Guia Rápido
// GUIA RÁPIDO
var gw = document.getElementById('guia-wrap');
if(gw && D.guia){
  var guia = D.guia;
  var html = '';

  // Intelix
  html += '<div class="guia-section">';
  html += '<div class="guia-section-title">⌨️ ' + guia.intelix.titulo + '</div>';
  html += '<p style="font-size:12px;color:var(--dim);margin-bottom:14px">' + guia.intelix.subtitulo + '</p>';
  html += '<div class="intelix-grid">';
  guia.intelix.atalhos.forEach(function(a){
    html += '<div class="intelix-card">'
      + '<div class="intelix-card-titulo">' + a.icone + ' ' + a.titulo + '</div>'
      + '<div class="intelix-cmd">' + a.comando + '</div>'
      + '<div class="intelix-desc">' + a.desc + '</div>'
      + '</div>';
  });
  html += '</div></div>';

  // Script
  html += '<div class="guia-section">';
  html += '<div class="guia-section-title">📞 ' + guia.script.titulo + '</div>';
  html += '<div class="script-steps">';
  guia.script.passos.forEach(function(p){
    html += '<div class="script-step">'
      + '<div class="script-num">' + p.num + '</div>'
      + '<div><div class="script-titulo">' + p.titulo + '</div>'
      + '<div class="script-texto">' + p.texto + '</div></div>'
      + '</div>';
  });
  html += '</div></div>';

  gw.innerHTML = html;
}
