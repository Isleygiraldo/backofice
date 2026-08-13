interface BreadcrumbItem {
  label: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-[0.375rem] label-caps text-[var(--content-text-secondary)] mb-[0.5rem] opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-[0.375rem]">
          <span className={item.active ? 'text-[var(--md-sys-color-secondary)]' : ''}>
            {item.label}
          </span>
          {idx < items.length - 1 && (
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          )}
        </div>
      ))}
    </nav>
  );
}
