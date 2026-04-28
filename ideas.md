# Brainstorm de Design — Dashboard de Análise de Marketing Digital

## Contexto
Dashboard analítico para apresentar dados de campanhas de marketing digital de um evento presencial. Inclui verificação de somatórios, gráficos interativos, análise por canal e evolução temporal do faturamento. O público-alvo são gestores de marketing e stakeholders que precisam de insights claros e acionáveis.

---

<response>
## Ideia 1 — "Editorial Data Journalism"

<text>
**Design Movement:** Inspirado no design editorial de publicações como Financial Times e The Economist — onde dados são apresentados como narrativa visual.

**Core Principles:**
1. Dados como narrativa — cada secção conta uma parte da história
2. Hierarquia tipográfica forte — títulos editoriais com serifas, dados em sans-serif
3. Espaço negativo generoso — respiração entre blocos de informação
4. Cor como semântica — cores comunicam significado, não decoração

**Color Philosophy:** Paleta baseada em tons de carvão e creme, com acentos em coral vivo (para alertas/erros) e azul-petróleo (para dados positivos). A intenção é transmitir seriedade editorial com toques de energia.

**Layout Paradigm:** Layout de coluna editorial com sidebar de navegação fixa à esquerda. Conteúdo principal em coluna larga com secções que se revelam como capítulos de um artigo.

**Signature Elements:**
1. Linhas finas horizontais como separadores editoriais
2. Números grandes em destaque com anotações contextuais
3. Gráficos com anotações inline (estilo FT)

**Interaction Philosophy:** Scroll suave entre secções com revelação progressiva. Hover em dados revela contexto adicional. Transições subtis que não distraem da leitura.

**Animation:** Números que contam de 0 ao valor final ao entrar no viewport. Barras de gráfico que crescem sequencialmente. Fade-in suave para blocos de texto.

**Typography System:** DM Serif Display para títulos + DM Sans para corpo e dados. Números tabulares para alinhamento em tabelas.
</text>

<probability>0.07</probability>
</response>

---

<response>
## Ideia 2 — "Swiss Data Brutalism"

<text>
**Design Movement:** Inspirado no design gráfico suíço (International Typographic Style) com influências do brutalismo digital — grelhas rígidas, tipografia como elemento gráfico dominante.

**Core Principles:**
1. A grelha é sagrada — todos os elementos alinham-se a uma grelha modular de 8px
2. Tipografia é a interface — tamanhos extremos criam hierarquia sem decoração
3. Dados crus e honestos — sem embelezamento desnecessário
4. Contraste máximo — preto, branco e uma cor de acento

**Color Philosophy:** Fundo branco puro (#FFFFFF) com texto em preto profundo (#0A0A0A). Uma única cor de acento — vermelho vivo (#E63946) — usada exclusivamente para destacar discrepâncias e alertas. Cinzas neutros para elementos secundários.

**Layout Paradigm:** Grelha modular assimétrica. Hero section com número gigante (faturamento total) ocupando 60% do ecrã. Secções subsequentes em blocos de grelha 2x2 e 3x1 alternados.

**Signature Elements:**
1. Números em tamanho display (80-120px) como elementos gráficos
2. Bordas sólidas de 2px em vez de sombras
3. Labels em uppercase tracking largo

**Interaction Philosophy:** Interações diretas e imediatas. Sem transições suaves — estados mudam instantaneamente. Hover revela dados com mudança de cor de fundo. Clique em elementos filtra dados globalmente.

**Animation:** Mínima e funcional. Apenas contagem numérica e transições de dados em gráficos. Sem easing curves — linear e mecânico.

**Typography System:** Space Grotesk para tudo — variando apenas em peso (300-700) e tamanho (14px-120px). Monospace (JetBrains Mono) para valores numéricos.
</text>

<probability>0.05</probability>
</response>

---

<response>
## Ideia 3 — "Midnight Analytics"

<text>
**Design Movement:** Inspirado em dashboards de trading e analytics de alta performance — tema escuro com acentos luminosos, sensação de "command center".

**Core Principles:**
1. Fundo escuro para reduzir fadiga visual e destacar dados
2. Cor como sinal — cada canal tem uma cor distinta e consistente
3. Densidade informacional controlada — muitos dados, bem organizados
4. Glassmorphism subtil para criar profundidade

**Color Philosophy:** Fundo em slate escuro (#0F172A) com camadas em tons de slate (#1E293B, #334155). Cada canal de marketing tem uma cor vibrante distinta: Google (amarelo #FBBF24), Face/Insta (rosa #F472B6), Orgânico (verde #34D399), Email (azul #60A5FA), Bilheteria (roxo #A78BFA), Outros (laranja #FB923C). Texto principal em branco com opacidades variáveis.

**Layout Paradigm:** Layout de dashboard com header fixo contendo KPIs principais. Abaixo, grid de cards com gráficos e tabelas. Sidebar colapsável com filtros e navegação.

**Signature Elements:**
1. Cards com borda de vidro fosco (glassmorphism) e brilho sutil
2. Indicadores de status com glow colorido
3. Gráficos com gradientes que desvanecem para o fundo

**Interaction Philosophy:** Hover em cards eleva-os com sombra luminosa. Tooltips ricos em dados aparecem com animação suave. Transições entre estados com easing natural.

**Animation:** Entrada escalonada de cards (stagger). Gráficos que se desenham progressivamente. Números com efeito de contagem. Pulso suave em indicadores de alerta.

**Typography System:** Outfit para títulos e navegação + Inter para corpo. Tabular nums para dados financeiros. Monospace (Fira Code) para valores em destaque.
</text>

<probability>0.08</probability>
</response>

---

## Decisão

Seleciono a **Ideia 1 — "Editorial Data Journalism"** por ser a mais adequada ao contexto de análise de marketing digital para stakeholders. A abordagem editorial transforma dados em narrativa, facilitando a compreensão e a tomada de decisão. O estilo sóbrio mas elegante transmite credibilidade profissional, e a hierarquia tipográfica forte guia o olhar do leitor naturalmente pelos insights mais importantes.
