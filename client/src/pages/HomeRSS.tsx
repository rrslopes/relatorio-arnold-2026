// Rio Sport Show 2026 - Performance Digital
// Identidade Visual: Laranja + Preto + Branco
// LOGOS: RSS no header, Extrema no footer
// MENU: Navegação simplificada
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend,
} from "recharts";
import {
  REPORT_TITLE, REPORT_SUBTITLE, PERIOD, kpis,
  emailMarketing, emailsDestaque, benchmarkEmail,
  performanceSite, totalSessions,
  formatBRL, formatNumber, CHANNEL_COLORS,
  LOGO_RSS, LOGO_EXTREMA_ESCURO,
} from "@/lib/data-rss";

// Menu structure
const menuGroups = [
  { id: "resumo", label: "Resumo", items: null },
  { id: "performance", label: "Performance do Site", items: null },
  { id: "email", label: "Email Marketing", items: null },
];

// Flatten all section IDs for mobile menu
const allSections = menuGroups.flatMap(g => g.items ? g.items : [{ id: g.id, label: g.label }]);

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1464]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo RSS */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            RSS
          </div>
          <span className="text-white font-bold text-sm hidden sm:inline">Rio Sport Show</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {menuGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="text-white/80 hover:text-white text-xs px-3 py-2 rounded-md transition-colors hover:bg-white/10 font-medium"
            >
              {group.label}
            </a>
          ))}
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
        <div className="lg:hidden bg-[#1B1464] border-t border-white/10 pb-3">
          {menuGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              onClick={() => setMobileOpen(false)}
              className="block text-white/80 hover:text-white text-sm px-6 py-2.5 font-medium"
            >
              {group.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function SectionTitle({ children, orange }: { children: React.ReactNode; orange?: string }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1B1464] tracking-tight font-[Montserrat] text-center mb-2">
      {children}
      {orange && <span className="text-[#FF6B35]"> {orange}</span>}
    </h2>
  );
}

// KPI Card
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

// Custom tooltip for charts
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm">
      <p className="font-semibold text-[#1B1464] mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }} className="text-xs">
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

export default function HomeRSS() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* HERO / CAPA */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#1B1464] via-[#2B4FA3] to-[#FF6B35]/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-[Montserrat] mb-4">
              {REPORT_TITLE}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#FF6B35] font-bold mb-2">
              {REPORT_SUBTITLE}
            </h2>
            <p className="text-white/80 text-sm md:text-base">{PERIOD}</p>
          </motion.div>
        </div>
      </section>

      {/* RESUMO GERAL */}
      <section id="resumo" className="py-16 md:py-20 bg-white">
        <div className="container">
          <SectionTitle orange="2026">Destaques da Plataforma</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">{PERIOD}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { value: formatNumber(kpis.profissionaisCadastrados), label: "Profissionais cadastrados", color: "#1B1464" },
              { value: formatNumber(kpis.usuariosAtivos), label: "Usuários ativos no site", color: "#2B4FA3" },
              { value: formatNumber(kpis.usuariosInteragiram), label: "Usuários via anúncios", color: "#FF6B35" },
              { value: formatBRL(kpis.investidoAds), label: "Investido em anúncios", color: "#00BCD4" },
            ].map((item, i) => (
              <KPICard key={i} value={item.value} label={item.label} color={item.color} />
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE DO SITE */}
      <section id="performance" className="py-16 md:py-20 bg-gray-50">
        <div className="container">
          <SectionTitle orange="do Site">Performance</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-12">Origem dos acessos — Março a Maio 2026</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gráfico de Pizza */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-center justify-center"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={performanceSite}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ origin, percentage }) => `${origin}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="sessions"
                  >
                    {performanceSite.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHANNEL_COLORS[entry.origin] || "#999"} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => formatNumber(Number(value))} />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Tabela de Dados */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-[#1B1464] mb-4 font-[Montserrat]">
                Origem dos <span className="text-[#FF6B35]">Acessos</span>
              </h3>
              <div className="space-y-3">
                {performanceSite.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: CHANNEL_COLORS[item.origin] || "#999" }}
                      />
                      <span className="text-sm text-gray-700">{item.origin}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#1B1464]">{formatNumber(item.sessions)}</p>
                      <p className="text-xs text-gray-500">{item.percentage}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total de sessões</p>
                <p className="text-2xl font-extrabold text-[#1B1464] font-[Montserrat]">
                  {formatNumber(totalSessions)}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMAIL MARKETING */}
      <section id="email" className="py-16 md:py-20 bg-white">
        <div className="container">
          <SectionTitle orange="em Destaque">Campanhas de Email</SectionTitle>
          <p className="text-center text-gray-500 text-sm mb-4">{PERIOD}</p>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { value: formatNumber(emailMarketing.leadsImpactados), label: "Leads impactados", color: "#1B1464" },
              { value: emailMarketing.taxaAbertura, label: "Taxa de abertura média", color: "#2B4FA3" },
              { value: emailMarketing.taxaCliques, label: "Taxa de cliques média", color: "#FF6B35" },
              { value: formatNumber(emailMarketing.campanhas), label: "Campanhas enviadas", color: "#00BCD4" },
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
            TOP 6 <span className="text-[#FF6B35]">Campanhas de Email</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {emailsDestaque.map((email, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {email.imagem && (
                  <div className="h-[200px] overflow-hidden bg-gray-100">
                    <img src={email.imagem} alt={email.assunto} className="w-full h-full object-contain object-center" />
                  </div>
                )}
                <div className="p-4">
                  <h5 className="font-bold text-[#1B1464] text-xs mb-3 leading-tight line-clamp-2">{email.assunto}</h5>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-gray-500">Abertura:</span><span className="font-semibold text-[#FF6B35]">{email.taxaAbertura}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Cliques:</span><span className="font-semibold">{email.taxaCliques}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benchmark */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#1B1464] text-center mb-8 font-[Montserrat]">
              Benchmark <span className="text-[#FF6B35]">vs Mercado de Eventos</span>
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
                      <span className="text-[#1B1464] font-medium">RSS 2026</span>
                      <span className="font-bold text-[#1B1464]">{benchmarkEmail.rssAbertura}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(benchmarkEmail.rssAbertura / 60) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#FF6B35] to-[#1B1464] rounded-full" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-[#FF6B35] font-bold mt-2">
                    +{(benchmarkEmail.rssAbertura - benchmarkEmail.mercadoAbertura).toFixed(1)} p.p. acima do mercado
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
                      <span className="text-[#1B1464] font-medium">RSS 2026</span>
                      <span className="font-bold text-[#1B1464]">{benchmarkEmail.rssCliques}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${(benchmarkEmail.rssCliques / 3) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#FF6B35] to-[#1B1464] rounded-full" />
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

      {/* FOOTER */}
      <footer className="bg-[#1B1464] py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                RSS
              </div>
              <span className="text-white/60 text-xs">Rio Sport Show 2026</span>
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
