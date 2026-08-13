'use client';

import Link from 'next/link';
import { useSidebar } from './SidebarContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  icon: string;
  label: string;
  href?: string;
  children?: SubItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'Produtos',
    items: [
      {
        icon: 'ti-device-gamepad-2',
        label: 'Cassino',
        children: [
          { label: 'Dashboard', href: '/cassino' },
          { label: 'Jogos', href: '/cassino/jogos' },
          { label: 'Jogos ao vivo', href: '/cassino/jogos-ao-vivo' },
          { label: 'Fornecedores', href: '/cassino/fornecedores' },
          { label: 'Categorias', href: '/cassino/categorias' },
          { label: 'Bônus', href: '/cassino/bonus' },
          { label: 'Relatório', href: '/cassino/relatorio' },
        ]
      },
      { icon: 'ti-trophy', label: 'Esportes', href: '/esportes' },
    ],
  },
  {
    title: 'Operação',
    items: [
      { icon: 'ti-users', label: 'Usuários', href: '/usuarios' },
      { icon: 'ti-affiliate', label: 'Afiliados', href: '/afiliados' },
      { icon: 'ti-cash', label: 'Financeiro', href: '/financeiro' },
      { icon: 'ti-activity', label: 'Operação', href: '/operacao' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { icon: 'ti-message-2', label: 'Comunicação', href: '/comunicacao' },
    ],
  },
  {
    title: 'Gestão',
    items: [
      { icon: 'ti-radar', label: 'Monitoramento', href: '/monitoramento' },
      { icon: 'ti-shield-check', label: 'Sistema & Compliance', href: '/sistema-compliance' },
    ],
  },
  {
    title: 'Regulatório',
    items: [
      { icon: 'ti-building-bank', label: 'SIGAP', href: '/sigap' },
    ],
  },
];

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/65 z-[99] md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Pull-tab mobile (quando sidebar fechada) */}
      {!isOpen && (
        <button
          onClick={() => {}}
          className="md:hidden fixed left-0 top-1/2 -translate-y-1/2 w-3.5 h-11 bg-[var(--md-sys-color-surface-container)] rounded-r-md border border-l-0 border-[var(--md-sys-color-outline-variant)] z-[98] flex items-center justify-center hover:w-[18px] transition-all after:content-['›'] after:text-[var(--md-sys-color-on-surface-variant)] after:text-[13px]"
          aria-label="Abrir menu"
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed md:sticky top-0 left-0 h-screen
          w-[210px] bg-[var(--md-sys-color-surface)]
          flex flex-col overflow-y-auto overflow-x-hidden
          transition-all duration-200 ease-in-out
          shadow-[1px_0_0_var(--md-sys-color-outline-variant)]
          z-[100]
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:w-14 lg:w-[210px]
        `}
      >
        {/* Logo */}
        <div className="px-4 py-5 border-b border-[var(--md-sys-color-outline-variant)] md:flex md:justify-center lg:block">
          <div className="text-[15px] md:body-md font-bold text-[var(--md-sys-color-primary)] tracking-tight">
            BPX
          </div>
          <div className="text-[9px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[1.2px] mt-1 md:hidden lg:block">
            Pix365 · Backoffice
          </div>
        </div>

        {/* Nav sections */}
        {navSections.map((section) => (
          <div key={section.title} className="py-3 md:py-2">
            <div className="text-[9px] font-semibold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] px-7 pb-1 md:h-0 md:opacity-0 md:overflow-hidden lg:h-auto lg:opacity-100">
              {section.title}
            </div>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href || '/'}
                onClick={closeSidebar}
                className="group flex items-center gap-2.5 px-3 h-9 mx-2 my-0.5 rounded-full body-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)] transition-all md:justify-center md:px-0 lg:justify-start lg:px-3 relative"
              >
                <i className={`ti ${item.icon} text-base md:text-lg flex-shrink-0`} />
                <span className="md:hidden lg:inline">{item.label}</span>

                {/* Tooltip tablet */}
                <span className="hidden md:block lg:hidden absolute left-14 bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] body-sm px-2.5 py-1.5 rounded-md border border-[var(--md-sys-color-outline-variant)] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        ))}

        {/* Bottom config */}
        <div className="mt-auto pb-2">
          <div className="h-px bg-[var(--md-sys-color-outline-variant)] mx-4 my-2 md:mx-2" />
          <Link
            href="/configuracoes"
            onClick={closeSidebar}
            className="group flex items-center gap-2.5 px-3 h-9 mx-2 my-0.5 rounded-full body-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)] transition-all md:justify-center md:px-0 lg:justify-start lg:px-3 relative"
          >
            <i className="ti ti-settings text-base md:text-lg flex-shrink-0" />
            <span className="md:hidden lg:inline">Configurações</span>

            {/* Tooltip tablet */}
            <span className="hidden md:block lg:hidden absolute left-14 bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] body-sm px-2.5 py-1.5 rounded-md border border-[var(--md-sys-color-outline-variant)] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Configurações
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
