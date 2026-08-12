export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="display-md text-[var(--content-text)] mb-1">Visão geral</h1>
          <p className="body-md text-[var(--content-text-secondary)]">Indicadores de cassino e esportes da plataforma.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--content-border)] hover:bg-[var(--content-hover)] transition-colors">
          <i className="ti ti-filter text-[var(--content-text)]" />
          <span className="body-md text-[var(--content-text)]">Filtrar</span>
        </button>
      </div>

      <div className="mb-6">
        <h2 className="body-md font-semibold text-[var(--content-text)] mb-4">Cassino</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Apostas"
            value="R$ 1.284.000"
            change="+4,2% vs. período anterior"
            trend="down"
            icon={<i className="ti ti-trending-down text-red-500" />}
          />
          <MetricCard
            label="Ganhos"
            value="R$ 190.000"
            change="+9,1% vs. período anterior"
            trend="down"
            icon={<i className="ti ti-trending-down text-red-500" />}
          />
          <MetricCard
            label="GGR"
            value="R$ 94.000"
            change="+8,4% vs. período anterior"
            trend="up"
            icon={<i className="ti ti-trending-up text-green-500" />}
          />
          <MetricCard
            label="Depósitos"
            value="R$ 2.4M"
            change="12.300 transações • 980 usuários"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <MetricCard label="Retiradas" value="R$ 1.8M" change="8.100 transações • 720 usuários" />
          <MetricCard label="Valor FTD" value="R$ 320k" change="AVG R$ 816" />
          <MetricCard label="Depósito Net" value="R$ 600k" />
          <MetricCard label="Usuários bloqueados" value="32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <MetricCard label="Crédito concedido" value="R$ 45k" />
          <MetricCard label="Bônus referência" value="R$ 12k" />
        </div>
      </div>

      <div>
        <h2 className="body-md font-semibold text-[var(--content-text)] mb-4">Esportes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Apostas"
            value="R$ 842.000"
            change="+1,9% vs. período anterior"
            trend="up"
            icon={<i className="ti ti-trending-up text-green-500" />}
          />
          <MetricCard
            label="Ganhos"
            value="R$ 770.000"
            change="-0,8% vs. período anterior"
            trend="down"
            icon={<i className="ti ti-trending-down text-red-500" />}
          />
          <MetricCard
            label="GGR"
            value="R$ 72.000"
            change="+5,2% vs. período anterior"
            trend="up"
            icon={<i className="ti ti-trending-up text-green-500" />}
          />
          <MetricCard
            label="Apostas (bônus)"
            value="R$ 60k"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <MetricCard label="Ganhos (bônus)" value="R$ 48k" />
          <MetricCard label="Saldo de bônus" value="R$ 12k" />
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  change,
  trend,
  icon,
}: {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--content-surface)] border border-[var(--content-border)] rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <span className="body-sm text-[var(--content-text-secondary)]">{label}</span>
        {icon}
      </div>
      <div className="display-md text-[var(--content-text)] mb-1">{value}</div>
      {change && (
        <div className="body-sm text-[var(--content-text-secondary)]">{change}</div>
      )}
    </div>
  );
}
