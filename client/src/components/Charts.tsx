// Design: Editorial Data Journalism — Charts with muted palette and annotations
import {
  rawData,
  MONTHS,
  MONTH_SHORT,
  CHANNEL_COLORS,
  formatBRL,
  formatCompact,
  getChannelShares,
  getMonthlyGrowth,
  getPaidVsOrganic,
} from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";
import AnimatedSection from "./AnimatedSection";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border shadow-lg p-4 text-sm max-w-xs">
      <p className="font-semibold text-foreground mb-2">{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center justify-between gap-4 py-0.5">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground">{entry.name || entry.dataKey}</span>
          </span>
          <span className="stat-number font-medium">{formatBRL(entry.value)}</span>
        </div>
      ))}
    </div>
  );
};

// 1. Evolução Mensal do Faturamento (Area Chart)
export function MonthlyEvolutionChart() {
  const growth = getMonthlyGrowth();
  const chartData = growth.map((g, i) => ({
    name: MONTH_SHORT[i],
    total: g.total,
    growth: g.growth,
  }));

  return (
    <AnimatedSection>
      <div className="mb-2">
        <h3 className="text-xl font-serif">Evolução Mensal do Faturamento</h3>
        <p className="text-sm text-muted-foreground mt-1">Faturamento total por mês — Nov 2025 a Abr 2026</p>
      </div>
      <div className="h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B7A78" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2B7A78" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e0d8" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#8a8580" }} axisLine={{ stroke: "#d4cfc8" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8a8580" }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCompact(v)} width={80} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="total"
              stroke="#2B7A78"
              strokeWidth={2.5}
              fill="url(#tealGrad)"
              name="Faturamento"
              dot={{ r: 4, fill: "#2B7A78", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, fill: "#2B7A78", strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </AnimatedSection>
  );
}

// 2. Faturamento por Canal (Stacked Bar)
export function ChannelStackedBarChart() {
  const channels = Object.keys(rawData);
  const chartData = MONTHS.map((m, i) => {
    const entry: any = { name: MONTH_SHORT[i] };
    channels.forEach((ch) => {
      entry[ch] = rawData[ch][m] || 0;
    });
    return entry;
  });

  return (
    <AnimatedSection>
      <div className="mb-2">
        <h3 className="text-xl font-serif">Faturamento por Canal e Mês</h3>
        <p className="text-sm text-muted-foreground mt-1">Composição do faturamento mensal por canal de origem</p>
      </div>
      <div className="h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e0d8" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#8a8580" }} axisLine={{ stroke: "#d4cfc8" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8a8580" }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCompact(v)} width={80} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }}
            />
            {channels.map((ch) => (
              <Bar key={ch} dataKey={ch} stackId="a" fill={CHANNEL_COLORS[ch]} radius={0} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AnimatedSection>
  );
}

// 3. Participação por Canal (Pie Chart)
export function ChannelSharePieChart() {
  const shares = getChannelShares();
  const pieData = shares.map((s) => ({
    name: s.channel,
    value: s.total,
    pct: s.share,
  }));

  const renderLabel = ({ name, pct }: any) => {
    if (pct < 5) return "";
    return `${pct}%`;
  };

  return (
    <AnimatedSection>
      <div className="mb-2">
        <h3 className="text-xl font-serif">Participação por Canal</h3>
        <p className="text-sm text-muted-foreground mt-1">Distribuição percentual do faturamento total por canal</p>
      </div>
      <div className="h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={50}
              dataKey="value"
              label={renderLabel}
              labelLine={false}
              stroke="#FAF8F5"
              strokeWidth={2}
            >
              {pieData.map((entry) => (
                <Cell key={entry.name} fill={CHANNEL_COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => formatBRL(value)}
              contentStyle={{ fontSize: "13px", border: "1px solid #d4cfc8", background: "#FDFCFA" }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </AnimatedSection>
  );
}

// 4. Evolução por Canal (Line Chart)
export function ChannelEvolutionLineChart() {
  const channels = Object.keys(rawData);
  const chartData = MONTHS.map((m, i) => {
    const entry: any = { name: MONTH_SHORT[i] };
    channels.forEach((ch) => {
      entry[ch] = rawData[ch][m] || 0;
    });
    return entry;
  });

  return (
    <AnimatedSection>
      <div className="mb-2">
        <h3 className="text-xl font-serif">Evolução por Canal</h3>
        <p className="text-sm text-muted-foreground mt-1">Trajetória individual de cada canal ao longo dos 6 meses</p>
      </div>
      <div className="h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e0d8" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#8a8580" }} axisLine={{ stroke: "#d4cfc8" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8a8580" }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCompact(v)} width={80} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="line"
              iconSize={16}
              wrapperStyle={{ fontSize: "12px", paddingTop: "12px" }}
            />
            {channels.map((ch) => (
              <Line
                key={ch}
                type="monotone"
                dataKey={ch}
                stroke={CHANNEL_COLORS[ch]}
                strokeWidth={2}
                dot={{ r: 3, fill: CHANNEL_COLORS[ch] }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </AnimatedSection>
  );
}

// 5. Pagos vs Orgânicos (Horizontal Bar)
export function PaidVsOrganicChart() {
  const data = getPaidVsOrganic();
  const COLORS = ["#2B7A78", "#5B8C5A", "#D4943A"];

  return (
    <AnimatedSection>
      <div className="mb-2">
        <h3 className="text-xl font-serif">Canais Pagos vs. Orgânicos</h3>
        <p className="text-sm text-muted-foreground mt-1">Comparação entre investimento pago, orgânico e outros canais</p>
      </div>
      <div className="space-y-4 mt-6">
        {data.map((d, i) => (
          <div key={d.category} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{d.category}</span>
              <span className="stat-number text-muted-foreground">
                {formatBRL(d.total)} <span className="text-xs">({d.pct}%)</span>
              </span>
            </div>
            <div className="w-full bg-secondary rounded-sm h-6 overflow-hidden">
              <div
                className="h-full rounded-sm transition-all duration-1000 ease-out"
                style={{
                  width: `${d.pct}%`,
                  backgroundColor: COLORS[i],
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground">{d.channels.join(", ")}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
