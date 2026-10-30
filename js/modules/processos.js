// Processos
// PROCESSOS
var pw = document.getElementById('processos-wrap');
if(pw && D.processos){
  var html = '';
  D.processos.forEach(function(cat, ci){
    var isPendente = !cat.passos.length && (!cat.clientes_especiais || !cat.clientes_especiais.length || cat.clientes_especiais[0].regras[0].titulo === 'Em construção');
    html += '<div class="proc-categoria" id="proc-cat-'+ci+'">';
    html += '<div class="proc-cat-hd" data-cat="'+ci+'">';
    html += '<div class="proc-cat-title">' + cat.titulo;
    if(isPendente) html += '<span class="pendente-badge">a documentar</span>';
    html += '</div><span class="proc-cat-chev">&#9660;</span></div>';
    html += '<div class="proc-cat-body">';
    if(cat.descricao) html += '<div class="proc-descricao">' + cat.descricao + '</div>';
    if(cat.subtopicos){
      cat.subtopicos.forEach(function(s){
        html += '<div style="margin-bottom:12px;padding:10px 12px;background:rgba(255,255,255,.03);border-radius:8px;">';
        html += '<div style="font-size:12px;font-weight:700;margin-bottom:4px;">'+s.titulo+'</div>';
        if(s.descricao) html += '<div style="font-size:11px;color:var(--dim);">'+s.descricao+'</div>';
        html += '</div>';
      });
    }
    (cat.passos||[]).forEach(function(p){
      html += '<div class="proc-step"><div class="proc-num">'+p.num+'</div>';
      html += '<div><div class="proc-step-titulo">'+p.titulo+'</div>';
      html += '<div class="proc-step-texto">'+p.texto+'</div></div></div>';
    });
    if(cat.clientes_especiais && cat.clientes_especiais.length){
      html += '<div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--dim);margin:16px 0 8px;">&#9888; Clientes com processo especial</div>';
      cat.clientes_especiais.forEach(function(c){
        html += '<div class="cliente-esp-card" style="border-color:'+c.cor+'">';
        html += '<div class="cliente-esp-hd" style="background:'+c.cor+'22">';
        html += '<div><div class="cliente-esp-nome" style="color:'+c.cor+'">'+c.cliente+'</div>';
        html += '<div class="cliente-esp-alerta">'+c.alerta+'</div></div></div>';
        html += '<div class="cliente-esp-body">';
        c.regras.forEach(function(r){
          html += '<div class="cliente-esp-regra">';
          html += '<div class="cliente-esp-regra-titulo">'+r.titulo+'</div>';
          if(r.itens){
            html += '<ul class="cliente-esp-lista">';
            r.itens.forEach(function(i){ html += '<li>'+i+'</li>'; });
            html += '</ul>';
          }
          html += '</div>';
        });
        html += '</div></div>';
      });
    }
    html += '</div></div>';
  });
  pw.innerHTML = html;
  // Add click handlers after render
  document.querySelectorAll('.proc-cat-hd').forEach(function(hd){
    hd.addEventListener('click', function(){
      this.parentElement.classList.toggle('open');
    });
  });
}
