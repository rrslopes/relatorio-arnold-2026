// ============================================================
// Design: Editorial Data Journalism
// Palette: charcoal, cream, coral accents, teal for positive
// Typography: DM Serif Display (headings) + DM Sans (body)
// Layout: Single editorial column with chapter-like sections
// ============================================================

import {
  verifyRows,
  verifyColumns,
  verifyGrandTotal,
  getChannelShares,
  getMonthlyGrowth,
  formatBRL,
} from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import KPICard from "@/components/KPICard";
import VerificationTable from "@/components/VerificationTable";
import {
  MonthlyEvolutionChart,
  ChannelStackedBarChart,
  ChannelSharePieChart,
  ChannelEvolutionLineChart,
  PaidVsOrganicChart,
} from "@/components/Charts";
import Insights from "@/components/Insights";
import { CheckCircle2, XCircle, ArrowDown, BarChart3, Search, Lightbulb, TableProperties } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/hero-editorial-bToA4EYJN66ag5xhZavHm8.webp";
const VERIFY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030060322/YhLBB5iGk4xW6ni9f2TSHC/verification-illustration-o9zuaRuQyWQcUaPJVsWGQX.webp";

export default function Home() {
  const rows = verifyRows();
  const columns = verifyColumns();
  const grandTotal = verifyGrandTotal();
  const shares = getChannelShares();
  const growth = getMonthlyGrowth();

  const totalErrors = columns.filter((c) => !c.isCorrect).length + rows.filter((r) => !r.isCorrect).length;
  const hasGrandTotalError = Math.abs(grandTotal.diffRecalc) >= 0.01;

  return (
    <div className="min-h-screen bg-background">
      {/* ===== NAVIGATION ===== */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="container flex items-center justify-between h-14">
          <span className="font-serif text-lg text-foreground">Análise de Marketing</span>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#verificacao" className="hover:text-foreground transition-colors">Verificação</a>
            <a href="#graficos" className="hover:text-foreground transition-colors">Gráficos</a>
            <a href="#insights" className="hover:text-foreground transition-colors">Insights</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="container relative pt-20 pb-16 lg:pt-28 lg:pb-24">
          <AnimatedSection>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal mb-4">
              Relatório Analítico
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] max-w-3xl">
              Análise de Marketing Digital para Evento Presencial
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Verificação completa dos somatórios, análise de performance por canal e evolução temporal do faturamento — Novembro 2025 a Abril 2026.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <div className="flex items-center gap-3 text-sm">
              {totalErrors === 0 && !hasGrandTotalError ? (
                <span className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Todos os somatórios estão corretos
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-sm font-medium">
                  <XCircle className="w-4 h-4" />
                  {totalErrors + (hasGrandTotalError ? 1 : 0)} discrepância(s) encontrada(s)
                </span>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-8">
            <a href="#resumo" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="w-4 h-4 animate-bounce" />
              Explorar análise completa
            </a>
          </AnimatedSection>
        </div>
      </header>

      {/* ===== KPI SUMMARY ===== */}
      <section id="resumo" className="container py-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-5 h-5 text-teal" />
            <h2 className="font-serif text-2xl md:text-3xl">Resumo Executivo</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <AnimatedSection delay={0}>
            <KPICard
              label="Faturamento Total"
              value={3334827.95}
              subtitle="Valor recalculado (6 meses)"
              accent="teal"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <KPICard
              label="Canal Líder"
              value={1425739.34}
              subtitle="Face e Insta Ads (42,75%)"
              accent="coral"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <KPICard
              label="Mês de Pico"
              value={1902654.00}
              subtitle="Abril 2026 (57,05% do total)"
              accent="teal"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <KPICard
              label="Crescimento Máximo"
              value={511769.50}
              subtitle="Mar 2026 (+133,64% vs Fev)"
              accent="charcoal"
            />
          </AnimatedSection>
        </div>

        {/* Growth badges */}
        <AnimatedSection delay={0.2} className="mt-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Crescimento Mensal</p>
          <div className="flex flex-wrap gap-3">
            {growth.map((g, i) => (
              <div
                key={g.month}
                className={`px-4 py-2 text-sm border ${
                  g.growth === null
                    ? "border-border text-muted-foreground"
                    : g.growth > 0
                    ? "border-teal/30 text-teal bg-teal/5"
                    : "border-coral/30 text-coral bg-coral/5"
                }`}
              >
                <span className="font-medium">{g.month.split(" ")[0]}</span>
                {g.growth !== null && (
                  <span className="stat-number ml-2">
                    {g.growth > 0 ? "+" : ""}{g.growth}%
                  </span>
                )}
                {g.growth === null && <span className="ml-2">Base</span>}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <div className="editorial-rule container" />

      {/* ===== VERIFICATION SECTION ===== */}
      <section id="verificacao" className="container py-16">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-12">
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-2">
                <Search className="w-5 h-5 text-teal" />
                <h2 className="font-serif text-2xl md:text-3xl">Auditoria dos Somatórios</h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Cada valor da tabela original foi recalculado para verificar a integridade dos somatórios de linhas (totais por canal) e colunas (totais por mês).
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <VerificationTable rows={rows} columns={columns} grandTotal={grandTotal} />
            </AnimatedSection>
          </div>

          {/* Sidebar illustration + summary */}
          <aside className="hidden lg:block">
            <AnimatedSection delay={0.2}>
              <div className="sticky top-20 space-y-6">
                <img
                  src={VERIFY_IMG}
                  alt="Ilustração de verificação de dados"
                  className="w-full rounded-sm border border-border/40"
                />
                <div className="bg-card border border-border p-6 space-y-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Resultado da Auditoria</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Linhas (totais por canal)</span>
                      <span className="flex items-center gap-1.5 text-teal font-medium">
                        <CheckCircle2 className="w-4 h-4" /> 6/6 corretos
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Colunas (totais por mês)</span>
                      <span className={`flex items-center gap-1.5 font-medium ${columns.filter(c => !c.isCorrect).length > 0 ? "text-coral" : "text-teal"}`}>
                        {columns.filter(c => !c.isCorrect).length > 0 ? (
                          <><XCircle className="w-4 h-4" /> {columns.filter(c => c.isCorrect).length}/6 corretos</>
                        ) : (
                          <><CheckCircle2 className="w-4 h-4" /> 6/6 corretos</>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Total geral</span>
                      <span className={`flex items-center gap-1.5 font-medium ${hasGrandTotalError ? "text-coral" : "text-teal"}`}>
                        {hasGrandTotalError ? (
                          <><XCircle className="w-4 h-4" /> Divergente</>
                        ) : (
                          <><CheckCircle2 className="w-4 h-4" /> Correto</>
                        )}
                      </span>
                    </div>
                  </div>
                  {hasGrandTotalError && (
                    <div className="mt-4 p-3 bg-coral/5 border border-coral/20 text-sm text-coral">
                      <p className="font-medium mb-1">Discrepância de R$ 0,05</p>
                      <p className="text-xs leading-relaxed">
                        A soma de FEV 2026 apresenta uma diferença de R$ 0,05, que se propaga ao total geral.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>

        {/* Mobile audit summary */}
        <div className="lg:hidden mt-8">
          <AnimatedSection>
            <div className="bg-card border border-border p-5 space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Resultado</h4>
              <div className="flex items-center justify-between text-sm">
                <span>Linhas</span>
                <span className="text-teal font-medium">6/6 corretos</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Colunas</span>
                <span className="text-coral font-medium">5/6 corretos</span>
              </div>
              {hasGrandTotalError && (
                <p className="text-xs text-coral mt-2 p-2 bg-coral/5 border border-coral/20">
                  Discrepância de R$ 0,05 em FEV 2026, propagada ao total geral.
                </p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="editorial-rule container" />

      {/* ===== CHARTS SECTION ===== */}
      <section id="graficos" className="container py-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <TableProperties className="w-5 h-5 text-teal" />
            <h2 className="font-serif text-2xl md:text-3xl">Análise Visual</h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Visualizações interativas para compreender a dinâmica do faturamento por canal e período.
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Row 1: Evolution + Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card border border-border/60 p-6 lg:p-8">
              <MonthlyEvolutionChart />
            </div>
            <div className="bg-card border border-border/60 p-6 lg:p-8">
              <ChannelStackedBarChart />
            </div>
          </div>

          {/* Row 2: Pie + Line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card border border-border/60 p-6 lg:p-8">
              <ChannelSharePieChart />
            </div>
            <div className="bg-card border border-border/60 p-6 lg:p-8">
              <ChannelEvolutionLineChart />
            </div>
          </div>

          {/* Row 3: Paid vs Organic */}
          <div className="max-w-2xl">
            <div className="bg-card border border-border/60 p-6 lg:p-8">
              <PaidVsOrganicChart />
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-rule container" />

      {/* ===== INSIGHTS SECTION ===== */}
      <section id="insights" className="container py-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="w-5 h-5 text-teal" />
            <h2 className="font-serif text-2xl md:text-3xl">Insights e Conclusões</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Principais observações extraídas da análise dos dados de campanha.
          </p>
        </AnimatedSection>

        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-12">
          <Insights />

          <aside className="hidden lg:block">
            <AnimatedSection delay={0.2}>
              <div className="sticky top-20 space-y-6">
                {/* Channel ranking */}
                <div className="bg-card border border-border p-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Ranking de Canais
                  </h4>
                  <div className="space-y-3">
                    {shares.map((s, i) => (
                      <div key={s.channel} className="flex items-center gap-3">
                        <span className="stat-number text-xs text-muted-foreground w-4">{i + 1}.</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="font-medium truncate">{s.channel}</span>
                            <span className="stat-number text-muted-foreground ml-2">{s.share}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-sm h-1.5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(s.share / shares[0].share) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1 }}
                              className="h-full rounded-sm bg-teal"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key numbers */}
                <div className="bg-card border border-border p-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Números-Chave
                  </h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Canais analisados</dt>
                      <dd className="stat-number font-medium">6</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Período</dt>
                      <dd className="font-medium">6 meses</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Ticket médio/mês</dt>
                      <dd className="stat-number font-medium">{formatBRL(3334827.95 / 6)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Maior crescimento</dt>
                      <dd className="stat-number font-medium text-teal">+271,78%</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Maior queda</dt>
                      <dd className="stat-number font-medium text-coral">-66,67%</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border/50 mt-8">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Análise de Marketing Digital — Evento Presencial 2026</p>
          <p className="stat-number text-xs">Dados verificados em {new Date().toLocaleDateString("pt-BR")}</p>
        </div>
      </footer>
    </div>
  );
}
