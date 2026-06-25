- [ ] Ler integralmente o PDF RSS 2026 e mapear a estrutura slide a slide
- [ ] Ler integralmente o PDF de performance digital 2025 e extrair textos interpretativos e conclusões de referência
- [ ] Comparar 2025 vs 2026 nas métricas-chave de site, mídia paga e email marketing
- [ ] Identificar quais slides do PDF 2026 exigem comentários interpretativos adicionais na plataforma
- [ ] Escrever o resumo conclusivo final de 2026 com base na comparação histórica e nos resultados atuais
- [ ] Atualizar `client/src/lib/data-rss.ts` com métricas, análises, conclusões e referências visuais faltantes
- [ ] Expandir `client/src/pages/HomeRSS.tsx` com as secções faltantes: investimento em anúncios, campanhas de mídia e conclusões
- [ ] Integrar os mockups enviados pelo utilizador nas áreas corretas da plataforma
- [ ] Testar incrementalmente cada nova secção antes de avançar para a seguinte
- [ ] Validar a rota `/rss` no navegador antes de criar checkpoint final

## Achados iniciais guardados dos PDFs
- Fonte: `RSS2026-PERFORMANCEDIGITAL.pdf`, páginas 1-5 visualizadas.
- Página 2 indica os destaques gerais de 2026: 3.899 profissionais do setor cadastrados; 24.134 utilizadores ativos no site de março a maio de 2026; 11.138 utilizadores interagiram com o site através dos anúncios; R$ 16.250,46 investidos em anúncios exclusivamente via Meta Ads.
- Página 4 mostra origem dos acessos ao site (março a maio de 2026), total de 31.028 sessões: Anúncios 12.679; Outros sites 6.364; Acessos diretos 4.967; Busca orgânica 4.279; Redes Sociais Orgânicas 2.500; Email Marketing 239.
- Página 5 confirma a existência de uma secção específica de análise de email marketing no PDF 2026.
- Observação do utilizador: os slides 7 e 8 do PDF 2026, relativos a email marketing, devem ser ignorados porque estão em branco; usar os dados já presentes na plataforma para essa parte.

- Fonte: `RSS2026-PERFORMANCEDIGITAL.pdf`, páginas 6-10 visualizadas.
- Página 6 resume o email marketing de 2026: 17 campanhas disparadas; 24.086 leads impactados; taxa média de abertura de 45,51%; taxa média de cliques de 0,9%.
- Páginas 7 e 8 aparecem como placeholders de campanhas de email em destaque, sem conteúdo final útil no PDF; isto confirma a orientação do utilizador para ignorá-las e manter a secção de email com os dados já estruturados na plataforma.
- Página 9 apresenta benchmark de email marketing comparando RSS e mercado de eventos: taxa de abertura do mercado 11% versus RSS 35,93%; taxa de cliques do mercado 1% versus RSS 0,17%.
- A leitura interpretativa já embutida na página 9 sugere duas causas para o clique abaixo do mercado: forte concentração geográfica da base fora do RJ/SP e perfil B2B do evento, que reduz clique médio face a bases mais generalistas.
- Página 10 introduz a secção de detalhamento de investimento em mídia paga RSS 2025, o que indica que o PDF 2026 mistura análise atual com comparação histórica de investimento.

- Fonte: `RSS2026-PERFORMANCEDIGITAL.pdf`, páginas 11-15 visualizadas.
- Página 11 detalha o investimento em Meta Ads para RSS 2026: Institucional/Awareness R$ 3.494,53; Expositores R$ 1.998,10; Credenciamento de profissionais R$ 8.000,00; Remarketing R$ 998,02; impostos retidos pela Meta R$ 1.759,81; total gerenciado R$ 16.250,46.
- Página 12 é uma capa de secção para detalhamento de campanhas Meta.
- Página 13 traz um resumo geral da dimensão de campanhas e anúncios gerenciados: 4 grandes campanhas; 19 criativos diferentes distribuídos nas campanhas; mais de 3,2 milhões de impressões; mais de 1,7 milhão de pessoas alcançadas.
- Página 14 é uma capa de secção para melhores campanhas em Meta Ads.
- Página 15 mostra a campanha Awareness com dois criativos e seus resultados: criativo 1 com público geral, formato estático, alcance 1.141.914, impressões 1.787.287, CPM R$ 1,56; criativo 2 com público geral, formato carrossel, alcance 192.535, impressões 245.762, CPM R$ 1,35.
- Observação estrutural importante: a plataforma deve transformar estas capas de secção em blocos analíticos úteis, em vez de apenas reproduzi-las visualmente.

- Fonte: `RSS2026-PERFORMANCEDIGITAL.pdf`, páginas 16-20 visualizadas.
- Página 16 complementa a campanha Awareness com mais dois criativos: criativo 3 em formato reels, alcance 135.344, impressões 166.925, CPM R$ 1,34; criativo 4 em formato carrossel, alcance 72.274, impressões 75.357, CPM R$ 1,37.
- Página 17 mostra a campanha “Seja um Expositor” com dois criativos B2B: criativo 1 formato estático, alcance 229.708, 516 cliques no anúncio e 125 conversas iniciadas no WhatsApp; criativo 2 formato reels, alcance 99.407, 138 cliques e 36 conversas.
- Página 18 mostra mais dois criativos da campanha “Seja um Expositor”: criativo 3 formato reels, alcance 3.851, 34 cliques e 16 conversas; criativo 4 formato estático, alcance 7.351, 18 cliques e 8 conversas.
- Página 19 inicia a campanha de Credenciamento com três criativos para profissionais do setor: criativo 1 formato estático, alcance 100.371, 2.371 intenções de credenciamento, CPL R$ 2,43; criativo 2 formato reels, alcance 34.449, 410 intenções, CPL R$ 2,96; criativo 3 formato estático, alcance 21.266, 372 intenções, CPL R$ 2,93.
- Página 20 conclui o bloco visível de Credenciamento com mais três criativos: criativo 4 formato carrossel, alcance 11.816, 109 intenções, CPL R$ 3,05; criativo 5 formato reels, alcance 6.832, 76 intenções, CPL R$ 2,80; criativo 6 formato estático, alcance 6.941, 70 intenções, CPL R$ 3,26.
- Diretriz de implementação: na plataforma, cada família de campanha deve combinar os mockups reais enviados pelo utilizador com uma síntese analítica sobre eficiência de formato, alcance e resposta gerada.

- Fonte: `RSS2026-PERFORMANCEDIGITAL.pdf`, página 21 visualizada.
- Página 21 é o slide final "CONCLUSÕES E DESTAQUES RSS 2025" que está em branco (apenas estrutura visual com 4 blocos de cores diferentes: azul escuro, azul médio, azul claro e rosa/magenta).
- CRÍTICO: Este slide deve ser preenchido com análises conclusivas de 2026, não 2025. O título está errado no PDF.
- Próximo passo: ler o PDF de 2025 para entender o padrão de conclusões e depois escrever as de 2026 com base na análise completa dos dados.

- Fonte: `RelatórioPerformanceDigitalRSS2025.pdf`, páginas 1-5 visualizadas.
- Página 2 resume os destaques de 2025: 5.862 profissionais cadastrados; 36.900 acessos ao site entre março e julho de 2025; 8.128 profissionais interagiram com o site através dos anúncios; R$ 10.000 investidos em anúncios exclusivamente via Meta Ads.
- Página 4 mostra a origem dos acessos ao site em 2025, com total de 25.835 utilizadores visitantes: acessos diretos 9.285; anúncios 8.128; outros sites 4.477; busca orgânica 2.527; redes sociais orgânicas 967; email marketing 554.
- Observação comparativa inicial: 2026 teve menos cadastrados e menor janela temporal até maio, mas já apresenta tráfego qualificado forte por anúncios, maior peso relativo de mídia paga na composição das sessões e crescimento expressivo de outros sites e redes sociais orgânicas face a 2025.
- Página 5 introduz um bloco de “Destaque Social Media”, sugerindo que o relatório 2025 organiza comentários analíticos por secções temáticas; este padrão deve inspirar os textos interpretativos da plataforma 2026.

- Fonte: `RelatórioPerformanceDigitalRSS2025.pdf`, páginas 6-10 visualizadas.
- Página 8 resume o email marketing de 2025: 31 campanhas disparadas, 12.262 leads impactados, taxa média de abertura de 35,93% e taxa média de cliques de 0,17%.
- Páginas 9 e 10 mostram a lógica visual usada em 2025 para destacar emails: mockup do criativo, pequeno bloco com headline da campanha e duas métricas essenciais (abertura e cliques).
- Os exemplos visíveis de 2025 reforçam um padrão editorial: selecionar campanhas com boa leitura estratégica em diferentes momentos da jornada, como credenciamento, virada de fase do evento, pós-primeiro dia, save the date, prospecção comercial e urgência final.
- Insight comparativo importante: em 2026 a taxa média de abertura cresceu para 45,51%, superando de forma relevante o nível de 2025, enquanto a taxa média de cliques continua a exigir leitura contextual e explicação qualitativa.
- Diretriz de copy para a plataforma 2026: cada bloco-chave deve trazer um comentário interpretativo curto, objetivo e executivo, no mesmo espírito do relatório de 2025, mas mais robusto na explicação dos porquês.

- Fonte: `RelatórioPerformanceDigitalRSS2025.pdf`, páginas 16-20 visualizadas.
- O relatório de 2025 usa uma sequência clara para Meta Ads: capa da secção, bloco Awareness, bloco Seja um Expositor e bloco Credenciamento.
- Awareness 2025 enfatiza topo de funil e escala, com criativos orientados a visualizações de destino, alcance e impressões. Os valores visíveis incluem alcance de 708.271 e 383.977, com 810 e 422 visualizações de destino nos dois primeiros criativos; depois alcance de 161.189 e 99.084 com 107 e 56 cliques para o site.
- Expositores 2025 posiciona os anúncios como geração B2B, com destaque simultâneo para leads gerados, alcance, impressões e cliques para o site. Exemplo visível: reels com 12 leads, alcance 14.611, impressões 27.649 e 399 cliques; estático com 6 leads, alcance 8.379, impressões 17.110 e 151 cliques.
- Credenciamento 2025 destaca eficiência de conversão em cadastros, com foco em custo por lead credenciado. Exemplos visíveis: 2.414 cadastros a R$ 1,30; 599 cadastros a R$ 1,36; 249 cadastros a R$ 1,63.
- Diretriz para 2026: manter a mesma lógica narrativa por objetivo de campanha, mas acrescentar um comentário interpretativo abaixo de cada grupo, explicando eficiência de formato, qualidade do público e papel da campanha na jornada.

- Fonte: `RelatórioPerformanceDigitalRSS2025.pdf`, páginas 21-23 visualizadas.
- Página 22 é o slide de conclusões de 2025 com 4 blocos de texto em cores diferentes (azul escuro, rosa/magenta, azul claro e rosa/magenta):
  * Bloco 1 (azul escuro): Foco no perfil B2B do evento e performance digital promissora, com destaque para credenciamento e profissionais presentes no local.
  * Bloco 2 (rosa/magenta): Destaca o funil de credenciamento (8000+ profissionais acessaram o site, com 6000 credenciados e 2000 presentes na feira) e potencial de crescimento para próximas edições.
  * Bloco 3 (azul claro): Enfatiza que 30% do tráfego veio de anúncios de redes sociais, reforçando a importância de investimento em mídia digital e possibilidade de ampliar para próximo ano.
  * Bloco 4 (rosa/magenta): Destaca performance de email marketing com 203 leads gerados em 2025 e potencial de crescimento sem aumento de investimento específico.
- Página 23 é a capa final com o logo da Extrema Visibilidade e tagline "Uma agência de VISIBILIDADE, PERFORMANCE E RESULTADO".
- Modelo para conclusões 2026: manter 4 blocos temáticos, mas focar em comparação 2025 vs 2026, evolução de métricas-chave, eficiência de investimento e recomendações para próximas edições.

