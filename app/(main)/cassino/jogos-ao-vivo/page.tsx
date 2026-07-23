'use client';

export default function JogosAoVivoPage() {
  const jogosAoVivo = [
    { id: 6365, nome: 'Ru Yi Speed Baccarat', mesa: 'Mesa A1', dealer: 'Maria Silva', jogadores: 12, apostas: 'R$ 45.8k', genero: 'Baccarat', fornecedor: 'Playtech', status: 'online', thumb: 'https://via.placeholder.com/80x48/2c5530/fff?text=LIVE' },
    { id: 7821, nome: 'Lightning Roulette', mesa: 'Mesa R7', dealer: 'Carlos Lima', jogadores: 24, apostas: 'R$ 128.2k', genero: 'Roleta', fornecedor: 'Evolution', status: 'online', thumb: 'https://via.placeholder.com/80x48/2c5530/fff?text=LIVE' },
    { id: 8942, nome: 'Mega Baccarat VIP', mesa: 'VIP-B2', dealer: 'Ana Costa', jogadores: 8, apostas: 'R$ 312.5k', genero: 'Baccarat', fornecedor: 'Evolution', status: 'online', thumb: 'https://via.placeholder.com/80x48/2c5530/fff?text=LIVE' },
    { id: 5612, nome: 'Speed Blackjack 1', mesa: 'Mesa BJ3', dealer: 'João Pedro', jogadores: 5, apostas: 'R$ 22.1k', genero: 'Blackjack', fornecedor: 'Evolution', status: 'paused', thumb: 'https://via.placeholder.com/80x48/5a4c2c/fff?text=PAUSE' },
    { id: 9034, nome: 'Dream Catcher', mesa: 'Wheel-1', dealer: 'Patricia Reis', jogadores: 18, apostas: 'R$ 67.4k', genero: 'Game Show', fornecedor: 'Evolution', status: 'online', thumb: 'https://via.placeholder.com/80x48/2c5530/fff?text=LIVE' },
  ];

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem]">
        <div>
          <h2 className="headline-md text-[var(--content-text)] flex items-center gap-[0.5rem]">
            Jogos ao Vivo
            <span className="px-[0.5rem] py-[0.125rem] bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] label-caps shape-xs border border-[var(--content-badge-success-border)] flex items-center gap-[0.25rem]">
              <span className="w-[0.375rem] h-[0.375rem] bg-green-500 rounded-full animate-pulse"></span>
              Live
            </span>
          </h2>
          <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
            Monitoramento de mesas ao vivo em tempo real
          </p>
        </div>
        <div className="flex gap-[0.5rem]">
          <button className="md3-button-outlined label-caps px-[0.75rem] py-[0.375rem] flex items-center gap-[0.375rem]">
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            Atualizar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.75rem]">
        <div className="md3-card p-[0.875rem] border-l-4 border-l-green-500">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Mesas Online</p>
          <p className="headline-lg text-green-600">4</p>
        </div>
        <div className="md3-card p-[0.875rem] border-l-4 border-l-amber-500">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Em Pausa</p>
          <p className="headline-lg text-amber-500">1</p>
        </div>
        <div className="md3-card p-[0.875rem] border-l-4 border-l-[var(--md-sys-color-secondary)]">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Jogadores Ativos</p>
          <p className="headline-lg text-[var(--md-sys-color-secondary)]">67</p>
        </div>
        <div className="md3-card p-[0.875rem] border-l-4 border-l-[var(--md-sys-color-secondary)]">
          <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Apostas em Jogo</p>
          <p className="headline-lg text-[var(--content-text)]">R$ 576k</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="md3-card overflow-hidden">
        <div className="p-[0.75rem] flex items-center justify-between bg-[var(--content-hover)] border-b border-[var(--content-border)]">
          <h3 className="headline-md text-[var(--content-text)]">Mesas em Operação</h3>
          <span className="body-sm text-[var(--content-text-secondary)]">
            <span className="font-bold text-[var(--content-text)]">{jogosAoVivo.length}</span> mesas ativas
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1100px]">
            <thead>
              <tr className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Thumbnail
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Nome do Jogo
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Mesa
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Dealer
                </th>
                <th className="px-[1rem] py-[0.625rem] text-center label-caps text-[var(--content-text-secondary)]">
                  Jogadores
                </th>
                <th className="px-[1rem] py-[0.625rem] text-right label-caps text-[var(--content-text-secondary)]">
                  Apostas Ativas
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Gênero
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Fornecedor
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Status
                </th>
                <th className="px-[1rem] py-[0.625rem] text-right label-caps text-[var(--content-text-secondary)]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {jogosAoVivo.map((jogo) => (
                <tr
                  key={jogo.id}
                  className={`hover:bg-[var(--content-hover)] transition-colors ${
                    jogo.status === 'online' ? 'bg-green-500/5' : ''
                  }`}
                >
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="w-[3rem] h-[1.875rem] shape-md overflow-hidden border-2 border-[var(--content-border)] relative">
                      <img
                        className="w-full h-full object-cover"
                        src={jogo.thumb}
                        alt={jogo.nome}
                      />
                      {jogo.status === 'online' && (
                        <div className="absolute top-[0.125rem] right-[0.125rem] w-[0.375rem] h-[0.375rem] bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="table-data text-[var(--content-text)]">{jogo.nome}</div>
                    <div className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>
                      ID: {jogo.id}
                    </div>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)]">
                    {jogo.mesa}
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="flex items-center gap-[0.5rem]">
                      <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-[var(--md-sys-color-primary-container)] flex items-center justify-center body-sm text-[var(--md-sys-color-on-primary-container)] font-bold">
                        {jogo.dealer.charAt(0)}
                      </div>
                      <span className="table-data text-[var(--content-text)]">{jogo.dealer}</span>
                    </div>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-center">
                    <span className="table-data text-[var(--md-sys-color-secondary)] font-bold">
                      {jogo.jogadores}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-right table-data text-[var(--content-text)] font-bold">
                    {jogo.apostas}
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)]">
                    {jogo.genero}
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)]">
                    {jogo.fornecedor}
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <span
                      className={`label-caps px-[0.5rem] py-[0.125rem] shape-xs flex items-center gap-[0.25rem] w-fit ${
                        jogo.status === 'online'
                          ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border border-[var(--content-badge-success-border)]'
                          : 'bg-[var(--content-badge-warning-bg)] text-[var(--content-badge-warning-text)] border border-[var(--content-badge-warning-border)]'
                      }`}
                      style={{ fontSize: '9px' }}
                    >
                      <span className={`w-[0.375rem] h-[0.375rem] rounded-full ${jogo.status === 'online' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                      {jogo.status === 'online' ? 'Online' : 'Pausado'}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-right">
                    <div className="flex justify-end gap-[0.25rem]">
                      <button
                        className="p-[0.375rem] hover:bg-[var(--md-sys-color-secondary)]/20 hover:text-[var(--md-sys-color-secondary)] shape-xs transition-all"
                        title="Monitorar"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          tv
                        </span>
                      </button>
                      <button
                        className="p-[0.375rem] hover:bg-[var(--md-sys-color-secondary)]/20 hover:text-[var(--md-sys-color-secondary)] shape-xs transition-all"
                        title="Histórico"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          history
                        </span>
                      </button>
                      <button
                        className="p-[0.375rem] hover:bg-[var(--md-sys-color-secondary)]/20 hover:text-[var(--md-sys-color-secondary)] shape-xs transition-all"
                        title="Configurações"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          settings
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-[0.75rem] border-t border-[var(--content-border)] bg-[var(--content-hover)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[0.5rem]">
          <div className="flex items-center gap-[0.5rem] text-[var(--content-text-secondary)]">
            <span className="w-[0.5rem] h-[0.5rem] bg-green-500 rounded-full animate-pulse"></span>
            <span className="body-sm">Atualização automática ativa • Última: há 3s</span>
          </div>
          <button className="body-sm font-bold text-[var(--md-sys-color-secondary)] hover:underline">
            Ver Histórico Completo
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.75rem]">
        <button className="md3-card p-[1rem] hover:elevation-2 transition-all text-left group">
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[2.5rem] h-[2.5rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)] group-hover:bg-[var(--md-sys-color-secondary)] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <div>
              <p className="table-data text-[var(--content-text)]">Relatório de Performance</p>
              <p className="body-sm text-[var(--content-text-secondary)]">Últimas 24h</p>
            </div>
          </div>
        </button>

        <button className="md3-card p-[1rem] hover:elevation-2 transition-all text-left group">
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[2.5rem] h-[2.5rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)] group-hover:bg-[var(--md-sys-color-secondary)] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="table-data text-[var(--content-text)]">Programação de Mesas</p>
              <p className="body-sm text-[var(--content-text-secondary)]">Gerenciar horários</p>
            </div>
          </div>
        </button>

        <button className="md3-card p-[1rem] hover:elevation-2 transition-all text-left group">
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[2.5rem] h-[2.5rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)] group-hover:bg-[var(--md-sys-color-secondary)] group-hover:text-white transition-all">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <p className="table-data text-[var(--content-text)]">Dealers Disponíveis</p>
              <p className="body-sm text-[var(--content-text-secondary)]">8 online agora</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
