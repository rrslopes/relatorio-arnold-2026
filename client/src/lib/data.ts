// ============================================================
// Design: Editorial Data Journalism
// Palette: charcoal, cream, coral accents, teal for positive
// Typography: DM Serif Display (headings) + DM Sans (body)
// ============================================================

export interface ChannelData {
  channel: string;
  values: Record<string, number>;
  total: number;
  calculatedTotal: number;
  isCorrect: boolean;
  difference: number;
}

export interface MonthVerification {
  month: string;
  stated: number;
  calculated: number;
  isCorrect: boolean;
  difference: number;
}

export const MONTHS = [
  "NOV 2025",
  "DEZ 2025",
  "JAN 2026",
  "FEV 2026",
  "MAR 2026",
  "ABR 2026",
] as const;

export const MONTH_SHORT = ["Nov", "Dez", "Jan", "Fev", "Mar", "Abr"] as const;

export const CHANNEL_COLORS: Record<string, string> = {
  "Google": "#2B7A78",
  "Face e Insta Ads": "#E85D5D",
  "Redes Sociais Orgânicas": "#5B8C5A",
  "Email Marketing": "#4A7FB5",
  "Bilheteria": "#8B6DB0",
  "Outros canais": "#D4943A",
};

export const rawData: Record<string, Record<string, number>> = {
  "Google": {
    "NOV 2025": 0,
    "DEZ 2025": 26001.80,
    "JAN 2026": 53967.10,
    "FEV 2026": 63312.70,
    "MAR 2026": 141613.45,
    "ABR 2026": 541561.91,
  },
  "Face e Insta Ads": {
    "NOV 2025": 215344.04,
    "DEZ 2025": 62782.00,
    "JAN 2026": 124864.90,
    "FEV 2026": 99723.80,
    "MAR 2026": 247560.66,
    "ABR 2026": 675463.94,
  },
  "Redes Sociais Orgânicas": {
    "NOV 2025": 89588.76,
    "DEZ 2025": 15308.70,
    "JAN 2026": 10751.50,
    "FEV 2026": 19380.35,
    "MAR 2026": 33750.04,
    "ABR 2026": 280822.00,
  },
  "Email Marketing": {
    "NOV 2025": 40799.00,
    "DEZ 2025": 2865.50,
    "JAN 2026": 1859.00,
    "FEV 2026": 346.50,
    "MAR 2026": 275.00,
    "ABR 2026": 2292.40,
  },
  "Bilheteria": {
    "NOV 2025": 0,
    "DEZ 2025": 0,
    "JAN 2026": 0,
    "FEV 2026": 0,
    "MAR 2026": 0,
    "ABR 2026": 245678.00,
  },
  "Outros canais": {
    "NOV 2025": 18416.20,
    "DEZ 2025": 14421.00,
    "JAN 2026": 24392.50,
    "FEV 2026": 36279.10,
    "MAR 2026": 88570.35,
    "ABR 2026": 156835.75,
  },
};

export const statedRowTotals: Record<string, number> = {
  "Google": 826456.96,
  "Face e Insta Ads": 1425739.34,
  "Redes Sociais Orgânicas": 449601.35,
  "Email Marketing": 48437.40,
  "Bilheteria": 245678.00,
  "Outros canais": 338914.90,
};

export const statedColumnTotals: Record<string, number> = {
  "NOV 2025": 364148.00,
  "DEZ 2025": 121379.00,
  "JAN 2026": 215835.00,
  "FEV 2026": 219042.50,
  "MAR 2026": 511769.50,
  "ABR 2026": 1902654.00,
};

export const statedGrandTotal = 3334828.00;

// Computed verification
export function verifyRows(): ChannelData[] {
  const channels = Object.keys(rawData);
  return channels.map((channel) => {
    const values = rawData[channel];
    const calculatedTotal = MONTHS.reduce((sum, m) => sum + (values[m] || 0), 0);
    const statedTotal = statedRowTotals[channel];
    const diff = Math.round((calculatedTotal - statedTotal) * 100) / 100;
    return {
      channel,
      values,
      total: statedTotal,
      calculatedTotal,
      isCorrect: Math.abs(diff) < 0.01,
      difference: diff,
    };
  });
}

export function verifyColumns(): MonthVerification[] {
  const channels = Object.keys(rawData);
  return MONTHS.map((month) => {
    const calculated = channels.reduce((sum, ch) => sum + (rawData[ch][month] || 0), 0);
    const stated = statedColumnTotals[month];
    const diff = Math.round((calculated - stated) * 100) / 100;
    return {
      month,
      stated,
      calculated,
      isCorrect: Math.abs(diff) < 0.01,
      difference: diff,
    };
  });
}

export function verifyGrandTotal() {
  const channels = Object.keys(rawData);
  const recalculated = channels.reduce(
    (total, ch) => total + MONTHS.reduce((sum, m) => sum + (rawData[ch][m] || 0), 0),
    0
  );
  const byRows = Object.values(statedRowTotals).reduce((a, b) => a + b, 0);
  const byCols = Object.values(statedColumnTotals).reduce((a, b) => a + b, 0);
  return {
    stated: statedGrandTotal,
    recalculated,
    byRows,
    byCols,
    diffRecalc: Math.round((recalculated - statedGrandTotal) * 100) / 100,
    diffRows: Math.round((byRows - statedGrandTotal) * 100) / 100,
    diffCols: Math.round((byCols - statedGrandTotal) * 100) / 100,
  };
}

export function getChannelShares() {
  const channels = Object.keys(rawData);
  const total = channels.reduce(
    (t, ch) => t + MONTHS.reduce((s, m) => s + (rawData[ch][m] || 0), 0),
    0
  );
  return channels.map((ch) => {
    const chTotal = MONTHS.reduce((s, m) => s + (rawData[ch][m] || 0), 0);
    return {
      channel: ch,
      total: chTotal,
      share: Math.round((chTotal / total) * 10000) / 100,
    };
  }).sort((a, b) => b.share - a.share);
}

export function getMonthlyGrowth() {
  const channels = Object.keys(rawData);
  const monthlyTotals = MONTHS.map((m) =>
    channels.reduce((s, ch) => s + (rawData[ch][m] || 0), 0)
  );
  return MONTHS.map((m, i) => ({
    month: m,
    total: monthlyTotals[i],
    growth: i === 0 ? null : Math.round(((monthlyTotals[i] - monthlyTotals[i - 1]) / monthlyTotals[i - 1]) * 10000) / 100,
  }));
}

export function getPaidVsOrganic() {
  const paid = ["Google", "Face e Insta Ads"];
  const organic = ["Redes Sociais Orgânicas", "Email Marketing"];
  const other = ["Bilheteria", "Outros canais"];
  const channels = Object.keys(rawData);
  const grandTotal = channels.reduce(
    (t, ch) => t + MONTHS.reduce((s, m) => s + (rawData[ch][m] || 0), 0),
    0
  );

  const calc = (list: string[]) =>
    list.reduce((t, ch) => t + MONTHS.reduce((s, m) => s + (rawData[ch][m] || 0), 0), 0);

  const paidTotal = calc(paid);
  const organicTotal = calc(organic);
  const otherTotal = calc(other);

  return [
    { category: "Canais Pagos", total: paidTotal, pct: Math.round((paidTotal / grandTotal) * 10000) / 100, channels: paid },
    { category: "Canais Orgânicos", total: organicTotal, pct: Math.round((organicTotal / grandTotal) * 10000) / 100, channels: organic },
    { category: "Outros", total: otherTotal, pct: Math.round((otherTotal / grandTotal) * 10000) / 100, channels: other },
  ];
}

export function formatBRL(value: number): string {
  if (value === 0) return "-";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

export function formatCompact(value: number): string {
  if (value >= 1000000) return `R$ ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `R$ ${(value / 1000).toFixed(0)}K`;
  return formatBRL(value);
}
