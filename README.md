# Mapa de Encaminhamento — Mundivox

Abra `index.html` no navegador (não precisa de servidor).

```
index.html            estrutura das telas (abas/views)
css/
  base.css            variáveis, reset, cabeçalho
  navegacao.css       abas, busca, alternância de views
  consulta.css        Modo Consulta (setores, adm, relatos)
  guiado.css          Modo Guiado (wizard)
  links-ramais.css    Links úteis e Ramais
  delivery.css        bloco/banner Delivery
  escalonamento.css   Escalonamento Campo
  guia-rapido.css     Guia Rápido
  processos.css       Processos e clientes especiais
js/
  data/               conteúdo editável (um arquivo por seção: setores, adm,
                      relatos, wizard, links, ramais, delivery, escalamento,
                      guia, processos)
  modules/            lógica de cada aba
  main.js             ponto de entrada (monta tudo e inicia o wizard)
```

Para atualizar ramais, links, etc., edite só o arquivo em `js/data/`.
A ordem dos `<script>` no `index.html` importa: dados, módulos, main.
