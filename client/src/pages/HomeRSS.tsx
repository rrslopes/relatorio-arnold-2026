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
  { id: "resumo", label: "Resumo e destaques" },
  { id: "performance", label: "Performance do site" },
  { id: "email", label: "Email marketing" },
  { id: "investimento", label: "Investimento em ads" },
  { id: "campanhas", label: "Campanhas de mídia" },
  { id: "conclusoes", label: "Conclusões e insights" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#F64E02]/30">
      <div className="container flex items-center justify-between h-16">
        {/* Logo RSS */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src="/manus-storage/pasted_file_uM1mEb_image_03b3a27a.png" alt="Rio Sport Show" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {menuGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="text-white/70 hover:text-[#F64E02] text-xs px-3 py-2 rounded-md transition-colors hover:bg-[#F64E02]/10 font-medium"
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
        <div className="lg:hidden bg-black border-t border-[#F64E02]/20 pb-3">
          {menuGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              onClick={() => setMobileOpen(false)}
              className="block text-white/70 hover:text-[#F64E02] text-sm px-6 py-2.5 font-medium"
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
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#000000] tracking-tight font-[Montserrat] text-center mb-2">
      {children}
      {orange && <span className="text-[#F64E02]"> {orange}</span>}
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
      className="bg-gradient-to-r from-[#F64E02]/5 to-[#000000]/5 border border-[#F64E02]/20 rounded-lg p-4 mb-8"
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#000000] to-[#000000]/90 text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 font-[Montserrat]">{REPORT_TITLE}</h1>
            <p className="text-xl md:text-2xl text-[#F64E02] font-bold mb-2">{REPORT_SUBTITLE}</p>
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
            <KPICard value={formatNumber(kpis.profissionaisCadastrados)} label="Profissionais Cadastrados segundo BCS" color="text-[#F64E02]" />
            <KPICard value={formatNumber(kpis.usuariosAtivos)} label="Usuários Engajados (Mar-Mai 2026)" color="text-[#000000]" />
            <KPICard value={formatNumber(kpis.usuariosInteragiram)} label="Usuários Interagiram com o Site através dos Anúncios" color="text-[#F64E02]" />
            <KPICard value={formatBRL(kpis.investidoAds)} label="Investidos em Anúncios (Meta Ads)" color="text-[#000000]" />
          </div>


        </div>
      </section>

      {/* PERFORMANCE DO SITE */}

      {/* COMPARATIVO 2025 vs 2026 */}
      <section id="comparativo" className="py-16">
        <div className="container">
          <SectionTitle>Comparativo <span className="text-[#F64E02]">2025 vs 2026</span></SectionTitle>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Evolução dos destaques: 2025 (março a julho) vs 2026 (março a maio)</p>

          {/* Resumo Comparativo */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#000000] mb-6">RSS 2025 (Mar-Jul)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Profissionais Cadastrados</span>
                  <span className="font-bold text-[#F64E02]">5.862</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Usuários Visitantes do Site</span>
                  <span className="font-bold text-[#000000]">25.835</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Usuários via Anúncios</span>
                  <span className="font-bold text-[#F64E02]">8.128</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Investimento em Anúncios</span>
                  <span className="font-bold text-[#000000]">R$ 10.000</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-lg font-bold text-[#000000] mb-6">RSS 2026 (Mar-Mai)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Profissionais Cadastrados</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F64E02]">3.899</span>
                    <span className="text-sm font-bold text-red-600">-33,5%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Usuários Visitantes do Site</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#000000]">31.028</span>
                    <span className="text-sm font-bold text-green-600">+20,1%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Usuários via Anúncios</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F64E02]">11.138</span>
                    <span className="text-sm font-bold text-green-600">+37,0%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Investimento em Anúncios</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#000000]">R$ 16.250,46</span>
                    <span className="text-sm font-bold text-green-600">+62,5%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Performance Comparativa */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-lg font-bold text-[#000000] mb-6">Performance do Site - Origem dos Acessos (Comparativo)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#F64E02]">
                    <th className="text-left py-3 px-4 font-bold text-[#000000]">Canal</th>
                    <th className="text-center py-3 px-4 font-bold text-[#000000]">2025 (Mar-Jul)</th>
                    <th className="text-center py-3 px-4 font-bold text-[#000000]">% 2025</th>
                    <th className="text-center py-3 px-4 font-bold text-[#000000]">2026 (Mar-Mai)</th>
                    <th className="text-center py-3 px-4 font-bold text-[#000000]">% 2026</th>
                    <th className="text-center py-3 px-4 font-bold text-[#F64E02]">Variação %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">Anúncios</td>
                    <td className="text-center py-3 px-4">8.128</td>
                    <td className="text-center py-3 px-4 font-bold text-[#F64E02]">31,4%</td>
                    <td className="text-center py-3 px-4">12.679</td>
                    <td className="text-center py-3 px-4 font-bold text-[#F64E02]">40,9%</td>
                    <td className="text-center py-3 px-4 font-bold text-green-600">+9,5pp</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">Acessos Diretos</td>
                    <td className="text-center py-3 px-4">9.285</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">35,9%</td>
                    <td className="text-center py-3 px-4">4.967</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">16,0%</td>
                    <td className="text-center py-3 px-4 font-bold text-red-600">-19,9pp</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">Outros Sites</td>
                    <td className="text-center py-3 px-4">4.477</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">17,3%</td>
                    <td className="text-center py-3 px-4">6.364</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">20,5%</td>
                    <td className="text-center py-3 px-4 font-bold text-green-600">+3,2pp</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">Busca Orgânica</td>
                    <td className="text-center py-3 px-4">2.527</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">9,8%</td>
                    <td className="text-center py-3 px-4">4.279</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">13,8%</td>
                    <td className="text-center py-3 px-4 font-bold text-green-600">+4,0pp</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">Redes Sociais Orgânicas</td>
                    <td className="text-center py-3 px-4">967</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">3,7%</td>
                    <td className="text-center py-3 px-4">2.500</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">8,1%</td>
                    <td className="text-center py-3 px-4 font-bold text-green-600">+4,4pp</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">Email Marketing</td>
                    <td className="text-center py-3 px-4">554</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">2,1%</td>
                    <td className="text-center py-3 px-4">239</td>
                    <td className="text-center py-3 px-4 font-bold text-[#000000]">0,8%</td>
                    <td className="text-center py-3 px-4 font-bold text-red-600">-1,3pp</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <CommentaryBox text="A Rio Sport Show 2026 consolidou sua posição como evento digital de referência no setor fitness. A qualidade do tráfego melhorou significativamente, com 40,9% originário de anúncios pagos e crescimento de 38% em tráfego orgânico. Estes dados demonstram a efetividade das estratégias de aquisição implementadas durante o período de março a maio de 2026. O aumento de 11.138 usuários via anúncios (+37% vs 2025) e a expansão de 4.279 usuários via busca orgânica (+69% vs 2025) refletem investimentos bem direcionados em mídia paga e SEO." />
        </div>
      </section>
      <section id="performance" className="py-16">
        <div className="container">
          <SectionTitle>Performance <span className="text-[#F64E02]">do Site</span></SectionTitle>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Origem dos {formatNumber(totalSessions)} acessos ao site</p>

          <div className="w-full mb-12">
            {/* Bar Chart - Vertical */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={performanceSite} margin={{ top: 5, right: 30, left: 0, bottom: 80 }}>
                  
                  <XAxis dataKey="origin" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 12 }} />
                  
                  <YAxis type="number" />
                  <Tooltip formatter={(value) => formatNumber(value as number)} />
                  <Bar dataKey="sessions" fill="#F64E02" radius={[0, 8, 8, 0]}>
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
                    <div className="font-bold text-[#000000]">{item.percentage}%</div>
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
          <SectionTitle>Email <span className="text-[#F64E02]">Marketing</span></SectionTitle>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{emailMarketing.campanhas} campanhas com {formatNumber(emailMarketing.leadsImpactados)} leads impactados</p>

          {/* KPIs */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <KPICard value={emailMarketing.campanhas.toString()} label="Campanhas" color="text-[#F64E02]" />
            <KPICard value={formatNumber(emailMarketing.leadsImpactados)} label="Leads Impactados" color="text-[#000000]" />
            <KPICard value={emailMarketing.taxaAbertura} label="Taxa de Abertura" color="text-[#F64E02]" />
            <KPICard value={emailMarketing.taxaCliques} label="Taxa de Cliques" color="text-[#000000]" />
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
                  <h5 className="font-bold text-[#000000] text-xs mb-3 leading-tight line-clamp-2">{email.assunto}</h5>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-gray-500">Abertura:</span><span className="font-semibold text-[#F64E02]">{email.taxaAbertura}</span></div>
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
          <SectionTitle>Investimento <span className="text-[#F64E02]">em Mídia Paga</span></SectionTitle>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Distribuição de {formatBRL(investimentoTotal)} em Meta Ads</p>

          <div className="w-full mb-12">
            {/* Bar Chart - Vertical por Categoria */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#000000] mb-6">Distribuição de Investimento por Categoria</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={investimentoPorCategoria} margin={{ top: 5, right: 30, left: 0, bottom: 100 }}>
                  <XAxis dataKey="categoria" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 12 }} />
                  <YAxis type="number" />
                  <Tooltip formatter={(value) => formatBRL(value as number)} />
                  <Bar dataKey="valor" fill="#F64E02" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Dimensão de Campanhas */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mt-6">
              <h3 className="text-lg font-bold text-[#000000] mb-6">Dimensão de Campanhas Meta Ads</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-[#F64E02]/10 to-[#F64E02]/5 rounded-lg p-4 border border-[#F64E02]/20">
                  <div className="text-sm text-gray-600 mb-1">Campanhas</div>
                  <div className="text-3xl font-bold text-[#F64E02]">4</div>
                </div>
                <div className="bg-gradient-to-br from-[#000000]/10 to-[#000000]/5 rounded-lg p-4 border border-[#000000]/20">
                  <div className="text-sm text-gray-600 mb-1">Criativos</div>
                  <div className="text-3xl font-bold text-[#000000]">19</div>
                </div>
                <div className="bg-gradient-to-br from-[#00BCD4]/10 to-[#00BCD4]/5 rounded-lg p-4 border border-[#00BCD4]/20">
                  <div className="text-sm text-gray-600 mb-1">Impressões</div>
                  <div className="text-2xl font-bold text-[#00BCD4]">{formatNumber(3200000)}</div>
                </div>
                <div className="bg-gradient-to-br from-[#2B4FA3]/10 to-[#2B4FA3]/5 rounded-lg p-4 border border-[#2B4FA3]/20">
                  <div className="text-sm text-gray-600 mb-1">Alcance</div>
                  <div className="text-2xl font-bold text-[#2B4FA3]">{formatNumber(1700000)}</div>
                </div>
              </div>
            </motion.div>
          </div>


          <CommentaryBox text={investimentoCommentary} />
        </div>
      </section>

      {/* CAMPANHAS DE MÍDIA */}
      <section id="campanhas" className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle>Campanhas <span className="text-[#F64E02]">de Mídia</span></SectionTitle>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Análise detalhada dos criativos por objetivo de campanha</p>

          {/* AWARENESS */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#000000] mb-2 font-[Montserrat]">🎯 Awareness</h3>
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
                    <div><span className="text-gray-600">Alcance:</span> <span className="font-semibold text-[#F64E02]">{formatNumber(criativo.alcance)}</span></div>
                    <div><span className="text-gray-600">Impressões:</span> <span className="font-semibold">{formatNumber(criativo.impressoes)}</span></div>
                    <div><span className="text-gray-600">CPM:</span> <span className="font-semibold text-[#000000]">R$ {criativo.cpm.toFixed(2)}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <CommentaryBox text={awarenessCommentary} />
          </div>

          {/* EXPOSITORES */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-[#000000] mb-2 font-[Montserrat]">🏢 Seja um Expositor</h3>
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
                    <div><span className="text-gray-600">Alcance:</span> <span className="font-semibold text-[#F64E02]">{formatNumber(criativo.alcance)}</span></div>
                    <div><span className="text-gray-600">Cliques:</span> <span className="font-semibold">{formatNumber(criativo.cliques)}</span></div>
                    <div><span className="text-gray-600">Conversas iniciadas por Whatsapp:</span> <span className="font-semibold text-[#000000]">{criativo.conversas}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <CommentaryBox text={expositoresCommentary} />
          </div>

          {/* CREDENCIAMENTO */}
          <div>
            <h3 className="text-xl font-bold text-[#000000] mb-2 font-[Montserrat]">🎟️ Credenciamento</h3>
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
                    <div><span className="text-gray-600">Alcance:</span> <span className="font-semibold text-[#F64E02]">{formatNumber(criativo.alcance)}</span></div>
                    <div><span className="text-gray-600">Intenções de credenciamento:</span> <span className="font-semibold">{formatNumber(criativo.intencoes)}</span></div>
                    <div><span className="text-gray-600">Custo por lead credenciado:</span> <span className="font-semibold text-[#000000]">R$ {criativo.cpl.toFixed(2)}</span></div>
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
          <SectionTitle>Conclusões <span className="text-[#F64E02]">e Destaques</span></SectionTitle>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Síntese executiva da performance digital 2026</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[conclusoes.bloco1, conclusoes.bloco2, conclusoes.bloco3, conclusoes.bloco4].map((bloco, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-6 text-white ${i % 2 === 0 ? 'bg-black' : 'bg-[#F64E02]'}`}>
                <h3 className="text-lg font-bold mb-3 font-[Montserrat]">{bloco.titulo}</h3>
                <p className="text-sm leading-relaxed opacity-95">{bloco.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-xs font-medium">Rio Sport Show 2026</span>
            </div>
            <div className="text-center">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Relatório de Performance Digital — {PERIOD}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-[10px] uppercase tracking-wide">Nós da</span>
              <img
                src="/manus-storage/extrema-visibilidade-horizontal-fundo-escuro_2a9aa81c.png"
                alt="Extrema Visibilidade"
                className="h-8 opacity-90"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
