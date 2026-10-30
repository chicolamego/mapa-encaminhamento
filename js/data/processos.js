window.D = window.D || {};
D.processos = [
  {
    "id": "ativ_programada",
    "titulo": "📡 Atividade Programada",
    "descricao": "Processo geral de liberação e notificação de atividades programadas aos clientes. Ver abaixo clientes com processo especial.",
    "passos": [],
    "clientes_especiais": [
      {
        "cliente": "Cliente Exemplo A",
        "alerta": "Processo especial de notificação — ferramenta Ferramenta de Notificação",
        "cor": "#ff9900",
        "regras": [
          {
            "titulo": "Destinatários obrigatórios (SEMPRE dois e-mails)",
            "itens": [
              "E-mail do site (WHID): [whid]-circuitos@cliente-a.exemplo.com — ex: site01-circuitos@cliente-a.exemplo.com",
              "E-mail fixo Ferramenta de Notificação: manutencao@cliente-a.exemplo.com"
            ]
          },
          {
            "titulo": "Informações obrigatórias no e-mail",
            "itens": [
              "Indicação clara de manutenção/trabalho planejado",
              "WHID (Warehouse ID) — ex: SITE01, SITE02",
              "Service ID / referência do circuito",
              "Data da manutenção",
              "Horário de início",
              "Horário de término",
              "Impacto estimado no serviço",
              "Descrição detalhada das atividades / motivo"
            ]
          },
          {
            "titulo": "⚠️ Se a manutenção ocorrer em período crítico (code freeze ou pico)",
            "itens": [
              "Explicar por que não pode ser adiada",
              "Informar impacto ou risco do adiamento",
              "Confirmar que tentativa de postergação foi feita"
            ]
          }
        ]
      },
      {
        "cliente": "Cliente Exemplo B",
        "alerta": "Processo especial de notificação — antecedência e janela específicas",
        "cor": "#0066cc",
        "regras": [
          {
            "titulo": "Antecedência mínima",
            "itens": [
              "10 dias de antecedência para notificação"
            ]
          },
          {
            "titulo": "Destinatários obrigatórios",
            "itens": [
              "Para: manutencao@cliente-b.exemplo.com",
              "CC: gestao@cliente-b.exemplo.com"
            ]
          },
          {
            "titulo": "Greenzone (janela permitida para manutenção)",
            "itens": [
              "Sábado 01:00 até Domingo 17:00 GMT"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "desconto",
    "titulo": "💰 Desconto",
    "descricao": "A documentar",
    "passos": [],
    "clientes_especiais": []
  },
  {
    "id": "relatorios",
    "titulo": "📄 Relatórios",
    "descricao": "A documentar",
    "passos": [],
    "subtopicos": [
      {
        "titulo": "RFO (Relatório de Falha)",
        "descricao": "A documentar",
        "passos": []
      },
      {
        "titulo": "Relatório de Consumo",
        "descricao": "A documentar",
        "passos": []
      }
    ],
    "clientes_especiais": []
  },
  {
    "id": "rota",
    "titulo": "🗺️ Rota Física",
    "descricao": "Enviar solicitação para rotas@exemplo.com.br. A documentar.",
    "passos": [],
    "clientes_especiais": []
  },
  {
    "id": "contrato",
    "titulo": "📋 Cópia de Contrato",
    "descricao": "A documentar",
    "passos": [],
    "clientes_especiais": []
  }
];
