// Modo Guiado (wizard) e mapa completo de caminhos
let wHist=[];
function wStart(){wHist=[];wShow(0);}
function wShow(i){
  const s=D.wizard[i];if(!s)return;
  document.getElementById('wsl').textContent='Passo '+(i+1);
  document.getElementById('wq').textContent=s.perg;
  document.getElementById('wres').style.display='none';
  document.getElementById('wnav').style.display=wHist.length>0?'block':'none';
  document.getElementById('wopts').innerHTML=s.opts.map((o,oi)=>`<button class="wo" onclick="wChoose(${i},${oi})">${o.label}</button>`).join('');
}
function wChoose(si,oi){
  const op=D.wizard[si].opts[oi];wHist.push(si);
  if(op.res){document.getElementById('wopts').innerHTML='';document.getElementById('wres').style.display='block';document.getElementById('wrt').textContent=op.res;document.getElementById('wnav').style.display='block';}
  else if(op.prox!==undefined) wShow(op.prox);
}
function wBack(){if(wHist.length)wShow(wHist.pop());}

function toggleColabTree(){
  const el=document.getElementById('colab-tree');
  if(el.style.display==='none'){
    buildColabTree();
    el.style.display='block';
  } else {
    el.style.display='none';
  }
}

function buildColabTree(){
  const el=document.getElementById('colab-tree');
  function branch(stepIdx,depth){
    const step=D.wizard[stepIdx];
    if(!step) return '';
    const ml=depth*18;
    let h=`<div style="margin-left:${ml}px;margin-bottom:6px">
      <div style="font-size:11px;color:#7c5cfc;font-weight:700;margin-bottom:4px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="background:#7c5cfc;color:#fff;font-size:9px;padding:1px 6px;border-radius:10px;flex-shrink:0">Passo ${stepIdx}</span>
        <span>${step.perg}</span>
      </div>`;
    step.opts.forEach(op=>{
      if(op.res){
        h+=`<div style="margin-left:14px;margin-bottom:4px;display:flex;align-items:flex-start;gap:8px;flex-wrap:wrap">
          <span style="color:#22c97a;flex-shrink:0">→</span>
          <span style="font-size:11px;color:var(--dim)">${op.label}</span>
          <span style="font-size:10px;background:rgba(34,201,122,.1);color:#22c97a;border:1px solid rgba(34,201,122,.25);border-radius:4px;padding:1px 6px">${op.res}</span>
        </div>`;
      } else if(op.prox!==undefined){
        h+=`<div style="margin-left:14px;margin-bottom:6px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;flex-wrap:wrap">
            <span style="color:#0dcfb8;flex-shrink:0">→</span>
            <span style="font-size:11px;color:var(--dim)">${op.label}</span>
          </div>
          ${branch(op.prox,depth+1)}
        </div>`;
      }
    });
    h+='</div>';
    return h;
  }
  el.innerHTML=branch(0,0);
}
