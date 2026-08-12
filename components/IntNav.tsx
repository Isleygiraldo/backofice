'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  title?: string;
  items: NavItem[];
}

interface IntNavProps {
  groups: NavGroup[];
  backButton?: {
    label: string;
    href: string;
  };
}

export default function IntNav({ groups, backButton }: IntNavProps) {
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-[190px] md:min-w-[190px] bg-[var(--md-sys-color-surface-container)] border-b md:border-b-0 md:border-r border-[var(--md-sys-color-outline-variant)] overflow-x-auto md:overflow-y-auto md:overflow-x-hidden py-0 md:py-2 flex-shrink-0">
      {/* Back button (desktop only) */}
      {backButton && (
        <Link
          href={backButton.href}
          className="hidden md:flex items-center gap-2.5 px-4 h-9 border-b border-[var(--md-sys-color-outline-variant)] mb-2 body-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)] transition-all"
        >
          <i className="ti ti-arrow-left text-base flex-shrink-0" />
          <span>{backButton.label}</span>
        </Link>
      )}

      {/* Mobile: horizontal tabs */}
      <div className="flex md:hidden">
        {groups.flatMap(group => group.items).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3.5 py-2.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0 ${
              pathname === item.href
                ? 'text-[var(--md-sys-color-primary)] border-[var(--md-sys-color-primary)]'
                : 'text-[var(--md-sys-color-on-surface-variant)] border-transparent hover:text-[var(--md-sys-color-on-surface)]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop: vertical nav with groups */}
      <div className="hidden md:block">
        {groups.map((group, i) => (
          <div key={i}>
            {group.title && (
              <div className="text-[9px] font-semibold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] px-[18px] pt-2.5 pb-1">
                {group.title}
              </div>
            )}
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center h-8 px-2.5 mx-2 my-0.5 rounded-full text-xs font-medium transition-all ${
                  pathname === item.href
                    ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'
                    : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
