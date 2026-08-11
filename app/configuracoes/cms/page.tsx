'use client';

import { useState } from 'react';
import { Card } from '@/app/_components/ui';

interface Widget {
  id: string;
  name: string;
  description?: string;
  tag: string;
  active: boolean;
  thumbnail?: 'carousel' | 'grid' | 'header' | 'sidebar' | 'card' | 'list' | 'search' | 'footer';
}

interface Category {
  title: string;
  widgets: Widget[];
}

const versionConfigs: Record<string, Category[]> = {
  old: [
    {
      title: 'Página inicial (Home)',
      widgets: [
        { id: 'banner-v1', name: 'Banner principal', description: 'Carrossel de banners do topo da home.', tag: 'BANNER_V1', active: true, thumbnail: 'carousel' },
        { id: 'search-home', name: 'Busca', description: 'Campo de busca na home.', tag: 'SEARCH_HOME', active: true, thumbnail: 'search' },
        { id: 'casino-games-v1', name: 'Jogos de cassino', description: 'Vitrine de jogos de cassino.', tag: 'CASINO_GAMES_V1', active: true, thumbnail: 'grid' },
        { id: 'card-tip-v1', name: 'Cartão de dica', description: 'Cartão de dicas em carrossel.', tag: 'CARD_TIP_V1', active: true, thumbnail: 'card' },
        { id: 'popular-events', name: 'Eventos populares', description: 'Eventos esportivos em destaque.', tag: 'POPULAR_EVENTS_V1', active: true, thumbnail: 'list' },
      ],
    },
    {
      title: 'Cabeçalho',
      widgets: [
        { id: 'header-standard', name: 'Cabeçalho padrão', description: 'Cabeçalho com login, saldo e menu principal.', tag: 'HEADER_V1', active: true, thumbnail: 'header' },
      ],
    },
    {
      title: 'Menu lateral',
      widgets: [
        { id: 'sports-v1', name: 'Lista de esportes', description: 'Menu lateral com a lista de esportes.', tag: 'SIDEBAR_LIST_SPORTS_V1', active: true, thumbnail: 'sidebar' },
      ],
    },
    {
      title: 'Rodapé',
      widgets: [
        { id: 'footer-v1', name: 'Rodapé padrão', description: 'Rodapé padrão do site.', tag: 'FOOTER_V1', active: true, thumbnail: 'footer' },
      ],
    },
  ],
  superoba: [
    {
      title: 'Página inicial (Home)',
      widgets: [
        { id: 'banner-v2', name: 'Banner principal V2', description: 'Versão alternativa do carrossel de banners.', tag: 'BANNER_V2', active: true, thumbnail: 'carousel' },
        { id: 'casino-games-v2', name: 'Jogos de cassino V2', description: 'Versão alternativa da vitrine de cassino.', tag: 'CASINO_GAMES_V2', active: true, thumbnail: 'grid' },
        { id: 'card-tip-v2', name: 'Cartão de dica V2', description: 'Segunda versão do cartão de dicas.', tag: 'CARD_TIP_V2', active: true, thumbnail: 'card' },
        { id: 'providers', name: 'Nossos provedores', description: 'Vitrine dos provedores de cassino.', tag: 'CASINO_PROVIDERS_V1', active: true, thumbnail: 'grid' },
        { id: 'paid-more-v1', name: 'Jogos que mais pagaram', description: 'Ranking dos jogos que mais pagaram hoje.', tag: 'PAID_MORE_TODAY_V1', active: true, thumbnail: 'list' },
      ],
    },
    {
      title: 'Cabeçalho',
      widgets: [
        { id: 'header-compact', name: 'Cabeçalho compacto', description: 'Versão reduzida do cabeçalho.', tag: 'HEADER_V2', active: true, thumbnail: 'header' },
      ],
    },
    {
      title: 'Menu lateral',
      widgets: [
        { id: 'sports-v2', name: 'Lista de esportes V2', description: 'Versão alternativa do menu de esportes.', tag: 'SIDEBAR_LIST_SPORTS_V2', active: true, thumbnail: 'sidebar' },
      ],
    },
    {
      title: 'Rodapé',
      widgets: [
        { id: 'footer-v2', name: 'Rodapé alternativo', description: 'Versão alternativa do rodapé.', tag: 'FOOTER_V2', active: true, thumbnail: 'footer' },
      ],
    },
  ],
  v3: [
    {
      title: 'Página inicial (Home)',
      widgets: [
        { id: 'banner-v3', name: 'BANNER_V3', tag: 'BANNER_V3', active: true, thumbnail: 'carousel' },
        { id: 'stories-v2', name: 'Stories (personalizável)', description: 'Listagem de stories configurada no backoffice (Galeria › Stories): imagem, link, datas e label.', tag: 'STORYS_V2', active: false, thumbnail: 'carousel' },
        { id: 'search-v2', name: 'Busca V2', description: 'Campo de busca da home no layout novo (Figma): busca + filtro de provedor.', tag: 'SEARCH_HOME_V2', active: false, thumbnail: 'search' },
        { id: 'casino-games-v4', name: 'Jogos de cassino V4', description: 'Vitrine em grade com nº de linhas, cards por linha e intervalo do card wide configuráveis (layout Figma).', tag: 'CASINO_GAMES_V4', active: false, thumbnail: 'grid' },
        { id: 'casino-today-v2', name: 'TOP GANHOS (Ganhadores V2)', description: 'Vitrine "TOP GANHOS" dos ganhadores do dia (layout Figma). Também aparece como categoria de cassino com slug "top-ganhos".', tag: 'CASINO_TODAY_V2', active: false, thumbnail: 'card' },
        { id: 'altenar-live', name: 'ALTENAR_WLIVE_NOW', tag: 'ALTENAR_WLIVE_NOW', active: true, thumbnail: 'list' },
        { id: 'highlights', name: 'ALTENAR_WHIGHLIGHTS', tag: 'ALTENAR_WHIGHLIGHTS', active: true, thumbnail: 'carousel' },
        { id: 'providers', name: 'Nossos provedores', description: 'Vitrine dos provedores de cassino: fundo roxo (cor principal), logo e badge com o nº de jogos de cada provedor.', tag: 'CASINO_PROVIDERS_V1', active: true, thumbnail: 'grid' },
        { id: 'last-wins', name: 'Últimos ganhos', description: 'Lista dos últimos ganhos do cassino: jogador (mascarado), jogo e aposta → ganho (ganho em verde).', tag: 'LAST_WINS_V1', active: false, thumbnail: 'list' },
        { id: 'banner-v2', name: 'Banner principal V2', description: 'Versão alternativa do carrossel de banners.', tag: 'BANNER_V2', active: false, thumbnail: 'carousel' },
        { id: 'recommended-leagues', name: 'Ligas recomendadas', description: 'Ligas recomendadas para o usuário.', tag: 'RECOMMENDED_LEAGUES_V1', active: false, thumbnail: 'list' },
        { id: 'stories-nav', name: 'Stories', description: 'Navegação de stories no topo.', tag: 'STORYS_NAV_V1', active: false, thumbnail: 'carousel' },
        { id: 'live-popular', name: 'Eventos ao vivo populares', description: 'Eventos ao vivo em destaque.', tag: 'LIVE_POPULAR_EVENTS_V1', active: false, thumbnail: 'list' },
        { id: 'popular-multi', name: 'Múltiplas populares', description: 'Bilhetes / múltiplas populares.', tag: 'POPULAR_MULTI_GAMES_V1', active: false, thumbnail: 'card' },
        { id: 'card-tip-v4', name: 'Cartão de dica V4', description: 'Quarta versão do cartão de dicas.', tag: 'CARD_TIP_V4', active: false, thumbnail: 'card' },
        { id: 'paid-more-v3', name: 'Jogos que mais pagaram V3', description: 'Terceira versão do ranking.', tag: 'PAID_MORE_TODAY_V3', active: false, thumbnail: 'list' },
        { id: 'casino-games-v3', name: 'Jogos de cassino V3', description: 'Terceira versão da vitrine de cassino.', tag: 'CASINO_GAMES_V3', active: false, thumbnail: 'grid' },
        { id: 'card-tip-v2', name: 'Cartão de dica V2', description: 'Segunda versão do cartão de dicas.', tag: 'CARD_TIP_V2', active: false, thumbnail: 'card' },
        { id: 'tab-content-v2', name: 'Abas de conteúdo V2', description: 'Versão alternativa das abas de conteúdo.', tag: 'TAB_CONTENT_V2', active: false, thumbnail: 'grid' },
        { id: 'banner-v1', name: 'Banner principal', description: 'Carrossel de banners do topo da home.', tag: 'BANNER_V1', active: false, thumbnail: 'carousel' },
        { id: 'search-home', name: 'Busca', description: 'Campo de busca na home.', tag: 'SEARCH_HOME', active: false, thumbnail: 'search' },
        { id: 'casino-games-v2', name: 'Jogos de cassino V2', description: 'Versão alternativa da vitrine de cassino.', tag: 'CASINO_GAMES_V2', active: false, thumbnail: 'grid' },
        { id: 'popular-events', name: 'Eventos populares', description: 'Eventos esportivos em destaque.', tag: 'POPULAR_EVENTS_V1', active: false, thumbnail: 'list' },
        { id: 'card-tournament', name: 'Cartão de torneio', description: 'Destaque de torneios.', tag: 'CARD_TOURNAMENT_V1', active: false, thumbnail: 'card' },
        { id: 'tab-content', name: 'Abas de conteúdo', description: 'Conteúdo organizado em abas (esporte/cassino).', tag: 'TAB_CONTENT_V1', active: false, thumbnail: 'grid' },
        { id: 'altenar-boosted', name: 'ALTENAR_WBOOSTED_ODDS', tag: 'ALTENAR_WBOOSTED_ODDS', active: false, thumbnail: 'card' },
        { id: 'altenar-coupons', name: 'ALTENAR_WCOUPONS', tag: 'ALTENAR_WCOUPONS', active: false, thumbnail: 'list' },
        { id: 'altenar-events-champ', name: 'ALTENAR_WEVENTS_BY_CHAMPIONSHIPS', tag: 'ALTENAR_WEVENTS_BY_CHAMPIONSHIPS', active: false, thumbnail: 'list' },
        { id: 'altenar-popular-bets', name: 'ALTENAR_WPOPULAR_BETS', tag: 'ALTENAR_WPOPULAR_BETS', active: false, thumbnail: 'card' },
        { id: 'altenar-top-events', name: 'ALTENAR_WTOP_EVENTS_CAROUSEL', tag: 'ALTENAR_WTOP_EVENTS_CAROUSEL', active: false, thumbnail: 'carousel' },
        { id: 'card-tip-v1', name: 'Cartão de dica', description: 'Cartão de dicas em carrossel.', tag: 'CARD_TIP_V1', active: false, thumbnail: 'card' },
        { id: 'card-tip-v3', name: 'Cartão de dica V3', description: 'Terceira versão do cartão de dicas.', tag: 'CARD_TIP_V3', active: false, thumbnail: 'card' },
        { id: 'casino-games-v1', name: 'Jogos de cassino', description: 'Vitrine de jogos de cassino.', tag: 'CASINO_GAMES_V1', active: false, thumbnail: 'grid' },
        { id: 'casino-today-v1', name: 'Ganhadores do cassino', description: 'Linha com os últimos ganhadores do cassino.', tag: 'CASINO_TODAY_V1', active: false, thumbnail: 'list' },
        { id: 'last-bets', name: 'Últimas apostas e grandes prêmios', description: 'Linha de últimas apostas e maiores ganhos.', tag: 'LAST_BETS_BIG_WINS_V1', active: false, thumbnail: 'list' },
        { id: 'menu-nav', name: 'Menu de navegação', description: 'Menu de navegação mobile.', tag: 'MENU_NAVIGATION_V1', active: false, thumbnail: 'sidebar' },
        { id: 'paid-more-v1', name: 'Jogos que mais pagaram', description: 'Ranking dos jogos que mais pagaram hoje.', tag: 'PAID_MORE_TODAY_V1', active: false, thumbnail: 'list' },
        { id: 'paid-more-v2', name: 'Jogos que mais pagaram V2', description: 'Versão alternativa do ranking.', tag: 'PAID_MORE_TODAY_V2', active: false, thumbnail: 'list' },
        { id: 'bet-builders', name: 'Bet builders populares', description: 'Criadores de aposta populares.', tag: 'POPULAR_BET_BUILDERS_V1', active: false, thumbnail: 'card' },
        { id: 'popular-events-v2', name: 'Eventos populares V2', description: 'Eventos populares (integração Vaix).', tag: 'POPULAR_EVENTS_V2', active: false, thumbnail: 'list' },
        { id: 'progress-level', name: 'Nível de progresso', description: 'Barra de gamificação / nível do usuário.', tag: 'PROGRESS_LEVEL', active: false, thumbnail: 'card' },
        { id: 'sidebar-league-v2', name: 'Ligas na home', description: 'Ligas em destaque exibidas na home.', tag: 'SIDEBAR_LEAGUE_V2', active: false, thumbnail: 'list' },
        { id: 'super-odds', name: 'Super odds', description: 'Super odds em destaque.', tag: 'SUPER_ODDS_V2', active: false, thumbnail: 'card' },
      ],
    },
    {
      title: 'Cabeçalho',
      widgets: [
        { id: 'header-v3', name: 'HEADER_V3', tag: 'HEADER_V3', active: true, thumbnail: 'header' },
        { id: 'header-compact', name: 'Cabeçalho compacto', description: 'Versão reduzida do cabeçalho.', tag: 'HEADER_V2', active: false, thumbnail: 'header' },
        { id: 'header-standard', name: 'Cabeçalho padrão', description: 'Cabeçalho com login, saldo e menu principal.', tag: 'HEADER_V1', active: false, thumbnail: 'header' },
      ],
    },
    {
      title: 'Menu lateral',
      widgets: [
        { id: 'sports-v2', name: 'Lista de esportes V2', description: 'Versão alternativa do menu de esportes.', tag: 'SIDEBAR_LIST_SPORTS_V2', active: false, thumbnail: 'sidebar' },
        { id: 'sidebar-league', name: 'Ligas (menu lateral)', description: 'Lista de ligas em destaque no menu lateral.', tag: 'SIDEBAR_LEAGUE_V1', active: false, thumbnail: 'sidebar' },
        { id: 'altenar-menu', name: 'ALTENAR_WSPORT_MENU', tag: 'ALTENAR_WSPORT_MENU', active: true, thumbnail: 'sidebar' },
        { id: 'sports-v1', name: 'Lista de esportes', description: 'Menu lateral com a lista de esportes.', tag: 'SIDEBAR_LIST_SPORTS_V1', active: false, thumbnail: 'sidebar' },
      ],
    },
    {
      title: 'Rodapé',
      widgets: [
        { id: 'footer-v2', name: 'Rodapé alternativo', description: 'Versão alternativa do rodapé.', tag: 'FOOTER_V2', active: false, thumbnail: 'footer' },
        { id: 'footer-v1', name: 'Rodapé padrão', description: 'Rodapé padrão do site.', tag: 'FOOTER_V1', active: true, thumbnail: 'footer' },
      ],
    },
  ],
};

export default function CMSPage() {
  const [version, setVersion] = useState('v3');
  const [categories, setCategories] = useState<Category[]>(versionConfigs.v3);

  const Toggle = ({ id, checked, onChange }: { id: string; checked: boolean; onChange: () => void }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-[#4a5568] rounded-full peer peer-checked:bg-[#6f5fea] peer-focus:ring-2 peer-focus:ring-[#6f5fea]/50 transition-all">
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    </label>
  );

  const toggleWidget = (categoryIndex: number, widgetIndex: number) => {
    setCategories(prev => {
      const newCategories = [...prev];
      newCategories[categoryIndex].widgets[widgetIndex].active = !newCategories[categoryIndex].widgets[widgetIndex].active;
      return newCategories;
    });
  };

  const getActiveCount = (category: Category) => {
    return category.widgets.filter(w => w.active).length;
  };

  const WidgetThumbnail = ({ type }: { type?: string }) => {
    if (!type) return null;

    switch (type) {
      case 'carousel':
        return (
          <div className="w-full h-24 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 flex items-center justify-center overflow-hidden relative">
            <div className="w-3/4 h-20 bg-gradient-to-br from-[#6f5fea]/40 to-[#1D1B20]/40 rounded-lg shadow-md flex items-center justify-center">
              <i className="ti ti-carousel-horizontal text-[var(--content-text-secondary)] text-3xl" />
            </div>
            <div className="absolute -left-4 w-12 h-16 bg-[var(--content-surface)]/40 rounded-lg blur-[2px]"></div>
            <div className="absolute -right-4 w-12 h-16 bg-[var(--content-surface)]/40 rounded-lg blur-[2px]"></div>
          </div>
        );
      case 'grid':
        return (
          <div className="w-full h-16 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 flex gap-2 p-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-1 bg-[var(--content-surface)] rounded border border-[var(--content-border)] flex flex-col items-center justify-center gap-1">
                <div className="w-6 h-6 rounded-full bg-[var(--content-text)]/10"></div>
                <div className="w-8 h-1 bg-[var(--content-text)]/20 rounded"></div>
              </div>
            ))}
          </div>
        );
      case 'header':
        return (
          <div className="w-full h-12 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 flex items-center px-3 justify-between overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f5fea]/10 to-transparent pointer-events-none"></div>
            <div className="w-20 h-3 bg-[var(--content-text)]/20 rounded"></div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-[var(--content-text)]/20"></div>
              <div className="w-12 h-4 bg-[var(--content-text)]/20 rounded"></div>
            </div>
          </div>
        );
      case 'sidebar':
        return (
          <div className="w-full h-16 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 flex p-2 gap-2">
            <div className="w-1/3 h-full bg-[#6f5fea]/20 rounded border-l-2 border-[#6f5fea]"></div>
            <div className="w-2/3 flex flex-col gap-1">
              <div className="w-full h-2 bg-[var(--content-text)]/20 rounded"></div>
              <div className="w-3/4 h-2 bg-[var(--content-text)]/10 rounded"></div>
            </div>
          </div>
        );
      case 'card':
        return (
          <div className="w-full h-20 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 p-3 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded bg-[#6f5fea]/20 flex items-center justify-center">
                <i className="ti ti-trophy text-[#6f5fea]" />
              </div>
              <div className="w-16 h-3 bg-[var(--content-text)]/20 rounded"></div>
            </div>
            <div className="w-full h-2 bg-[var(--content-text)]/10 rounded"></div>
          </div>
        );
      case 'list':
        return (
          <div className="w-full h-16 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 p-2 flex flex-col gap-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6f5fea]/40"></div>
                <div className="flex-1 h-2 bg-[var(--content-text)]/20 rounded"></div>
                <div className="w-8 h-2 bg-[var(--content-text)]/10 rounded"></div>
              </div>
            ))}
          </div>
        );
      case 'search':
        return (
          <div className="w-full h-12 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 p-3 flex items-center gap-2">
            <i className="ti ti-search text-[var(--content-text-secondary)]" />
            <div className="flex-1 h-2 bg-[var(--content-text)]/10 rounded"></div>
            <div className="w-16 h-6 bg-[#6f5fea]/20 rounded border border-[#6f5fea]/40"></div>
          </div>
        );
      case 'footer':
        return (
          <div className="w-full h-14 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 p-3 flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <div className="w-12 h-2 bg-[var(--content-text)]/20 rounded"></div>
              <div className="w-full h-1 bg-[var(--content-text)]/10 rounded"></div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="w-12 h-2 bg-[var(--content-text)]/20 rounded"></div>
              <div className="w-full h-1 bg-[var(--content-text)]/10 rounded"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-14 bg-[var(--content-bg)] rounded border border-[var(--content-border)] mb-3 flex items-center justify-center">
            <i className="ti ti-layout text-[var(--content-text-secondary)] text-2xl" />
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--content-text)] mb-1">
            Componentes do site
          </h2>
          <p className="text-sm text-[var(--content-text-secondary)]">
            Ative ou desative os componentes. Nada é enviado até clicar em "Salvar".
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[var(--content-border)] text-[var(--content-text)] rounded-lg hover:bg-[var(--content-hover)] transition-colors">
            <i className="ti ti-eye text-lg" />
            Pré-visualizar
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-[#6f5fea] text-white rounded-lg hover:bg-[#5d4ed4] transition-colors font-medium">
            <i className="ti ti-device-floppy text-lg" />
            Salvar Alterações
          </button>
        </div>
      </div>

      {/* Version Selector */}
      <Card className="p-6 max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <i className="ti ti-history text-[#6f5fea] text-xl" />
          <h3 className="text-lg font-semibold text-[var(--content-text)]">Versão do site</h3>
        </div>
        <p className="text-sm text-[var(--content-text-secondary)] mb-4">
          Selecione uma versão para carregá-la no editor. As mudanças só vão ao ar quando você Salvar.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => { setVersion('old'); setCategories(versionConfigs.old); }}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
              version === 'old'
                ? 'bg-[var(--content-surface)] border-2 border-[#6f5fea] shadow-[0_0_10px_rgba(111,95,234,0.2)]'
                : 'bg-[var(--content-surface)] border-[var(--content-border)] hover:border-[#6f5fea]/30'
            }`}
          >
            <span className={`text-sm ${version === 'old' ? 'text-[var(--content-text)] font-semibold' : 'text-[var(--content-text)]'}`}>OLD</span>
            <span className="bg-[var(--content-hover)] text-[var(--content-text)] px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
              SISTEMA
            </span>
          </button>
          <button
            onClick={() => { setVersion('superoba'); setCategories(versionConfigs.superoba); }}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
              version === 'superoba'
                ? 'bg-[var(--content-surface)] border-2 border-[#6f5fea] shadow-[0_0_10px_rgba(111,95,234,0.2)]'
                : 'bg-[var(--content-surface)] border-[var(--content-border)] hover:border-[#6f5fea]/30'
            }`}
          >
            <span className={`text-sm ${version === 'superoba' ? 'text-[var(--content-text)] font-semibold' : 'text-[var(--content-text)]'}`}>SuperOba</span>
            <span className="bg-[var(--content-hover)] text-[var(--content-text)] px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
              SISTEMA
            </span>
          </button>
          <button
            onClick={() => { setVersion('v3'); setCategories(versionConfigs.v3); }}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
              version === 'v3'
                ? 'bg-[var(--content-surface)] border-2 border-[#6f5fea] shadow-[0_0_10px_rgba(111,95,234,0.2)]'
                : 'bg-[var(--content-surface)] border-[var(--content-border)] hover:border-[#6f5fea]/30'
            }`}
          >
            <span className={`text-sm ${version === 'v3' ? 'text-[var(--content-text)] font-semibold' : 'text-[var(--content-text)]'}`}>Nova versão V3</span>
            <div className="flex items-center gap-3">
              <span className="bg-[#6f5fea]/20 text-[#6f5fea] px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
                CUSTOM
              </span>
              {version === 'v3' && (
                <span className="flex items-center gap-1 text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2ecc71]"></div> No ar
                </span>
              )}
              <div className="flex gap-1 ml-2">
                <button
                  onClick={(e) => { e.stopPropagation(); }}
                  className="p-1.5 rounded hover:bg-[var(--content-hover)] text-[var(--content-text-secondary)] hover:text-[var(--content-text)] transition-colors"
                >
                  <i className="ti ti-edit text-base" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); }}
                  className="p-1.5 rounded hover:bg-red-500/20 text-[var(--content-text-secondary)] hover:text-red-500 transition-colors"
                >
                  <i className="ti ti-trash text-base" />
                </button>
              </div>
            </div>
          </button>
        </div>
      </Card>

      {/* Kanban Horizontal Scroll */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max items-start">
          {categories.map((category, categoryIndex) => (
            <Card key={category.title} className="p-0 overflow-hidden flex flex-col w-[380px] flex-shrink-0 self-start">
              {/* Category Header */}
              <div className="p-4 border-b border-[var(--content-border)] bg-[var(--content-surface)] flex justify-between items-center sticky top-0 z-10">
                <h3 className="text-base font-semibold text-[var(--content-text)] flex items-center gap-2">
                  <i className="ti ti-chevron-down text-[var(--content-text-secondary)]" />
                  {category.title}
                </h3>
                <span className="text-xs text-[var(--content-text-secondary)]">
                  {getActiveCount(category)} de {category.widgets.length} ativos
                </span>
              </div>

              {/* Widgets List */}
              <div className="p-2 flex flex-col gap-2">
                {category.widgets
                  .sort((a, b) => (b.active ? 1 : 0) - (a.active ? 1 : 0))
                  .map((widget, widgetIndex) => (
                  <div
                    key={widget.id}
                    className={`bg-[var(--content-surface)] p-4 rounded-lg border transition-all flex items-start gap-4 ${
                      widget.active
                        ? 'border-[#6f5fea]/50 shadow-[0_0_15px_rgba(111,95,234,0.1)]'
                        : 'border-[var(--content-border)] opacity-70 hover:border-[#6f5fea]/30'
                    }`}
                  >
                    <div className="cursor-grab text-[var(--content-text-secondary)] hover:text-[var(--content-text)] mt-1">
                      <i className="ti ti-grip-vertical" />
                    </div>
                    <div className="flex-1">
                      <WidgetThumbnail type={widget.thumbnail} />
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-[var(--content-text)]">{widget.name}</h4>
                          {widget.description && (
                            <p className="text-xs text-[var(--content-text-secondary)] mt-0.5">
                              {widget.description}
                            </p>
                          )}
                          <span className="inline-block mt-2 text-[10px] bg-[var(--content-hover)] text-[var(--content-text-secondary)] px-2 py-0.5 rounded uppercase tracking-wide">
                            {widget.tag}
                          </span>
                        </div>
                        <Toggle
                          id={widget.id}
                          checked={widget.active}
                          onChange={() => toggleWidget(categoryIndex, widgetIndex)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
