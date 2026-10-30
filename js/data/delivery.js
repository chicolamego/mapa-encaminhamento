window.D = window.D || {};
D.delivery = {
  "titulo": "🚚 Delivery ou Manutenção?",
  "subtitulo": "Como identificar se o cliente está num processo de instalação/alteração",
  "alerta": "Sempre que o cliente mencionar técnico, visita, instalação, mudança, upgrade ou ativação — verifique o Mundidata ANTES de abrir qualquer OC.",
  "regra": "Qualquer status com 'Solicitado' ou 'Não Instalado' = está com o Delivery. Se tudo estiver 'Instalado' ou 'Cancelado' = está no Comercial ou é manutenção normal.",
  "ciclo": [
    {
      "fase": "1. Comercial / Pós-venda",
      "desc": "Cliente contrata, faz upgrade, mudança ou troca. A solicitação é aberta aqui.",
      "status": "Contrato Instalado (sem alteração visível no Mundidata)"
    },
    {
      "fase": "2. Conversão para Delivery",
      "desc": "O Comercial fecha a venda e converte a SO. O status muda no Mundidata.",
      "status": "Serviço Solicitado / Instalação Solicitada / Upgrade Solicitado / Substituição Solicitada / Contrato Não Instalado"
    },
    {
      "fase": "3. Delivery executa",
      "desc": "Agendamento, visita técnica, instalação, ativação. O cliente pode ligar nessa fase.",
      "status": "Idem acima — qualquer 'Solicitado' ou 'Não Instalado'"
    },
    {
      "fase": "4. Serviço ativo",
      "desc": "Instalação concluída. Agora vai para Suporte/VIP tratar manutenção.",
      "status": "Contrato Instalado / Serviço Executado"
    }
  ],
  "status_tabela": [
    {
      "status": "Contrato - Instalado",
      "significado": "Serviço ativo, sem alteração em andamento",
      "onde": "—"
    },
    {
      "status": "Contrato - Cancelado",
      "significado": "Serviço encerrado",
      "onde": "—"
    },
    {
      "status": "Contrato - Não Instalado",
      "significado": "Contrato fechado, aguardando instalação",
      "onde": "Delivery"
    },
    {
      "status": "Serviço - Solicitado",
      "significado": "Mudança ou solicitação convertida pelo Comercial",
      "onde": "Delivery"
    },
    {
      "status": "Substituição - Serviço Solicitado",
      "significado": "Troca de produto em andamento",
      "onde": "Delivery"
    },
    {
      "status": "Upgrade - Serviço Solicitado",
      "significado": "Upgrade em andamento",
      "onde": "Delivery"
    },
    {
      "status": "Serviço - Executado",
      "significado": "Solicitação concluída",
      "onde": "—"
    }
  ]
};
