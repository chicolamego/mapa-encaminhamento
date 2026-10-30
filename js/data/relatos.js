window.D = window.D || {};
D.relatos = [
  {
    "motivo": "Link inoperante",
    "setor": "S2 ou S3 IP/VOZ (depende do produto)",
    "txt": "\"Caiu o link\", \"sem internet\", \"offline\", \"rede parou\", \"sem acesso\", \"sem comunicação\", \"não consigo pingar\", \"serviço inativo\""
  },
  {
    "motivo": "Link intermitente",
    "setor": "S2 ou S3 IP/VOZ (depende do produto)",
    "txt": "\"Caindo e voltando\", \"oscilando\", \"instável\", \"cai em horário específico\", \"ping-pong\", \"flaps\""
  },
  {
    "motivo": "Lentidão",
    "setor": "S2 (dados) | S3 TI (MSOC)",
    "txt": "\"Muito lento\", \"banda não bate\", \"recebendo menos velocidade\", \"latência alta\", \"jitter\" — ⚠️ Produto MSOC: abrir sempre para S3 TI. Demais produtos de dados: S2."
  },
  {
    "motivo": "Perda de pacote",
    "setor": "S2 ou S3 (depende do produto)",
    "txt": "\"Packet loss\", \"perda de pacote\", \"ligação travando\", \"voz picotada\", \"tela congelando\" — Motivo separado da Lentidão no ERP"
  },
  {
    "motivo": "Consulta técnica",
    "setor": "S2, S3 IP/VOZ ou S3 TI (depende do produto)",
    "txt": "\"Qual o IP?\", \"qual a máscara?\", \"qual o gateway?\", \"portas liberadas?\", \"qual o ASN?\", \"como conectar?\", \"topologia da rede\" — ⚠️ Exceção: rota física do link → abrir para VIP e enviar para rotas@exemplo.com.br"
  },
  {
    "motivo": "Abertura de portas",
    "setor": "S2 ou S3 TI (depende do produto)",
    "txt": "\"Quero abrir a porta X\", \"preciso liberar acesso ao sistema Y\", \"liberar porta Z\" — ⚠️ Depende do produto: link de dados → S2 | firewall/segurança → S3 TI"
  },
  {
    "motivo": "Configuração (firewall/IP/roteador)",
    "setor": "S3 TI (segurança) | S3 IP/VOZ (circuitos)",
    "txt": "\"DNS não resolve\", \"mudar regra de firewall\", \"IP público\", \"SMTP bloqueado\", \"mudança de rota lógica\", \"configuração de roteador\" — ⚠️ VPN: depende do produto — L2L/MVPN → S3 IP/VOZ | firewall → S3 TI"
  },
  {
    "motivo": "Usuário VPN",
    "setor": "S3 TI",
    "txt": "\"Criar usuário VPN\", \"alterar usuário VPN\", \"excluir usuário VPN\""
  },
  {
    "motivo": "Relatório / RFO",
    "setor": "VIP",
    "txt": "\"RFO\", \"o que aconteceu no dia X\", \"histórico de quedas\", \"documento do incidente\", \"reunião de qualidade\""
  },
  {
    "motivo": "Monitoramento de link",
    "setor": "VIP",
    "txt": "\"Gráfico de consumo\", \"quero ver o consumo do link\" → consumo.mundivox.com"
  },
  {
    "motivo": "E-mail",
    "setor": "S2",
    "txt": "\"Não envia/recebe e-mail\", \"perdi senha\", \"caixa cheia\", \"e-mail bloqueado\""
  },
  {
    "motivo": "Não acessa site",
    "setor": "S3 TI",
    "txt": "\"Site bloqueado\", \"URL não abre\", \"abre por outro provedor mas não pelo MVX\""
  },
  {
    "motivo": "Ligação / linha",
    "setor": "S2 ou S3 IP/VOZ (depende do produto)",
    "txt": "\"Linha não toca\", \"telefone mudo\", \"ligação caindo\", \"ramal sem tom\", \"PABX sem sinal\""
  },
  {
    "motivo": "Suspensão / suspensão parcial",
    "setor": "Pós-venda",
    "txt": "\"Suspenso parcialmente\", \"quero suspender\", \"cancelar a suspensão\", \"suspensão temporária\""
  },
  {
    "motivo": "🚚 Processo de Delivery (instalação / mudança / upgrade em andamento)",
    "setor": "Delivery — verificar Mundidata antes de qualquer OC",
    "txt": "\"O técnico ficou de voltar\", \"o técnico não apareceu\", \"estavam trocando o equipamento\", \"vieram fazer uma visita e não resolveram\", \"não instalaram ainda\", \"estamos em processo de instalação\", \"pedimos uma mudança\", \"estamos executando uma mudança\", \"temos um projeto de instalação agendado\", \"foi solicitado um upgrade\", \"estamos aguardando a ativação\", \"o serviço ainda não foi ativado\", \"estamos em delivery\" — ⚠️ SEMPRE verificar status no Mundidata antes de abrir OC"
  },
  {
    "motivo": "⚠️ MAS (MundiAccess Security) — produto especial",
    "setor": "S2 ou S3 TI (depende da solicitação)",
    "txt": "Único produto com bola dividida: problema de dados/link → S2 | regras e configurações de firewall → S3 TI"
  }
];
