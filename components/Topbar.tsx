'use client';

import { useSidebar } from './SidebarContext';
import { useTheme } from './ThemeContext';

export default function Topbar() {
  const { toggleSidebar } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-[46px] bg-[var(--md-sys-color-surface-container)] border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-4 md:px-6 gap-2.5">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-1.5 rounded-md bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.1)] hover:text-[var(--md-sys-color-on-surface)] transition-colors"
        aria-label="Menu"
      >
        <i className="ti ti-menu-2 text-xl" />
      </button>

      <div className="flex items-center gap-1.5 text-xs md:text-xs text-[var(--md-sys-color-on-surface-variant)] min-w-0 overflow-hidden">
        <i className="ti ti-home text-[13px]" />
        <span className="flex-shrink-0">›</span>
        <span className="text-[var(--md-sys-color-on-surface)] truncate">Dashboard</span>
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="ml-auto p-1.5 rounded-full hover:bg-[rgba(202,196,208,0.08)] transition-colors"
        aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        title={`Tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      >
        <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'} text-lg text-[var(--md-sys-color-on-surface-variant)]`} />
      </button>
    </div>
  );
}
