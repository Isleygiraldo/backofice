'use client';

import Link from 'next/link';

export default function ApostadoresPage() {
  const stats = [
    { label: 'Usuários Ativos', value: '1.240', trend: '+12%', icon: 'trending_up', trendUp: true },
    { label: 'Novos Cadastros', value: '84', icon: 'calendar_today' },
    { label: 'Volume Depósitos', value: 'R$ 452.900', icon: 'payments' },
    { label: 'Integridade Rede', value: '98.2%', progress: 98 },
  ];

  const recent = [
    { name: 'Isley Lopez', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Maria Silva', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Carlos Eduardo', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Ana Paula', avatar: 'https://i.pravatar.cc/150?img=4' },
  ];

  const apostadores = [
    {
      id: '8921',
      name: 'Isley David Lopez Giraldo',
      avatar: 'https://i.pravatar.cc/150?img=11',
      cpf: '708.758.834-60',
      email: 'isley.giraldo@twinfo.io',
      cadastro: '17/01/2024',
      depositos: 'R$ 12.450,00',
      status: 'verificado',
    },
    {
      id: '9042',
      name: 'Maria Silva Santos',
      avatar: 'https://i.pravatar.cc/150?img=12',
      cpf: '123.456.789-00',
      email: 'maria.santos@email.com',
      cadastro: '05/03/2024',
      depositos: 'R$ 5.920,00',
      status: 'verificado',
    },
    {
      id: '9155',
      name: 'Carlos Eduardo Melo',
      avatar: 'https://i.pravatar.cc/150?img=13',
      cpf: '987.654.321-00',
      email: 'carlos.melo@gmail.com',
      cadastro: '22/04/2024',
      depositos: 'R$ 2.100,00',
      status: 'pendente',
    },
    {
      id: '9201',
      name: 'Ana Paula Ferreira',
      avatar: 'https://i.pravatar.cc/150?img=14',
      cpf: '456.123.789-00',
      email: 'ana.ferreira@outlook.com',
      cadastro: '10/06/2024',
      depositos: 'R$ 0,00',
      status: 'bloqueado',
    },
  ];

  return (
    <div className="p-4 space-y-4 max-w-[1600px] mx-auto">
      {/* Header - MD3 Typography */}
      <div className="flex justify-between items-center py-2">
        <h2 className="text-xl font-semibold tracking-tight text-[var(--content-text)]">
          Gerenciamento de Apostadores
        </h2>
        {/* MD3 Filled Button */}
        <button className="bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:shadow-md transition-shadow active:scale-[0.98]">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 20' }}>
            add
          </span>
          Novo Apostador
        </button>
      </div>

      {/* MD3 Cards - Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[var(--content-surface)] border border-[var(--content-border)] rounded-xl p-3 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold mb-1">
                {stat.label}
              </p>
              <h3 className="text-xl font-semibold text-[var(--content-text)] leading-none">
                {stat.value}
              </h3>
              {stat.trend && (
                <div className={`flex items-center gap-1 mt-1.5 ${stat.trendUp ? 'text-emerald-600' : 'text-[var(--content-text-secondary)]'}`}>
                  {stat.trendUp && (
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>
                      trending_up
                    </span>
                  )}
                  <span className="text-[9px] font-bold">{stat.trend}</span>
                </div>
              )}
            </div>
            <div className="text-[var(--content-text-secondary)] opacity-40">
              {stat.icon && (
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>
                  {stat.icon}
                </span>
              )}
              {stat.progress && (
                <div className="w-16 bg-[var(--content-border)] rounded-full h-1 overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: `${stat.progress}%` }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MD3 Chips - Recent Users */}
      <div className="flex items-center gap-3 py-1">
        <span className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold flex-shrink-0">
          Recentes:
        </span>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {recent.map((user, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 bg-[var(--content-surface)] border border-[var(--content-border)] px-2 py-1 rounded-full hover:border-[var(--md-sys-color-secondary)] cursor-pointer transition-all"
            >
              <img src={user.avatar} alt={user.name} className="w-5 h-5 rounded-full" />
              <span className="text-[11px] font-bold text-[var(--content-text)]">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MD3 Filter Bar */}
      <div className="bg-[var(--content-surface)] border border-[var(--content-border)] rounded px-3 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* MD3 Text Field */}
          <div className="relative flex-1 max-w-[240px]">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full h-8 pl-8 pr-3 rounded border border-[var(--content-border)] bg-[var(--content-bg)] text-sm text-[var(--content-text)] focus:ring-1 focus:ring-[var(--md-sys-color-secondary)]/40 focus:border-[var(--md-sys-color-secondary)] transition-all outline-none"
            />
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] opacity-60 text-[18px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>
              search
            </span>
          </div>

          <div className="flex items-center gap-4 border-l border-[var(--content-border)] pl-4">
            <button className="flex items-center gap-1.5 group">
              <span className="text-xs text-[var(--content-text)]">Vip</span>
              <span className="bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-primary)] text-[16px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-1.5 group">
              <span className="text-xs text-[var(--content-text)]">Status</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-primary)] text-[16px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-1.5 group">
              <span className="text-xs text-[var(--content-text)]">Verificado</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-primary)] text-[16px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-1.5 group">
              <span className="text-xs text-[var(--content-text)]">Data cadastro</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-primary)] text-[16px]">
                calendar_today
              </span>
            </button>
          </div>
        </div>

        {/* MD3 Outlined Button */}
        <button className="px-3 py-1 rounded border border-[var(--content-border)] text-[var(--content-text-secondary)] text-[11px] font-bold hover:bg-[var(--content-hover)] transition-all">
          Limpar filtros
        </button>
      </div>

      {/* MD3 Data Table */}
      <div className="bg-[var(--content-surface)] rounded-lg shadow-sm border border-[var(--content-border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-fixed">
            <thead className="bg-[var(--content-bg)] border-b border-[var(--content-border)]">
              <tr>
                <th className="w-[28%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold">
                  Apostador
                </th>
                <th className="w-[14%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold text-center">
                  CPF
                </th>
                <th className="w-[18%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold">
                  Email
                </th>
                <th className="w-[12%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold text-center">
                  Cadastro
                </th>
                <th className="w-[12%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold text-right">
                  Depósitos
                </th>
                <th className="w-[10%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold text-center">
                  Status
                </th>
                <th className="w-[6%] px-4 py-2.5 text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.05em] font-bold text-center">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {apostadores.map((user) => (
                <tr key={user.id} className="hover:bg-[var(--content-hover)] transition-colors group">
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover flex-shrink-0" />
                      <div className="truncate">
                        <p className="text-[13px] font-medium text-[var(--content-text)] truncate">
                          {user.name}
                        </p>
                        <p className="text-[11px] text-[var(--content-text-secondary)] opacity-50">
                          ID: #{user.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-xs text-[var(--content-text-secondary)] text-center tabular-nums">
                    {user.cpf}
                  </td>
                  <td className="px-4 py-2 text-xs text-[var(--content-text-secondary)] truncate">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 text-xs text-[var(--content-text-secondary)] text-center">
                    {user.cadastro}
                  </td>
                  <td className="px-4 py-2 text-xs text-right font-bold text-[var(--content-text)] tabular-nums">
                    {user.depositos}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {user.status === 'verificado' && (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border-[0.5px] border-[var(--content-badge-success-border)] uppercase leading-none">
                        Verificado
                      </span>
                    )}
                    {user.status === 'pendente' && (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-900/40 text-amber-500 border-[0.5px] border-amber-700/50 uppercase leading-none">
                        Pendente
                      </span>
                    )}
                    {user.status === 'bloqueado' && (
                      <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-900/40 text-red-500 border-[0.5px] border-red-700/50 uppercase leading-none">
                        Bloqueado
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {/* MD3 Icon Button */}
                    <Link
                      href={`/usuarios/apostadores/${user.id}`}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[var(--md-sys-color-secondary)]/10 text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)] transition-all mx-auto"
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>
                        visibility
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MD3 Pagination */}
        <div className="px-4 py-3 bg-[var(--content-bg)] border-t border-[var(--content-border)] flex justify-between items-center">
          <p className="text-xs text-[var(--content-text-secondary)]">Exibindo 1-10 de 1.240</p>
          <div className="flex items-center gap-1.5">
            <button
              disabled
              className="w-7 h-7 flex items-center justify-center rounded border border-[var(--content-border)] text-[var(--content-text-secondary)] hover:bg-[var(--content-surface)] transition-all disabled:opacity-30"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            </button>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] font-bold text-xs">
                1
              </button>
              <button className="w-7 h-7 rounded border border-[var(--content-border)] hover:bg-[var(--content-surface)] text-[var(--content-text-secondary)] font-bold text-xs">
                2
              </button>
              <button className="w-7 h-7 rounded border border-[var(--content-border)] hover:bg-[var(--content-surface)] text-[var(--content-text-secondary)] font-bold text-xs">
                3
              </button>
              <span className="px-0.5 text-[var(--content-text-secondary)] text-xs flex items-end">...</span>
            </div>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-[var(--content-border)] text-[var(--content-text-secondary)] hover:bg-[var(--content-surface)] transition-all">
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
