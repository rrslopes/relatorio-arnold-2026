// Rio Sport Show 2026 - Performance Digital
// Identidade Visual: Laranja + Preto + Branco
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

// Performance do Site - Origem dos Acessos
export const MONTHS = ["MAR 2026", "ABR 2026", "MAI 2026"] as const;
export const MONTH_SHORT = ["Mar", "Abr", "Mai"] as const;

export const CHANNEL_COLORS: Record<string, string> = {
  "Anúncios": "#FF6B35",
  "Outros sites": "#1B1464",
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

// EMAIL MARKETING
// ============================================================
export const emailMarketing = {
  campanhas: 17,
  leadsImpactados: 24086,
  taxaAbertura: "45,51%",
  taxaCliques: "0,90%",
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
  mercadoAbertura: 21.5, // Benchmark de eventos
  rssAbertura: 45.51,
  mercadoCliques: 2.5, // Benchmark de eventos
  rssCliques: 0.90,
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

// Logo URLs - RSS (será atualizado com logo real)
export const LOGO_RSS = "/manus-storage/rss-logo.png";
export const LOGO_EXTREMA_CLARO = "/manus-storage/extrema-visibilidade-horizontal-fundo-claro_1eb0da54.png";
export const LOGO_EXTREMA_ESCURO = "/manus-storage/extrema-visibilidade-horizontal-fundo-escuro_fecda956.png";
