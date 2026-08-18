'use client';

import { useState } from 'react';
import { Button, Card } from '@/app/_components/ui';

type VisibilityTab = 'home' | 'cassino' | 'live';
type DisplayMode = 'carousel' | 'grid' | 'default';
type CardLayout = 'standard' | 'portrait' | 'crash';

export default function NovaCategoriaPage() {
  const [visibility, setVisibility] = useState<VisibilityTab[]>(['home', 'live']);
  const [displayMode, setDisplayMode] = useState<DisplayMode>('grid');
  const [cardLayout, setCardLayout] = useState<CardLayout>('standard');
  const [isGenre, setIsGenre] = useState(true);
  const [gameLimit, setGameLimit] = useState(24);
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(8);
  const [wideIntervals, setWideIntervals] = useState(false);

  const toggleVisibility = (tab: VisibilityTab) => {
    setVisibility(prev =>
      prev.includes(tab) ? prev.filter(t => t !== tab) : [...prev, tab]
    );
  };

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem]">
        <div>
          <h2 className="headline-md text-[var(--content-text)]">Configuração de Categoria</h2>
          <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
            Configure a categoria de cassino
          </p>
        </div>
        <div className="flex gap-[0.5rem]">
          <Button variant="outlined">Voltar</Button>
          <Button variant="filled" icon="save">Salvar</Button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-[1rem]">
        {/* Left Column: Identidade (4 cols) */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-[1rem]">
          <Card className="p-[1.5rem]">
            <div className="flex items-center justify-between mb-[1.5rem]">
              <h3 className="headline-md text-[var(--content-text)]">Identidade</h3>
              <span className="label-caps text-[var(--content-text-secondary)] px-[0.5rem] py-[0.25rem] bg-[var(--content-hover)] shape-sm">
                V 2.1.4
              </span>
            </div>

            <div className="space-y-[1.25rem]">
              <div>
                <label className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem] block">
                  Nome da Categoria
                </label>
                <input
                  type="text"
                  defaultValue="Top Slots 2024"
                  className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-[1rem] py-[0.5rem] body-md text-[var(--content-text)] focus:outline-none focus:border-[var(--md-sys-color-secondary)]"
                />
              </div>

              <div>
                <label className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem] block">
                  Slug URL
                </label>
                <input
                  type="text"
                  defaultValue="top-slots-2024"
                  readOnly
                  className="w-full bg-[var(--content-surface)] border border-[var(--content-border)] rounded-lg px-[1rem] py-[0.5rem] body-md text-[var(--content-text-secondary)] cursor-not-allowed"
                />
              </div>

              <div>
                <label className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem] block">
                  Redirect URL (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="https://"
                  className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-[1rem] py-[0.5rem] body-md text-[var(--content-text)] focus:outline-none focus:border-[var(--md-sys-color-secondary)]"
                />
              </div>

              <div className="pt-[0.5rem]">
                <label className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem] block">
                  Ícone da Categoria
                </label>
                <div className="border-2 border-dashed border-[var(--content-border)] rounded-xl p-[1rem] flex flex-col items-center justify-center gap-[0.5rem] hover:bg-[var(--content-hover)] transition-colors cursor-pointer group">
                  <i className="ti ti-cloud-upload text-[var(--content-text-secondary)] text-[32px] group-hover:text-[var(--md-sys-color-secondary)]" />
                  <span className="body-sm text-[var(--content-text-secondary)] text-center">
                    Arraste a imagem ou clique para upload<br />
                    <span className="opacity-60">SVG ou PNG, max 1MB</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-[1rem] border-t border-[var(--content-border)]">
                <div>
                  <p className="body-md text-[var(--content-text)] font-medium">
                    Curadoria Automática (isGenre)
                  </p>
                  <p className="body-sm text-[var(--content-text-secondary)]">
                    Popula jogos via tags automaticamente.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isGenre}
                    onChange={(e) => setIsGenre(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[var(--content-surface)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--md-sys-color-secondary)]"></div>
                </label>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Presentation Logic (8 cols) */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-[1rem]">
          {/* Visibility & Modes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
            {/* Visibilidade */}
            <Card className="p-[1.5rem]">
              <h3 className="headline-md text-[var(--content-text)] mb-[0.25rem]">Visibilidade</h3>
              <p className="body-sm text-[var(--content-text-secondary)] mb-[1rem]">
                Onde esta categoria deve aparecer.
              </p>
              <div className="flex bg-[var(--content-hover)] rounded-lg p-[0.25rem]">
                <button
                  onClick={() => toggleVisibility('home')}
                  className={`flex-1 py-[0.5rem] label-md rounded-md transition-all ${
                    visibility.includes('home')
                      ? 'bg-[var(--md-sys-color-secondary)] text-white shadow-sm'
                      : 'text-[var(--content-text-secondary)] hover:text-[var(--content-text)]'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => toggleVisibility('cassino')}
                  className={`flex-1 py-[0.5rem] label-md rounded-md transition-all ${
                    visibility.includes('cassino')
                      ? 'bg-[var(--md-sys-color-secondary)] text-white shadow-sm'
                      : 'text-[var(--content-text-secondary)] hover:text-[var(--content-text)]'
                  }`}
                >
                  Casino
                </button>
                <button
                  onClick={() => toggleVisibility('live')}
                  className={`flex-1 py-[0.5rem] label-md rounded-md transition-all ${
                    visibility.includes('live')
                      ? 'bg-[var(--md-sys-color-secondary)] text-white shadow-sm'
                      : 'text-[var(--content-text-secondary)] hover:text-[var(--content-text)]'
                  }`}
                >
                  Live
                </button>
              </div>
            </Card>

            {/* Modo de Exibição */}
            <Card className="p-[1.5rem]">
              <h3 className="headline-md text-[var(--content-text)] mb-[0.25rem]">Modo de Exibição</h3>
              <p className="body-sm text-[var(--content-text-secondary)] mb-[1rem]">
                Comportamento estrutural no front-end.
              </p>
              <div className="flex bg-[var(--content-hover)] rounded-lg p-[0.25rem]">
                <button
                  onClick={() => setDisplayMode('carousel')}
                  className={`flex-1 py-[0.5rem] label-md rounded-md transition-all flex items-center justify-center gap-[0.25rem] ${
                    displayMode === 'carousel'
                      ? 'bg-[var(--md-sys-color-secondary)] text-white shadow-sm'
                      : 'text-[var(--content-text-secondary)] hover:text-[var(--content-text)]'
                  }`}
                >
                  <i className="ti ti-carousel-horizontal text-[16px]" />
                  Carousel
                </button>
                <button
                  onClick={() => setDisplayMode('grid')}
                  className={`flex-1 py-[0.5rem] label-md rounded-md transition-all flex items-center justify-center gap-[0.25rem] ${
                    displayMode === 'grid'
                      ? 'bg-[var(--md-sys-color-secondary)] text-white shadow-sm'
                      : 'text-[var(--content-text-secondary)] hover:text-[var(--content-text)]'
                  }`}
                >
                  <i className="ti ti-grid-dots text-[16px]" />
                  Grid
                </button>
                <button
                  onClick={() => setDisplayMode('default')}
                  className={`flex-1 py-[0.5rem] label-md rounded-md transition-all ${
                    displayMode === 'default'
                      ? 'bg-[var(--md-sys-color-secondary)] text-white shadow-sm'
                      : 'text-[var(--content-text-secondary)] hover:text-[var(--content-text)]'
                  }`}
                >
                  Padrão
                </button>
              </div>
            </Card>
          </div>

          {/* Design do Card (Layout V4) */}
          <Card className="p-[1.5rem]">
            <div className="mb-[1rem]">
              <h3 className="headline-md text-[var(--content-text)]">Design do Card (Layout V4)</h3>
              <p className="body-sm text-[var(--content-text-secondary)]">
                Selecione o formato visual dos jogos nesta categoria.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem]">
              {/* Standard Grade */}
              <div
                onClick={() => setCardLayout('standard')}
                className={`border-2 rounded-xl p-[1rem] cursor-pointer relative transition-all ${
                  cardLayout === 'standard'
                    ? 'border-[var(--md-sys-color-secondary)] bg-[var(--md-sys-color-secondary)]/5'
                    : 'border-[var(--content-border)] hover:border-[var(--content-border)] hover:bg-[var(--content-hover)]'
                }`}
              >
                {cardLayout === 'standard' && (
                  <div className="absolute top-[0.5rem] right-[0.5rem]">
                    <i className="ti ti-circle-check-filled text-[var(--md-sys-color-secondary)] text-[20px]" />
                  </div>
                )}
                <div className="h-24 bg-[var(--content-hover)] rounded-lg mb-[0.75rem] flex items-center justify-center border border-[var(--content-border)]">
                  <div className="w-16 h-16 bg-[var(--content-surface)] rounded flex flex-wrap gap-[0.25rem] p-[0.25rem]">
                    <div className="w-full h-[45%] bg-[var(--content-border)] rounded-sm"></div>
                    <div className="w-full h-[45%] bg-[var(--content-border)] rounded-sm"></div>
                  </div>
                </div>
                <h4 className="label-caps text-[var(--content-text)]">Standard Grade</h4>
                <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
                  Formato quadrado tradicional (1:1).
                </p>
              </div>

              {/* Portrait */}
              <div
                onClick={() => setCardLayout('portrait')}
                className={`border-2 rounded-xl p-[1rem] cursor-pointer relative transition-all ${
                  cardLayout === 'portrait'
                    ? 'border-[var(--md-sys-color-secondary)] bg-[var(--md-sys-color-secondary)]/5'
                    : 'border-[var(--content-border)] hover:border-[var(--content-border)] hover:bg-[var(--content-hover)]'
                }`}
              >
                {cardLayout === 'portrait' && (
                  <div className="absolute top-[0.5rem] right-[0.5rem]">
                    <i className="ti ti-circle-check-filled text-[var(--md-sys-color-secondary)] text-[20px]" />
                  </div>
                )}
                <div className="h-24 bg-[var(--content-hover)] rounded-lg mb-[0.75rem] flex items-center justify-center border border-[var(--content-border)]">
                  <div className="w-12 h-18 bg-[var(--content-surface)] rounded flex flex-col gap-[0.25rem] p-[0.25rem]">
                    <div className="w-full h-full bg-[var(--content-border)] rounded-sm"></div>
                  </div>
                </div>
                <h4 className="label-caps text-[var(--content-text)]">Portrait</h4>
                <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
                  Vertical otimizado para Live/Slots (3:4).
                </p>
              </div>

              {/* Crash */}
              <div
                onClick={() => setCardLayout('crash')}
                className={`border-2 rounded-xl p-[1rem] cursor-pointer relative transition-all ${
                  cardLayout === 'crash'
                    ? 'border-[var(--md-sys-color-secondary)] bg-[var(--md-sys-color-secondary)]/5'
                    : 'border-[var(--content-border)] hover:border-[var(--content-border)] hover:bg-[var(--content-hover)]'
                }`}
              >
                {cardLayout === 'crash' && (
                  <div className="absolute top-[0.5rem] right-[0.5rem]">
                    <i className="ti ti-circle-check-filled text-[var(--md-sys-color-secondary)] text-[20px]" />
                  </div>
                )}
                <div className="h-24 bg-[var(--content-hover)] rounded-lg mb-[0.75rem] flex items-center justify-center border border-[var(--content-border)] relative">
                  <i className="ti ti-trending-up text-[var(--content-border)] text-[40px] absolute" />
                </div>
                <h4 className="label-caps text-[var(--content-text)]">Crash (Animado)</h4>
                <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
                  Cards amplos com arte de fundo.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Grid Configuration & Preview */}
        <div className="col-span-12">
          <Card className="p-[1.5rem] flex flex-col lg:flex-row gap-[2rem]">
            {/* Config Controls */}
            <div className="flex-1 space-y-[1.5rem]">
              <div>
                <h3 className="headline-md text-[var(--content-text)] mb-[0.25rem]">Estrutura do Grid</h3>
                <p className="body-sm text-[var(--content-text-secondary)]">
                  Defina a densidade e distribuição dos jogos.
                </p>
              </div>

              <div>
                <label className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem] block">
                  Quantidade de Jogos (Limite)
                </label>
                <div className="flex flex-wrap gap-[0.5rem]">
                  <button
                    onClick={() => setGameLimit(12)}
                    className={`px-[1rem] py-[0.5rem] rounded-full label-caps transition-colors ${
                      gameLimit === 12
                        ? 'bg-[var(--md-sys-color-secondary)] text-white'
                        : 'border border-[var(--content-border)] text-[var(--content-text)] hover:bg-[var(--content-hover)]'
                    }`}
                  >
                    Compacto (12)
                  </button>
                  <button
                    onClick={() => setGameLimit(24)}
                    className={`px-[1rem] py-[0.5rem] rounded-full label-caps transition-colors ${
                      gameLimit === 24
                        ? 'bg-[var(--md-sys-color-secondary)] text-white'
                        : 'border border-[var(--content-border)] text-[var(--content-text)] hover:bg-[var(--content-hover)]'
                    }`}
                  >
                    Padrão (24)
                  </button>
                  <button
                    onClick={() => setGameLimit(48)}
                    className={`px-[1rem] py-[0.5rem] rounded-full label-caps transition-colors ${
                      gameLimit === 48
                        ? 'bg-[var(--md-sys-color-secondary)] text-white'
                        : 'border border-[var(--content-border)] text-[var(--content-text)] hover:bg-[var(--content-hover)]'
                    }`}
                  >
                    Extenso (48)
                  </button>
                  <div className="flex items-center ml-auto gap-[0.5rem]">
                    <span className="body-sm text-[var(--content-text-secondary)]">Custom:</span>
                    <input
                      type="number"
                      value={gameLimit}
                      onChange={(e) => setGameLimit(Number(e.target.value))}
                      className="w-20 bg-[var(--content-bg)] border border-[var(--content-border)] rounded px-[0.5rem] py-[0.25rem] body-md text-center focus:border-[var(--md-sys-color-secondary)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
                <div>
                  <label className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem] block">
                    Linhas (Rows)
                  </label>
                  <select
                    value={rows}
                    onChange={(e) => setRows(Number(e.target.value))}
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-[0.75rem] py-[0.5rem] body-md focus:border-[var(--md-sys-color-secondary)]"
                  >
                    <option value={1}>1 Linha</option>
                    <option value={2}>2 Linhas</option>
                    <option value={3}>3 Linhas</option>
                  </select>
                </div>
                <div>
                  <label className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem] block">
                    Cards por Linha (Cols)
                  </label>
                  <select
                    value={cols}
                    onChange={(e) => setCols(Number(e.target.value))}
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-[0.75rem] py-[0.5rem] body-md focus:border-[var(--md-sys-color-secondary)]"
                  >
                    <option value={4}>4 Cards</option>
                    <option value={6}>6 Cards</option>
                    <option value={8}>8 Cards</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-[0.75rem] bg-[var(--content-hover)] p-[0.75rem] rounded-lg border border-[var(--content-border)]">
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={wideIntervals}
                    onChange={(e) => setWideIntervals(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-[var(--content-surface)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--md-sys-color-secondary)]"></div>
                </label>
                <div>
                  <p className="body-md text-[var(--content-text)] font-medium">
                    Intervalos Amplos (Wide Intervals)
                  </p>
                  <p className="body-sm text-[var(--content-text-secondary)]">
                    Aumenta o espaçamento horizontal entre os cards.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Preview */}
            <div className="w-full lg:w-[300px] shrink-0 flex flex-col">
              <label className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem] block">
                Live Preview (Estrutural)
              </label>
              <div className="flex-1 bg-[var(--content-hover)] rounded-xl border border-[var(--content-border)] p-[1rem] flex flex-col justify-center items-center gap-[0.5rem] min-h-[200px]">
                {/* Simulated Grid */}
                {Array.from({ length: rows }).map((_, rowIdx) => (
                  <div key={rowIdx} className="flex gap-[0.5rem] w-full justify-center">
                    {Array.from({ length: Math.min(cols, 6) }).map((_, colIdx) => (
                      <div
                        key={colIdx}
                        className={`w-10 h-10 bg-[var(--content-border)] rounded-md shadow-sm ${
                          colIdx === 5 ? 'opacity-50 border-l border-dashed translate-x-[0.5rem]' : ''
                        }`}
                      />
                    ))}
                  </div>
                ))}
                <p className="label-caps text-[var(--content-text-secondary)] mt-[1rem] opacity-80">
                  {displayMode === 'grid' ? 'Grid' : displayMode === 'carousel' ? 'Carousel' : 'Padrão'} Mode • {rows} Row{rows > 1 ? 's' : ''} • {cardLayout === 'standard' ? 'Standard' : cardLayout === 'portrait' ? 'Portrait' : 'Crash'}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Games List */}
        <div className="col-span-12">
          <Card className="overflow-hidden">
            <div className="p-[1.5rem] border-b border-[var(--content-border)] bg-[var(--content-hover)]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="headline-md text-[var(--content-text)]">Jogos Vinculados</h3>
                  <p className="body-sm text-[var(--content-text-secondary)]">24 jogos ativos nesta categoria.</p>
                </div>
                <div className="flex gap-[0.5rem]">
                  <div className="relative">
                    <i className="ti ti-search absolute left-[0.75rem] top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] text-[18px]" />
                    <input
                      type="text"
                      placeholder="Buscar jogo..."
                      className="bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg pl-[2.25rem] pr-[1rem] py-[0.5rem] body-sm focus:border-[var(--md-sys-color-secondary)] focus:outline-none w-64"
                    />
                  </div>
                  <button className="flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] border border-[var(--content-border)] rounded-lg label-caps hover:bg-[var(--content-hover)] transition-colors">
                    <i className="ti ti-filter text-[18px]" />
                    Filtros
                  </button>
                </div>
              </div>
            </div>

            <div className="p-[1.5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[1rem]">
              {/* Add Game Card */}
              <div className="border-2 border-dashed border-[var(--content-border)] rounded-xl flex flex-col items-center justify-center gap-[0.75rem] p-[1rem] hover:bg-[var(--md-sys-color-secondary)]/5 hover:border-[var(--md-sys-color-secondary)] transition-all cursor-pointer group min-h-[200px]">
                <div className="w-12 h-12 rounded-full bg-[var(--content-hover)] flex items-center justify-center group-hover:bg-[var(--md-sys-color-secondary)] group-hover:text-white transition-all">
                  <i className="ti ti-plus text-[24px]" />
                </div>
                <span className="label-caps text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-secondary)]">
                  Adicionar Jogo
                </span>
              </div>

              {/* Game Card Example */}
              {[1, 2].map((game) => (
                <div key={game} className="group relative bg-[var(--content-hover)] rounded-xl overflow-hidden border border-[var(--content-border)] hover:border-[var(--md-sys-color-secondary)] transition-all">
                  <div className="aspect-square bg-[var(--content-surface)] flex items-center justify-center relative">
                    <i className="ti ti-device-gamepad-2 text-[var(--content-border)] text-[48px]" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-[0.5rem]">
                      <button className="bg-[var(--md-sys-color-secondary)] text-white px-[0.75rem] py-[0.375rem] rounded-lg label-caps text-[10px] flex items-center gap-[0.25rem] hover:opacity-90 transition-opacity">
                        <i className="ti ti-edit text-[14px]" /> Trocar Imagem
                      </button>
                      <button className="bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)] px-[0.75rem] py-[0.375rem] rounded-lg label-caps text-[10px] flex items-center gap-[0.25rem] hover:bg-[var(--content-badge-error-text)] hover:text-white transition-colors">
                        <i className="ti ti-trash text-[14px]" /> Remover
                      </button>
                    </div>
                  </div>
                  <div className="p-[0.75rem]">
                    <h4 className="body-md font-medium text-[var(--content-text)] truncate">
                      {game === 1 ? 'Sweet Bonanza' : 'Gates of Olympus'}
                    </h4>
                    <p className="label-sm text-[var(--content-text-secondary)] mb-[0.5rem]">Pragmatic Play</p>
                    <div className="flex items-center justify-between border-t border-[var(--content-border)] pt-[0.5rem]">
                      <div className="text-center">
                        <p className="label-caps text-[var(--content-text-secondary)]">RTP</p>
                        <p className="body-sm font-bold tabular-nums text-[var(--content-text)]">
                          {game === 1 ? '96.4%' : '96.5%'}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="label-caps text-[var(--content-text-secondary)]">PLAYS</p>
                        <p className="body-sm font-bold tabular-nums text-[var(--content-text)]">
                          {game === 1 ? '142K' : '310K'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
