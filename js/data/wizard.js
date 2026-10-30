window.D = window.D || {};
D.wizard = [
  {
    "perg": "A pessoa que ligou é cliente Mundivox?",
    "opts": [
      {
        "label": "✅ Sim — é cliente",
        "prox": 1
      },
      {
        "label": "❌ Não — não é cliente",
        "prox": 5
      }
    ]
  },
  {
    "perg": "Qual é o tipo de solicitação?",
    "opts": [
      {
        "label": "🔧 Técnica — problema ou consulta no serviço",
        "prox": 6
      },
      {
        "label": "📋 Administrativa — contrato, fatura, cancelamento",
        "prox": 3
      }
    ]
  },
  {
    "perg": "Você consegue identificar o produto do cliente?",
    "opts": [
      {
        "label": "Sim — produto identificado",
        "prox": 4
      },
      {
        "label": "Não sei / não encontrei o produto",
        "res": "Pesquisar melhor no ERP/Mundidata. Todo cliente deve ter produto identificado."
      }
    ]
  },
  {
    "perg": "Qual é o assunto administrativo?",
    "opts": [
      {
        "label": "💰 Fatura / cobrança / serviço desligado",
        "res": "Encaminhar para Cobrança — Ramal 1005"
      },
      {
        "label": "❌ Cancelamento",
        "res": "Orientar: formalizar por e-mail para cancelamento@exemplo.com.br"
      },
      {
        "label": "⏸️ Suspensão temporária ou suspensão parcial",
        "res": "Orientar: e-mail para posvenda@exemplo.com.br com cópia para vip@exemplo.com.br"
      },
      {
        "label": "📍 Mudança de endereço / titularidade",
        "res": "Orientar: e-mail para posvenda@exemplo.com.br + confirmar recebimento na ligação"
      },
      {
        "label": "📈 Upgrade / instalação nova",
        "res": "Encaminhar para Comercial Vendas"
      },
      {
        "label": "📉 Downgrade / redução de banda",
        "res": "Encaminhar para Pós-venda"
      },
      {
        "label": "🔄 Troca de produto ou mudança",
        "res": "Verificar acréscimo de mensalidade: Com acréscimo → Comercial Vendas | Sem acréscimo → Pós-venda"
      },
      {
        "label": "🚚 Status de pedido em aberto",
        "res": "Verificar Mundidata: 'Serviço Solicitado' = Delivery | 'Contrato Instalado' = ainda no Comercial"
      }
    ]
  },
  {
    "perg": "Qual é o grupo do produto?",
    "opts": [
      {
        "label": "Dados / Telefonia simples (MA, MN, MUNDI, T1, T2...)",
        "res": "Encaminhar para S2 — Ramal 1001"
      },
      {
        "label": "Circuitos / Voz / Ponto a Ponto (L2L, MBGP, MCH, MVPN, PABX, E1...)",
        "res": "Encaminhar para S3 IP/VOZ — Ramal 1002"
      },
      {
        "label": "Firewall / Segurança (MSEC, MSGLD, Fortinet, UTM, MSOC...)",
        "res": "Encaminhar para S3 TI — Ramal 1003"
      },
      {
        "label": "Gráfico de consumo / Monitoramento de link",
        "res": "Abrir OC para VIP"
      }
    ]
  },
  {
    "perg": "Quem é / qual o assunto?",
    "opts": [
      {
        "label": "📞 Cotação — quer contratar nosso serviço",
        "res": "Encaminhar para Comercial Vendas — fluxo de cotação (a documentar)"
      },
      {
        "label": "🛒 Fornecedor — quer se tornar fornecedor",
        "res": "Orientar: e-mail para compras@exemplo.com.br"
      },
      {
        "label": "🏢 Síndico ou proprietário de sala POP — problema técnico (equipamento, alagamento...)",
        "res": "Abrir OC como Não Cliente e descrever a situação"
      },
      {
        "label": "🏢 Síndico ou proprietário de sala POP — contrato, taxa, cobrança de espaço",
        "res": "Orientar: e-mail para negociacaopredial@exemplo.com.br"
      },
      {
        "label": "💼 Candidato a emprego / envio de currículo",
        "res": "Orientar: e-mail para rh@exemplo.com.br"
      },
      {
        "label": "⚖️ Assunto jurídico ou policial",
        "res": "Orientar: e-mail para juridico@exemplo.com.br"
      }
    ]
  },
  {
    "perg": "O cliente mencionou instalação, mudança ou upgrade/downgrade em andamento?",
    "opts": [
      {
        "label": "✅ Sim — mencionou algo nesse sentido",
        "res": "⚠️ Verificar Mundidata antes de abrir qualquer OC. Se houver status 'Solicitado' ou 'Não Instalado' → transferir para Delivery. Se tudo estiver 'Contrato Instalado' → pode ser manutenção, continue o fluxo técnico normalmente."
      },
      {
        "label": "❌ Não — é um problema técnico comum",
        "prox": 2
      }
    ]
  }
];
