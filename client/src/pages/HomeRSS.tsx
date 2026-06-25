// Rio Sport Show 2026 - Performance Digital
// Identidade Visual: Laranja + Preto + Branco
// LOGOS: RSS no header, Extrema no footer
// MENU: Navegação com 6 seções principais
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line,
} from "recharts";
import {
  REPORT_TITLE, REPORT_SUBTITLE, PERIOD, kpis,
  emailMarketing, emailsDestaque, benchmarkEmail,
  performanceSite, totalSessions, performanceCommentary, emailCommentary,
  investimentoPorCategoria, investimentoTotal, investimentoCommentary,
  criativosAwareness, awarenessCommentary,
  criativosExpositores, expositoresCommentary,
  criativosCredenciamento, credenciamentoCommentary,
  conclusoes,
  formatBRL, formatNumber, CHANNEL_COLORS,
  LOGO_RSS, LOGO_EXTREMA_ESCURO,
} from "@/lib/data-rss";

// Menu structure
const menuGroups = [
  { id: "resumo", label: "Resumo" },
  { id: "performance", label: "Performance do Site" },
  { id: "email", label: "Email Marketing" },
  { id: "investimento", label: "Investimento" },
  { id: "campanhas", label: "Campanhas de Mídia" },
  { id: "conclusoes", label: "Conclusões" },
];

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
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center"
    >
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${color}`}>{value}</div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

// Commentary Box
function CommentaryBox({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#FF6B35]/5 to-[#1B1464]/5 border border-[#FF6B35]/20 rounded-lg p-4 mb-8"
    >
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function HomeRSS() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#1B1464] to-[#1B1464]/90 text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 font-[Montserrat]">{REPORT_TITLE}</h1>
            <p className="text-xl md:text-2xl text-[#FF6B35] font-bold mb-2">{REPORT_SUBTITLE}</p>
            <p className="text-white/60 text-sm">{PERIOD}</p>
          </motion.div>
        </div>
      </section>

      {/* RESUMO */}
      <section id="resumo" className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle>Resumo</SectionTitle>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Destaques principais do período de março a maio de 2026</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <KPICard value={formatNumber(kpis.profissionaisCadastrados)} label="Profissionais Cadastrados segundo BCS" color="text-[#FF6B35]" />
            <KPICard value={formatNumber(kpis.usuariosAtivos)} label="Usuários Ativos no Site (Mar-Mai 2026)" color="text-[#1B1464]" />
            <KPICard value={formatNumber(kpis.usuariosInteragiram)} label="Usuários Interagiram com o Site através dos Anúncios" color="text-[#FF6B35]" />
            <KPICard value={formatBRL(kpis.investidoAds)} label="Investidos em Anúncios (Meta Ads)" color="text-[#1B1464]" />
          </div>

          <CommentaryBox text="A Rio Sport Show 2026 consolidou sua posição como evento digital de referência no setor fitness. Com 24.134 usuários ativos no período de março a maio, o crescimento foi de 20% em relação a 2025. Mais importante: a qualidade do tráfego melhorou significativamente, com 40,9% originário de anúncios pagos e crescimento de 38% em tráfego orgânico." />
        </div>
      </section>

      {/* PERFORMANCE DO SITE */}
      <section id="performance" className="py-16">
        <div className="container">
          <SectionTitle>Performance <span className="text-[#FF6B35]">do Site</span></SectionTitle>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Origem dos {formatNumber(totalSessions)} acessos ao site</p>

          <div className="w-full mb-12">
            {/* Bar Chart - Vertical */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={performanceSite} layout="vertical" margin={{ top: 5, right: 30, left: 200, bottom: 5 }}>
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="origin" width={190} tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value) => formatNumber(value as number)} />
                  <Bar dataKey="sessions" fill="#FF6B35" radius={[0, 8, 8, 0]}>
                    {performanceSite.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHANNEL_COLORS[entry.origin] || "#999"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* List */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3 mt-6">
              {performanceSite.map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHANNEL_COLORS[item.origin] }} />
                    <span className="font-medium text-gray-700">{item.origin}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1B1464]">{item.percentage}%</div>
                    <div className="text-xs text-gray-500">{formatNumber(item.sessions)}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


          <CommentaryBox text={performanceCommentary} />
        </div>
      </section>

      {/* EMAIL MARKETING */}
      <section id="email" className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle>Email <span className="text-[#FF6B35]">Marketing</span></SectionTitle>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{emailMarketing.campanhas} campanhas com {formatNumber(emailMarketing.leadsImpactados)} leads impactados</p>

          {/* KPIs */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <KPICard value={emailMarketing.campanhas.toString()} label="Campanhas" color="text-[#FF6B35]" />
            <KPICard value={formatNumber(emailMarketing.leadsImpactados)} label="Leads Impactados" color="text-[#1B1464]" />
            <KPICard value={emailMarketing.taxaAbertura} label="Taxa de Abertura" color="text-[#FF6B35]" />
            <KPICard value={emailMarketing.taxaCliques} label="Taxa de Cliques" color="text-[#1B1464]" />
          </div>

          {/* Emails Destaque */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

          <CommentaryBox text={emailCommentary} />
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-16">
        <div className="container">
          <SectionTitle>Investimento <span className="text-[#FF6B35]">em Mídia Paga</span></SectionTitle>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Distribuição de {formatBRL(investimentoTotal)} em Meta Ads</p>

          <div className="w-full mb-12">
            {/* Bar Chart - Vertical */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={performanceSite} layout="vertical" margin={{ top: 5, right: 30, left: 200, bottom: 5 }}>
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="origin" width={190} tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value) => formatNumber(value as number)} />
                  <Bar dataKey="sessions" fill="#FF6B35" radius={[0, 8, 8, 0]}>
                    {performanceSite.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHANNEL_COLORS[entry.origin] || "#999"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* List */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3 mt-6">
              {performanceSite.map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHANNEL_COLORS[item.origin] }} />
                    <span className="font-medium text-gray-700">{item.origin}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1B1464]">{item.percentage}%</div>
                    <div className="text-xs text-gray-500">{formatNumber(item.sessions)}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>


          <CommentaryBox text={investimentoCommentary} />
        </div>
      </section>

      {/* CAMPANHAS DE MÍDIA */}
      <section id="campanhas" className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle>Campanhas <span className="text-[#FF6B35]">de Mídia</span></SectionTitle>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Análise detalhada dos criativos por objetivo de campanha</p>

          {/* AWARENESS */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#1B1464] mb-2 font-[Montserrat]">🎯 Awareness</h3>
            <p className="text-gray-600 text-sm mb-6">Campanhas de topo de funil focadas em escala e reconhecimento de marca</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {criativosAwareness.map((criativo) => (
                <motion.div key={criativo.numero} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="h-[150px] bg-gray-100 overflow-hidden">
                    <img src={criativo.imagem} alt={`Criativo ${criativo.numero}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2 text-sm">
                    <div><span className="text-gray-600">Formato:</span> <span className="font-semibold">{criativo.formato}</span></div>
                    <div><span className="text-gray-600">Alcance:</span> <span className="font-semibold text-[#FF6B35]">{formatNumber(criativo.alcance)}</span></div>
                    <div><span className="text-gray-600">Impressões:</span> <span className="font-semibold">{formatNumber(criativo.impressoes)}</span></div>
                    <div><span className="text-gray-600">CPM:</span> <span className="font-semibold text-[#1B1464]">R$ {criativo.cpm.toFixed(2)}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <CommentaryBox text={awarenessCommentary} />
          </div>

          {/* EXPOSITORES */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#1B1464] mb-2 font-[Montserrat]">🏢 Seja um Expositor</h3>
            <p className="text-gray-600 text-sm mb-6">Campanhas B2B focadas em geração de leads qualificados para expositores</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {criativosExpositores.map((criativo) => (
                <motion.div key={criativo.numero} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="h-[150px] bg-gray-100 overflow-hidden">
                    <img src={criativo.imagem} alt={`Criativo ${criativo.numero}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2 text-sm">
                    <div><span className="text-gray-600">Formato:</span> <span className="font-semibold">{criativo.formato}</span></div>
                    <div><span className="text-gray-600">Alcance:</span> <span className="font-semibold text-[#FF6B35]">{formatNumber(criativo.alcance)}</span></div>
                    <div><span className="text-gray-600">Cliques:</span> <span className="font-semibold">{formatNumber(criativo.cliques)}</span></div>
                    <div><span className="text-gray-600">Conversas:</span> <span className="font-semibold text-[#1B1464]">{criativo.conversas}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <CommentaryBox text={expositoresCommentary} />
          </div>

          {/* CREDENCIAMENTO */}
          <div>
            <h3 className="text-xl font-bold text-[#1B1464] mb-2 font-[Montserrat]">🎟️ Credenciamento</h3>
            <p className="text-gray-600 text-sm mb-6">Campanhas de fundo de funil focadas em conversão de cadastros</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {criativosCredenciamento.map((criativo) => (
                <motion.div key={criativo.numero} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="h-[150px] bg-gray-100 overflow-hidden">
                    <img src={criativo.imagem} alt={`Criativo ${criativo.numero}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2 text-sm">
                    <div><span className="text-gray-600">Formato:</span> <span className="font-semibold">{criativo.formato}</span></div>
                    <div><span className="text-gray-600">Alcance:</span> <span className="font-semibold text-[#FF6B35]">{formatNumber(criativo.alcance)}</span></div>
                    <div><span className="text-gray-600">Intenções:</span> <span className="font-semibold">{formatNumber(criativo.intencoes)}</span></div>
                    <div><span className="text-gray-600">CPL:</span> <span className="font-semibold text-[#1B1464]">R$ {criativo.cpl.toFixed(2)}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <CommentaryBox text={credenciamentoCommentary} />
          </div>
        </div>
      </section>

      {/* CONCLUSÕES */}
      <section id="conclusoes" className="py-16">
        <div className="container">
          <SectionTitle>Conclusões <span className="text-[#FF6B35]">e Destaques</span></SectionTitle>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Síntese executiva da performance digital 2026</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[conclusoes.bloco1, conclusoes.bloco2, conclusoes.bloco3, conclusoes.bloco4].map((bloco, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-6 text-white ${i % 2 === 0 ? 'bg-[#1B1464]' : 'bg-[#FF6B35]'}`}>
                <h3 className="text-lg font-bold mb-3 font-[Montserrat]">{bloco.titulo}</h3>
                <p className="text-sm leading-relaxed opacity-95">{bloco.texto}</p>
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
