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

// ============================================================
// CRIATIVOS POR CATEGORIA
// ============================================================

export interface Criativo {
  id: string;
  titulo: string;
  formato: string;
  imagem: string;
  link?: string;
  metricas: { label: string; value: string }[];
}

export interface CategoriaCreativos {
  categoria: string;
  subtitulo: string;
  criativos: Criativo[];
}

export const categoriasCreativos: CategoriaCreativos[] = [
  {
    categoria: "INSTITUCIONAL | AWARENESS ARNOLD",
    subtitulo: "Campanhas de awareness para o Arnold South America",
    criativos: [
      {
        id: "AWARENESS_01_SAVE",
        titulo: "Save The Date",
        formato: "Estático",
        imagem: "/manus-storage/AWARENESS_01_SAVE_2f11c7ef.png",
        metricas: [
          { label: "Impressões", value: "3.593.117" },
          { label: "Alcance", value: "2.698.743" },
          { label: "CPM", value: "R$ 1,20" },
        ],
      },
      {
        id: "AWARENESS_02_PILARES",
        titulo: "Pilares do Universo",
        formato: "Carrossel",
        imagem: "/manus-storage/AWARENESS_02_PILARES_38bb1424.png",
        metricas: [
          { label: "Impressões", value: "779.271" },
          { label: "Alcance", value: "568.301" },
          { label: "CPM", value: "R$ 1,62" },
        ],
      },
      {
        id: "AWARENESS_03_DORIAN",
        titulo: "Dorian Yates",
        formato: "Reels",
        imagem: "/manus-storage/AWARENESS_03_DORIAN_9e51f077.png",
        metricas: [
          { label: "Impressões", value: "588.967" },
          { label: "Alcance", value: "441.779" },
          { label: "CPM", value: "R$ 1,59" },
        ],
      },
    ],
  },
  {
    categoria: "CREDENCIAMENTO | LOJISTAS",
    subtitulo: "Campanhas para credenciamento de lojistas",
    criativos: [
      {
        id: "LOJISTAS_01_ACESSO_GRATUITO",
        titulo: "Acesso Gratuito",
        formato: "Estático",
        imagem: "/manus-storage/LOJISTAS_01_ACESSO_GRATUITO_dd8cf48a.png",
        metricas: [
          { label: "Impressões", value: "195.101" },
          { label: "Leads Gerados", value: "1.605 cadastros" },
          { label: "CPA", value: "R$ 1,49" },
        ],
      },
      {
        id: "LOJISTAS_02_DEPOIMENTO",
        titulo: "Depoimento",
        formato: "Reels",
        imagem: "/manus-storage/LOJISTAS_02_DEPOIMENTO_b4470453.png",
        metricas: [
          { label: "Impressões", value: "273.687" },
          { label: "Leads Gerados", value: "1.364 cadastros" },
          { label: "CPA", value: "R$ 1,89" },
        ],
      },
    ],
  },
  {
    categoria: "AWARENESS B2B | EXPOSITORES E PATROCINADORES",
    subtitulo: "Campanhas para atração de expositores e patrocinadores",
    criativos: [
      {
        id: "EXPOSITOR_01_SEJA",
        titulo: "Seja Expositor",
        formato: "Estático",
        imagem: "/manus-storage/EXPOSITOR_01_SEJA_aa8ed077.png",
        metricas: [
          { label: "Impressões", value: "84.624" },
          { label: "Conversas iniciadas", value: "296" },
          { label: "CPA", value: "R$ 8,06" },
        ],
      },
      {
        id: "EXPOSITOR_02_DEPOIMENTO",
        titulo: "Depoimento de Expositor",
        formato: "Carrossel de Reels",
        imagem: "/manus-storage/EXPOSITOR_02_DEPOIMENTO_719984e2.png",
        metricas: [
          { label: "Impressões", value: "15.322" },
          { label: "Conversas iniciadas", value: "65" },
          { label: "CPM", value: "R$ 7,37" },
        ],
      },
      {
        id: "EXPOSITOR_03_DEPOIMENTOCARIANI",
        titulo: "Depoimento Cariani",
        formato: "Reels",
        imagem: "/manus-storage/EXPOSITOR_03_DEPOIMENTOCARIANI_d3249760.png",
        metricas: [
          { label: "Impressões", value: "10.349" },
          { label: "Conversas iniciadas", value: "30" },
          { label: "CPA", value: "R$ 11,27" },
        ],
      },
      {
        id: "EXPOSITOR_04_4_EXPOS",
        titulo: "Carrossel 4 Expositores",
        formato: "Carrossel",
        imagem: "/manus-storage/EXPOSITOR_04_4_EXPOS_4e395d08.png",
        metricas: [
          { label: "Impressões", value: "6.331" },
          { label: "Conversas iniciadas", value: "28" },
          { label: "CPA", value: "R$ 7,58" },
        ],
      },
    ],
  },
  {
    categoria: "VENDA DE INGRESSOS | CAMPANHAS ATEMPORAIS",
    subtitulo: "Campanhas contínuas para venda de ingressos da feira",
    criativos: [
      {
        id: "INGRESSOS_ATEMPORAL_FILA_ATRACAO",
        titulo: "Fila de Atração",
        formato: "Reels",
        imagem: "/manus-storage/FILA_ATRACAO_d08c5d8f.png",
        metricas: [
          { label: "Vendas confirmadas", value: "283" },
          { label: "ROAS", value: "11,48x" },
          { label: "Faturamento", value: "R$ 62.468,00" },
        ],
      },
      {
        id: "INGRESSOS_ATEMPORAL_CORREDORES",
        titulo: "Corredores",
        formato: "Carrossel",
        imagem: "/manus-storage/INGRESSOS_ATEMPORAL_CORREDORES_e3a96b65.png",
        metricas: [
          { label: "Vendas confirmadas", value: "283" },
          { label: "ROAS", value: "13,39x" },
          { label: "Faturamento", value: "R$ 60.678,50" },
        ],
      },
      {
        id: "INGRESSOS_ATEMPORAL_VACILAO",
        titulo: "Vacilão",
        formato: "Estático",
        imagem: "/manus-storage/VACILAO_d337a283.png",
        metricas: [
          { label: "ROAS", value: "29,19x" },
          { label: "Faturamento", value: "R$ 36.356,50" },
        ],
      },
    ],
  },
  {
    categoria: "VENDA DE INGRESSOS | ESTRATÉGIAS DE LOTES",
    subtitulo: "Campanhas por lote de ingressos — Lotes 1 a 3",
    criativos: [
      {
        id: "LOTE1_ELE_CHEGOU",
        titulo: "Lote 1 — Ele Chegou",
        formato: "Estático",
        imagem: "/manus-storage/LOTE1_ELE_CHEGOU_c37b8e4b.png",
        metricas: [
          { label: "Vendas confirmadas", value: "446" },
          { label: "ROAS", value: "21,55x" },
          { label: "Faturamento", value: "R$ 96.965,02" },
        ],
      },
      {
        id: "LOTE2_CHEGOU",
        titulo: "Lote 2 — Chegou",
        formato: "Estático",
        imagem: "/manus-storage/LOTE2_CHEGOU_c6e87d0b.png",
        metricas: [
          { label: "Vendas confirmadas", value: "506" },
          { label: "ROAS", value: "21,34x" },
          { label: "Faturamento", value: "R$ 109.380,00" },
        ],
      },
      {
        id: "LOTE3_ATIVADO",
        titulo: "Lote 3 — Ativado",
        formato: "Estático",
        imagem: "/manus-storage/LOTE3_ATIVADO_df88c5b2.png",
        metricas: [
          { label: "Vendas confirmadas", value: "420" },
          { label: "ROAS", value: "11,34x" },
          { label: "Faturamento", value: "R$ 102.763,50" },
        ],
      },
    ],
  },
  {
    categoria: "VENDA DE INGRESSOS | LOTES 4, 5 E BB PRO",
    subtitulo: "Campanhas por lote de ingressos — Lotes 4, 5 e BB Pro",
    criativos: [
      {
        id: "LOTE4_LIBERADO",
        titulo: "Lote 4 — Liberado",
        formato: "Estático",
        imagem: "/manus-storage/LOTE4_LIBERADO_24e0785a.png",
        metricas: [
          { label: "Vendas confirmadas", value: "838" },
          { label: "ROAS", value: "15,62x" },
          { label: "Faturamento", value: "R$ 196.625,54" },
        ],
      },
      {
        id: "LOTE5_EVENTO",
        titulo: "Lote 5 — Evento",
        formato: "Estático",
        imagem: "/manus-storage/LOTE5_EVENTO_626c3e12.png",
        metricas: [
          { label: "Vendas confirmadas", value: "682" },
          { label: "ROAS", value: "74,96x" },
          { label: "Faturamento", value: "R$ 149.032,20" },
        ],
      },
      {
        id: "SAVE_THE_DATE_BB_PRO",
        titulo: "Save The Date BB Pro",
        formato: "Estático",
        imagem: "/manus-storage/SAVE_THE_DATE_BB_PRO_fb43c6da.png",
        metricas: [
          { label: "Vendas confirmadas", value: "129" },
          { label: "ROAS", value: "11,29x" },
          { label: "Faturamento", value: "R$ 28.404,00" },
        ],
      },
    ],
  },
];

// ============================================================
// ENGAJAMENTO DURANTE O EVENTO
// ============================================================
export const engajamentoEvento: CategoriaCreativos[] = [
  {
    categoria: "ENGAJAMENTO DURANTE O EVENTO",
    subtitulo: "Conteúdos orgânicos publicados durante o Arnold 2026",
    criativos: [
      {
        id: "RECADO_ARNOLD",
        titulo: "Recado Arnold",
        formato: "Reels",
        imagem: "/manus-storage/RECADO_ARNOLD_c55151f9.png",
        metricas: [
          { label: "Alcance", value: "6.254 pessoas" },
          { label: "Engajamento", value: "3.414" },
        ],
      },
      {
        id: "O_PRIMEIRO_DIA",
        titulo: "O Primeiro Dia",
        formato: "Reels",
        imagem: "/manus-storage/O_PRIMEIRO_DIA_366c38b3.png",
        metricas: [
          { label: "Alcance", value: "2.915 pessoas" },
          { label: "Engajamento", value: "814" },
        ],
      },
      {
        id: "O_SEGUNDO_DIA",
        titulo: "O Segundo Dia",
        formato: "Reels",
        imagem: "/manus-storage/O_SEGUNDO_DIA_f21ac69c.png",
        metricas: [
          { label: "Alcance", value: "1.430 pessoas" },
          { label: "Engajamento", value: "280" },
        ],
      },
      {
        id: "TALKS_LEO_STRONDA",
        titulo: "Talks Leo Stronda",
        formato: "Reels",
        imagem: "/manus-storage/TALKS_LEO_STRONDA_b7b88834.png",
        metricas: [
          { label: "Alcance", value: "1.309 pessoas" },
          { label: "Engajamento", value: "381" },
        ],
      },
      {
        id: "RESUMO_PRIMEIRO_DIA",
        titulo: "Resumo Primeiro Dia",
        formato: "Reels",
        imagem: "/manus-storage/RESUMO_PRIMEIRO_DIA_cd937b3e.png",
        metricas: [
          { label: "Alcance", value: "2.397 pessoas" },
          { label: "Engajamento", value: "436" },
        ],
      },
    ],
  },
];

// ============================================================
// FUNIL DE REMARKETING META ADS
// ============================================================
export const funilRemarketing = {
  pessoasReimpactadas: 44390,
  readicoesCarrinho: 1693,
  comprasConcluidas: 670,
  roasMedio: "9,29x",
  faturamentoEstimado: 148649.75,
};

// ============================================================
// CONGRESSOS ARNOLD - FUNIS
// ============================================================
export interface FunilCongresso {
  nome: string;
  acessosPaginaVendas: number;
  acessosPaginaInstitucional: number;
  adicoesCarrinho: number;
  ingressosVendidos: number;
  ingressosAnuncios: number;
  faturamento: number;
  faturamento2025: number;
  crescimento: string;
}

export const funilSonafe: FunilCongresso = {
  nome: "SONAFE 2026",
  acessosPaginaVendas: 15063,
  acessosPaginaInstitucional: 2893,
  adicoesCarrinho: 472,
  ingressosVendidos: 217,
  ingressosAnuncios: 52,
  faturamento: 76623.00,
  faturamento2025: 41612.00,
  crescimento: "+75%",
};

export const funilGestaoAcademias: FunilCongresso = {
  nome: "GESTÃO DE ACADEMIAS 2026",
  acessosPaginaVendas: 18343,
  acessosPaginaInstitucional: 5748,
  adicoesCarrinho: 570,
  ingressosVendidos: 296,
  ingressosAnuncios: 52,
  faturamento: 251179.50,
  faturamento2025: 138171.50,
  crescimento: "+80%",
};

export const funilWttc: FunilCongresso = {
  nome: "WTTC 2026",
  acessosPaginaVendas: 14234,
  acessosPaginaInstitucional: 803,
  adicoesCarrinho: 559,
  ingressosVendidos: 251,
  ingressosAnuncios: 60,
  faturamento: 91387.00,
  faturamento2025: 54731.10,
  crescimento: "+65%",
};

// Criativos dos congressos
export const criativosSonafe: CategoriaCreativos = {
  categoria: "DESTAQUE DE CAMPANHAS | SONAFE",
  subtitulo: "Melhores campanhas em Meta Ads para o SONAFE",
  criativos: [
    {
      id: "SONAFE_1",
      titulo: "SONAFE - Criativo 1",
      formato: "Reels",
      imagem: "/manus-storage/SONAFE_1_2cd0486c.png",
      metricas: [
        { label: "Alcance", value: "72.960" },
        { label: "CPM", value: "R$ 8,58" },
      ],
    },
    {
      id: "SONAFE_2",
      titulo: "SONAFE - Criativo 2",
      formato: "Reels",
      imagem: "/manus-storage/SONAFE_2_f6d73600.png",
      metricas: [
        { label: "Alcance", value: "38.881" },
        { label: "CPM", value: "R$ 14,14" },
      ],
    },
    {
      id: "SONAFE_3",
      titulo: "SONAFE - Criativo 3",
      formato: "Estático",
      imagem: "/manus-storage/SONAFE_3_3f371956.png",
      metricas: [
        { label: "Alcance", value: "55.309" },
        { label: "CPM", value: "R$ 10,97" },
      ],
    },
  ],
};

export const criativosGestaoAcademias: CategoriaCreativos = {
  categoria: "DESTAQUE DE CAMPANHAS | GESTÃO DE ACADEMIAS",
  subtitulo: "Melhores campanhas em Meta Ads para Gestão de Academias",
  criativos: [
    {
      id: "GESTAO_ACADEMIAS_1",
      titulo: "Gestão de Academias - Criativo 1",
      formato: "Reels",
      imagem: "/manus-storage/GESTAO_ACADEMIAS_1_79a7e3a8.png",
      metricas: [
        { label: "Alcance", value: "125.582" },
        { label: "CPM", value: "R$ 15,40" },
      ],
    },
    {
      id: "GESTAO_ACADEMIAS_2",
      titulo: "Gestão de Academias - Criativo 2",
      formato: "Carrossel",
      imagem: "/manus-storage/GESTAO_ACADEMIAS_2_65d5f54d.png",
      metricas: [
        { label: "Alcance", value: "54.426" },
        { label: "CPM", value: "R$ 12,99" },
      ],
    },
    {
      id: "GESTAO_ACADEMIAS_3",
      titulo: "Gestão de Academias - Criativo 3",
      formato: "Carrossel",
      imagem: "/manus-storage/GESTAO_ACADEMIAS_3_bc335fc9.png",
      metricas: [
        { label: "Alcance", value: "92.584" },
        { label: "CPM", value: "R$ 15,93" },
      ],
    },
  ],
};

export const criativosWttc: CategoriaCreativos = {
  categoria: "DESTAQUE DE CAMPANHAS | WTTC",
  subtitulo: "Melhores campanhas em Meta Ads para o WTTC",
  criativos: [
    {
      id: "WTTC_1",
      titulo: "WTTC - Criativo 1",
      formato: "Reels",
      imagem: "/manus-storage/WTTC_1_78874f96.png",
      metricas: [
        { label: "Alcance", value: "58.855" },
        { label: "CPM", value: "R$ 17,05" },
      ],
    },
    {
      id: "WTTC_2",
      titulo: "WTTC - Criativo 2",
      formato: "Estático",
      imagem: "/manus-storage/WTTC_2_fff06fa6.png",
      metricas: [
        { label: "Alcance", value: "119.465" },
        { label: "CPM", value: "R$ 13,22" },
      ],
    },
    {
      id: "WTTC_3",
      titulo: "WTTC - Criativo 3",
      formato: "Reels",
      imagem: "/manus-storage/WTTC_3_52a9a9fc.png",
      metricas: [
        { label: "Alcance", value: "34.069" },
        { label: "CPM", value: "R$ 17,77" },
      ],
    },
  ],
};

// ============================================================
// RECUPERAÇÃO DE CARRINHO POR WHATSAPP
// ============================================================
export interface FunilWhatsApp {
  titulo: string;
  enviadas: string;
  entregues: string;
  lidas: string;
  lidasPercent: string;
  clicks: string;
  clicksPercent: string;
}

export const whatsappCongressos: FunilWhatsApp = {
  titulo: "Recuperação de Carrinho de Congressos",
  enviadas: "111",
  entregues: "111",
  lidas: "54",
  lidasPercent: "49%",
  clicks: "30",
  clicksPercent: "28%",
};

export const whatsappLojistas: FunilWhatsApp = {
  titulo: "Recuperação de Lojistas",
  enviadas: "1.200",
  entregues: "1.200",
  lidas: "694",
  lidasPercent: "57%",
  clicks: "341",
  clicksPercent: "28%",
};

// ============================================================
// ANÁLISE LOJISTAS
// ============================================================
export const analiseLojistas = {
  cadastrosVCS: 18998,
  investidoCampanha: 5000.00,
  cadastrosAnuncios: 2981,
  pessoasAlcancadas: 115914,
};

// ============================================================
// EMAIL MARKETING
// ============================================================
export const emailMarketing = {
  campanhas: 96,
  leadsImpactados: 98570,
  taxaAbertura: "41,53%",
  taxaCliques: "0,87%",
};

export interface EmailDestaque {
  assunto: string;
  taxaAbertura: string;
  taxaCliques: string;
  imagem: string;
}

export const emailsDestaque: EmailDestaque[] = [
  { assunto: "A maior experiência fitness está chegando: faltam 3 meses!", taxaAbertura: "55,45%", taxaCliques: "0,97%", imagem: "/manus-storage/EMAIL_3MESES_1709b127.png" },
  { assunto: "O Lote Zero do Arnold já tem data para começar!", taxaAbertura: "51,67%", taxaCliques: "sem CTA", imagem: "/manus-storage/EMAIL_LOTE_ZERO_DATA_0971772d.png" },
  { assunto: "Esse email você não pode ignorar", taxaAbertura: "49,95%", taxaCliques: "0,54%", imagem: "/manus-storage/EMAIL_LOTE2_25a9a814.png" },
  { assunto: "LIBEROU! QUEM CORRER, LEVA!", taxaAbertura: "46,67%", taxaCliques: "2,52%", imagem: "/manus-storage/EMAIL_LOTE_ZERO_6447424b.png" },
  { assunto: "Eles fazem nosso show acontecer!", taxaAbertura: "46,21%", taxaCliques: "0,33%", imagem: "/manus-storage/EMAIL_PATROCINADORES_727d324a.png" },
  { assunto: "O Arnold pra sempre com você!", taxaAbertura: "45,07%", taxaCliques: "1,06%", imagem: "/manus-storage/EMAIL_LOJA_881f0521.png" },
];

export const benchmarkEmail = {
  mercadoAbertura: 11,
  arnoldAbertura: 41,
  mercadoCliques: 1.0,
  arnoldCliques: 0.9,
};

// Análises textuais
export const analiseReceita = "A comunicação omnichannel, que integra múltiplos canais digitais, demonstrou ser fundamental para a maximização do faturamento. A estratégia de mídia paga (Google + Meta) consolidou-se como o principal motor de receita, enquanto o crescimento expressivo das redes sociais orgânicas evidencia o amadurecimento da presença digital do evento.";

export const analisePerformanceCanais = "De forma geral, 2026 consolidou a trajetória de crescimento observada nos anos anteriores. A edição atual representou o melhor ano da operação de mídia paga, com crescimento expressivo nos dois principais canais de aquisição. O Google Ads recuperou-se com força após a queda de 2025, atingindo o maior faturamento histórico (~R$ 826 mil) — um salto de quase 20% em relação ao pico anterior. O Meta Ads, por sua vez, não apenas manteve a liderança como ampliou a vantagem, saindo de R$ 1.278.500 em 2025 para R$ 1.425.739 em 2026 — um acréscimo de quase R$ 150 mil que reforça a consolidação deste canal como o principal motor de receita do evento. Juntos, Google e Meta somaram mais de R$ 2,2 milhões, evidenciando que a estratégia de mídia paga está cada vez mais madura e escalável. O Social Media Orgânico também merece destaque, tendo praticamente dobrado sua contribuição em relação a 2025 (~R$ 450 mil vs ~R$ 230 mil), o que pode refletir um trabalho mais consistente de conteúdo e comunidade.";

// Performance de Faturamento dos Canais 2023-2026
export const performanceCanais2023_2026 = [
  {
    canal: "Google Ads",
    anos: { 2023: 430000, 2024: 740000, 2025: 680000, 2026: 826457 },
  },
  {
    canal: "Meta Ads",
    anos: { 2023: 430000, 2024: 1030000, 2025: 1278500, 2026: 1425739 },
  },
  {
    canal: "Social Media Orgânico",
    anos: { 2023: 310000, 2024: 210000, 2025: 230000, 2026: 449601 },
  },
  {
    canal: "Email Marketing",
    anos: { 2023: 130000, 2024: 95000, 2025: 30000, 2026: 48437 },
  },
  {
    canal: "Bilheteria",
    anos: { 2023: 200000, 2024: 200000, 2025: 200000, 2026: 245678 },
  },
  {
    canal: "Outros",
    anos: { 2023: 230000, 2024: 210000, 2025: 220000, 2026: 338915 },
  },
];

export const YEAR_COLORS: Record<number, string> = {
  2023: "#F4B4C9",
  2024: "#D4886E",
  2025: "#C71585",
  2026: "#1B1464",
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
