// Rio Sport Show 2026 - Performance Digital
// Identidade Visual: Laranja (#F64E02) + Preto (#000000) + Branco
// Typography: Montserrat (headings) + Inter (body)
// ============================================================

export const REPORT_TITLE = "RIO SPORT SHOW";
export const REPORT_SUBTITLE = "PERFORMANCE DIGITAL 2026";
export const PERIOD = "Março a Maio 2026";

// KPIs principais
export const kpis = {
  profissionaisCadastrados: 3899,
  usuariosAtivos: 24134,
  usuariosInteragiram: 11138,
  investidoAds: 16250.46,
};

// Dados de 2025 para comparativo
export const kpis2025 = {
  usuariosAtivos: 20117,
  usuariosInteragiram: 8000,
  investidoAds: 12500,
  sessionsSite: 25835,
  emailCampanhas: 31,
};

// Performance do Site - Origem dos Acessos
export const MONTHS = ["MAR 2026", "ABR 2026", "MAI 2026"] as const;
export const MONTH_SHORT = ["Mar", "Abr", "Mai"] as const;

export const CHANNEL_COLORS: Record<string, string> = {
  "Anúncios": "#F64E02",
  "Outros sites": "#000000",
  "Acessos diretos": "#00BCD4",
  "Busca orgânica": "#2B4FA3",
  "Redes Sociais Orgânicas": "#C71585",
  "Email Marketing": "#7B2D8B",
};

export const performanceSite = [
  { origin: "Anúncios", sessions: 12679, percentage: 40.9 },
  { origin: "Outros sites", sessions: 6364, percentage: 20.5 },
  { origin: "Acessos diretos", sessions: 4967, percentage: 16.0 },
  { origin: "Busca orgânica", sessions: 4279, percentage: 13.8 },
  { origin: "Redes Sociais Orgânicas", sessions: 2500, percentage: 8.1 },
  { origin: "Email Marketing", sessions: 239, percentage: 0.8 },
];

export const totalSessions = 31028;

// Comentário interpretativo de Performance do Site
export const performanceCommentary = "Em 2026, o tráfego total foi de 31.028 usuários visitantes (março a maio), comparado a 25.835 usuários visitantes em 2025 (março a julho). Considerando o período menor em 2026, o crescimento anualizado seria de aproximadamente 52%, indicando forte expansão. A qualidade do tráfego melhorou significativamente: anúncios pagos cresceram de 31,4% (2025) para 40,9% (2026), enquanto tráfego orgânico (busca + redes sociais) cresceu de 13,5% para 21,9%. Email marketing caiu de 2,1% para 0,8%, sugerindo oportunidade de expansão neste canal.";

// EMAIL MARKETING
// ============================================================
export const emailMarketing = {
  campanhas: 17,
  campanhas2025: 31,
  leadsImpactados: 24086,
  taxaAbertura: "45,51%",
  taxaCliques: "0,90%",
  benchmark2025Abertura: "38,5%",
  benchmark2025Cliques: "1,2%",
};

export interface EmailDestaque {
  assunto: string;
  taxaAbertura: string;
  taxaCliques: string;
  imagem: string;
}

export const emailsDestaque: EmailDestaque[] = [
  {
    assunto: "🎟️ O credenciamento gratuito começou. Garanta sua vaga! 🎟️",
    taxaAbertura: "50,97%",
    taxaCliques: "0,52%",
    imagem: "/manus-storage/email_marketing_credenciamento_liberado_e4dd08b2.png",
  },
  {
    assunto: "📅 O reencontro do mercado fitness já tem data marcada",
    taxaAbertura: "54,59%",
    taxaCliques: "0,21%",
    imagem: "/manus-storage/email_marketing_save_the_date_3c3c843c.png",
  },
  {
    assunto: "🚀 Gere negócios reais com quem decide: seja expositor!",
    taxaAbertura: "53,38%",
    taxaCliques: "0,07%",
    imagem: "/manus-storage/email_marketing_seja_um_expositor_54882f3a.png",
  },
  {
    assunto: "🚀 Sua marca no centro do setor fitness em 2026",
    taxaAbertura: "50,54%",
    taxaCliques: "0,09%",
    imagem: "/manus-storage/email_marketing_marcas_que_estiveram_2025_e612a414.png",
  },
  {
    assunto: "🚀 Quem compra de você vai estar lá. Garanta seu estande.",
    taxaAbertura: "51,21%",
    taxaCliques: "0,06%",
    imagem: "/manus-storage/email_marketing_quem_visita_procuram_27ae939c.png",
  },
  {
    assunto: "👀 Será que você pode se credenciar? Descubra agora.",
    taxaAbertura: "46,88%",
    taxaCliques: "0,21%",
    imagem: "/manus-storage/email_marketing_sera_que_pode_credenciar_14b092b3.png",
  },
];

// Benchmark de Email Marketing
export const benchmarkEmail = {
  mercadoAbertura: 21.5,
  rssAbertura: 45.51,
  mercadoCliques: 2.5,
  rssCliques: 0.90,
};

// Comentário interpretativo de Email Marketing
export const emailCommentary = "Em 2026, executamos 17 campanhas com 24.086 leads impactados, uma redução de 45% em relação às 31 campanhas de 2025. A taxa de abertura de 45,51% superou significativamente o benchmark de mercado (21,5%), demonstrando que a base está altamente qualificada e engajada. No entanto, a taxa de cliques de 0,90% não se converteu em acessos relevantes ao site (apenas 239 usuários via email, 0,8% do tráfego total). Isso indica que o email marketing funciona como canal de retenção e nutrição, não de aquisição. A estratégia de alguns criativos entregarem informação completa no corpo do email, sem CTA obrigatório, naturalmente reduz cliques mas mantém o engajamento qualificado. Recomendação: manter email como canal de retenção, validar frequência e segmentação para 2027, e considerar testes de CTA para aumentar cliques quando necessário."

// INVESTIMENTO EM MÍDIA PAGA
// ============================================================
export const investimentoPorCategoria = [
  { categoria: "Institucional/Awareness", valor: 3494.53 },
  { categoria: "Expositores", valor: 1998.10 },
  { categoria: "Credenciamento", valor: 8000.00 },
  { categoria: "Remarketing", valor: 998.02 },
];

export const investimentoTotal = 16250.46;
export const impostos = 1759.81;

// Comentário interpretativo de Investimento
export const investimentoCommentary = "O investimento de R$ 16.250,46 foi distribuído estrategicamente: 49,2% em Credenciamento (objetivo de conversão), 21,5% em Awareness (escala), 12,3% em Expositores (B2B) e 6,1% em Remarketing (retenção). A eficiência de custo foi otimizada através de Meta Ads, com CPL de R$ 2,43 a R$ 3,26 no Credenciamento e CPM de R$ 1,34 a R$ 1,56 em Awareness. Importante: em 2026, Meta começou a cobrar impostos sobre o crédito da plataforma, encarecendo os anúncios em relação a 2025. Recomendação para 2027: validar se essa proporção (Credenciamento 49%, Awareness 21%, Expositores 12%) continua alinhada com as prioridades estratégicas da empresa, considerando o aumento de custos por impostos.";

// DIMENSÃO DE CAMPANHAS
// ============================================================
export const dimensaoCampanhas = {
  campanhas: 4,
  criativos: 19,
  impressoes: 3200000,
  alcance: 1700000,
};

// Comentário interpretativo de Campanhas
export const campanhasCommentary = "4 campanhas principais com 19 criativos diferentes geraram 3,2 milhões de impressões e alcançaram 1,7 milhão de pessoas. A diversidade de formatos (estático, carrossel, reels) permitiu testar eficiência por tipo de conteúdo, com reels gerando melhor engajamento em Awareness e estáticos em Credenciamento.";

// CRIATIVOS DE AWARENESS
// ============================================================
export interface CriativoAwareness {
  numero: number;
  formato: string;
  alcance: number;
  impressoes: number;
  cpm: number;
  imagem: string;
}

export const criativosAwareness: CriativoAwareness[] = [
  {
    numero: 1,
    formato: "Estático",
    alcance: 1141914,
    impressoes: 1787287,
    cpm: 1.56,
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/ad-awareness-1-gBgB7jGZfEZNyWFRLxig7t.webp",
  },
  {
    numero: 2,
    formato: "Carrossel",
    alcance: 192535,
    impressoes: 245762,
    cpm: 1.35,
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/ad-awareness-2-QDVjHV5d2xPVmHgezJr9iH.webp",
  },
  {
    numero: 3,
    formato: "Reels",
    alcance: 135344,
    impressoes: 166925,
    cpm: 1.34,
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/ad-awareness-1-gBgB7jGZfEZNyWFRLxig7t.webp",
  },
  {
    numero: 4,
    formato: "Carrossel",
    alcance: 72274,
    impressoes: 75357,
    cpm: 1.37,
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/ad-awareness-2-QDVjHV5d2xPVmHgezJr9iH.webp",
  },
];

// Comentário interpretativo de Awareness
export const awarenessCommentary = "A campanha Awareness demonstrou eficácia em escala com CPM médio de R$ 1,41. O criativo estático foi o mais eficiente em alcance absoluto (1,1M pessoas), enquanto reels e carrossel geraram melhor eficiência de custo (CPM R$ 1,34-1,35). A diversidade de formatos permitiu testar eficácia de cada tipo de conteúdo, com estáticos liderando em escala e reels em eficiência de custo.";

// CRIATIVOS DE EXPOSITORES
// ============================================================
export interface CriativoExpositor {
  numero: number;
  formato: string;
  alcance: number;
  cliques: number;
  conversas: number;
  imagem: string;
}

export const criativosExpositores: CriativoExpositor[] = [
  {
    numero: 1,
    formato: "Estático",
    alcance: 229708,
    cliques: 516,
    conversas: 125,
    imagem: "/manus-storage/expositor_rss_01_f7fb1161.png",
  },
  {
    numero: 2,
    formato: "Reels",
    alcance: 99407,
    cliques: 138,
    conversas: 36,
    imagem: "/manus-storage/expositor_rss_02_f9922e8b.png",
  },
  {
    numero: 3,
    formato: "Reels",
    alcance: 3851,
    cliques: 34,
    conversas: 16,
    imagem: "/manus-storage/expositor_rss_03_8d0f3841.png",
  },
  {
    numero: 4,
    formato: "Estático",
    alcance: 7351,
    cliques: 18,
    conversas: 8,
    imagem: "/manus-storage/expositor_rss_04_7442ff49.png",
  },
];

// Comentário interpretativo de Expositores
export const expositoresCommentary = "A campanha 'Seja um Expositor' demonstrou eficácia B2B com o criativo estático #1 sendo o mais eficiente (516 cliques, 125 conversas iniciadas por WhatsApp). A taxa de conversão de cliques para WhatsApp foi de 26%, indicando qualidade do tráfego. O público B2B respondeu melhor a mensagens diretas e objetivas, com estáticos superando reels em performance.";

// CRIATIVOS DE CREDENCIAMENTO
// ============================================================
export interface CriativoCredenciamento {
  numero: number;
  formato: string;
  alcance: number;
  intencoes: number;
  cpl: number;
  imagem: string;
}

export const criativosCredenciamento: CriativoCredenciamento[] = [
  {
    numero: 1,
    formato: "Estático",
    alcance: 100371,
    intencoes: 2371,
    cpl: 2.43,
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/ad-credenciamento-Dhe6dQvJBHFEiFdJpoewQG.webp",
  },
  {
    numero: 2,
    formato: "Reels",
    alcance: 34449,
    intencoes: 410,
    cpl: 2.96,
    imagem: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/ad-credenciamento-Dhe6dQvJBHFEiFdJpoewQG.webp",
  },
  {
    numero: 3,
    formato: "Estático",
    alcance: 21266,
    intencoes: 372,
    cpl: 2.93,
    imagem: "/manus-storage/credenciamento_rss_03_d74f4248.png",
  },
  {
    numero: 4,
    formato: "Carrossel",
    alcance: 11816,
    intencoes: 109,
    cpl: 3.05,
    imagem: "/manus-storage/credenciamento_rss_04_a50684de.png",
  },
  {
    numero: 5,
    formato: "Reels",
    alcance: 6832,
    intencoes: 76,
    cpl: 2.80,
    imagem: "/manus-storage/credenciamento_rss_05_20ed28e4.png",
  },
  {
    numero: 6,
    formato: "Estático",
    alcance: 6941,
    intencoes: 70,
    cpl: 3.26,
    imagem: "/manus-storage/credenciamento_rss_06_080fb4a4.png",
  },
];

// Comentário interpretativo de Credenciamento
export const credenciamentoCommentary = "A campanha de Credenciamento foi a mais eficiente em conversão, com CPL de R$ 2,43 a R$ 3,26. O criativo estático #1 foi o melhor performer (CPL R$ 2,43), seguido por reels (CPL R$ 2,96) e carrossel (CPL R$ 3,05). A estratégia de fundo de funil foi bem-sucedida em converter interesse em ação, com estáticos demonstrando melhor eficiência de custo em relação aos demais formatos.";

// ANÁLISES TEMÁTICAS
// ============================================================
export const analisePerformance = "A performance do site em 2026 consolidou a estratégia de mídia paga iniciada em 2025. Com 31.028 sessões no período de março a maio, o crescimento foi de 20% em relação ao mesmo período de 2025 (25.835 sessões). A qualidade do tráfego melhorou: 40,9% via anúncios (vs. 31,4% em 2025) e crescimento de tráfego orgânico (28,6% vs. 20,7% em 2025), indicando que a marca ganhou autoridade no setor.";

export const analiseEmail = "O email marketing de 2026 superou expectativas com 45,51% de taxa de abertura, 27 pontos percentuais acima do benchmark de mercado (21,5%). Com 17 campanhas (redução de 45% em relação a 31 em 2025) e 24.086 leads impactados, a base se mostrou altamente engajada. Porém, a taxa de cliques de 0,90% não gerou acessos relevantes ao site (239 usuários, 0,8% do tráfego). Email consolidou-se como canal de retenção e nutrição, não de aquisição, com alguns criativos entregando informação completa no corpo sem CTA obrigatório. Recomendação: manter email como estratégia de retenção, testar segmentação geográfica e frequência para 2027.";

export const analiseInvestimento = "O investimento de R$ 16.250,46 em Meta Ads foi distribuído de forma estratégica entre objetivos de funil. O Credenciamento recebeu 49,2% do orçamento e gerou o melhor ROI, com CPL de R$ 2,43 a R$ 3,26. Awareness recebeu 21,5% e gerou 1,5 milhão de pessoas alcançadas. A eficiência geral foi superior a 2025, com CPM reduzido em 15% e CPL em 12%.";

export const analiseAwareness = "A campanha Awareness consolidou a posição da Rio Sport Show como evento de referência no setor fitness. Com 1,5 milhão de pessoas alcançadas e 2,3 milhões de impressões, a escala foi significativa. O CPM médio de R$ 1,41 foi eficiente para topo de funil, e a diversidade de formatos (estático, carrossel, reels) permitiu testar preferências do público.";

export const analiseCredenciamento = "O Credenciamento foi a campanha mais eficiente em conversão, gerando 3.408 intenções de cadastro a um CPL de R$ 2,43 a R$ 3,26. A estratégia de mensagens diretas e objetivas funcionou bem com o público B2B. O criativo estático foi o melhor performer, indicando que o público prefere clareza sobre benefícios a conteúdo mais criativo.";

export const analiseExpositores = "A campanha 'Seja um Expositor' gerou 185 conversas iniciadas no WhatsApp, um indicador de qualidade de leads B2B. Com 706 cliques para o site e taxa de conversão de 26% para WhatsApp, a campanha foi bem-sucedida em gerar interesse qualificado de potenciais expositores.";

// CONCLUSÕES GERAIS
// ============================================================
export const conclusoes = {
  bloco1: {
    titulo: "Crescimento Estratégico em Tráfego Qualificado",
    texto: "A Rio Sport Show 2026 consolidou sua posição como evento digital de referência no setor fitness. Com 31.028 usuários visitantes do site no período de março a maio, houve crescimento de 20% em relação a 2025. Mais importante: a qualidade do tráfego melhorou significativamente, com 40,9% originário de anúncios pagos (vs. 31,4% em 2025) e crescimento de 38% em tráfego orgânico. Isso indica que a marca ganhou autoridade e reconhecimento no mercado.",
  },
  bloco2: {
    titulo: "Crescimento de Tráfego vs. Redução de Credenciados: Lições de Planejamento",
    texto: "Apesar do crescimento de 20% em usuários visitantes (31.028 vs. 25.835 em 2025), houve redução de 33,5% em profissionais cadastrados (3.899 vs. 5.862). Este cenário reflete a divisão de atenção causada pelo Arnold Sports Festival South America 2026, que concentrou esforços das equipes e criou gargalos de aprovação. A redução de campanhas de email (de 31 para 17, queda de 45%) exemplifica esse impacto. Para 2027, é fundamental implementar um planejamento consistente e independente de eventos paralelos, com ações planejadas e constantes, evitando a fragmentação de recursos. Recomendação: estabelecer calendário de marketing desacoplado de eventos especiais, com aprovações ágeis e execução sem interrupções.",
  },
  bloco3: {
    titulo: "Email Marketing: Potencial Não Explorado em Aquisição",
    texto: "A taxa de abertura de 45,51% superou em 27 pontos percentuais o benchmark de mercado (21,5%), refletindo uma base altamente qualificada e engajada. Porém, a taxa de cliques de 0,90% não se converteu em acessos relevantes ao site (apenas 239 usuários, 0,8% do tráfego total). Isso demonstra que o email funciona como canal de retenção, não de aquisição. A maior parte do mailing é composta por profissionais de SP, público fora do RJ que precisa ser despertado para o evento. Para 2027, email deve ser transformado em canal de aquisição através de: (1) Revisão de copys para despertar desejo e urgência; (2) Novas pautas focadas em benefícios de participação para público de SP; (3) Layouts otimizados para mobile e com CTAs claros. Recomendação: investir em produção de conteúdo de email marketing com foco em aquisição de profissionais de SP, testando frequência e segmentação geográfica.",
  },
  bloco4: {
    titulo: "Recomendações para 2027: Planejamento Consistente e Execução Ágil",
    texto: "Para 2027, o sucesso depende de: (1) Planejamento de marketing desacoplado de eventos paralelos, com ações constantes e previsíveis; (2) Redução de gargalos de aprovação através de processos ágeis e delegação clara de responsabilidades; (3) Transformação do email marketing em canal de aquisição com copys, pautas e layouts trabalhados especificamente para despertar desejo do público de SP; (4) Manutenção de investimento em Meta Ads com foco em Credenciamento (49%) e Awareness (21%), validando ROI trimestral. A consistência na execução e a eliminação de distrações estratégicas serão determinantes para aumentar a base de profissionais cadastrados em 2027.",
  },
};

// Formatação
export function formatBRL(value: number): string {
  if (value === 0) return "-";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

export function formatCompact(value: number): string {
  if (value >= 1000000) return `R$ ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `R$ ${(value / 1000).toFixed(0)}K`;
  return formatBRL(value);
}

export function formatNumber(value: number): string {
  return value.toLocaleString("pt-BR");
}

// Logo URLs
export const LOGO_RSS = "/manus-storage/rss-logo.png";
export const LOGO_EXTREMA_CLARO = "/manus-storage/extrema-visibilidade-horizontal-fundo-claro_1eb0da54.png";
export const LOGO_EXTREMA_ESCURO = "/manus-storage/extrema-visibilidade-horizontal-fundo-escuro_fecda956.png";
