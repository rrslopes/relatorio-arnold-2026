// Arnold South America - Performance Digital 2026
// Identidade Visual: Rosa/Magenta + Azul Escuro + Ciano
// OTIMIZAÇÕES: sem capas de secção, círculos padronizados, boxes consistentes, pie chart sem impostos
import { useState } from "react";
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
  formatBRL, formatNumber, CHANNEL_COLORS,
} from "@/lib/data";
import type { Criativo, FunilCongresso, FunilWhatsApp } from "@/lib/data";

// Navigation sections
const sections = [
  { id: "resumo", label: "Resumo" },
  { id: "receita", label: "Receita por Canal" },
  { id: "investimento", label: "Investimento" },
  { id: "google", label: "Google Ads" },
  { id: "meta", label: "Meta Ads" },
  { id: "resumo-ads", label: "Resumo Ads" },
  { id: "campanhas", label: "Campanhas" },
  { id: "lote-zero", label: "Lote Zero" },
  { id: "criativos", label: "Criativos" },
  { id: "engajamento", label: "Engajamento" },
  { id: "remarketing", label: "Remarketing" },
  { id: "congressos", label: "Congressos" },
  { id: "lojistas", label: "Lojistas" },
  { id: "email", label: "Email Marketing" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1464]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-14">
        <span className="text-white font-bold text-sm tracking-wider font-[Montserrat]">
          ARNOLD SA <span className="text-[#C71585]">|</span> PERFORMANCE 2026
        </span>
        <div className="hidden lg:flex gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-white/70 hover:text-white text-xs px-3 py-1.5 rounded transition-colors hover:bg-white/10"
            >
              {s.label}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B1464] border-t border-white/10 pb-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMobileOpen(false)}
              className="block text-white/70 hover:text-white text-sm px-6 py-2"
            >
              {s.label}
            </a>
          ))}
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

function KPICard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl min-h-[140px]"
      style={{ backgroundColor: color }}
    >
      <span className="text-lg md:text-2xl font-extrabold text-white font-[Montserrat] text-center leading-tight">
        {value}
      </span>
      <span className="text-white/80 text-[10px] md:text-xs mt-2 text-center uppercase tracking-wide leading-tight">
        {label}
      </span>
    </motion.div>
  );
}

// Metric cards consistentes (substituem o ChevronMetric)
function MetricCards({ items, colors }: { items: { value: string; label: string }[]; colors: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
          <span className="text-2xl md:text-3xl font-extrabold font-[Montserrat] leading-tight">
            {item.value}
          </span>
          <span className="text-white/80 text-xs mt-3 uppercase tracking-wide max-w-[200px] leading-tight">
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

// Componente reutilizável para Funil de Congresso
function FunilCongressoCard({ funil }: { funil: FunilCongresso }) {
  const steps = [
    { label: "Acessos página de vendas (BCS)", value: formatNumber(funil.acessosPaginaVendas), color: "#1B1464" },
    { label: "Acessos página institucional", value: formatNumber(funil.acessosPaginaInstitucional), color: "#2B4FA3" },
    { label: "Adições ao carrinho", value: formatNumber(funil.adicoesCarrinho), color: "#00BCD4" },
    { label: "Ingressos vendidos", value: `${formatNumber(funil.ingressosVendidos)} (${funil.ingressosAnuncios} via anúncios)`, color: "#7B2D8B" },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h4 className="text-lg font-extrabold text-[#1B1464] font-[Montserrat] text-center mb-6">
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
            className="flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
            <div className="flex-1 flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2.5">
              <span className="text-xs text-gray-600">{s.label}</span>
              <span className="text-sm font-bold text-[#1B1464] tabular-nums">{s.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-[#1B1464] rounded-xl p-5 text-center">
        <span className="text-white/70 text-xs uppercase tracking-wide">Faturamento identificado</span>
        <p className="text-2xl font-extrabold text-white font-[Montserrat] mt-1">{formatBRL(funil.faturamento)}</p>
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
      <p className="text-center text-gray-500 text-xs mb-6">{subtitulo}</p>
      <div className={`grid gap-6 max-w-5xl mx-auto ${
        criativos.length === 2 ? "md:grid-cols-2 max-w-3xl" :
        criativos.length >= 5 ? "md:grid-cols-3 lg:grid-cols-5" :
        criativos.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" :
        "md:grid-cols-3"
      }`}>
        {criativos.map((c) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="h-[280px] overflow-hidden bg-gray-100">
              <img src={c.imagem} alt={c.titulo} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-bold text-[#1B1464] text-sm mb-2">{c.titulo}</h4>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Formato:</span>
                <span className="font-semibold text-gray-700">{c.formato}</span>
              </div>
              <div className="space-y-1.5 mt-auto">
                {c.metricas.map((m) => (
                  <div key={m.label} className="flex justify-between text-xs">
                    <span className="text-gray-500">{m.label}:</span>
                    <span className="font-semibold text-[#1B1464] tabular-nums">{m.value}</span>
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
  // Prepare chart data
  const stackedData = MONTH_SHORT.map((m, i) => {
    const obj: any = { month: m };
    revenueByChannel.forEach((ch) => {
      obj[ch.channel] = ch.values[i];
    });
    obj.total = monthlyTotals[i];
    return obj;
  });

  // Pie chart SEM impostos — apenas Google e Meta
  const pieData = [
    { name: "Meta Ads", value: distribuicaoAds.meta, color: "#1B1464" },
    { name: "Google Ads", value: distribuicaoAds.google, color: "#00BCD4" },
  ];
  const totalPie = distribuicaoAds.meta + distribuicaoAds.google;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* HERO / CAPA */}
      <section className="pt-14">
        <div className="bg-[#1B1464] py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path d="M200 50 L350 150 L350 300 L200 400 L50 300 L50 150 Z" fill="none" stroke="white" strokeWidth="2" />
              <path d="M200 100 L310 170 L310 280 L200 350 L90 280 L90 170 Z" fill="none" stroke="white" strokeWidth="1.5" />
              <path d="M200 150 L270 190 L270 260 L200 300 L130 260 L130 190 Z" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white font-[Montserrat] tracking-tight">
              {REPORT_TITLE}
            </h1>
            <p className="text-xl md:text-3xl font-bold text-[#C71585] font-[Montserrat] mt-3">
              {REPORT_SUBTITLE}
            </p>
            <p className="text-white/60 text-sm mt-4 tracking-widest uppercase">
              {PERIOD}
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESUMO GERAL — direto ao dado, sem capa */}
      <section id="resumo" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="Destaques">Resumo Geral |</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <KPICard value={formatNumber(kpis.ingressosVendidos)} label="Ingressos vendidos" color="#1B1464" />
            <KPICard value={formatBRL(kpis.faturamentoIngressos)} label="Faturamento com ingressos" color="#2B4FA3" />
            <KPICard value={formatBRL(kpis.investidoAds)} label="Investido em ads" color="#00BCD4" />
            <KPICard value={`${kpis.roasGeral}X`} label="ROAS na venda de ingressos" color="#7B2D8B" />
          </div>
        </div>
      </section>

      {/* RECEITA POR CANAL — direto */}
      <section id="receita" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="por Canal">Estimativa de Receita da Venda de Ingressos</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-8">{PERIOD}</p>

          {/* Tabela */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#C71585] text-white">
                  <th className="py-3 px-4 text-left font-bold">CANAL DE ORIGEM</th>
                  {MONTHS.map((m) => (
                    <th key={m} className="py-3 px-3 text-right font-bold">{m.replace(" 20", "/")}</th>
                  ))}
                  <th className="py-3 px-4 text-right font-bold bg-[#1B1464]">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {revenueByChannel.map((row, i) => (
                  <tr key={row.channel} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1B1464]">{row.channel}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="py-3 px-3 text-right text-gray-700 tabular-nums">
                        {v === 0 ? "-" : formatBRL(v)}
                      </td>
                    ))}
                    <td className="py-3 px-4 text-right font-bold text-[#1B1464] bg-blue-50">
                      {formatBRL(row.total)}
                    </td>
                  </tr>
                ))}
                {/* Total row */}
                <tr className="bg-[#1B1464] text-white font-bold">
                  <td className="py-3 px-4">Faturamento total</td>
                  {monthlyTotals.map((v, i) => (
                    <td key={i} className="py-3 px-3 text-right tabular-nums">{formatBRL(v)}</td>
                  ))}
                  <td className="py-3 px-4 text-right">{formatBRL(grandTotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center italic">
            {analiseReceita}
          </p>

          {/* Stacked Bar Chart */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-[#1B1464] text-center mb-6 font-[Montserrat]">
              Peso do Digital no Faturamento da Venda de Ingressos
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stackedData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: "11px" }} />
                  {revenueByChannel.map((ch) => (
                    <Bar
                      key={ch.channel}
                      dataKey={ch.channel}
                      stackId="a"
                      fill={CHANNEL_COLORS[ch.channel]}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Performance dos Canais - Análise */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-3xl">
          <p className="text-gray-700 text-sm leading-relaxed text-center">
            {analisePerformanceCanais}
          </p>
        </div>
      </section>

      {/* INVESTIMENTO — direto, sem capa */}
      <section id="investimento" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Mídia Paga 2026">Detalhamento de Investimento |</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-4">{PERIOD}</p>

          <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
            Investimento em Ads | <span className="text-[#C71585]">Feira e Congressos</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {/* Feira */}
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

            {/* Congressos */}
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

          {/* Totais */}
          <div className="max-w-md mx-auto bg-[#1B1464] rounded-xl p-6 text-white text-center mb-12">
            <div className="text-xs text-white/60 mb-1">Impostos Retidos pela Meta</div>
            <div className="font-bold mb-3">{formatBRL(impostosRetidos)}</div>
            <div className="border-t border-white/20 pt-3">
              <div className="text-xs text-white/60 mb-1">TOTAL INVESTIDO EM ADS</div>
              <div className="text-2xl font-extrabold font-[Montserrat]">{formatBRL(totalInvestidoAds)}</div>
            </div>
            <div className="text-xs text-white/40 mt-3">Saldo disponível na Meta: {formatBRL(saldoMeta)}</div>
          </div>

          {/* Pie Chart distribuição — SEM IMPOSTOS */}
          <h3 className="text-lg font-bold text-[#1B1464] text-center mb-2 font-[Montserrat]">
            Distribuição do Investimento em Ads <span className="text-[#C71585]">(Google e Meta)</span>
          </h3>
          <p className="text-center text-gray-500 text-sm mb-6">
            Total investido nas plataformas: {formatBRL(totalPie)}
          </p>
          <div className="h-[320px] max-w-lg mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={110}
                  dataKey="value"
                  paddingAngle={2}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => formatBRL(v)} />
                <Legend
                  verticalAlign="bottom"
                  formatter={(value: string, entry: any) => {
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

      {/* GOOGLE ADS — direto, sem capa */}
      <section id="google" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="e Faturamento com Ingressos">Google Ads</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <MetricCards
            items={[
              { value: formatBRL(googleAds.investido), label: "Investidos em Google para venda de ingressos" },
              { value: formatBRL(googleAds.faturamento), label: "Faturamento identificado" },
              { value: `${googleAds.roas}X`, label: "ROAS geral em ingresso (retorno sobre o investimento)" },
            ]}
            colors={["#1a3a2a", "#2d6b4f", "#00BCD4"]}
          />
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">
            {googleAds.nota}
          </p>
        </div>
      </section>

      {/* META ADS — direto, sem capa */}
      <section id="meta" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="e Faturamento com Ingressos">Meta Ads</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <MetricCards
            items={[
              { value: formatBRL(metaAds.investido), label: "Investidos em Meta Ads" },
              { value: formatBRL(metaAds.faturamento), label: "Faturamento identificado" },
              { value: `${metaAds.roas}X`, label: "ROAS geral em ingresso (retorno sobre o investimento)" },
            ]}
            colors={["#1B1464", "#2B4FA3", "#00BCD4"]}
          />
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">
            {metaAds.nota}
          </p>
        </div>
      </section>

      {/* RESUMO ADS — direto, sem capa */}
      <section id="resumo-ads" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle>RESUMO GERAL ADS PARA VENDA DE INGRESSOS</SectionTitle>
          <p className="text-center text-[#C71585] font-bold font-[Montserrat] mb-2">(GOOGLE + META ADS)</p>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <MetricCards
            items={[
              { value: formatBRL(resumoAds.investido), label: "Investidos em anúncios para venda de ingressos" },
              { value: formatBRL(resumoAds.faturamento), label: "Faturamento identificado" },
              { value: `${resumoAds.roas}X`, label: "ROAS geral em ingresso (retorno sobre o investimento)" },
            ]}
            colors={["#8B4513", "#D2691E", "#F4A460"]}
          />
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">
            {resumoAds.nota}
          </p>
        </div>
      </section>

      {/* DIMENSÃO DE CAMPANHAS — direto, sem capa, círculos padronizados */}
      <section id="campanhas" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="Dimensão de Campanhas e Anúncios Gerenciados">Resumo Geral</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Feira */}
            <div className="text-center">
              <h4 className="text-xl font-extrabold text-[#1B1464] font-[Montserrat] mb-8">FEIRA</h4>
              <div className="flex justify-center gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 rounded-full bg-[#1B1464] flex flex-col items-center justify-center text-white"
                >
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.feira.campanhas}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Grandes campanhas gerenciadas</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="w-32 h-32 rounded-full bg-[#2B9FD4] flex flex-col items-center justify-center text-white"
                >
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.feira.criativos}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Criativos gerenciados em combinação</span>
                </motion.div>
              </div>
            </div>
            {/* Congressos */}
            <div className="text-center">
              <h4 className="text-xl font-extrabold text-[#1B1464] font-[Montserrat] mb-8">CONGRESSOS</h4>
              <div className="flex justify-center gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-32 h-32 rounded-full bg-[#00BCD4] flex flex-col items-center justify-center text-white"
                >
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.congressos.campanhas}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Grandes campanhas gerenciadas</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="w-32 h-32 rounded-full bg-[#9B59B6] flex flex-col items-center justify-center text-white"
                >
                  <span className="text-3xl font-extrabold font-[Montserrat]">{dimensaoCampanhas.congressos.criativos}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3 leading-tight">Criativos gerenciados em combinação</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOTE ZERO — direto, sem capa, círculos padronizados */}
      <section id="lote-zero" className="py-16 md:py-20">
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
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-36 h-36 rounded-full flex flex-col items-center justify-center text-white"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-xl font-extrabold font-[Montserrat]">{item.value}</span>
                <span className="text-[10px] mt-2 text-white/70 text-center leading-tight px-3">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRIATIVOS — todas as categorias */}
      <section id="criativos" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="em Ads">Destaques de Campanhas e Criativos</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>

          {categoriasCreativos.map((cat, catIdx) => (
            <div key={cat.categoria} className={catIdx > 0 ? "mt-16 pt-12 border-t border-gray-200" : ""}>
              <h3 className="text-center font-bold text-[#C71585] text-sm tracking-wider uppercase mb-2">
                {cat.categoria}
              </h3>
              <p className="text-center text-gray-500 text-xs mb-8">{cat.subtitulo}</p>

              <div className={`grid gap-6 max-w-5xl mx-auto ${
                cat.criativos.length === 2 ? "md:grid-cols-2 max-w-3xl" :
                cat.criativos.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" :
                "md:grid-cols-3"
              }`}>
                {cat.criativos.map((c: Criativo) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
                  >
                    {/* Imagem padronizada */}
                    <div className="h-[280px] overflow-hidden bg-gray-100">
                      <img
                        src={c.imagem}
                        alt={c.titulo}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* Info box padronizado */}
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className="font-bold text-[#1B1464] text-sm mb-2">{c.titulo}</h4>
                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Formato:</span>
                        <span className="font-semibold text-gray-700">{c.formato}</span>
                      </div>
                      <div className="space-y-1.5 mt-auto">
                        {c.metricas.map((m) => (
                          <div key={m.label} className="flex justify-between text-xs">
                            <span className="text-gray-500">{m.label}:</span>
                            <span className="font-semibold text-[#1B1464] tabular-nums">{m.value}</span>
                          </div>
                        ))}
                      </div>
                      {c.link && (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 text-center text-xs text-[#C71585] hover:text-[#1B1464] font-semibold transition-colors"
                        >
                          Ver anúncio →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAJAMENTO DURANTE O EVENTO */}
      <section id="engajamento" className="py-16 md:py-20">
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
      <section id="remarketing" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="em Meta Ads">Funil de Remarketing</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-4">Quanto recuperamos em ingressos com campanhas de remarketing</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mt-10">
            {[
              { value: formatNumber(funilRemarketing.pessoasReimpactadas), label: "Pessoas reimpactadas", color: "#1B1464" },
              { value: formatNumber(funilRemarketing.readicoesCarrinho), label: "Readições ao carrinho", color: "#2B4FA3" },
              { value: formatNumber(funilRemarketing.comprasConcluidas), label: "Compras concluídas", color: "#00BCD4" },
              { value: funilRemarketing.roasMedio, label: "ROAS médio", color: "#7B2D8B" },
              { value: formatBRL(funilRemarketing.faturamentoEstimado), label: "Faturamento estimado", color: "#C71585" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl text-white text-center min-h-[130px]"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-lg md:text-xl font-extrabold font-[Montserrat] leading-tight">{item.value}</span>
                <span className="text-white/80 text-[10px] mt-2 uppercase tracking-wide leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONGRESSOS ARNOLD */}
      <section id="congressos" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Arnold">Análise de Congressos</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>

          {/* Funis dos 3 congressos */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <FunilCongressoCard funil={funilSonafe} />
            <FunilCongressoCard funil={funilGestaoAcademias} />
            <FunilCongressoCard funil={funilWttc} />
          </div>

          {/* Criativos SONAFE */}
          <div className="border-t border-gray-200 pt-12">
            <CriativosGrid
              criativos={criativosSonafe.criativos}
              titulo={criativosSonafe.categoria}
              subtitulo={criativosSonafe.subtitulo}
            />
          </div>

          {/* Criativos Gestão de Academias */}
          <div className="border-t border-gray-200 pt-12 mt-12">
            <CriativosGrid
              criativos={criativosGestaoAcademias.criativos}
              titulo={criativosGestaoAcademias.categoria}
              subtitulo={criativosGestaoAcademias.subtitulo}
            />
          </div>

          {/* Criativos WTTC */}
          <div className="border-t border-gray-200 pt-12 mt-12">
            <CriativosGrid
              criativos={criativosWttc.criativos}
              titulo={criativosWttc.categoria}
              subtitulo={criativosWttc.subtitulo}
            />
          </div>

          {/* Recuperação de Carrinho Congressos - WhatsApp */}
          <div className="border-t border-gray-200 pt-12 mt-12 max-w-xl mx-auto">
            <WhatsAppFunnel data={whatsappCongressos} />
          </div>
        </div>
      </section>

      {/* ANÁLISE LOJISTAS */}
      <section id="lojistas" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="Lojistas">Análise</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-12">
            {[
              { value: formatNumber(analiseLojistas.cadastrosVCS), label: "Cadastros pela VCS", color: "#1B1464" },
              { value: formatBRL(analiseLojistas.investidoCampanha), label: "Investido em campanha", color: "#2B9FD4" },
              { value: formatNumber(analiseLojistas.cadastrosAnuncios), label: "Cadastros oriundos de Anúncios", color: "#00BCD4" },
              { value: formatNumber(analiseLojistas.pessoasAlcancadas), label: "Pessoas alcançadas", color: "#9B59B6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-36 h-36 rounded-full flex flex-col items-center justify-center text-white"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-lg font-extrabold font-[Montserrat] leading-tight text-center px-2">{item.value}</span>
                <span className="text-[9px] mt-2 text-white/70 text-center leading-tight px-3">{item.label}</span>
              </motion.div>
            ))}
          </div>
          {/* Recuperação Lojistas - WhatsApp */}
          <div className="max-w-xl mx-auto">
            <WhatsAppFunnel data={whatsappLojistas} />
          </div>
        </div>
      </section>

      {/* EMAIL MARKETING */}
      <section id="email" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Arnold 2026">Análise de Email Marketing</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>

          {/* Métricas gerais em círculos */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
            {[
              { value: String(emailMarketing.campanhas), label: "Campanhas de email", color: "#1B1464" },
              { value: formatNumber(emailMarketing.leadsImpactados), label: "Leads impactados", color: "#2B9FD4" },
              { value: emailMarketing.taxaAbertura, label: "Taxa média de abertura", color: "#00BCD4" },
              { value: emailMarketing.taxaCliques, label: "Taxa média de cliques", color: "#9B59B6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-36 h-36 rounded-full flex flex-col items-center justify-center text-white"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-xl font-extrabold font-[Montserrat]">{item.value}</span>
                <span className="text-[9px] mt-2 text-white/70 text-center leading-tight px-3">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* TOP 6 Emails em Destaque */}
          <h3 className="text-center font-bold text-[#C71585] text-sm tracking-wider uppercase mb-8">
            Campanhas de Email em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
            {emailsDestaque.map((email, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1B1464] text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-[#1B1464] leading-tight">{email.assunto}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Taxa de abertura:</span>
                    <span className="font-bold text-[#00BCD4]">{email.taxaAbertura}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Taxa de cliques:</span>
                    <span className="font-bold text-[#C71585]">{email.taxaCliques}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benchmark */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-center font-bold text-[#1B1464] text-lg font-[Montserrat] mb-2">
              Benchmark de Email Marketing
            </h3>
            <p className="text-center text-[#C71585] text-sm font-semibold mb-10">
              Arnold 2026 vs Mercado de Eventos
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Taxa de Abertura */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h4 className="text-center text-sm font-bold text-[#1B1464] mb-6">Taxa de Abertura (%)</h4>
                <div className="flex items-end justify-center gap-8 h-48">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-gray-600 mb-2">{benchmarkEmail.mercadoAbertura}%</span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(benchmarkEmail.mercadoAbertura / 60) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="w-20 bg-[#8B0000] rounded-t-lg"
                      style={{ maxHeight: "100%" }}
                    />
                    <span className="text-xs text-gray-500 mt-2">Mercado</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-[#1B1464] mb-2">{benchmarkEmail.arnoldAbertura}%</span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(benchmarkEmail.arnoldAbertura / 60) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-20 bg-[#8B0000] rounded-t-lg"
                      style={{ maxHeight: "100%" }}
                    />
                    <span className="text-xs text-gray-500 mt-2">Arnold</span>
                  </div>
                </div>
              </div>
              {/* Taxa de Cliques */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h4 className="text-center text-sm font-bold text-[#1B1464] mb-6">Taxa de Cliques (%)</h4>
                <div className="flex items-end justify-center gap-8 h-48">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-gray-600 mb-2">{benchmarkEmail.mercadoCliques}%</span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(benchmarkEmail.mercadoCliques / 3) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="w-20 bg-[#7B2D8B] rounded-t-lg"
                      style={{ maxHeight: "100%" }}
                    />
                    <span className="text-xs text-gray-500 mt-2">Mercado</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-[#1B1464] mb-2">{benchmarkEmail.arnoldCliques}%</span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(benchmarkEmail.arnoldCliques / 3) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-20 bg-[#7B2D8B] rounded-t-lg"
                      style={{ maxHeight: "100%" }}
                    />
                    <span className="text-xs text-gray-500 mt-2">Arnold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B1464] py-8 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase">
          Extrema Visibilidade | Marketing Digital
        </p>
        <p className="text-white/30 text-xs mt-2">
          Relatório de Performance Digital — {PERIOD}
        </p>
      </footer>
    </div>
  );
}
