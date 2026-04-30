// Arnold South America - Performance Digital 2026
// Identidade Visual: Rosa/Magenta + Azul Escuro + Ciano
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Legend,
} from "recharts";
import {
  REPORT_TITLE, REPORT_SUBTITLE, PERIOD, kpis,
  MONTHS, MONTH_SHORT, revenueByChannel, monthlyTotals, grandTotal,
  investimentoFeira, investimentoCongressos, impostosRetidos, totalInvestidoAds, saldoMeta,
  distribuicaoAds, googleAds, metaAds, resumoAds,
  dimensaoCampanhas, loteZero, creativos,
  analiseReceita, analisePerformanceCanais,
  formatBRL, formatNumber, CHANNEL_COLORS,
} from "@/lib/data";

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
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1464]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-14">
        <span className="text-white font-bold text-sm tracking-wider font-[Montserrat]">
          ARNOLD SA <span className="text-[#C71585]">|</span> PERFORMANCE 2026
        </span>
        {/* Desktop nav */}
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
        {/* Mobile toggle */}
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

function SectionDivider({ title, pink }: { title: string; pink: string }) {
  return (
    <div className="bg-watermark py-20 md:py-28 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#1B1464] font-[Montserrat]">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-bold text-[#C71585] font-[Montserrat] mt-1">
          {pink}
        </p>
      </div>
    </div>
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

function ChevronMetric({ items, colors }: { items: { value: string; label: string }[]; colors: string[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-0 items-stretch justify-center">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center justify-center px-8 py-10 md:py-12 text-white min-w-[200px] md:min-w-[260px]"
          style={{
            backgroundColor: colors[i],
            clipPath: i < items.length - 1
              ? "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            marginLeft: i > 0 ? "-20px" : "0",
          }}
        >
          <span className="text-2xl md:text-3xl font-extrabold font-[Montserrat]">
            {item.value}
          </span>
          <span className="text-white/80 text-xs mt-2 text-center uppercase tracking-wide max-w-[180px]">
            {item.label}
          </span>
        </div>
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

  const pieData = [
    { name: "Meta Ads", value: distribuicaoAds.meta, color: "#1B1464" },
    { name: "Google Ads", value: distribuicaoAds.google, color: "#00BCD4" },
    { name: "Impostos", value: impostosRetidos, color: "#C71585" },
  ];

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

      {/* RESUMO GERAL */}
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

      {/* RECEITA POR CANAL */}
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

      {/* INVESTIMENTO */}
      <SectionDivider title="DETALHAMENTO DE INVESTIMENTO" pink="MÍDIA PAGA 2026" />
      <section id="investimento" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="Feira e Congressos">Investimento em Ads |</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>

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
          <div className="max-w-md mx-auto bg-[#1B1464] rounded-xl p-6 text-white text-center">
            <div className="text-xs text-white/60 mb-1">Impostos Retidos pela Meta</div>
            <div className="font-bold mb-3">{formatBRL(impostosRetidos)}</div>
            <div className="border-t border-white/20 pt-3">
              <div className="text-xs text-white/60 mb-1">TOTAL INVESTIDO EM ADS</div>
              <div className="text-2xl font-extrabold font-[Montserrat]">{formatBRL(totalInvestidoAds)}</div>
            </div>
            <div className="text-xs text-white/40 mt-3">Saldo disponível na Meta: {formatBRL(saldoMeta)}</div>
          </div>

          {/* Pie Chart distribuição */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-[#1B1464] text-center mb-6 font-[Montserrat]">
              Distribuição do Investimento em Ads <span className="text-[#C71585]">(Google e Meta)</span>
            </h3>
            <div className="h-[300px] max-w-md mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${formatBRL(value)}`}
                    labelLine={false}
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => formatBRL(v)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE ADS */}
      <SectionDivider title="PERFORMANCE DAS CAMPANHAS" pink="GOOGLE ADS" />
      <section id="google" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="e Faturamento com Ingressos">Google Ads</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <div className="overflow-x-auto">
            <ChevronMetric
              items={[
                { value: formatBRL(googleAds.investido), label: "Investidos em Google para venda de ingressos" },
                { value: formatBRL(googleAds.faturamento), label: "Faturamento identificado" },
                { value: `${googleAds.roas}X`, label: "ROAS geral em ingresso (retorno sobre o investimento)" },
              ]}
              colors={["#1a3a2a", "#2d6b4f", "#00BCD4"]}
            />
          </div>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">
            {googleAds.nota}
          </p>
        </div>
      </section>

      {/* META ADS */}
      <SectionDivider title="PERFORMANCE DAS CAMPANHAS" pink="META ADS" />
      <section id="meta" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="e Faturamento com Ingressos">Meta Ads</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <div className="overflow-x-auto">
            <ChevronMetric
              items={[
                { value: formatBRL(metaAds.investido), label: "Investidos em Meta Ads" },
                { value: formatBRL(metaAds.faturamento), label: "Faturamento identificado" },
                { value: `${metaAds.roas}X`, label: "ROAS geral em ingresso (retorno sobre o investimento)" },
              ]}
              colors={["#1B1464", "#2B4FA3", "#00BCD4"]}
            />
          </div>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">
            {metaAds.nota}
          </p>
        </div>
      </section>

      {/* RESUMO ADS */}
      <section id="resumo-ads" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle>RESUMO GERAL ADS PARA VENDA DE INGRESSOS</SectionTitle>
          <p className="text-center text-[#C71585] font-bold font-[Montserrat] mb-2">(GOOGLE + META ADS)</p>
          <p className="text-center text-gray-500 text-sm mb-10">{PERIOD}</p>
          <div className="overflow-x-auto">
            <ChevronMetric
              items={[
                { value: formatBRL(resumoAds.investido), label: "Investidos em anúncios para venda de ingressos" },
                { value: formatBRL(resumoAds.faturamento), label: "Faturamento identificado" },
                { value: `${resumoAds.roas}X`, label: "ROAS geral em ingresso (retorno sobre o investimento)" },
              ]}
              colors={["#8B4513", "#D2691E", "#F4A460"]}
            />
          </div>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto text-center mt-8 italic">
            {resumoAds.nota}
          </p>
        </div>
      </section>

      {/* DIMENSÃO DE CAMPANHAS */}
      <SectionDivider title="DETALHAMENTO DE CAMPANHAS" pink="META" />
      <section id="campanhas" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="Dimensão de Campanhas e Anúncios Gerenciados">Resumo Geral</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Feira */}
            <div className="text-center">
              <h4 className="text-xl font-extrabold text-[#1B1464] font-[Montserrat] mb-6">FEIRA</h4>
              <div className="flex justify-center gap-6">
                <div className="w-32 h-32 rounded-full bg-[#1B1464] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold">{dimensaoCampanhas.feira.campanhas}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-2">Grandes campanhas gerenciadas</span>
                </div>
                <div className="w-36 h-36 rounded-full bg-[#2B9FD4] flex flex-col items-center justify-center text-white self-end">
                  <span className="text-3xl font-extrabold">{dimensaoCampanhas.feira.criativos}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3">Criativos gerenciados em combinação</span>
                </div>
              </div>
            </div>
            {/* Congressos */}
            <div className="text-center">
              <h4 className="text-xl font-extrabold text-[#1B1464] font-[Montserrat] mb-6">CONGRESSOS</h4>
              <div className="flex justify-center gap-6">
                <div className="w-28 h-28 rounded-full bg-[#00BCD4] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold">{dimensaoCampanhas.congressos.campanhas}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-2">Grandes campanhas gerenciadas</span>
                </div>
                <div className="w-32 h-32 rounded-full bg-[#9B59B6] flex flex-col items-center justify-center text-white self-end">
                  <span className="text-3xl font-extrabold">{dimensaoCampanhas.congressos.criativos}</span>
                  <span className="text-[10px] mt-1 text-white/70 text-center px-3">Criativos gerenciados em combinação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOTE ZERO */}
      <SectionDivider title="LOTE ZERO" pink="2026" />
      <section id="lote-zero" className="py-16 md:py-20">
        <div className="container">
          <SectionTitle pink="2026">Lote Zero</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
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
                className="aspect-square rounded-full flex flex-col items-center justify-center text-white p-4"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-xl md:text-2xl font-extrabold font-[Montserrat]">{item.value}</span>
                <span className="text-[10px] md:text-xs mt-2 text-white/70 text-center leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRIATIVOS */}
      <SectionDivider title="DESTAQUES DE CAMPANHAS E CRIATIVOS" pink="ARNOLD" />
      <section id="criativos" className="py-16 md:py-20 bg-watermark">
        <div className="container">
          <SectionTitle pink="Awareness Arnold">Destaques de Campanhas e Criativos em Ads</SectionTitle>
          <p className="text-center text-[#C71585] font-bold text-sm mb-10">INSTITUCIONAL | AWARENESS ARNOLD</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {creativos.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="aspect-[9/16] max-h-[360px] overflow-hidden bg-gray-100">
                  <img
                    src={c.imagem}
                    alt={c.titulo}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#1B1464] text-sm mb-3">{c.titulo}</h4>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Formato:</span>
                      <span className="font-semibold">{c.formato}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Impressões:</span>
                      <span className="font-semibold tabular-nums">{formatNumber(c.impressoes)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alcance:</span>
                      <span className="font-semibold tabular-nums">{formatNumber(c.alcance)} pessoas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CPM:</span>
                      <span className="font-semibold tabular-nums">{formatBRL(c.cpm)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
