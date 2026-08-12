'use client';

import Link from 'next/link';
import { useSidebar } from './SidebarContext';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface SubItem {
  label: string;
  href: string;
}

interface ConfigItem {
  icon: string;
  label: string;
  children: SubItem[];
  admin?: boolean;
}

interface ConfigSection {
  title: string;
  items: ConfigItem[];
}

const configSections: ConfigSection[] = [
  {
    title: 'Plataforma',
    items: [
      {
        icon: 'ti-settings',
        label: 'Plataforma',
        children: [
          { label: 'CMS', href: '/configuracoes/cms' },
          { label: 'Social', href: '/configuracoes/social' },
          { label: 'SEO', href: '/configuracoes/seo' },
          { label: 'Branding', href: '/configuracoes/branding' },
          { label: 'Informações', href: '/configuracoes/plataforma' },
          { label: 'URL', href: '/configuracoes/plataforma/url' },
          { label: 'Provedores', href: '/configuracoes/plataforma/provedores' },
          { label: 'Permissões', href: '/configuracoes/plataforma/permissoes' },
          { label: 'Preferências', href: '/configuracoes/plataforma/preferencias' },
          { label: 'Código', href: '/configuracoes/plataforma/codigo' },
        ],
      },
    ],
  },
  {
    title: 'Aparência',
    items: [
      {
        icon: 'ti-palette',
        label: 'Cores',
        children: [
          { label: 'Cores', href: '/configuracoes/cores' },
        ],
      },
    ],
  },
  {
    title: 'Sistema',
    items: [
      {
        icon: 'ti-chart-line',
        label: 'Analytics',
        children: [
          { label: 'Analytics', href: '/configuracoes/analytics' },
        ],
      },
      {
        icon: 'ti-shield-lock',
        label: 'Segurança',
        children: [
          { label: 'Segurança', href: '/configuracoes/seguranca' },
        ],
      },
      {
        icon: 'ti-database',
        label: 'Arquivo',
        children: [
          { label: 'Arquivo', href: '/configuracoes/arquivo' },
        ],
      },
      {
        icon: 'ti-map-pin',
        label: 'Geolocalização',
        children: [
          { label: 'Geolocalização', href: '/configuracoes/geolocalizacao' },
        ],
      },
    ],
  },
  {
    title: 'Acesso',
    items: [
      {
        icon: 'ti-shield-lock',
        label: 'ADM',
        children: [
          { label: 'Cargos', href: '/configuracoes/cargos' },
          { label: 'Grupos', href: '/usuarios/grupos' },
          { label: 'Operadores', href: '/configuracoes/operadores' },
          { label: 'Autorizações', href: '/configuracoes/autorizacoes' },
          { label: 'Bloqueios', href: '/configuracoes/bloqueios' },
        ],
        admin: true,
      },
    ],
  },
];

export default function SidebarConfig() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState<ConfigItem | null>(null);

  const handleItemClick = (item: ConfigItem) => {
    if (item.children.length > 1) {
      setActivePanel(activePanel?.label === item.label ? null : item);
    } else {
      setActivePanel(null);
      closeSidebar();
    }
  };

  const isItemActive = (item: ConfigItem) => {
    return item.children.some(child => pathname === child.href);
  };

  const allItems = configSections.flatMap(section => section.items);

  // Auto-open panel based on current route
  useEffect(() => {
    const currentItem = allItems.find(item => isItemActive(item));
    if (currentItem && currentItem.children.length > 1) {
      setActivePanel(currentItem);
    }
  }, [pathname]);

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/65 z-[99]"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar principal - só ícones + label */}
      <nav
        className={`
          fixed md:sticky top-0 left-0 h-screen
          w-[75px] bg-[#1D1B20]
          flex flex-col overflow-y-auto overflow-x-hidden
          transition-all duration-200 ease-in-out
          border-r border-[#2A2830]
          z-[100]
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Voltar */}
        <div className="w-full px-2 py-4 border-b border-[#2A2830]">
          <Link
            href="/"
            onClick={() => {
              setActivePanel(null);
              closeSidebar();
            }}
            className="flex flex-col items-center gap-1 py-3 rounded-lg transition-all text-[#8B8792] hover:bg-[#252329] hover:text-white"
          >
            <i className="ti ti-arrow-left text-2xl" />
            <span className="text-[9px] text-center leading-tight">Voltar</span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center py-4 gap-2">
          {allItems.map((item) => {
            const hasMultiple = item.children.length > 1;
            const singleHref = item.children.length === 1 ? item.children[0].href : null;

            return (
              <div key={item.label} className="w-full px-2">
                {hasMultiple ? (
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex flex-col items-center gap-1 py-3 rounded-lg transition-all relative ${
                      activePanel?.label === item.label || isItemActive(item)
                        ? 'bg-[#2A2830] text-white'
                        : 'text-[#8B8792] hover:bg-[#252329] hover:text-white'
                    }`}
                  >
                    <i className={`ti ${item.icon} text-2xl`} />
                    <span className="text-[9px] text-center leading-tight px-1">{item.label}</span>
                    {item.admin && (
                      <span className="absolute -top-1 -right-1 bg-[var(--md-sys-color-secondary)] text-white text-[7px] px-1 py-0.5 rounded uppercase font-bold">
                        ADM
                      </span>
                    )}
                  </button>
                ) : (
                  <Link
                    href={singleHref!}
                    onClick={() => {
                      setActivePanel(null);
                      closeSidebar();
                    }}
                    className={`flex flex-col items-center gap-1 py-3 rounded-lg transition-all relative ${
                      pathname === singleHref
                        ? 'bg-[#2A2830] text-white'
                        : 'text-[#8B8792] hover:bg-[#252329] hover:text-white'
                    }`}
                  >
                    <i className={`ti ${item.icon} text-2xl`} />
                    <span className="text-[9px] text-center leading-tight px-1">{item.label}</span>
                    {item.admin && (
                      <span className="absolute -top-1 -right-1 bg-[var(--md-sys-color-secondary)] text-white text-[7px] px-1 py-0.5 rounded uppercase font-bold">
                        ADM
                      </span>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Painel lateral com subitens */}
      {activePanel && activePanel.children.length > 1 && (
        <div className="sticky top-0 left-0 h-screen w-[240px] bg-[var(--content-surface)] border-r border-[var(--content-border)] shadow-xl z-[99] overflow-y-auto flex-shrink-0">
            <div className="p-4 border-b border-[var(--content-border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className={`ti ${activePanel.icon} text-xl text-[var(--md-sys-color-secondary)]`} />
                <span className="font-medium text-[var(--content-text)] uppercase body-sm tracking-wide">
                  {activePanel.label}
                </span>
              </div>
              <button
                onClick={() => setActivePanel(null)}
                className="p-1 hover:bg-[var(--content-hover)] rounded transition-colors"
              >
                <i className="ti ti-chevron-left text-lg text-[var(--content-text-secondary)]" />
              </button>
            </div>
            <div className="p-3 space-y-1">
              {activePanel.children.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => {
                    setActivePanel(null);
                    closeSidebar();
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    pathname === child.href
                      ? 'bg-[var(--md-sys-color-secondary)]/10 text-[var(--md-sys-color-secondary)] font-medium'
                      : 'text-[var(--content-text)] hover:bg-[var(--content-hover)]'
                  }`}
                >
                  <i className={`ti ${pathname === child.href ? 'ti-circle-filled' : 'ti-file-text'} text-base`} />
                  {child.label}
                </Link>
              ))}
            </div>
        </div>
      )}
    </>
  );
}
