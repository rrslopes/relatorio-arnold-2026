// Design: Editorial Data Journalism — Verification table with editorial rules
import { formatBRL, MONTHS, MONTH_SHORT, type ChannelData, type MonthVerification } from "@/lib/data";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface VerificationTableProps {
  rows: ChannelData[];
  columns: MonthVerification[];
  grandTotal: {
    stated: number;
    recalculated: number;
    diffRecalc: number;
  };
}

export default function VerificationTable({ rows, columns, grandTotal }: VerificationTableProps) {
  return (
    <div className="space-y-10">
      {/* Row verification */}
      <div>
        <h3 className="text-xl font-serif mb-1">Verificação por Linha</h3>
        <p className="text-sm text-muted-foreground mb-5">Soma dos valores mensais comparada ao total declarado por canal</p>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-charcoal/20">
                <th className="text-left py-3 pr-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Canal</th>
                {MONTH_SHORT.map((m) => (
                  <th key={m} className="text-right py-3 px-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap">{m}</th>
                ))}
                <th className="text-right py-3 px-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Calculado</th>
                <th className="text-right py-3 px-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Declarado</th>
                <th className="text-center py-3 pl-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.channel}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/40 hover:bg-secondary/30 transition-colors"
                >
                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">{row.channel}</td>
                  {MONTHS.map((m) => (
                    <td key={m} className="text-right py-3 px-2 stat-number text-muted-foreground whitespace-nowrap">
                      {row.values[m] === 0 ? <span className="text-border">—</span> : formatBRL(row.values[m])}
                    </td>
                  ))}
                  <td className="text-right py-3 px-2 stat-number font-medium whitespace-nowrap">{formatBRL(row.calculatedTotal)}</td>
                  <td className="text-right py-3 px-2 stat-number font-medium whitespace-nowrap">{formatBRL(row.total)}</td>
                  <td className="text-center py-3 pl-2">
                    {row.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-teal inline-block" />
                    ) : (
                      <XCircle className="w-5 h-5 text-coral inline-block" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Column verification */}
      <div>
        <h3 className="text-xl font-serif mb-1">Verificação por Coluna</h3>
        <p className="text-sm text-muted-foreground mb-5">Soma dos canais comparada ao faturamento total declarado por mês</p>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-charcoal/20">
                <th className="text-left py-3 pr-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Mês</th>
                <th className="text-right py-3 px-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Calculado</th>
                <th className="text-right py-3 px-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Declarado</th>
                <th className="text-right py-3 px-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Diferença</th>
                <th className="text-center py-3 pl-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {columns.map((col, i) => (
                <motion.tr
                  key={col.month}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`border-b border-border/40 hover:bg-secondary/30 transition-colors ${!col.isCorrect ? "bg-coral-light/20" : ""}`}
                >
                  <td className="py-3 pr-4 font-medium text-foreground">{col.month}</td>
                  <td className="text-right py-3 px-4 stat-number">{formatBRL(col.calculated)}</td>
                  <td className="text-right py-3 px-4 stat-number">{formatBRL(col.stated)}</td>
                  <td className={`text-right py-3 px-4 stat-number font-medium ${!col.isCorrect ? "text-coral" : "text-teal"}`}>
                    {col.difference === 0 ? "R$ 0,00" : `R$ ${col.difference.toFixed(2).replace(".", ",")}`}
                  </td>
                  <td className="text-center py-3 pl-4">
                    {col.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-teal inline-block" />
                    ) : (
                      <XCircle className="w-5 h-5 text-coral inline-block" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-charcoal/20">
                <td className="py-3 pr-4 font-bold">Total Geral</td>
                <td className="text-right py-3 px-4 stat-number font-bold">{formatBRL(grandTotal.recalculated)}</td>
                <td className="text-right py-3 px-4 stat-number font-bold">{formatBRL(grandTotal.stated)}</td>
                <td className={`text-right py-3 px-4 stat-number font-bold ${grandTotal.diffRecalc !== 0 ? "text-coral" : "text-teal"}`}>
                  {grandTotal.diffRecalc === 0 ? "R$ 0,00" : `R$ ${grandTotal.diffRecalc.toFixed(2).replace(".", ",")}`}
                </td>
                <td className="text-center py-3 pl-4">
                  {Math.abs(grandTotal.diffRecalc) < 0.01 ? (
                    <CheckCircle2 className="w-5 h-5 text-teal inline-block" />
                  ) : (
                    <XCircle className="w-5 h-5 text-coral inline-block" />
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
