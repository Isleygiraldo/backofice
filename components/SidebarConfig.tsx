'use client';

import Link from 'next/link';
import { useSidebar } from './SidebarContext';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SubItem {
  label: string;
  href: string;
}

interface ConfigItem {
  icon: string;
  label: string;
  children: SubItem[];
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
          { label: 'Informações', href: '/configuracoes/plataforma' },
          { label: 'URL', href: '/configuracoes/plataforma/url' },
          { label: 'Provedores', href: '/configuracoes/plataforma/provedores' },
          { label: 'Permissões', href: '/configuracoes/plataforma/permissoes' },
          { label: 'Preferências', href: '/configuracoes/plataforma/preferencias' },
          { label: 'Código', href: '/configuracoes/plataforma/codigo' },
          { label: 'SIGAP', href: '/configuracoes/plataforma/sigap' },
        ],
      },
      {
        icon: 'ti-palette',
        label: 'Branding',
        children: [
          { label: 'Marca', href: '/configuracoes/branding' },
          { label: 'Logos', href: '/configuracoes/branding/logos' },
          { label: 'Cores', href: '/configuracoes/branding/cores' },
        ],
      },
      {
        icon: 'ti-search',
        label: 'SEO',
        children: [
          { label: 'Informações', href: '/configuracoes/seo' },
          { label: 'Sitemap', href: '/configuracoes/seo/sitemap' },
          { label: 'Código', href: '/configuracoes/seo/codigo' },
        ],
      },
      {
        icon: 'ti-share',
        label: 'Social',
        children: [
          { label: 'Redes Sociais', href: '/configuracoes/social' },
        ],
      },
      {
        icon: 'ti-article',
        label: 'CMS',
        children: [
          { label: 'Conteúdo', href: '/configuracoes/cms' },
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
          { label: 'Login', href: '/configuracoes/seguranca' },
          { label: 'Cadastro', href: '/configuracoes/seguranca/cadastro' },
          { label: 'GSE', href: '/configuracoes/seguranca/gse' },
          { label: 'KYC', href: '/configuracoes/seguranca/kyc' },
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
        icon: 'ti-briefcase',
        label: 'Cargos',
        children: [
          { label: 'Cargos', href: '/configuracoes/cargos' },
        ],
      },
      {
        icon: 'ti-user-check',
        label: 'Operadores',
        children: [
          { label: 'Operadores', href: '/configuracoes/operadores' },
        ],
      },
      {
        icon: 'ti-key',
        label: 'Autorizações',
        children: [
          { label: 'Autorizações', href: '/configuracoes/autorizacoes' },
        ],
      },
      {
        icon: 'ti-ban',
        label: 'Bloqueios',
        children: [
          { label: 'Bloqueios', href: '/configuracoes/bloqueios' },
        ],
      },
    ],
  },
];

export default function SidebarConfig() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [tabletActiveItem, setTabletActiveItem] = useState<ConfigItem | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordions(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const handleTabletClick = (item: ConfigItem) => {
    if (item.children.length > 1) {
      setTabletActiveItem(tabletActiveItem?.label === item.label ? null : item);
    }
  };

  const isItemActive = (item: ConfigItem) => {
    return item.children.some(child => pathname === child.href);
  };

  const isExpanded = (item: ConfigItem) => {
    return openAccordions.includes(item.label) || isItemActive(item);
  };

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/65 z-[99]"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Configurações */}
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
          <div className="text-[15px] md:text-sm font-bold text-[var(--md-sys-color-primary)] tracking-tight">
            BPX
          </div>
          <div className="text-[9px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[1.2px] mt-1 md:hidden lg:block">
            Pix365 · Backoffice
          </div>
        </div>

        {/* Back button */}
        <Link
          href="/"
          onClick={closeSidebar}
          className="flex items-center gap-2.5 px-4 h-9 border-b border-[var(--md-sys-color-outline-variant)] mb-2 text-xs font-medium text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)] transition-all md:justify-center lg:justify-start"
        >
          <i className="ti ti-arrow-left text-base flex-shrink-0" />
          <span className="md:hidden lg:inline">Backoffice</span>
        </Link>

        {/* Config sections with accordion */}
        {configSections.map((section) => (
          <div key={section.title} className="py-1">
            <div className="text-[9px] font-semibold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] px-7 py-2 md:h-0 md:opacity-0 md:overflow-hidden lg:h-auto lg:opacity-100">
              {section.title}
            </div>
            {section.items.map((item) => {
              const isActive = isItemActive(item);
              const hasMultipleChildren = item.children.length > 1;
              const expanded = isExpanded(item);

              return (
                <div key={item.label}>
                  {hasMultipleChildren ? (
                    <div className="relative">
                      <div className="group/parent">
                        {/* Accordion header */}
                        <button
                          onClick={() => {
                            toggleAccordion(item.label);
                            handleTabletClick(item);
                          }}
                          className={`w-full flex items-center gap-2.5 h-9 my-0.5 rounded-full text-xs font-medium transition-all relative
                            px-3 mx-2 md:w-10 md:h-10 md:mx-auto md:px-0 lg:w-auto lg:mx-2 lg:px-3
                            md:justify-center lg:justify-start
                            ${isActive || tabletActiveItem?.label === item.label
                              ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'
                              : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
                          }`}
                        >
                          <i className={`ti ${item.icon} text-base flex-shrink-0`} />
                          <span className="md:hidden lg:inline flex-1 text-left">{item.label}</span>
                          <i className={`ti ti-chevron-down text-xs transition-transform md:hidden lg:inline ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      {/* Accordion content mobile + desktop */}
                      {expanded && (
                        <div className="ml-7 mr-2 border-l border-[var(--md-sys-color-outline-variant)] pl-2 my-1 md:hidden lg:block">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeSidebar}
                              className={`flex items-center h-7 px-2 my-0.5 rounded-full text-xs transition-all ${
                                pathname === child.href
                                  ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-medium'
                                  : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Link direto quando tem só 1 filho */
                    <Link
                      href={item.children[0].href}
                      onClick={closeSidebar}
                      className={`group flex items-center gap-2.5 h-9 my-0.5 rounded-full text-xs font-medium transition-all relative
                        px-3 mx-2 md:w-10 md:h-10 md:mx-auto md:px-0 lg:w-auto lg:mx-2 lg:px-3
                        md:justify-center lg:justify-start
                        ${pathname === item.children[0].href
                          ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'
                          : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
                      }`}
                    >
                      <i className={`ti ${item.icon} text-base flex-shrink-0`} />
                      <span className="md:hidden lg:inline">{item.label}</span>

                      {/* Tooltip tablet */}
                      <span className="hidden md:block lg:hidden absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] text-xs px-2.5 py-1.5 rounded-md border border-[var(--md-sys-color-outline-variant)] whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Secondary sidebar tablet - subitens */}
      {tabletActiveItem && (
        <>
          {/* Overlay para fechar */}
          <div
            className="hidden md:block lg:hidden fixed inset-0 z-[98]"
            onClick={() => setTabletActiveItem(null)}
          />

          {/* Sidebar secundária */}
          <nav className="hidden md:block lg:hidden fixed left-14 top-0 h-screen w-[200px] bg-[var(--md-sys-color-surface-container)] border-r border-[var(--md-sys-color-outline-variant)] shadow-lg z-[99] overflow-y-auto py-2">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--md-sys-color-outline-variant)] mb-2">
              <div className="flex items-center gap-2">
                <i className={`ti ${tabletActiveItem.icon} text-base text-[var(--md-sys-color-primary)]`} />
                <span className="text-sm font-medium text-[var(--md-sys-color-on-surface)]">{tabletActiveItem.label}</span>
              </div>
              <button
                onClick={() => setTabletActiveItem(null)}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-[rgba(202,196,208,0.08)] transition-colors"
              >
                <i className="ti ti-x text-sm text-[var(--md-sys-color-on-surface-variant)]" />
              </button>
            </div>

            {/* Lista de subitens */}
            {tabletActiveItem.children?.map(child => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => {
                  setTabletActiveItem(null);
                  closeSidebar();
                }}
                className={`flex items-center h-9 px-4 my-0.5 text-xs transition-all ${
                  pathname === child.href
                    ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] font-medium'
                    : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
                }`}
              >
                {child.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </>
  );
}
