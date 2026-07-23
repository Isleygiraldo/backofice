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
      {
        icon: 'ti-trophy',
        label: 'Esportes',
        children: [
          { label: 'Dashboard', href: '/esportes' },
          { label: 'Eventos', href: '/esportes/eventos' },
          { label: 'Mercados', href: '/esportes/mercados' },
          { label: 'Relatório', href: '/esportes/relatorio' },
        ]
      },
    ],
  },
  {
    title: 'Operação',
    items: [
      {
        icon: 'ti-users',
        label: 'Usuários',
        children: [
          { label: 'Lista', href: '/usuarios' },
          { label: 'Perfil', href: '/usuarios/perfil' },
          { label: 'Grupos', href: '/usuarios/grupos' },
        ]
      },
      { icon: 'ti-affiliate', label: 'Afiliados', href: '/afiliados' },
      {
        icon: 'ti-cash',
        label: 'Financeiro',
        children: [
          { label: 'Dashboard', href: '/financeiro' },
          { label: 'Depósitos', href: '/financeiro/depositos' },
          { label: 'Saques', href: '/financeiro/saques' },
          { label: 'Transações', href: '/financeiro/transacoes' },
        ]
      },
      { icon: 'ti-activity', label: 'Operação', href: '/operacao' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      {
        icon: 'ti-message-2',
        label: 'Comunicação',
        children: [
          { label: 'Dashboard', href: '/comunicacao' },
          { label: 'Campanhas', href: '/comunicacao/campanhas' },
          { label: 'Templates', href: '/comunicacao/templates' },
        ]
      },
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
  const pathname = usePathname();
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [tabletActiveItem, setTabletActiveItem] = useState<NavItem | null>(null);

  const toggleAccordion = (label: string) => {
    setOpenAccordions(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const handleTabletClick = (item: NavItem) => {
    if (item.children) {
      setTabletActiveItem(tabletActiveItem?.label === item.label ? null : item);
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.children) return item.children.some(child => pathname === child.href);
    return false;
  };

  const isExpanded = (item: NavItem) => {
    if (!item.children) return false;
    return openAccordions.includes(item.label) || isItemActive(item);
  };

  const isConfigActive = () => pathname.startsWith('/configuracoes');

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/65 z-[99]"
          onClick={closeSidebar}
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
          <div className="text-[15px] md:text-sm font-bold text-[var(--md-sys-color-primary)] tracking-tight">
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
              <div key={item.label}>
                {/* Item com ou sem children */}
                {item.children ? (
                  <div className="relative">
                    {/* Parent accordion */}
                    <div className="group/parent">
                      <button
                        onClick={() => {
                          toggleAccordion(item.label);
                          handleTabletClick(item);
                        }}
                        className={`w-full flex items-center gap-2.5 h-9 my-0.5 rounded-full text-xs font-medium transition-all relative
                          px-3 mx-2 md:w-10 md:h-10 md:mx-auto md:px-0 lg:w-auto lg:mx-2 lg:px-3
                          md:justify-center lg:justify-start
                          ${isItemActive(item) || tabletActiveItem?.label === item.label
                            ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'
                            : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
                        }`}
                      >
                        <i className={`ti ${item.icon} text-base flex-shrink-0`} />
                        <span className="md:hidden lg:inline flex-1 text-left">{item.label}</span>
                        <i className={`ti ti-chevron-down text-xs transition-transform md:hidden lg:inline ${isExpanded(item) ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Accordion body mobile + desktop */}
                    {isExpanded(item) && (
                      <div className="ml-7 mr-2 border-l border-[var(--md-sys-color-outline-variant)] pl-2 my-1 md:hidden lg:block">
                        {item.children.map(child => (
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
                  <Link
                    href={item.href!}
                    onClick={closeSidebar}
                    className={`group flex items-center gap-2.5 h-9 my-0.5 rounded-full text-xs font-medium transition-all relative
                      px-3 mx-2 md:w-10 md:h-10 md:mx-auto md:px-0 lg:w-auto lg:mx-2 lg:px-3
                      md:justify-center lg:justify-start
                      ${pathname === item.href
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
            ))}
          </div>
        ))}

        {/* Bottom config - link simples para página separada */}
        <div className="mt-auto pb-2">
          <div className="h-px bg-[var(--md-sys-color-outline-variant)] mx-4 my-2 md:mx-2" />

          <Link
            href="/configuracoes/plataforma"
            onClick={closeSidebar}
            className={`group flex items-center gap-2.5 px-3 h-9 mx-2 my-0.5 rounded-full text-xs font-medium transition-all md:justify-center md:px-0 lg:justify-start lg:px-3 relative ${
              isConfigActive()
                ? 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'
                : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[rgba(202,196,208,0.08)] hover:text-[var(--md-sys-color-on-surface)]'
            }`}
          >
            <i className="ti ti-settings text-base flex-shrink-0" />
            <span className="md:hidden lg:inline">Configurações</span>

            {/* Tooltip tablet */}
            <span className="hidden md:block lg:hidden absolute left-14 bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)] text-xs px-2.5 py-1.5 rounded-md border border-[var(--md-sys-color-outline-variant)] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Configurações
            </span>
          </Link>
        </div>
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
