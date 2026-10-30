// Troca de views (abas)
function setView(v){
  ['c','w','l','r','e','g','o'].forEach(x=>{
    document.getElementById('view-'+x).classList.toggle('on',x===v);
    document.getElementById('btn-'+x).classList.toggle('on',x===v);
  });
  document.getElementById('sw').style.display=v==='c'?'block':'none';
  if(v==='w') wStart();
}
