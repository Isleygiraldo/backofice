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
    <div className="p-[1rem] space-y-[1rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] py-[0.5rem]">
        <h2 className="headline-md text-[var(--content-text)]">
          Gerenciamento de Apostadores
        </h2>
        <button className="w-full sm:w-auto md3-button-filled label-caps px-[1rem] py-[0.5rem] flex items-center justify-center gap-[0.5rem]">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 20' }}>
            add
          </span>
          Novo Apostador
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0.75rem]">
        {stats.map((stat, i) => (
          <div key={i} className="md3-card p-[0.75rem] flex items-center justify-between">
            <div>
              <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
                {stat.label}
              </p>
              <h3 className="headline-lg text-[var(--content-text)] leading-none">
                {stat.value}
              </h3>
              {stat.trend && (
                <div className={`flex items-center gap-[0.25rem] mt-[0.375rem] ${stat.trendUp ? 'text-emerald-600' : 'text-[var(--content-text-secondary)]'}`}>
                  {stat.trendUp && (
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>
                      trending_up
                    </span>
                  )}
                  <span className="label-caps" style={{ fontSize: '9px' }}>{stat.trend}</span>
                </div>
              )}
              {stat.progress !== undefined && (
                <div className="w-full bg-[var(--content-hover)] h-[0.375rem] shape-sm mt-[0.5rem] overflow-hidden">
                  <div className="bg-[var(--md-sys-color-secondary)] h-full" style={{ width: `${stat.progress}%` }}></div>
                </div>
              )}
            </div>
            {stat.icon && (
              <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[32px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 300' }}>
                {stat.icon}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Recent Users Chips (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-[0.75rem] py-[0.25rem]">
        <span className="label-caps text-[var(--content-text-secondary)] flex-shrink-0">
          Recentes:
        </span>
        <div className="flex gap-[0.5rem] overflow-x-auto">
          {recent.map((user, i) => (
            <div
              key={i}
              className="flex items-center gap-[0.375rem] px-[0.5rem] py-[0.25rem] bg-[var(--content-surface)] border border-[var(--content-border)] shape-md hover:elevation-1 transition-all cursor-pointer"
            >
              <img src={user.avatar} alt={user.name} className="w-[1rem] h-[1rem] rounded-full object-cover" />
              <span className="body-sm text-[var(--content-text)] whitespace-nowrap">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="md3-card px-[0.75rem] py-[0.5rem] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-[0.75rem]">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[0.75rem] flex-1">
          <div className="relative w-full sm:flex-1 sm:max-w-[240px]">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="md3-input h-[2rem] pl-[2rem]"
            />
            <span className="material-symbols-outlined absolute left-[0.5rem] top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] text-[18px]">
              search
            </span>
          </div>

          {/* Filters - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-[1rem] border-l border-[var(--content-border)] pl-[1rem]">
            <button className="flex items-center gap-[0.375rem] group">
              <span className="body-sm text-[var(--content-text)]">Vip</span>
              <span className="bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] label-caps w-[1rem] h-[1rem] flex items-center justify-center rounded-full" style={{ fontSize: '9px' }}>
                3
              </span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] text-[14px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-[0.375rem] group">
              <span className="body-sm text-[var(--content-text)]">Status</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] text-[14px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-[0.375rem] group">
              <span className="body-sm text-[var(--content-text)]">Data</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] text-[14px]">
                expand_more
              </span>
            </button>
          </div>
        </div>

        <button className="px-[0.75rem] py-[0.375rem] shape-md border border-[var(--content-border)] text-[var(--content-text-secondary)] label-caps hover:bg-[var(--content-hover)] transition-all whitespace-nowrap">
          Limpar filtros
        </button>
      </div>

      {/* Data Table */}
      <div className="md3-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-[var(--content-bg)] border-b border-[var(--content-border)]">
              <tr>
                <th className="w-[28%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)]">
                  Apostador
                </th>
                <th className="w-[14%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  CPF
                </th>
                <th className="w-[20%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)]">
                  Email
                </th>
                <th className="w-[12%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  Cadastro
                </th>
                <th className="w-[14%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-right">
                  Depósitos
                </th>
                <th className="w-[10%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  Status
                </th>
                <th className="w-[2%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {apostadores.map((user) => (
                <tr key={user.id} className="hover:bg-[var(--content-hover)] transition-colors cursor-pointer group">
                  <td className="px-[1rem] py-[0.5rem]">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="flex items-center gap-[0.5rem]">
                      <img src={user.avatar} alt={user.name} className="w-[1.75rem] h-[1.75rem] rounded-full object-cover flex-shrink-0" />
                      <div className="truncate">
                        <p className="table-data text-[var(--content-text)] truncate">
                          {user.name}
                        </p>
                        <p className="body-sm text-[var(--content-text-secondary)] opacity-50" style={{ fontSize: '11px' }}>
                          ID: #{user.id}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center body-sm text-[var(--content-text-secondary)] tabular-nums">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.cpf}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] body-sm text-[var(--content-text-secondary)] truncate">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block truncate">
                      {user.email}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center body-sm text-[var(--content-text-secondary)]">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.cadastro}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-right table-data font-bold text-[var(--content-text)] tabular-nums">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.depositos}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.status === 'verificado' && (
                        <span className="inline-block px-[0.375rem] py-[0.125rem] shape-xs label-caps bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border border-[var(--content-badge-success-border)] leading-none" style={{ fontSize: '9px' }}>
                          Verificado
                        </span>
                      )}
                      {user.status === 'pendente' && (
                        <span className="inline-block px-[0.375rem] py-[0.125rem] shape-xs label-caps bg-amber-900/40 text-amber-500 border border-amber-700/50 leading-none" style={{ fontSize: '9px' }}>
                          Pendente
                        </span>
                      )}
                      {user.status === 'bloqueado' && (
                        <span className="inline-block px-[0.375rem] py-[0.125rem] shape-xs label-caps bg-red-900/40 text-red-500 border border-red-700/50 leading-none" style={{ fontSize: '9px' }}>
                          Bloqueado
                        </span>
                      )}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center">
                    <Link
                      href={`/usuarios/apostadores/${user.id}`}
                      className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-md hover:bg-[var(--md-sys-color-secondary)]/10 text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)] transition-all mx-auto"
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
      </div>
    </div>
  );
}
