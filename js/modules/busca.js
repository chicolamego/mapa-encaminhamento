// Busca global e colapso de branches
function toggleBranch(id){document.getElementById(id).classList.toggle('collapsed');}
function doSearch(q){
  const cl=document.getElementById('scl');cl.style.display=q?'block':'none';
  const t=q.toLowerCase();
  document.querySelectorAll('[data-s]').forEach(el=>{el.classList.toggle('dim',q&&!el.textContent.toLowerCase().includes(t));});
}
function clrSearch(){document.getElementById('si').value='';document.getElementById('scl').style.display='none';document.querySelectorAll('[data-s]').forEach(el=>el.classList.remove('dim'));}
