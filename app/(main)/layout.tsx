'use client';

import { SidebarProvider } from "@/components/SidebarContext";
import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Breadcrumbs from "@/app/_components/layout/Breadcrumbs";
import ColorLoader from "@/app/_components/ColorLoader";
import { useEffect } from "react";

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-content-theme', theme);
  }, [theme]);

  return (
    <>
      <ColorLoader />
      <div className="h-screen flex overflow-hidden">
        <div className="flex overflow-hidden">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <Topbar />
          <div className="px-6 pt-3 pb-2 bg-[var(--content-bg)]">
            <Breadcrumbs />
          </div>
          <main className="flex-1 overflow-y-auto bg-[var(--content-bg)] text-[var(--content-text)] transition-colors duration-200">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <MainLayoutContent>{children}</MainLayoutContent>
      </ThemeProvider>
    </SidebarProvider>
  );
}
