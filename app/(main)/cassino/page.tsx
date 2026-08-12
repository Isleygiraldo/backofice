'use client';

import { Card, Tab } from '@/app/_components/ui';

export default function CassinoDashboard() {
  return (
    <div className="p-[1rem] md:p-[1.5rem] bg-[var(--content-bg)] flex-1 overflow-y-auto max-w-[1400px] mx-auto space-y-[1rem] md:space-y-[1.5rem]">
      {/* Filter Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[1rem]">
        <div>
          <h2 className="headline-md text-[var(--content-text)]">
            Painel de Controle Casino
          </h2>
          <p className="body-md text-[var(--content-text-secondary)] mt-[0.25rem]">
            Visão geral do desempenho e saúde da plataforma
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[0.75rem] w-full md:w-auto">
          <div className="flex items-center bg-[var(--content-surface)] px-[0.75rem] py-[0.5rem] shape-lg border border-[var(--content-border)] cursor-pointer hover:bg-[var(--content-hover)] transition-colors">
            <span className="material-symbols-outlined text-[18px] mr-[0.5rem] text-[var(--md-sys-color-secondary)]">
              calendar_today
            </span>
            <span className="label-lg text-[var(--content-text)] flex-1">
              Últimos 30 Dias
            </span>
            <span className="material-symbols-outlined text-[18px] ml-[0.5rem] text-[var(--content-text-secondary)]">
              expand_more
            </span>
          </div>
          <div className="flex bg-[var(--content-hover)] shape-lg p-[0.25rem] gap-[0.25rem]">
            <Tab active>Todos</Tab>
            <Tab>Jogos</Tab>
            <Tab>Ao Vivo</Tab>
            <Tab>Mesas</Tab>
          </div>
        </div>
      </section>

      {/* KPI Cards Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-[1rem]">
        {/* Valores Reais */}
        <Card className="p-[1.25rem] md:p-[1.5rem] border-l-4 border-l-[var(--md-sys-color-secondary)]">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[1rem] flex items-center gap-[0.5rem]">
            <span className="material-symbols-outlined text-[16px]">payments</span>
            Valores Reais
          </p>
          <div className="space-y-[1rem]">
            <div className="flex justify-between items-end">
              <div>
                <p className="body-sm text-[var(--content-text-secondary)]">GGR Bruto</p>
                <p className="headline-lg text-[var(--md-sys-color-secondary)] mt-[0.25rem]">
                  R$ 171.2M
                </p>
              </div>
              <div className="text-right">
                <p className="label-caps text-green-600">+12.4%</p>
                <p className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '9px' }}>
                  vs prev. month
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[1rem] border-t border-[var(--content-border)] pt-[1rem]">
              <div>
                <p className="body-sm text-[var(--content-text-secondary)]">Apostas</p>
                <p className="headline-md text-[var(--content-text)] mt-[0.25rem]">
                  R$ 2.45B
                </p>
              </div>
              <div>
                <p className="body-sm text-[var(--content-text-secondary)]">Ganhos</p>
                <p className="headline-md text-[var(--content-text)] mt-[0.25rem]">
                  R$ 2.27B
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Bônus */}
        <Card className="p-[1.25rem] md:p-[1.5rem] border-l-4 border-l-amber-500">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[1rem] flex items-center gap-[0.5rem]">
            <span className="material-symbols-outlined text-[16px]">card_giftcard</span>
            Valores de Bônus
          </p>
          <div className="space-y-[1rem]">
            <div className="flex justify-between items-end">
              <div>
                <p className="body-sm text-[var(--content-text-secondary)]">Saldo de Bônus</p>
                <p className="headline-lg text-amber-600 mt-[0.25rem]">R$ 24.8M</p>
              </div>
              <div className="text-right">
                <p className="label-caps text-amber-600">14.5% Conv.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[1rem] border-t border-[var(--content-border)] pt-[1rem]">
              <div>
                <p className="body-sm text-[var(--content-text-secondary)]">Apostas (B)</p>
                <p className="headline-md text-[var(--content-text)] mt-[0.25rem]">
                  R$ 312M
                </p>
              </div>
              <div>
                <p className="body-sm text-[var(--content-text-secondary)]">Ganhos (B)</p>
                <p className="headline-md text-[var(--content-text)] mt-[0.25rem]">
                  R$ 287M
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Saúde do Catálogo */}
        <Card className="p-[1.25rem] md:p-[1.5rem] border-l-4 border-l-[var(--md-sys-color-primary)]">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[1rem] flex items-center gap-[0.5rem]">
            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
            Saúde do Catálogo
          </p>
          <div className="space-y-[1.25rem]">
            <div>
              <div className="flex justify-between body-sm mb-[0.5rem] text-[var(--content-text)]">
                <span>Jogos Ativos</span>
                <span className="font-bold">13,902 / 14,583</span>
              </div>
              <div className="w-full bg-[var(--content-hover)] h-[0.5rem] shape-sm overflow-hidden">
                <div
                  className="bg-[var(--md-sys-color-secondary)] h-full shape-sm"
                  style={{ width: '95.3%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between body-sm mb-[0.5rem] text-[var(--content-text)]">
                <span>Fornecedores Ativos</span>
                <span className="font-bold">68 / 70</span>
              </div>
              <div className="w-full bg-[var(--content-hover)] h-[0.5rem] shape-sm overflow-hidden">
                <div
                  className="bg-[var(--md-sys-color-secondary)] h-full shape-sm"
                  style={{ width: '97.1%' }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-[0.5rem] label-caps py-[0.5rem] px-[0.75rem] bg-[var(--md-sys-color-secondary)]/10 shape-md text-[var(--md-sys-color-secondary)] border border-[var(--md-sys-color-secondary)]/20">
              <span className="material-symbols-outlined text-[14px]">info</span>2 fornecedores
              em manutenção
            </div>
          </div>
        </Card>
      </section>

      {/* Main Chart Area */}
      <Card className="p-[1rem] md:p-[1.5rem]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[1rem] mb-[1.5rem]">
          <div>
            <h3 className="headline-md text-[var(--content-text)]">
              Tendência de GGR
            </h3>
            <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
              Performance diária no período selecionado
            </p>
          </div>
          <div className="flex items-center gap-[1rem] label-caps text-[var(--content-text-secondary)]">
            <div className="flex items-center gap-[0.375rem]">
              <span className="w-[0.75rem] h-[0.75rem] rounded-full bg-[var(--md-sys-color-secondary)]"></span>
              GGR Atual
            </div>
            <div className="flex items-center gap-[0.375rem]">
              <span className="w-[0.75rem] h-[0.75rem] rounded-full bg-[var(--content-border)]"></span>
              Anterior
            </div>
          </div>
        </div>
        <div className="h-[12rem] md:h-[16rem] w-full relative">
          <svg className="w-full h-full" viewBox="0 0 1000 200">
            <path
              d="M0,150 Q100,140 200,160 T400,100 T600,130 T800,40 T1000,60"
              fill="none"
              stroke="var(--md-sys-color-secondary)"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              d="M0,150 Q100,140 200,160 T400,100 T600,130 T800,40 T1000,60 L1000,200 L0,200 Z"
              fill="url(#grad1)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--md-sys-color-secondary)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'var(--md-sys-color-secondary)', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <line opacity="0.1" stroke="var(--content-border)" strokeDasharray="4" x1="0" x2="1000" y1="50" y2="50" />
            <line opacity="0.1" stroke="var(--content-border)" strokeDasharray="4" x1="0" x2="1000" y1="100" y2="100" />
            <line opacity="0.1" stroke="var(--content-border)" strokeDasharray="4" x1="0" x2="1000" y1="150" y2="150" />
          </svg>
        </div>
        <div className="flex justify-between mt-[1rem] px-[0.5rem] label-caps text-[var(--content-text-secondary)] opacity-70">
          <span>01 OUT</span>
          <span className="hidden sm:inline">07 OUT</span>
          <span>14 OUT</span>
          <span className="hidden sm:inline">21 OUT</span>
          <span>28 OUT</span>
          <span className="hidden md:inline">30 OUT</span>
        </div>
      </Card>

      {/* Rankings Section */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-[1rem]">
        {/* Top Jogos por GGR */}
        <Card className="overflow-hidden">
          <div className="p-[1rem] md:p-[1.5rem] border-b border-[var(--content-border)] flex justify-between items-center">
            <h3 className="headline-md text-[var(--content-text)]">
              Top Jogos por GGR
            </h3>
            <button className="label-caps text-[var(--md-sys-color-secondary)] hover:underline">
              Ver Tudo
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead className="bg-[var(--content-hover)]">
                <tr className="label-caps text-[var(--content-text-secondary)]">
                  <th className="px-[1rem] md:px-[1.5rem] py-[0.75rem]">Jogo / Provedor</th>
                  <th className="px-[1rem] md:px-[1.5rem] py-[0.75rem] text-right">GGR Total</th>
                  <th className="px-[1rem] md:px-[1.5rem] py-[0.75rem]">Relevância</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--content-border)]">
                {[
                  { initial: 'S', nome: 'Sugar Rush', provider: 'Pragmatic Play', ggr: 'R$ 12.4M', relevancia: 88 },
                  { initial: 'A', nome: 'Aviator', provider: 'Spribe', ggr: 'R$ 10.8M', relevancia: 75 },
                  { initial: 'G', nome: 'Gates of Olympus', provider: 'Pragmatic Play', ggr: 'R$ 9.2M', relevancia: 65 },
                ].map((jogo, i) => (
                  <tr key={i} className="hover:bg-[var(--content-hover)] transition-colors">
                    <td className="px-[1rem] md:px-[1.5rem] py-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem]">
                        <div className="w-[2.5rem] h-[2.5rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center font-bold text-[var(--md-sys-color-secondary)] flex-shrink-0">
                          {jogo.initial}
                        </div>
                        <div className="min-w-0">
                          <p className="table-data text-[var(--content-text)] truncate">
                            {jogo.nome}
                          </p>
                          <p className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>
                            {jogo.provider}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-[1rem] md:px-[1.5rem] py-[0.75rem] text-right table-data text-[var(--content-text)]">
                      {jogo.ggr}
                    </td>
                    <td className="px-[1rem] md:px-[1.5rem] py-[0.75rem]">
                      <div className="w-[5rem] md:w-[6rem] bg-[var(--content-hover)] h-[0.375rem] shape-sm overflow-hidden">
                        <div
                          className="bg-[var(--md-sys-color-secondary)] h-full"
                          style={{ width: `${jogo.relevancia}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Top Fornecedores */}
        <Card className="overflow-hidden">
          <div className="p-[1rem] md:p-[1.5rem] border-b border-[var(--content-border)] flex justify-between items-center">
            <h3 className="headline-md text-[var(--content-text)]">
              Top Fornecedores por GGR
            </h3>
            <button className="label-caps text-[var(--md-sys-color-secondary)] hover:underline">
              Análise ROI
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[400px]">
              <thead className="bg-[var(--content-hover)]">
                <tr className="label-caps text-[var(--content-text-secondary)]">
                  <th className="px-[1rem] md:px-[1.5rem] py-[0.75rem]">Provedor</th>
                  <th className="px-[1rem] md:px-[1.5rem] py-[0.75rem] text-center">Jogos Ativos</th>
                  <th className="px-[1rem] md:px-[1.5rem] py-[0.75rem] text-right">Total GGR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--content-border)]">
                {[
                  { provider: 'Pragmatic Play', jogos: 342, ggr: 'R$ 48.2M' },
                  { provider: 'Evolution Gaming', jogos: 128, ggr: 'R$ 31.5M' },
                  { provider: 'Spribe', jogos: 12, ggr: 'R$ 15.9M' },
                ].map((provider, i) => (
                  <tr key={i} className="hover:bg-[var(--content-hover)] transition-colors">
                    <td className="px-[1rem] md:px-[1.5rem] py-[0.75rem] table-data text-[var(--content-text)]">
                      {provider.provider}
                    </td>
                    <td className="px-[1rem] md:px-[1.5rem] py-[0.75rem] text-center table-data text-[var(--content-text)]">
                      {provider.jogos}
                    </td>
                    <td className="px-[1rem] md:px-[1.5rem] py-[0.75rem] text-right table-data text-[var(--md-sys-color-secondary)] font-bold">
                      {provider.ggr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Distribution Panel & Risk */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
        {/* GGR by Category */}
        <Card className="p-[1.25rem] md:p-[1.5rem]">
          <h3 className="label-caps mb-[1.5rem] text-[var(--content-text-secondary)]">
            Distribuição por Categoria
          </h3>
          <div className="space-y-[1rem]">
            {[
              { nome: 'Slots', percentual: 62 },
              { nome: 'Crash Games', percentual: 24 },
              { nome: 'Casino Live', percentual: 14 },
            ].map((cat, i) => (
              <div key={i} className="flex flex-col gap-[0.375rem]">
                <div className="flex justify-between label-md text-[var(--content-text)]">
                  <span>{cat.nome}</span>
                  <span>{cat.percentual}%</span>
                </div>
                <div className="w-full h-[0.5rem] bg-[var(--content-hover)] shape-sm overflow-hidden">
                  <div
                    className="bg-[var(--md-sys-color-secondary)] h-full"
                    style={{ width: `${cat.percentual}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Freespins */}
        <Card className="p-[1.25rem] md:p-[1.5rem]">
          <h3 className="label-caps mb-[1.5rem] text-[var(--content-text-secondary)]">
            Top Recebedores Freespins
          </h3>
          <div className="space-y-[0.75rem]">
            {[
              { id: '89122', tier: 'Gold VIP', spins: '1,250 SPINS', won: 'R$ 4.5k Won' },
              { id: '44219', tier: 'Silver Tier', spins: '840 SPINS', won: 'R$ 2.1k Won' },
            ].map((user, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-[0.75rem] bg-[var(--content-hover)] shape-md border border-[var(--content-border)]"
              >
                <div className="flex items-center gap-[0.75rem]">
                  <div className="w-[2rem] h-[2rem] rounded-full bg-[var(--md-sys-color-primary-container)] flex items-center justify-center body-sm text-[var(--md-sys-color-on-primary-container)] font-bold">
                    ID
                  </div>
                  <div>
                    <p className="label-caps text-[var(--content-text)]">
                      User #{user.id}
                    </p>
                    <p className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>
                      {user.tier}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="label-caps text-[var(--content-text)]">{user.spins}</p>
                  <p className="body-sm text-green-600 font-bold" style={{ fontSize: '10px' }}>
                    {user.won}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alertas de Risco */}
        <Card className="p-[1.25rem] md:p-[1.5rem] border border-[var(--content-badge-error-border)]">
          <div className="flex items-center gap-[0.5rem] mb-[1.5rem]">
            <span className="material-symbols-outlined text-[var(--content-badge-error-text)]">
              warning
            </span>
            <h3 className="label-caps text-[var(--content-badge-error-text)]">
              Alertas de Risco
            </h3>
          </div>
          <div className="space-y-[0.75rem]">
            <div className="p-[0.75rem] bg-[var(--content-badge-error-bg)] border border-[var(--content-badge-error-border)] shape-md">
              <div className="flex justify-between items-start mb-[0.25rem]">
                <p className="label-caps text-[var(--content-badge-error-text)]">
                  Anomalia de RTP
                </p>
                <span className="bg-[var(--content-badge-error-text)] text-white label-caps px-[0.375rem] py-[0.125rem] shape-xs font-bold" style={{ fontSize: '10px' }}>
                  ALTO
                </span>
              </div>
              <p className="body-sm text-[var(--content-text-secondary)] mb-[0.5rem]">
                Jogo "Mystic Reels" operando a 104% RTP nas últimas 4h.
              </p>
              <button className="w-full py-[0.375rem] bg-[var(--content-badge-error-text)] text-white label-caps shape-md hover:opacity-90 transition-all">
                Suspender Jogo
              </button>
            </div>
            <div className="p-[0.75rem] bg-[var(--content-badge-warning-bg)] border border-[var(--content-badge-warning-border)] shape-md">
              <div className="flex justify-between items-start mb-[0.25rem]">
                <p className="label-caps text-[var(--content-badge-warning-text)]">
                  Queda de Tráfego
                </p>
                <span className="bg-[var(--content-badge-warning-text)] text-white label-caps px-[0.375rem] py-[0.125rem] shape-xs font-bold" style={{ fontSize: '10px' }}>
                  MÉDIO
                </span>
              </div>
              <p className="body-sm text-[var(--content-text-secondary)]">
                -30% usuários ativos no setor Ao Vivo.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
