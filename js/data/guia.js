window.D = window.D || {};
D.guia = {
  "intelix": {
    "titulo": "Atalhos Intelix",
    "subtitulo": "Comandos rápidos para login, transferência e encerramento",
    "atalhos": [
      {
        "icone": "🔑",
        "titulo": "Login no Sistema",
        "comando": "*9900",
        "desc": "Discar *9900 + Ramal + Senha (mesma do ramal) para logar no Intelix."
      },
      {
        "icone": "🔓",
        "titulo": "Logout do Sistema",
        "comando": "*9901",
        "desc": "Discar *9901 para deslogar do Intelix."
      },
      {
        "icone": "🔀",
        "titulo": "Transferência Assistida",
        "comando": "## + Ramal",
        "desc": "Apertar duas vezes na #, digitar o ramal e esperar ser atendido para anunciar."
      },
      {
        "icone": "📞",
        "titulo": "Concluir / Desligar",
        "comando": "*",
        "desc": "Apertar uma vez no * para transferir em definitivo ou desligar após o atendimento."
      }
    ]
  },
  "script": {
    "titulo": "Script de Atendimento",
    "passos": [
      {
        "num": "1",
        "titulo": "Saudação",
        "texto": "Mundivox, Central de Relacionamento. [SEU NOME] falando. Bom dia/boa tarde/boa noite. Em que posso ajudar?"
      },
      {
        "num": "2",
        "titulo": "Identificação",
        "texto": "Para prosseguir, preciso confirmar a identificação da empresa. Pode me informar o código do cliente ou o CNPJ, por favor?"
      },
      {
        "num": "3",
        "titulo": "Confirmação dos dados",
        "texto": "Aguarde um momento. Confirme, por favor, se a empresa é [NOME DA EMPRESA] e se o serviço é [NOME DO SERVIÇO]."
      },
      {
        "num": "4",
        "titulo": "Motivo do contato",
        "texto": "Qual o motivo do seu contato, por gentileza? Só um momento enquanto registro a solicitação."
      },
      {
        "num": "5",
        "titulo": "Registro do protocolo",
        "texto": "O chamado foi registrado com sucesso. Gostaria de anotar o número do protocolo?"
      },
      {
        "num": "6",
        "titulo": "Encerramento",
        "texto": "A equipe responsável irá analisar a solicitação e retornará pelo telefone ou e-mail informado. Posso ajudar com mais alguma coisa?"
      }
    ]
  }
};
