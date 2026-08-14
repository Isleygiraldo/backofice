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
          { label: 'Jogos', href: '/cassino/jogos' },
          { label: 'Jogos ao vivo', href: '/cassino/jogos-ao-vivo' },
          { label: 'Mesas ao vivo', href: '/cassino/mesas-ao-vivo' },
          { label: 'Fornecedores', href: '/cassino/fornecedores' },
          { label: 'Categorias', href: '/cassino/categorias' },
          { label: 'Categorias Fixas', href: '/cassino/categorias-fixas' },
        ]
      },
      {
        icon: 'ti-trophy',
        label: 'Esportes',
        children: [
          { label: 'Esportes', href: '/esportes' },
          { label: 'Categorias', href: '/esportes/categorias' },
          { label: 'Torneios', href: '/esportes/torneios' },
          { label: 'Eventos', href: '/esportes/eventos' },
          { label: 'Competidores', href: '/esportes/competidores' },
          { label: 'Populares', href: '/esportes/populares' },
          { label: 'Mercados', href: '/esportes/mercados' },
          { label: 'Grupos', href: '/esportes/grupos' },
          { label: 'Favoritos', href: '/esportes/favoritos' },
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
          { label: 'Afiliados', href: '/afiliados' },
          { label: 'Perfil', href: '/usuarios/perfil' },
        ]
      },
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
      {
        icon: 'ti-gift',
        label: 'Promoções',
        children: [
          { label: 'Bônus', href: '/promocoes/bonus' },
          { label: 'Regras de afiliado', href: '/promocoes/regras-afiliado' },
          { label: 'Regras de uso', href: '/promocoes/regras-uso' },
          { label: 'Acionamentos', href: '/promocoes/acionamentos' },
        ]
      },
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
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

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

  // Gera lista de todos os links para busca (incluindo configurações)
  const allLinks = React.useMemo(() => {
    const links: Array<{ label: string; href: string; parent?: string }> = [];

    // Links da sidebar principal
    navSections.forEach(section => {
      section.items.forEach(item => {
        if (item.href) {
          links.push({ label: item.label, href: item.href });
        }
        if (item.children) {
          item.children.forEach(child => {
            links.push({ label: child.label, href: child.href, parent: item.label });
          });
        }
      });
    });

    // Links de configurações (importados do SidebarConfig)
    const configLinks = [
      // Plataforma
      { label: 'Informações', href: '/configuracoes/plataforma', parent: 'Plataforma' },
      { label: 'URL', href: '/configuracoes/plataforma/url', parent: 'Plataforma' },
      { label: 'Provedores', href: '/configuracoes/plataforma/provedores', parent: 'Plataforma' },
      { label: 'Permissões', href: '/configuracoes/plataforma/permissoes', parent: 'Plataforma' },
      { label: 'Preferências', href: '/configuracoes/plataforma/preferencias', parent: 'Plataforma' },
      { label: 'Código', href: '/configuracoes/plataforma/codigo', parent: 'Plataforma' },
      { label: 'SIGAP', href: '/configuracoes/plataforma/sigap', parent: 'Plataforma' },
      { label: 'Marca', href: '/configuracoes/branding', parent: 'Branding' },
      { label: 'Logos', href: '/configuracoes/branding/logos', parent: 'Branding' },
      { label: 'Cores', href: '/configuracoes/branding/cores', parent: 'Branding' },
      { label: 'Informações', href: '/configuracoes/seo', parent: 'SEO' },
      { label: 'Sitemap', href: '/configuracoes/seo/sitemap', parent: 'SEO' },
      { label: 'Código', href: '/configuracoes/seo/codigo', parent: 'SEO' },
      { label: 'Redes Sociais', href: '/configuracoes/social', parent: 'Social' },
      { label: 'Conteúdo', href: '/configuracoes/cms', parent: 'CMS' },
      // Sistema
      { label: 'Analytics', href: '/configuracoes/analytics', parent: 'Analytics' },
      { label: 'Login', href: '/configuracoes/seguranca', parent: 'Segurança' },
      { label: 'Cadastro', href: '/configuracoes/seguranca/cadastro', parent: 'Segurança' },
      { label: 'GSE', href: '/configuracoes/seguranca/gse', parent: 'Segurança' },
      { label: 'KYC', href: '/configuracoes/seguranca/kyc', parent: 'Segurança' },
      { label: 'Arquivo', href: '/configuracoes/arquivo', parent: 'Arquivo' },
      { label: 'Geolocalização', href: '/configuracoes/geolocalizacao', parent: 'Geolocalização' },
      // Acesso
      { label: 'Cargos', href: '/configuracoes/cargos', parent: 'Cargos [ADM]' },
      { label: 'Grupos', href: '/usuarios/grupos', parent: 'Grupos [ADM]' },
      { label: 'Operadores', href: '/configuracoes/operadores', parent: 'Operadores [ADM]' },
      { label: 'Autorizações', href: '/configuracoes/autorizacoes', parent: 'Autorizações [ADM]' },
      { label: 'Bloqueios', href: '/configuracoes/bloqueios', parent: 'Bloqueios [ADM]' },
    ];

    links.push(...configLinks);
    return links;
  }, []);

  // Filtra resultados da busca
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allLinks.filter(link =>
      link.label.toLowerCase().includes(query) ||
      link.parent?.toLowerCase().includes(query)
    ).slice(0, 8);
  }, [searchQuery, allLinks]);

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
        {/* Busca */}
        <div className="w-full px-2 pt-4 pb-3 relative">
          <button
            onClick={() => setShowSearchResults(!showSearchResults)}
            className="flex flex-col items-center gap-1 py-3 rounded-lg transition-all text-[#8B8792] hover:bg-[#252329] hover:text-white w-full"
          >
            <i className="ti ti-search text-2xl" />
            <span className="text-[9px] text-center leading-tight">Buscar</span>
          </button>
        </div>

        {/* Início */}
        <div className="w-full px-2 pb-4">
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
        <div className="border-b border-[#2A2830]"></div>

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

      {/* Painel de busca */}
      {showSearchResults && (
        <div className="sticky top-0 left-0 h-screen w-[320px] bg-[var(--content-surface)] border-r border-[var(--content-border)] shadow-xl overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-[var(--content-border)] sticky top-0 bg-[var(--content-surface)] z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-[var(--content-text)] body-md">Buscar Módulos</span>
              <button
                onClick={() => {
                  setShowSearchResults(false);
                  setSearchQuery('');
                }}
                className="p-1 hover:bg-[var(--content-hover)] rounded transition-colors"
              >
                <i className="ti ti-x text-lg text-[var(--content-text-secondary)]" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Digite para buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg body-md text-[var(--content-text)] placeholder:text-[var(--content-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--md-sys-color-secondary)]"
              autoFocus
            />
          </div>
          <div className="p-3">
            {searchQuery.trim() === '' ? (
              <div className="text-center py-8 text-[var(--content-text-secondary)] body-md">
                Digite para buscar módulos
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-8 text-[var(--content-text-secondary)] body-md">
                Nenhum resultado encontrado
              </div>
            ) : (
              <div className="space-y-1">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    onClick={() => {
                      setShowSearchResults(false);
                      setSearchQuery('');
                      closeSidebar();
                    }}
                    className="flex flex-col gap-1 px-3 py-2.5 rounded-lg hover:bg-[var(--content-hover)] transition-all"
                  >
                    <span className="body-md text-[var(--content-text)] font-medium">{result.label}</span>
                    {result.parent && (
                      <span className="body-sm text-[var(--content-text-secondary)]">
                        <i className="ti ti-folder body-sm mr-1" />
                        {result.parent}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Painel lateral com subitens */}
      {!showSearchResults && activePanel && activePanel.children && (
        <div className="sticky top-0 left-0 h-screen w-[240px] bg-[var(--content-surface)] border-r border-[var(--content-border)] shadow-xl overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-[var(--content-border)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i className={`ti ${activePanel.icon} text-xl`} style={{ color: 'var(--md-sys-color-secondary)' }} />
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
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg body-md transition-all ${
                  pathname === child.href
                    ? 'bg-[#EEE9F6] text-[var(--md-sys-color-secondary)] font-medium'
                    : 'text-[var(--content-text)] hover:bg-[var(--content-hover)]'
                }`}
              >
                <i className={`ti ${pathname === child.href ? 'ti-circle-filled' : 'ti-file-text'} text-[16px]`} />
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
