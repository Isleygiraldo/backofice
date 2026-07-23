'use client';

import { SidebarProvider } from '@/components/SidebarContext';
import { ThemeProvider, useTheme } from '@/components/ThemeContext';
import SidebarConfig from '@/components/SidebarConfig';
import Topbar from '@/components/Topbar';
import { useEffect } from 'react';

function ConfigLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-content-theme', theme);
  }, [theme]);

  return (
    <div className="h-screen flex overflow-hidden">
      <SidebarConfig />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-[var(--content-bg)] text-[var(--content-text)] transition-colors duration-200">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function ConfiguracoesLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <ConfigLayoutContent>{children}</ConfigLayoutContent>
      </ThemeProvider>
    </SidebarProvider>
  );
}
