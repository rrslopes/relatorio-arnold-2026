// ============================================================
// Arnold South America - Performance Digital 2026
// Identidade Visual: Rosa/Magenta + Azul Escuro + Ciano
// Typography: Montserrat (headings) + Inter (body)
// ============================================================

export const REPORT_TITLE = "ARNOLD SOUTH AMERICA";
export const REPORT_SUBTITLE = "PERFORMANCE DIGITAL 2026";
export const PERIOD = "Novembro 2025 a Abril 2026";

// KPIs principais
export const kpis = {
  ingressosVendidos: 21869,
  faturamentoIngressos: 3334828.00,
  investidoAds: 199607.18,
  roasGeral: 16.69,
};

// Tabela de receita por canal
export const MONTHS = ["NOV 2025", "DEZ 2025", "JAN 2026", "FEV 2026", "MAR 2026", "ABR 2026"] as const;
export const MONTH_SHORT = ["Nov", "Dez", "Jan", "Fev", "Mar", "Abr"] as const;

export const CHANNEL_COLORS: Record<string, string> = {
  "Google": "#1B1464",
  "Face e Insta Ads": "#C71585",
  "Redes Sociais Orgânicas": "#00BCD4",
  "Email Marketing": "#4A7FB5",
  "Bilheteria": "#7B2D8B",
  "Outros canais": "#FF6B35",
};

export const revenueByChannel = [
  { channel: "Google", values: [0, 26001.80, 53967.10, 63312.70, 141613.45, 541561.91], total: 826456.96 },
  { channel: "Face e Insta Ads", values: [215344.04, 62782.00, 124864.90, 99723.85, 247560.66, 675463.94], total: 1425739.39 },
  { channel: "Redes Sociais Orgânicas", values: [89588.76, 15308.70, 10751.50, 19380.35, 33750.04, 280822.00], total: 449601.35 },
  { channel: "Email Marketing", values: [40799.00, 2865.50, 1859.00, 346.50, 275.00, 2292.40], total: 48437.40 },
  { channel: "Bilheteria", values: [0, 0, 0, 0, 0, 245678.00], total: 245678.00 },
  { channel: "Outros canais", values: [18416.20, 14421.00, 24392.50, 36279.10, 88570.35, 156835.75], total: 338914.90 },
];

export const monthlyTotals = [364148.00, 121379.00, 215835.00, 219042.50, 511769.50, 1902654.00];
export const grandTotal = 3334828.00;

// Investimento em Ads
export const investimentoFeira = {
  items: [
    { name: "Lote Zero/Aquecimento", value: 1500.00 },
    { name: "Institucional/Awareness", value: 36835.28 },
    { name: "Expositores e Patrocinadores", value: 5432.25 },
    { name: "Venda de Ingressos/Feira", value: 91060.98 },
    { name: "Credenciamento Lojistas", value: 4986.26 },
  ],
  total: 139814.77,
};

export const investimentoCongressos = {
  items: [
    { name: "Institucional/Awareness", value: 2498.41 },
    { name: "Gestão de Academia", value: 21976.89 },
    { name: "SONAFE", value: 7934.90 },
    { name: "WTTC", value: 9992.35 },
  ],
  total: 42402.55,
};

export const impostosRetidos = 17389.86;
export const totalInvestidoAds = 199607.18;
export const saldoMeta = 392.82;

// Distribuição Google vs Meta
export const distribuicaoAds = {
  meta: 142203.93,
  google: 40013.39,
  total: 199607.18,
};

// Performance Google Ads
export const googleAds = {
  investido: 42402.55,
  faturamento: 826456.96,
  roas: 19.49,
  nota: "Embora estejamos plotando o investimento total em Google Ads, nem todas as campanhas foram para vendas de ingressos. Ainda assim o ROI é extremamente positivo.",
};

// Performance Meta Ads
export const metaAds = {
  investido: 92560.98,
  faturamento: 1425739.39,
  roas: 15.40,
  nota: "Plotado apenas o investimento realizado em campanhas exclusivas para venda de ingressos. Não contempla investimento em campanhas para congressos do Arnold.",
};

// Resumo Geral Ads (Google + Meta)
export const resumoAds = {
  investido: 134963.53,
  faturamento: 2252196.35,
  roas: 16.69,
  nota: "Campanhas de google ads e meta ads apresentaram performance crescente, ganhando relevância no papel de venda de ingressos. Observa-se um ROAS extremamente positivo, na casa de 16,69x o valor investido.",
};

// Dimensão de campanhas
export const dimensaoCampanhas = {
  feira: { campanhas: 15, criativos: 77 },
  congressos: { campanhas: 6, criativos: 21 },
};

// Lote Zero
export const loteZero = {
  leads: 3387,
  ingressosVendidos: 1377,
  usuariosPagina: 5964,
  visualizacoes: 19308,
  tempoEsgotamento: "33 MIN",
};

// Criativos Awareness
export const creativos = [
  {
    id: "AWARENESS_01_SAVE",
    titulo: "Save The Date",
    formato: "Estático",
    impressoes: 3593117,
    alcance: 2698743,
    cpm: 1.20,
    imagem: "/manus-storage/AWARENESS_01_SAVE_2f11c7ef.png",
  },
  {
    id: "AWARENESS_02_PILARES",
    titulo: "Pilares do Universo",
    formato: "Carrossel",
    impressoes: 779271,
    alcance: 568301,
    cpm: 1.62,
    imagem: "/manus-storage/AWARENESS_02_PILARES_38bb1424.png",
  },
  {
    id: "AWARENESS_03_DORIAN",
    titulo: "Dorian Yates",
    formato: "Reels",
    impressoes: 588967,
    alcance: 441779,
    cpm: 1.59,
    imagem: "/manus-storage/AWARENESS_03_DORIAN_9e51f077.png",
  },
];

// Análises textuais
export const analiseReceita = "A comunicação omnichannel, que integra múltiplos canais digitais, demonstrou ser fundamental para a maximização do faturamento. A estratégia de mídia paga (Google + Meta) consolidou-se como o principal motor de receita, enquanto o crescimento expressivo das redes sociais orgânicas evidencia o amadurecimento da presença digital do evento.";

export const analisePerformanceCanais = "De forma geral, 2026 representou o melhor ano da operação de mídia paga, com crescimento expressivo nos dois principais canais de aquisição. O Google Ads recuperou-se com força após a queda de 2025, atingindo o maior faturamento histórico (~R$ 826 mil). O Meta Ads ampliou a vantagem, saindo de R$ 1.278.500 em 2025 para R$ 1.425.739 em 2026 — um acréscimo de quase R$ 150 mil que reforça a consolidação deste canal como o principal motor de receita do evento. Juntos, Google e Meta somaram mais de R$ 2,2 milhões, evidenciando que a estratégia de mídia paga está cada vez mais madura e escalável.";

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
