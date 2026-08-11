'use client';

import Link from 'next/link';
import { useSidebar } from './SidebarContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';

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
          { label: 'Dashboard', href: '/usuarios' },
          { label: 'Apostadores', href: '/usuarios/apostadores' },
          { label: 'Perfil', href: '/usuarios/perfil' },
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
  const [activePanel, setActivePanel] = useState<NavItem | null>(null);

  const handleItemClick = (item: NavItem) => {
    if (item.children) {
      setActivePanel(item);
    } else {
      setActivePanel(null);
      closeSidebar();
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.children) return item.children.some(child => pathname === child.href);
    return false;
  };

  // Mantém o painel aberto se a rota atual pertence a um item com children
  React.useEffect(() => {
    const currentItem = allItems.find(item => isItemActive(item));
    if (currentItem && currentItem.children) {
      setActivePanel(currentItem);
    }
  }, [pathname]);

  const allItems = navSections.flatMap(section => section.items);

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
        {/* Início */}
        <div className="w-full px-2 py-4 border-b border-[#2A2830]">
          <Link
            href="/"
            onClick={() => {
              setActivePanel(null);
              closeSidebar();
            }}
            className={`flex flex-col items-center gap-1 py-3 rounded-lg transition-all ${
              pathname === '/'
                ? 'bg-[#2A2830] text-white'
                : 'text-[#8B8792] hover:bg-[#252329] hover:text-white'
            }`}
          >
            <i className="ti ti-home text-2xl" />
            <span className="text-[9px] text-center leading-tight">Início</span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center py-4 gap-2">
          {allItems.map((item) => (
            <div key={item.label} className="w-full px-2">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => handleItemClick(item)}
                  className={`flex flex-col items-center gap-1 py-3 rounded-lg transition-all ${
                    pathname === item.href
                      ? 'bg-[#2A2830] text-white'
                      : 'text-[#8B8792] hover:bg-[#252329] hover:text-white'
                  }`}
                >
                  <i className={`ti ${item.icon} text-2xl`} />
                  <span className="text-[9px] text-center leading-tight">{item.label}</span>
                </Link>
              ) : (
                <button
                  onClick={() => handleItemClick(item)}
                  className={`w-full flex flex-col items-center gap-1 py-3 rounded-lg transition-all ${
                    activePanel?.label === item.label || isItemActive(item)
                      ? 'bg-[#2A2830] text-white'
                      : 'text-[#8B8792] hover:bg-[#252329] hover:text-white'
                  }`}
                >
                  <i className={`ti ${item.icon} text-2xl`} />
                  <span className="text-[9px] text-center leading-tight px-1">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Configurações */}
        <div className="w-full px-2 py-3 border-t border-[#2A2830]">
          <Link
            href="/configuracoes/plataforma"
            onClick={() => {
              setActivePanel(null);
              closeSidebar();
            }}
            className={`flex flex-col items-center gap-1 py-3 rounded-lg transition-all ${
              pathname.startsWith('/configuracoes')
                ? 'bg-[#2A2830] text-white'
                : 'text-[#8B8792] hover:bg-[#252329] hover:text-white'
            }`}
          >
            <i className="ti ti-settings text-2xl" />
            <span className="text-[9px] text-center leading-tight">Config</span>
          </Link>
        </div>
      </nav>

      {/* Painel lateral com subitens */}
      {activePanel && activePanel.children && (
        <div className="sticky top-0 left-0 h-screen w-[240px] bg-[var(--content-surface)] border-r border-[var(--content-border)] shadow-xl overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-[var(--content-border)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className={`ti ${activePanel.icon} text-xl`} style={{ color: '#6f5fea' }} />
              <span className="font-medium text-[var(--content-text)] uppercase text-xs tracking-wide">
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
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  pathname === child.href
                    ? 'bg-[#EEE9F6] text-[#6f5fea] font-medium'
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
