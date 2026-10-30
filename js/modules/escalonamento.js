// Escalonamento Campo
// ESCALAMENTO
var ew=document.getElementById('escal-wrap');
if(ew){
  var escal=D.escalamento||[];
  var escalHtml='';
  escal.forEach(function(filial){
    escalHtml+='<div class="escal-filial"><div class="escal-filial-title">'+filial.filial+'</div><div class="escal-grupos">';
    filial.grupos.forEach(function(g){
      escalHtml+='<div class="escal-grupo"><div class="escal-grupo-title">'+g.tipo+'</div><table class="escal-table"><tr><th>Nível</th><th>Função</th><th>Nome</th><th>Telefone</th></tr>';
      g.contatos.forEach(function(c){
        escalHtml+='<tr><td>'+(c.nivel?'<span class="escal-nivel">'+c.nivel+'</span>':'')+'</td><td>'+c.funcao+'</td><td style="font-weight:600">'+c.nome+'</td><td>'+(c.telefone?'<span class="escal-tel">📞 '+c.telefone+'</span>':'')+(c.obs?'<div class="escal-obs">'+c.obs+'</div>':'')+'</td></tr>';
      });
      escalHtml+='</table></div>';
    });
    escalHtml+='</div></div>';
  });
  ew.innerHTML=escalHtml;
}


function filterEscal(q){
  document.getElementById('escal-scl').style.display=q?'block':'none';
  var t=q.toLowerCase();
  document.querySelectorAll('#escal-wrap .escal-grupo').forEach(function(grupo){
    var rows=grupo.querySelectorAll('tbody tr');
    var vis=false;
    rows.forEach(function(r){var s=!q||r.textContent.toLowerCase().indexOf(t)>=0;r.style.display=s?'':'none';if(s)vis=true;});
    var title=grupo.querySelector('.escal-grupo-title');
    if(title&&title.textContent.toLowerCase().indexOf(t)>=0&&q){rows.forEach(function(r){r.style.display='';});vis=true;}
    grupo.style.display=(!q||vis)?'block':'none';
  });
  document.querySelectorAll('#escal-wrap .escal-filial').forEach(function(f){
    var any=false;f.querySelectorAll('.escal-grupo').forEach(function(g){if(g.style.display!=='none')any=true;});
    f.style.display=(!q||any)?'block':'none';
  });
}
function clearEscalSearch(){document.getElementById('escal-search').value='';filterEscal('');}
