'use client';

import { useSidebar } from './SidebarContext';
import { useTheme } from './ThemeContext';

export default function Topbar() {
  const { toggleSidebar } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-14 bg-[var(--content-surface)] border-b border-[var(--content-border)] flex items-center px-6 gap-4">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-lg hover:bg-[var(--content-hover)] transition-colors"
        aria-label="Menu"
      >
        <i className="ti ti-menu-2 text-xl text-[var(--content-text)]" />
      </button>

      <img
        src="/palpitefinal.svg"
        alt="Palpite"
        className="h-8"
      />

      <div className="ml-auto flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-[var(--content-hover)] transition-colors"
          aria-label="Theme"
        >
          <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'} text-xl text-[var(--content-text-secondary)]`} />
        </button>

        <button className="p-2 rounded-lg hover:bg-[var(--content-hover)] transition-colors relative">
          <i className="ti ti-activity text-xl text-[var(--content-text-secondary)]" />
        </button>

        <button className="p-2 rounded-lg hover:bg-[var(--content-hover)] transition-colors relative">
          <i className="ti ti-bell text-xl text-[var(--content-text-secondary)]" />
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-[var(--content-border)]">
          <div className="w-8 h-8 rounded-full bg-[var(--md-sys-color-secondary)] flex items-center justify-center text-white body-md font-medium">
            DA
          </div>
          <div className="hidden md:block">
            <div className="body-md font-medium text-[var(--content-text)]">Davi</div>
            <div className="body-sm text-[var(--content-text-secondary)]">Administrador</div>
          </div>
        </div>
      </div>
    </div>
  );
}
