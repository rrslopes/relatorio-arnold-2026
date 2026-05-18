// Arnold South America - Performance Digital 2026
// Identidade Visual: Rosa/Magenta + Azul Escuro + Ciano
// LOGOS: Arnold no header, Extrema no footer
// MENU: Reorganizado com dropdowns
// CONCLUSÃO: Secção final analítica
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import {
  REPORT_TITLE, REPORT_SUBTITLE, PERIOD, kpis,
  MONTHS, MONTH_SHORT, revenueByChannel, monthlyTotals, grandTotal,
  investimentoFeira, investimentoCongressos, impostosRetidos, totalInvestidoAds, saldoMeta,
  distribuicaoAds, googleAds, metaAds, resumoAds,
  dimensaoCampanhas, loteZero, categoriasCreativos,
  engajamentoEvento, funilRemarketing,
  funilSonafe, funilGestaoAcademias, funilWttc,
  criativosSonafe, criativosGestaoAcademias, criativosWttc,
  whatsappCongressos, whatsappLojistas,
  analiseLojistas, emailMarketing, emailsDestaque, benchmarkEmail,
  analiseReceita, analisePerformanceCanais,
  performanceCanais2023_2026, YEAR_COLORS,
  formatBRL, formatNumber, CHANNEL_COLORS,
  LOGO_ARNOLD, LOGO_EXTREMA_CLARO, LOGO_EXTREMA_ESCURO,
  conclusaoGeral, analiseRemarketing,
  metricasExpositores, metricasExpositoresTotal,
} from "@/lib/data";
import type { Criativo, FunilCongresso, FunilWhatsApp } from "@/lib/data";

// Menu structure with groups
const menuGroups = [
  { id: "resumo", label: "Resumo", items: null },
  {
    id: "receita-group", label: "Receita & Investimento", items: [
      { id: "receita", label: "Receita por Canal" },
      { id: "investimento", label: "Investimento em Ads" },
      { id: "performance-canais", label: "Performance 2023-2026" },
    ]
  },
  {
    id: "ads-group", label: "Mídia Paga", items: [
      { id: "google", label: "Google Ads" },
      { id: "meta", label: "Meta Ads" },
      { id: "resumo-ads", label: "Resumo Geral Ads" },
      { id: "remarketing", label: "Remarketing" },
    ]
  },
  {
    id: "campanhas-group", label: "Campanhas", items: [
      { id: "campanhas", label: "Dimensão de Campanhas" },
      { id: "lote-zero", label: "Lote Zero" },
      { id: "criativos", label: "Criativos em Ads" },
      { id: "engajamento", label: "Engajamento no Evento" },
    ]
  },
  {
    id: "canais-group", label: "Canais & Congressos", items: [
      { id: "congressos", label: "Congressos Arnold" },
      { id: "lojistas", label: "Lojistas" },
      { id: "email", label: "Email Marketing" },
    ]
  },
  { id: "conclusao", label: "Conclusão", items: null },
];

// Flatten all section IDs for mobile menu
const allSections = menuGroups.flatMap(g => g.items ? g.items : [{ id: g.id, label: g.label }]);

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1464]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo Arnold */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_ARNOLD}
            alt="Arnold Sports Festival South America"
            className="h-10 brightness-0 invert"
          />
        </a>

        {/* Desktop Menu with Dropdowns */}
        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {menuGroups.map((group) => {
            if (!group.items) {
              return (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="text-white/80 hover:text-white text-xs px-3 py-2 rounded-md transition-colors hover:bg-white/10 font-medium"
                >
                  {group.label}
                </a>
              );
            }
            return (
              <div key={group.id} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === group.id ? null : group.id)}
                  className="text-white/80 hover:text-white text-xs px-3 py-2 rounded-md transition-colors hover:bg-white/10 font-medium flex items-center gap-1"
                >
                  {group.label}
                  <svg
                    width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className={`transition-transform duration-200 ${openDropdown === group.id ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openDropdown === group.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 bg-[#1B1464] border border-white/15 rounded-lg shadow-xl py-1 min-w-[200px] z-50"
                  >
                    {group.items.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setOpenDropdown(null)}
                        className="block text-white/70 hover:text-white hover:bg-white/10 text-xs px-4 py-2.5 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B1464] border-t border-white/10 pb-3 max-h-[70vh] overflow-y-auto">
          {menuGroups.map((group) => {
            if (!group.items) {
              return (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/80 hover:text-white text-sm px-6 py-2.5 font-medium"
                >
                  {group.label}
                </a>
              );
            }
            return (
              <div key={group.id}>
                <span className="block text-[#C71585] text-[10px] uppercase tracking-wider px-6 pt-4 pb-1 font-bold">
                  {group.label}
                </span>
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/70 hover:text-white text-sm px-8 py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}

function SectionTitle({ children, pink }: { children: React.ReactNode; pink?: string }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1B1464] tracking-tight font-[Montserrat] text-center mb-2">
      {children}
      {pink && <span className="text-[#C71585]"> {pink}</span>}
    </h2>
  );
}

// KPI Card com fonte reduzida para evitar cortes
function KPICard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl min-h-[130px]"
      style={{ backgroundColor: color }}
    >
      <span className="text-sm md:text-lg font-extrabold text-white font-[Montserrat] text-center leading-tight break-words">
        {value}
      </span>
      <span className="text-white/80 text-[9px] md:text-[11px] mt-2 text-center uppercase tracking-wide leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

// MetricCards responsivos com fonte ajustada para valores grandes
function MetricCards({ items, colors }: { items: { value: string; label: string }[]; colors: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl text-white text-center"
          style={{ backgroundColor: colors[i] }}
        >
          <span className="text-xl md:text-2xl font-extrabold font-[Montserrat] leading-tight break-words">
            {item.value}
          </span>
          <span className="text-white/80 text-[10px] md:text-xs mt-3 uppercase tracking-wide max-w-[220px] leading-tight">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// Custom tooltip for charts
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm">
      <p className="font-semibold text-[#1B1464] mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }} className="text-xs">
          {p.name}: {formatBRL(p.value)}
        </p>
      ))}
    </div>
  );
}

// Funil de Congresso com layout de funil visual melhorado
function FunilCongressoCard({ funil }: { funil: FunilCongresso }) {
  const steps = [
    { label: "Acessos pág. vendas (BCS)", value: formatNumber(funil.acessosPaginaVendas), color: "#1B1464", width: "100%" },
    { label: "Acessos pág. institucional", value: formatNumber(funil.acessosPaginaInstitucional), color: "#2B4FA3", width: "80%" },
    { label: "Adições ao carrinho", value: formatNumber(funil.adicoesCarrinho), color: "#00BCD4", width: "55%" },
    { label: "Ingressos vendidos", value: `${formatNumber(funil.ingressosVendidos)} (${funil.ingressosAnuncios} via ads)`, color: "#7B2D8B", width: "35%" },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h4 className="text-base font-extrabold text-[#1B1464] font-[Montserrat] text-center mb-6">
        {funil.nome}
      </h4>
      <div className="space-y-3 mb-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col"
          >
            <div className="flex justify-between text-xs mb-1 px-1">
              <span className="text-gray-600">{s.label}</span>
              <span className="font-bold text-[#1B1464] tabular-nums">{s.value}</span>
            </div>
            <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: s.width }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="h-full rounded-lg flex items-center justify-end pr-2"
                style={{ backgroundColor: s.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-[#1B1464] rounded-xl p-5 text-center">
        <span className="text-white/70 text-xs uppercase tracking-wide">Faturamento identificado</span>
        <p className="text-xl font-extrabold text-white font-[Montserrat] mt-1">{formatBRL(funil.faturamento)}</p>
        <p className="text-[#00BCD4] text-xs mt-2 font-semibold">
          {funil.crescimento} vs 2025 ({formatBRL(funil.faturamento2025)})
        </p>
      </div>
    </div>
  );
}

// Componente reutilizável para Funil WhatsApp
function WhatsAppFunnel({ data }: { data: FunilWhatsApp }) {
  const steps = [
    { label: "Mensagens enviadas", value: data.enviadas, pct: "100%", width: "100%" },
    { label: "Mensagens entregues", value: data.entregues, pct: "100%", width: "100%" },
    { label: "Mensagens lidas", value: data.lidas, pct: data.lidasPercent, width: data.lidasPercent },
    { label: "Clicks", value: data.clicks, pct: data.clicksPercent, width: data.clicksPercent },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h4 className="text-lg font-extrabold text-[#1B1464] font-[Montserrat] text-center mb-2">
        {data.titulo}
      </h4>
      <p className="text-center text-[#C71585] text-sm font-semibold mb-6">por Mensagens de WhatsApp</p>
      <div className="space-y-4">
        {steps.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600">{s.label}</span>
              <span className="font-bold text-[#1B1464]">{s.value} <span className="text-gray-400">({s.pct})</span></span>
            </div>
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: s.width }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="h-full bg-[#87CEEB] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente para renderizar criativos (reutilizável)
function CriativosGrid({ criativos, titulo, subtitulo }: { criativos: Criativo[]; titulo: string; subtitulo: string }) {
  return (
    <div className="mt-8">
      <h4 className="text-center font-bold text-[#C71585] text-sm tracking-wider uppercase mb-2">{titulo}</h4>
      <p className="text-center text-gray-500 text-xs mb-8">{subtitulo}</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {criativos.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
          >
            {c.imagem && (
              <div className="h-[280px] overflow-hidden bg-gray-100">
                <img src={c.imagem} alt={c.titulo} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-4 flex-1">
              <h5 className="font-bold text-[#1B1464] text-sm mb-3">{c.titulo}</h5>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between"><span className="text-gray-500">Formato:</span><span className="font-semibold">{c.formato}</span></div>
                {c.metricas.map((m: {label: string; value: string}, mi: number) => (
                  <div key={mi} className="flex justify-between">
                    <span className="text-gray-500">{m.label}:</span>
                    <span className={`font-semibold ${
                      m.label.includes('ROAS') ? 'text-[#00BCD4]' :
                      m.label.includes('Faturamento') ? 'text-[#1B1464]' :
                      m.label.includes('Lead') || m.label.includes('Convers') || m.label.includes('Vend') ? 'text-[#C71585]' : ''
                    }`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  // Pie chart data (sem impostos)
  const pieData = [
    { name: "Meta Ads", value: distribuicaoAds.meta, color: "#C71585" },
    { name: "Google Ads", value: distribuicaoAds.google, color: "#00BCD4" },
  ];
  const totalPie = pieData.reduce((s, d) => s + d.value, 0);

  // Performance 2023-2026 chart data
  const perfChartData = performanceCanais2023_2026.map(c => ({
    canal: c.canal,
    ...c.anos,
  }));

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* HERO */}
      <section className="relative bg-[#1B1464] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/15 rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/10 rotate-45" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <img
              src={LOGO_ARNOLD}
              alt="Arnold Sports Festival South America"
              className="h-16 md:h-20 mx-auto mb-6 brightness-0 invert"
            />
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight font-[Montserrat] mb-3">
              {REPORT_TITLE}
            </h1>
            <p className="text-lg md:text-2xl text-[#C71585] font-bold tracking-wide font-[Montserrat]">
              {REPORT_SUBTITLE}
            </p>
            <p className="text-white/50 text-sm mt-4 tracking-widest uppercase">{PERIOD}</p>
          </motion.div>
        </div>
      </section>

      {/* RESUMO GERAL */}
      <section id="resumo" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="Destaques">Resumo Geral |</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <KPICard value={formatNumber(kpis.ingressosVendidos)} label="Ingressos vendidos" color="#1B1464" />
            <KPICard value={formatBRL(kpis.faturamentoIngressos)} label="Faturamento com ingressos" color="#2B4FA3" />
            <KPICard value={formatBRL(kpis.investidoAds)} label="Investido em Ads" color="#00BCD4" />
            <KPICard value={`${kpis.roasGeral}X`} label="ROAS na venda de ingressos" color="#7B2D8B" />
          </div>
        </div>
      </section>

      {/* RECEITA POR CANAL */}
      <section id="receita" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="da Venda de Ingressos por Canal">Estimativa de Receita</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-8">{PERIOD}</p>

          {/* Tabela */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#1B1464] text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">CANAL DE ORIGEM</th>
                  {MONTHS.map(m => <th key={m} className="p-3 text-right font-semibold">{m}</th>)}
                  <th className="p-3 text-right font-semibold rounded-tr-lg">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {revenueByChannel.map((row, i) => (
                  <tr key={row.channel} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-[#1B1464] whitespace-nowrap">{row.channel}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-3 text-right tabular-nums">{v === 0 ? "-" : formatBRL(v)}</td>
                    ))}
                    <td className="p-3 text-right font-bold tabular-nums text-[#1B1464]">{formatBRL(row.total)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#1B1464] text-white font-bold">
                  <td className="p-3 rounded-bl-lg">Faturamento total</td>
                  {monthlyTotals.map((v, i) => <td key={i} className="p-3 text-right tabular-nums">{formatBRL(v)}</td>)}
                  <td className="p-3 text-right tabular-nums rounded-br-lg">{formatBRL(grandTotal)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Análise textual */}
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-12">
            <p className="text-gray-700 text-sm leading-relaxed italic">{analiseReceita}</p>
          </div>

          {/* Peso do Digital */}
          <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
            Peso do Digital no Faturamento da <span className="text-[#C71585]">Venda de Ingressos</span>
          </h3>
          <div className="h-[350px] max-w-4xl mx-auto mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTH_SHORT.map((m, i) => {
                const obj: any = { name: m };
                revenueByChannel.forEach(ch => { obj[ch.channel] = ch.values[i]; });
                return obj;
              })}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                {revenueByChannel.map(ch => (
                  <Bar key={ch.channel} dataKey={ch.channel} stackId="a" fill={CHANNEL_COLORS[ch.channel]} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* PERFORMANCE 2023-2026 */}
      <section id="performance-canais" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="de 2023 a 2026">Performance de Faturamento dos Canais</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">Venda de Ingressos</p>
          <div className="h-[400px] max-w-5xl mx-auto mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={perfChartData} layout="vertical" margin={{ left: 120 }}>
                <XAxis type="number" tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="canal" tick={{ fontSize: 11 }} width={110} />
                <Tooltip formatter={(v: number) => formatBRL(v)} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                {[2023, 2024, 2025, 2026].map(year => (
                  <Bar key={year} dataKey={String(year)} fill={YEAR_COLORS[year]} radius={[0, 4, 4, 0]} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 text-sm leading-relaxed italic">{analisePerformanceCanais}</p>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Mídia Paga 2026">Detalhamento de Investimento |</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-4">{PERIOD}</p>

          <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
            Investimento em Ads | <span className="text-[#C71585]">Feira e Congressos</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-[#1B1464] text-sm uppercase tracking-wide mb-4">Arnold Sports Festival</h4>
              {investimentoFeira.items.map((item) => (
                <div key={item.name} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-semibold tabular-nums">{formatBRL(item.value)}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 text-sm font-bold text-[#1B1464]">
                <span>Total</span>
                <span>{formatBRL(investimentoFeira.total)}</span>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-[#1B1464] text-sm uppercase tracking-wide mb-4">Congressos</h4>
              {investimentoCongressos.items.map((item) => (
                <div key={item.name} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-semibold tabular-nums">{formatBRL(item.value)}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 text-sm font-bold text-[#1B1464]">
                <span>Total</span>
                <span>{formatBRL(investimentoCongressos.total)}</span>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-[#1B1464] rounded-xl p-6 text-white text-center mb-12">
            <div className="text-xs text-white/60 mb-1">Impostos Retidos pela Meta</div>
            <div className="font-bold mb-3">{formatBRL(impostosRetidos)}</div>
            <div className="border-t border-white/20 pt-3">
              <div className="text-xs text-white/60 mb-1">TOTAL INVESTIDO EM ADS</div>
              <div className="text-2xl font-extrabold font-[Montserrat]">{formatBRL(totalInvestidoAds)}</div>
            </div>
            <div className="text-xs text-white/40 mt-3">Saldo disponível na Meta: {formatBRL(saldoMeta)}</div>
          </div>

          <h3 className="text-lg font-bold text-[#1B1464] text-center mb-2 font-[Montserrat]">
            Distribuição do Investimento em Ads <span className="text-[#C71585]">(Google e Meta)</span>
          </h3>
          <p className="text-center text-gray-500 text-sm mb-2">
            Total investido nas plataformas: <span className="font-semibold text-[#1B1464]">{formatBRL(totalPie)}</span>
          </p>
          <p className="text-center text-gray-400 text-xs mb-6">
            Investimento total em Ads: {formatBRL(distribuicaoAds.totalGeral)} (inclui R$ {distribuicaoAds.impostos.toLocaleString('pt-BR', {minimumFractionDigits: 2})} em impostos retidos pela Meta)
          </p>
          <div className="h-[320px] max-w-lg mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={110} dataKey="value" paddingAngle={2}>
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(v: number) => formatBRL(v)} />
                <Legend
                  verticalAlign="bottom"
                  formatter={(value: string) => {
                    const item = pieData.find(p => p.name === value);
                    const pct = item ? ((item.value / totalPie) * 100).toFixed(1) : "0";
                    return `${value}: ${item ? formatBRL(item.value) : ""} (${pct}%)`;
                  }}
                  wrapperStyle={{ fontSize: "13px", paddingTop: "16px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* GOOGLE ADS */}
      <section id="google" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="e Faturamento com Ingressos">Google Ads</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <MetricCards
            items={[
              { value: formatBRL(googleAds.investido), label: "Investidos em Google para venda de ingressos" },
              { value: formatBRL(googleAds.faturamento), label: "Faturamento identificado" },
              { value: `${googleAds.roas}X`, label: "ROAS geral em ingresso" },
            ]}
            colors={["#1a3a2a", "#2d6b4f", "#00BCD4"]}
          />
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">{googleAds.nota}</p>
        </div>
      </section>

      {/* META ADS */}
      <section id="meta" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="e Faturamento com Ingressos">Meta Ads</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <MetricCards
            items={[
              { value: formatBRL(metaAds.investido), label: "Investidos em Meta Ads" },
              { value: formatBRL(metaAds.faturamento), label: "Faturamento identificado" },
              { value: `${metaAds.roas}X`, label: "ROAS geral em ingresso" },
            ]}
            colors={["#1B1464", "#2B4FA3", "#00BCD4"]}
          />
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">{metaAds.nota}</p>
        </div>
      </section>

      {/* RESUMO ADS */}
      <section id="resumo-ads" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle>RESUMO GERAL ADS PARA VENDA DE INGRESSOS</SectionTitle>
          <p className="text-center text-[#C71585] font-bold font-[Montserrat] mb-2">(GOOGLE + META ADS)</p>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <MetricCards
            items={[
              { value: formatBRL(resumoAds.investido), label: "Investidos em anúncios para venda de ingressos" },
              { value: formatBRL(resumoAds.faturamento), label: "Faturamento identificado" },
              { value: `${resumoAds.roas}X`, label: "ROAS geral em ingresso" },
            ]}
            colors={["#8B4513", "#D2691E", "#F4A460"]}
          />
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">{resumoAds.nota}</p>
        </div>
      </section>

      {/* DIMENSÃO DE CAMPANHAS */}
      <section id="campanhas" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Dimensão de Campanhas e Anúncios Gerenciados">Resumo Geral</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-extrabold text-[#1B1464] font-[Montserrat] mb-8">FEIRA</h4>
              <div className="flex justify-center gap-8">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="w-32 h-32 rounded-full bg-[#1B1464] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.feira.campanhas}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Grandes campanhas gerenciadas</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="w-32 h-32 rounded-full bg-[#2B9FD4] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.feira.criativos}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Criativos gerenciados em combinação</span>
                </motion.div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-extrabold text-[#1B1464] font-[Montserrat] mb-8">CONGRESSOS</h4>
              <div className="flex justify-center gap-8">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="w-32 h-32 rounded-full bg-[#00BCD4] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.congressos.campanhas}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Grandes campanhas gerenciadas</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="w-32 h-32 rounded-full bg-[#9B59B6] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.congressos.criativos}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Criativos gerenciados em combinação</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOTE ZERO */}
      <section id="lote-zero" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="2026">Lote Zero</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              { value: formatNumber(loteZero.leads), label: "Leads gerados na Landing Page", color: "#1B1464" },
              { value: formatNumber(loteZero.ingressosVendidos), label: "Ingressos válidos vendidos", color: "#2B9FD4" },
              { value: formatNumber(loteZero.usuariosPagina), label: "Usuários na página de vendas", color: "#9B59B6" },
              { value: formatNumber(loteZero.visualizacoes), label: "Visualizações das páginas", color: "#2B9FD4" },
              { value: loteZero.tempoEsgotamento, label: "Tempo para esgotamento", color: "#9B59B6" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="w-36 h-36 rounded-full flex flex-col items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                <span className="text-xl font-extrabold font-[Montserrat] text-center leading-tight px-2">{item.value}</span>
                <span className="text-[9px] mt-1 text-white/70 text-center px-4 leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRIATIVOS */}
      <section id="criativos" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="em Ads">Destaques de Campanhas e Criativos</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-4">{PERIOD}</p>
          {categoriasCreativos.map((cat) => (
            <div key={cat.categoria}>
              <CriativosGrid
                criativos={cat.criativos}
                titulo={cat.categoria}
                subtitulo={cat.subtitulo}
              />
              {cat.categoria === "AWARENESS B2B | EXPOSITORES E PATROCINADORES" && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 mb-12 max-w-5xl mx-auto">
                  <h4 className="text-base font-bold text-[#1B1464] mb-4 font-[Montserrat] text-center">Métricas dos Vídeos de Expositores</h4>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#C71585] text-white">
                          <th className="px-4 py-3 text-left font-semibold">Identificador</th>
                          <th className="px-4 py-3 text-center font-semibold">Conversas com Comercial</th>
                          <th className="px-4 py-3 text-center font-semibold">Impressões</th>
                          <th className="px-4 py-3 text-center font-semibold">CPA</th>
                          <th className="px-4 py-3 text-center font-semibold">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {metricasExpositores.map((m, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-3 font-medium text-[#1B1464]">{m.identificador}</td>
                            <td className="px-4 py-3 text-center">{m.conversas}</td>
                            <td className="px-4 py-3 text-center">{m.impressoes.toLocaleString('pt-BR')}</td>
                            <td className="px-4 py-3 text-center">{m.cpa}</td>
                            <td className="px-4 py-3 text-center"><a href={m.link} target="_blank" rel="noopener noreferrer" className="text-[#C71585] hover:underline text-xs">Ver anúncio</a></td>
                          </tr>
                        ))}
                        <tr className="bg-[#1B1464] text-white font-semibold">
                          <td className="px-4 py-3">TOTAL</td>
                          <td className="px-4 py-3 text-center">{metricasExpositoresTotal.conversas}</td>
                          <td className="px-4 py-3 text-center">{metricasExpositoresTotal.impressoes.toLocaleString('pt-BR')}</td>
                          <td className="px-4 py-3 text-center">{metricasExpositoresTotal.cpa}</td>
                          <td className="px-4 py-3 text-center">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ENGAJAMENTO DURANTE O EVENTO */}
      <section id="engajamento" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="Durante o Evento">Engajamento</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">Conteúdos orgânicos publicados durante o Arnold 2026</p>
          {engajamentoEvento.map((cat) => (
            <CriativosGrid
              key={cat.categoria}
              criativos={cat.criativos}
              titulo={cat.categoria}
              subtitulo={cat.subtitulo}
            />
          ))}
        </div>
      </section>

      {/* FUNIL DE REMARKETING META ADS */}
      <section id="remarketing" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="em Meta Ads">Funil de Remarketing</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">Quanto recuperamos em ingressos com campanhas de remarketing</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-5">
            {[
              { value: formatNumber(funilRemarketing.pessoasReimpactadas), label: "Pessoas reimpactadas", color: "#1B1464" },
              { value: formatNumber(funilRemarketing.readicoesCarrinho), label: "Readições ao carrinho", color: "#2B4FA3" },
              { value: formatNumber(funilRemarketing.comprasConcluidas), label: "Compras concluídas", color: "#00BCD4" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl text-white text-center min-h-[140px]" style={{ backgroundColor: item.color }}>
                <span className="text-2xl md:text-3xl font-extrabold font-[Montserrat] leading-tight">{item.value}</span>
                <span className="text-white/80 text-[11px] mt-2 uppercase tracking-wide leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { value: funilRemarketing.roasMedio, label: "ROAS médio", color: "#7B2D8B" },
              { value: formatBRL(funilRemarketing.faturamentoEstimado), label: "Faturamento estimado", color: "#C71585" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 3) * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl text-white text-center min-h-[140px]" style={{ backgroundColor: item.color }}>
                <span className="text-2xl md:text-3xl font-extrabold font-[Montserrat] leading-tight">{item.value}</span>
                <span className="text-white/80 text-[11px] mt-2 uppercase tracking-wide leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto mt-8 text-center italic">
            {analiseRemarketing}
          </motion.p>
        </div>
      </section>

      {/* CONGRESSOS ARNOLD */}
      <section id="congressos" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="Arnold">Análise de Congressos</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <FunilCongressoCard funil={funilSonafe} />
            <FunilCongressoCard funil={funilGestaoAcademias} />
            <FunilCongressoCard funil={funilWttc} />
          </div>
          <div className="border-t border-gray-200 pt-12">
            <CriativosGrid criativos={criativosSonafe.criativos} titulo={criativosSonafe.categoria} subtitulo={criativosSonafe.subtitulo} />
          </div>
          <div className="border-t border-gray-200 pt-12 mt-12">
            <CriativosGrid criativos={criativosGestaoAcademias.criativos} titulo={criativosGestaoAcademias.categoria} subtitulo={criativosGestaoAcademias.subtitulo} />
          </div>
          <div className="border-t border-gray-200 pt-12 mt-12">
            <CriativosGrid criativos={criativosWttc.criativos} titulo={criativosWttc.categoria} subtitulo={criativosWttc.subtitulo} />
          </div>
          {/* WhatsApp Congressos */}
          <div className="border-t border-gray-200 pt-12 mt-12">
            <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
              Recuperação de Carrinho <span className="text-[#C71585]">por WhatsApp</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <WhatsAppFunnel data={whatsappCongressos} />
              <WhatsAppFunnel data={whatsappLojistas} />
            </div>
          </div>
        </div>
      </section>

      {/* LOJISTAS */}
      <section id="lojistas" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Arnold">Análise Lojistas</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { value: formatBRL(analiseLojistas.investidoCampanha), label: "Investimento em Ads", color: "#1B1464" },
              { value: formatNumber(analiseLojistas.cadastrosAnuncios), label: "Cadastros via anúncios", color: "#2B4FA3" },
              { value: formatNumber(analiseLojistas.cadastrosBCS), label: "Cadastros BCS", color: "#00BCD4" },
              { value: formatNumber(analiseLojistas.pessoasAlcancadas), label: "Pessoas alcançadas", color: "#C71585" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl text-white text-center min-h-[120px]" style={{ backgroundColor: item.color }}>
                <span className="text-lg md:text-xl font-extrabold font-[Montserrat] leading-tight">{item.value}</span>
                <span className="text-white/80 text-[9px] md:text-[10px] mt-2 uppercase tracking-wide leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <WhatsAppFunnel data={whatsappLojistas} />
        </div>
      </section>

      {/* EMAIL MARKETING */}
      <section id="email" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle pink="em Destaque">Campanhas de Email</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-4">{PERIOD}</p>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { value: formatNumber(emailMarketing.leadsImpactados), label: "Leads impactados", color: "#1B1464" },
              { value: emailMarketing.taxaAbertura, label: "Taxa de abertura média", color: "#2B4FA3" },
              { value: emailMarketing.taxaCliques, label: "Taxa de cliques média", color: "#00BCD4" },
              { value: formatNumber(emailMarketing.campanhas), label: "Campanhas enviadas", color: "#C71585" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl text-white text-center min-h-[120px]" style={{ backgroundColor: item.color }}>
                <span className="text-lg md:text-xl font-extrabold font-[Montserrat] leading-tight">{item.value}</span>
                <span className="text-white/80 text-[9px] md:text-[10px] mt-2 uppercase tracking-wide leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* TOP 6 emails */}
          <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
            TOP 6 <span className="text-[#C71585]">Campanhas de Email</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {emailsDestaque.map((email, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {email.imagem && (
                  <div className="h-[200px] overflow-hidden bg-gray-100">
                    <img src={email.imagem} alt={email.assunto} className="w-full h-full object-cover object-top" />
                  </div>
                )}
                <div className="p-4">
                  <h5 className="font-bold text-[#1B1464] text-xs mb-3 leading-tight">{email.assunto}</h5>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-gray-500">Abertura:</span><span className="font-semibold text-[#C71585]">{email.taxaAbertura}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Cliques:</span><span className="font-semibold">{email.taxaCliques}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benchmark */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
              Benchmark <span className="text-[#C71585]">vs Mercado de Eventos</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h4 className="text-center text-sm font-bold text-[#1B1464] mb-6">Taxa de Abertura (%)</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Mercado de Eventos</span>
                      <span className="font-bold text-gray-600">{benchmarkEmail.mercadoAbertura}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(benchmarkEmail.mercadoAbertura / 60) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#1B1464] font-medium">Arnold 2026</span>
                      <span className="font-bold text-[#1B1464]">{benchmarkEmail.arnoldAbertura}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(benchmarkEmail.arnoldAbertura / 60) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#1B1464] to-[#C71585] rounded-full" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-[#C71585] font-bold mt-2">
                    +{benchmarkEmail.arnoldAbertura - benchmarkEmail.mercadoAbertura} p.p. acima do mercado
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h4 className="text-center text-sm font-bold text-[#1B1464] mb-6">Taxa de Cliques (%)</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Mercado de Eventos</span>
                      <span className="font-bold text-gray-600">{benchmarkEmail.mercadoCliques}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(benchmarkEmail.mercadoCliques / 3) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#1B1464] font-medium">Arnold 2026</span>
                      <span className="font-bold text-[#1B1464]">{benchmarkEmail.arnoldCliques}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(benchmarkEmail.arnoldCliques / 3) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#1B1464] to-[#C71585] rounded-full" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-500 font-medium mt-2">
                    Desempenho próximo ao mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSÃO GERAL E DESTAQUES 2026 */}
      <section id="conclusao" className="py-16 md:py-24">
        <div className="container">
          <SectionTitle pink="2026">Conclusão Geral e Destaques</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>

          <div className="max-w-4xl mx-auto space-y-0">
            {conclusaoGeral.map((bloco, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 md:p-10"
                style={{ backgroundColor: bloco.color }}
              >
                <p className="text-white text-sm md:text-base leading-relaxed text-center">
                  {bloco.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B1464] py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={LOGO_ARNOLD}
                alt="Arnold Sports Festival South America"
                className="h-10 brightness-0 invert opacity-60"
              />
            </div>
            <div className="text-center">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Relatório de Performance Digital — {PERIOD}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-[10px] uppercase tracking-wide">Elaborado por</span>
              <img
                src={LOGO_EXTREMA_ESCURO}
                alt="Extrema Visibilidade - Marketing Digital"
                className="h-8 opacity-80"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
