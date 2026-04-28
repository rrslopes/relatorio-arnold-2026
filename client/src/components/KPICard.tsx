// Design: Editorial Data Journalism — KPI cards with large numbers
import { useCountUp } from "@/hooks/useCountUp";
import { formatBRL } from "@/lib/data";
import { motion } from "framer-motion";

interface KPICardProps {
  label: string;
  value: number;
  subtitle?: string;
  accent?: "teal" | "coral" | "charcoal";
  prefix?: string;
}

const accentStyles = {
  teal: "border-l-teal",
  coral: "border-l-coral",
  charcoal: "border-l-charcoal",
};

export default function KPICard({ label, value, subtitle, accent = "teal", prefix }: KPICardProps) {
  const { count, ref } = useCountUp(value, 1800);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`bg-card border border-border/60 ${accentStyles[accent]} border-l-4 p-6 lg:p-8`}
    >
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
        {label}
      </p>
      <p className="stat-number text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
        {prefix}{formatBRL(count)}
      </p>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
      )}
    </motion.div>
  );
}
