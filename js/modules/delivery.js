// Bloco Delivery
function buildDelivery(){
  // DELIVERY BLOCK
  const dw=document.getElementById('delivery-wrap');
  const del=D.delivery;
  if(del){
    dw.innerHTML=`<div class="delivery-block" id="delivery-block">
      <div class="delivery-hd" onclick="this.parentElement.classList.toggle('collapsed')">
        <span style="font-size:22px">🚚</span>
        <div><div style="font-size:15px;font-weight:700;color:#f59e0b">${del.titulo}</div><div style="font-size:11px;color:rgba(255,255,255,.45)">${del.subtitulo}</div></div>
        <span class="delivery-hd-chev">▼</span>
      </div>
      <div class="delivery-body">
        <div class="delivery-alert">⚠️ ${del.alerta}</div>
        <div class="delivery-rule">${del.regra}</div>
        <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#f59e0b;margin-bottom:10px">Ciclo de vida do cliente</div>
        <div class="delivery-ciclo">
          ${del.ciclo.map(f=>`<div class="delivery-fase">
            <div class="delivery-fase-num">${f.fase}</div>
            <div class="delivery-fase-desc">${f.desc}</div>
            <div class="delivery-fase-status">${f.status}</div>
          </div>`).join('')}
        </div>
        <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#f59e0b;margin-bottom:10px">Status no Mundidata</div>
        <table class="delivery-table">
          <tr><th>Status</th><th>Significado</th><th>Onde está</th></tr>
          ${del.status_tabela.map(s=>`<tr>
            <td>${s.status}</td>
            <td style="color:var(--dim)">${s.significado}</td>
            <td class="${s.onde==='Delivery'?'td-onde-delivery':'td-onde-vazio'}">${s.onde}</td>
          </tr>`).join('')}
        </table>
      </div>
    </div>`;
  }
}
