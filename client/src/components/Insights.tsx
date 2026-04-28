// Design: Editorial Data Journalism — Insights as editorial callouts
import { getChannelShares, getMonthlyGrowth, getPaidVsOrganic, formatBRL } from "@/lib/data";
import { AlertTriangle, TrendingUp, Target, Zap, BarChart3, PieChart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "teal" | "coral" | "charcoal";
}

function InsightCard({ icon, title, description, accent = "teal" }: InsightCardProps) {
  const borderColor = accent === "teal" ? "border-teal" : accent === "coral" ? "border-coral" : "border-charcoal";
  return (
    <div className={`border-l-4 ${borderColor} pl-5 py-3`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export default function Insights() {
  const shares = getChannelShares();
  const growth = getMonthlyGrowth();
  const paidVsOrganic = getPaidVsOrganic();
  const topChannel = shares[0];
  const abrGrowth = growth[growth.length - 1];
  const paid = paidVsOrganic[0];

  return (
    <AnimatedSection>
      <div className="space-y-8">
        <InsightCard
          icon={<Target className="w-5 h-5 text-teal" />}
          title="Facebook e Instagram Ads dominam o faturamento"
          accent="teal"
          description={`O canal "Face e Insta Ads" representa ${topChannel.share}% do faturamento total (${formatBRL(topChannel.total)}), sendo o canal líder absoluto em todos os 6 meses analisados. Esta concentração indica forte dependência de mídia paga em redes sociais.`}
        />

        <InsightCard
          icon={<TrendingUp className="w-5 h-5 text-teal" />}
          title="Abril 2026 concentra 57% do faturamento"
          accent="teal"
          description={`O último mês da campanha (Abr 2026) registou um crescimento de ${abrGrowth.growth}% face ao mês anterior, acumulando ${formatBRL(abrGrowth.total)}. Este padrão é típico de eventos presenciais, onde a urgência de compra se intensifica próximo da data.`}
        />

        <InsightCard
          icon={<Zap className="w-5 h-5 text-teal" />}
          title={`Canais pagos representam ${paid.pct}% do total`}
          accent="charcoal"
          description={`Google Ads + Facebook/Instagram Ads somam ${formatBRL(paid.total)}, evidenciando que a estratégia de aquisição é predominantemente paga. Os canais orgânicos (Redes Sociais + Email Marketing) contribuem com apenas ${paidVsOrganic[1].pct}%.`}
        />

        <InsightCard
          icon={<BarChart3 className="w-5 h-5 text-teal" />}
          title="Google Ads ganhou tração progressiva"
          accent="teal"
          description={`O canal Google iniciou em dezembro (sem investimento em novembro) e cresceu consistentemente, passando de R$ 26.001,80 em Dez/2025 para R$ 541.561,91 em Abr/2026 — um crescimento de mais de 20x, sugerindo otimização contínua das campanhas.`}
        />

        <InsightCard
          icon={<PieChart className="w-5 h-5 text-coral" />}
          title="Email Marketing com contribuição marginal"
          accent="coral"
          description={`O Email Marketing representa apenas 1,45% do faturamento total (${formatBRL(48437.40)}), com valores decrescentes ao longo dos meses. Isto pode indicar uma base de contactos pequena ou uma estratégia de email pouco explorada.`}
        />

        <InsightCard
          icon={<AlertTriangle className="w-5 h-5 text-coral" />}
          title="Discrepância identificada: FEV 2026"
          accent="coral"
          description="A soma dos canais em Fevereiro de 2026 totaliza R$ 219.042,45, mas o valor declarado na tabela é R$ 219.042,50 — uma diferença de R$ 0,05. Embora insignificante em termos de valor, esta discrepância propaga-se para o total geral, que deveria ser R$ 3.334.827,95 em vez de R$ 3.334.828,00."
        />
      </div>
    </AnimatedSection>
  );
}
