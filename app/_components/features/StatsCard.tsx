import { Card } from '../ui';

interface StatsCardProps {
  label: string;
  valor: string;
  icon: string;
  trend?: string;
  subtitle?: string;
  accent?: boolean;
  critical?: boolean;
  delay?: number;
}

export function StatsCard({
  label,
  valor,
  icon,
  trend,
  subtitle,
  accent = false,
  critical = false,
  delay = 0,
}: StatsCardProps) {
  const bgClass = accent
    ? 'bg-[var(--md-sys-color-secondary)]'
    : critical
    ? 'bg-red-500'
    : 'bg-[var(--content-surface)]';

  return (
    <Card
      className={`p-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_${delay}s_forwards]`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-[0.75rem]">
        <span className="label-caps text-[var(--content-text-secondary)]">{label}</span>
        <span className="material-symbols-outlined text-[var(--content-text-secondary)]">
          {icon}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="headline-lg text-[var(--content-text)]">{valor}</h3>
          {subtitle && (
            <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
              {subtitle}
            </p>
          )}
        </div>
        {trend && (
          <span
            className={`px-[0.5rem] py-[0.125rem] shape-xs label-caps ${bgClass} text-white`}
            style={{ fontSize: '9px' }}
          >
            {trend}
          </span>
        )}
      </div>
    </Card>
  );
}
