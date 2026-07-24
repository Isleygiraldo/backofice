'use client';

export default function UsuariosDashboard() {
  const vipStats = {
    totalAtivos: 2714,
    emRisco: 158,
    crescimentoHighTier: 12,
    churnRate: 1.8,
  };

  const alertas = [
    { id: '#UX-99821', username: 'vaidebet-ngx', tempo: 'há 2 min', score: 92, motivo: 'DEPOSIT_AFTER_LOSS', detalhe: 'Multi-account detectada (3 ips)', tipo: 'critical' },
    { id: '#BR-44211', username: 'betpix365', tempo: 'há 15 min', score: 78, motivo: 'Aposta Irregular', detalhe: 'Volume atípico em mercados suspensos', tipo: 'warning' },
    { id: '#PT-10229', username: 'vaidebet', tempo: 'há 1h', score: 65, motivo: 'Horário Atípico', detalhe: 'Acessos frequentes entre 03:00 - 05:00', tipo: 'info' },
    { id: '#AR-00124', username: 'betpix365-ngx', tempo: 'há 2h', score: 89, motivo: 'CHASING_LOSSES', detalhe: 'Aceleração súbita de depósitos', tipo: 'critical' },
  ];

  const vipTiers = [
    { nome: 'Legend', icon: 'workspace_premium', ativos: 64, percentual: 2 },
    { nome: 'Elite', icon: 'military_tech', ativos: 82, percentual: 3 },
    { nome: 'Exclusive', icon: 'stars', ativos: 453, percentual: 16 },
    { nome: 'Black', icon: 'token', ativos: 2115, percentual: 78 },
  ];

  const estadosTop = [
    { estado: 'São Paulo (SP)', vips: 762, percentual: 47 },
    { estado: 'Minas Gerais (MG)', vips: 128, percentual: 15 },
    { estado: 'Paraná (PR)', vips: 95, percentual: 11 },
    { estado: 'Bahia (BA)', vips: 89, percentual: 10 },
  ];

  const usuariosCriticos = [
    { nome: 'Yuri Fagundes', id: '6a0ffab12...', tier: 'Legend', ggr: 'R$ 7.8M', ticketMedio: 'R$ 411', risco: 'saudavel' },
    { nome: 'Daniel Silva', id: '6a0fe844b...', tier: 'Legend', ggr: 'R$ 6.3M', ticketMedio: 'R$ 2', risco: 'critico' },
    { nome: 'Lismacia Santos', id: '6a0ff697e...', tier: 'Legend', ggr: 'R$ 4.5M', ticketMedio: 'R$ 444', risco: 'suspeito' },
  ];

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem] md:space-y-[1.5rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
        <div>
          <h2 className="headline-md text-[var(--content-text)]">
            Dashboard de Usuários & Fidelidade
          </h2>
          <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
            Monitoramento VIP e detecção de riscos em tempo real
          </p>
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.75rem] md:gap-[1rem]">
        {[
          { label: 'Total de VIPs Ativos', value: vipStats.totalAtivos.toLocaleString('pt-BR'), icon: 'group', trend: '+5.2% vs mês anterior', delay: 0 },
          { label: 'VIPs em Risco (Critical)', value: vipStats.emRisco, icon: 'warning', trend: '8 pendentes de revisão', critical: true, delay: 100 },
          { label: 'Crescimento High-Tiers', value: `${vipStats.crescimentoHighTier}%`, icon: 'trending_up', trend: 'Novas promoções ativas', delay: 200 },
          { label: 'Churn Rate (VIPs)', value: `${vipStats.churnRate}%`, icon: 'analytics', trend: 'Abaixo da meta de 2.5%', delay: 300 },
        ].map((stat, i) => (
          <div
            key={i}
            className="md3-card p-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_forwards] hover:elevation-2 transition-all group"
            style={{ animationDelay: `${stat.delay}ms` }}
          >
            <div className="flex items-start justify-between mb-[0.75rem]">
              <p className="label-caps text-[var(--content-text-secondary)]">{stat.label}</p>
              <span className={`material-symbols-outlined text-[20px] transition-all duration-300 ${
                stat.critical
                  ? 'text-red-500 animate-[pulse_2s_ease-in-out_infinite]'
                  : 'text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-secondary)] group-hover:scale-110 group-hover:rotate-12'
              }`}>
                {stat.icon}
              </span>
            </div>
            <h3 className={`headline-lg ${stat.critical ? 'text-red-500' : 'text-[var(--content-text)]'}`}>
              {stat.value}
            </h3>
            <div className="mt-[0.5rem] body-sm text-[var(--content-text-secondary)]">
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1rem] md:gap-[1.5rem]">
        {/* Left: Risk Alerts */}
        <div className="lg:col-span-7 md3-card overflow-hidden opacity-0 animate-[slideUp_0.6s_ease-out_0.4s_forwards]">
          <div className="p-[1rem] md:p-[1.25rem] border-b border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] bg-[var(--content-hover)]">
            <div>
              <h4 className="headline-md text-[var(--content-text)]">Alertas de Risco & Segurança</h4>
              <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
                Detecção de anomalias em tempo real
              </p>
            </div>
            <span className="bg-red-900/20 text-red-500 label-caps px-[0.625rem] py-[0.25rem] shape-sm border border-red-800">
              12 Ocorrências
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <table className="w-full">
                <thead className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                  <tr>
                    <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">Jogador ID / Username</th>
                    <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-center">Score</th>
                    <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">Motivo do Alerta</th>
                    <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--content-border)]">
                  {alertas.map((alerta, i) => (
                    <tr key={i} className="hover:bg-[var(--content-hover)] transition-colors">
                      <td className="px-[1rem] py-[0.75rem]">
                        <div className="table-data text-[var(--content-text)]">{alerta.id}</div>
                        <div className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>
                          {alerta.username} • {alerta.tempo}
                        </div>
                      </td>
                      <td className="px-[1rem] py-[0.75rem] text-center">
                        <span className={`inline-flex items-center justify-center w-[2rem] h-[2rem] rounded-full body-sm font-bold ${
                          alerta.tipo === 'critical' ? 'bg-red-900/20 text-red-500' :
                          'bg-[var(--content-hover)] text-[var(--content-text-secondary)]'
                        }`}>
                          {alerta.score}
                        </span>
                      </td>
                      <td className="px-[1rem] py-[0.75rem]">
                        <span className={`inline-block px-[0.5rem] py-[0.125rem] shape-xs label-caps border ${
                          alerta.tipo === 'critical' ? 'bg-red-900/20 text-red-500 border-red-800' :
                          'bg-[var(--content-hover)] text-[var(--content-text-secondary)] border-[var(--content-border)]'
                        }`} style={{ fontSize: '10px' }}>
                          {alerta.motivo}
                        </span>
                        <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]" style={{ fontSize: '10px' }}>{alerta.detalhe}</p>
                      </td>
                      <td className="px-[1rem] py-[0.75rem] text-right">
                        <button className="label-caps text-[var(--md-sys-color-secondary)] hover:underline" style={{ fontSize: '11px' }}>
                          REVISAR
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-[0.75rem] bg-[var(--content-hover)] border-t border-[var(--content-border)] text-center">
            <button className="label-caps text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary)] hover:text-white px-[1rem] py-[0.375rem] shape-md transition-colors">
              Ver Todos os Alertas
            </button>
          </div>
        </div>

        {/* Right: VIP Distribution & Migration */}
        <div className="lg:col-span-5 space-y-[1rem]">
          {/* VIP Tiers */}
          <div className="md3-card p-[1rem] md:p-[1.25rem] opacity-0 animate-[slideUp_0.6s_ease-out_0.5s_forwards]">
            <h4 className="headline-md text-[var(--content-text)] mb-[1rem]">Distribuição VIP & Fidelidade</h4>
            <div className="space-y-[0.875rem]">
              {vipTiers.map((tier, i) => (
                <div key={i} className="flex items-center gap-[0.75rem] group">
                  <div className="w-[2.25rem] h-[2.25rem] shape-md flex items-center justify-center flex-shrink-0 bg-[var(--content-hover)] text-[var(--content-text-secondary)] group-hover:bg-[var(--md-sys-color-secondary)] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <span className="material-symbols-outlined text-[18px] transition-transform" style={{ fontVariationSettings: '"FILL" 1' }}>
                      {tier.icon}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-end mb-[0.25rem]">
                      <span className="table-data text-[var(--content-text)]">{tier.nome}</span>
                      <span className="body-sm font-bold text-[var(--content-text-secondary)]">{tier.ativos}</span>
                    </div>
                    <div className="w-full bg-[var(--content-hover)] h-[0.375rem] shape-sm overflow-hidden">
                      <div
                        className="h-full bg-[var(--md-sys-color-secondary)] transition-all duration-1000"
                        style={{ width: `${tier.percentual}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier Migration */}
          <div className="md3-card p-[1rem] md:p-[1.25rem] opacity-0 animate-[slideUp_0.6s_ease-out_0.6s_forwards]">
            <h4 className="headline-md text-[var(--content-text)] mb-[0.75rem]">Migração de Tiers (24h)</h4>
            <div className="space-y-[0.625rem]">
              <div className="flex items-center justify-between p-[0.75rem] bg-[var(--content-surface)] shape-md border-l-4 border-l-[var(--md-sys-color-secondary)] group hover:elevation-1 transition-all">
                <div className="flex items-center gap-[0.625rem] min-w-0">
                  <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] flex-shrink-0 transition-transform group-hover:scale-125 group-hover:-translate-y-1">north_east</span>
                  <div className="min-w-0">
                    <p className="body-sm font-bold text-[var(--content-text)]">Promovidos para Elite</p>
                    <p className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>4 jogadores atingiram meta GGR</p>
                  </div>
                </div>
                <span className="headline-md font-bold text-[var(--md-sys-color-secondary)] flex-shrink-0 ml-[0.5rem]">+4</span>
              </div>

              <div className="flex items-center justify-between p-[0.75rem] bg-[var(--content-surface)] shape-md border-l-4 border-l-red-500 group hover:elevation-1 transition-all">
                <div className="flex items-center gap-[0.625rem] min-w-0">
                  <span className="material-symbols-outlined text-red-500 flex-shrink-0 transition-transform group-hover:scale-125 group-hover:translate-y-1">south_east</span>
                  <div className="min-w-0">
                    <p className="body-sm font-bold text-[var(--content-text)]">Risco de Demoted</p>
                    <p className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>12 jogadores inativos há &gt;15 dias</p>
                  </div>
                </div>
                <span className="headline-md font-bold text-red-500 flex-shrink-0 ml-[0.5rem]">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Concentration */}
      <div className="md3-card p-[1rem] md:p-[1.5rem] opacity-0 animate-[slideUp_0.6s_ease-out_0.7s_forwards]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[1rem] mb-[1.5rem]">
          <div>
            <h4 className="headline-md text-[var(--content-text)]">Concentração por Localidade (VIPs)</h4>
            <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
              Distribuição geográfica dos jogadores de alto valor no Brasil
            </p>
          </div>
          <div className="flex gap-[1rem] flex-wrap">
            <div>
              <p className="label-caps text-[var(--content-text-secondary)]">Top Estado</p>
              <p className="headline-md text-[var(--content-text)]">São Paulo (47%)</p>
            </div>
            <div className="w-px bg-[var(--content-border)]"></div>
            <div>
              <p className="label-caps text-[var(--content-text-secondary)]">Total GGR VIP</p>
              <p className="headline-md text-[var(--md-sys-color-secondary)]">R$ 287,4M</p>
            </div>
          </div>
        </div>

        <div className="space-y-[0.875rem]">
          {estadosTop.map((estado, i) => (
            <div key={i} className="flex items-center gap-[0.75rem]">
              <span className="w-[1.5rem] label-caps text-[var(--content-text-secondary)] flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between body-sm font-bold mb-[0.25rem]">
                  <span className="text-[var(--content-text)]">{estado.estado}</span>
                  <span className="text-[var(--content-text-secondary)]">{estado.vips} VIPs</span>
                </div>
                <div className="w-full bg-[var(--content-hover)] h-[0.5rem] shape-sm overflow-hidden">
                  <div
                    className="bg-[var(--md-sys-color-secondary)] h-full transition-all duration-1000"
                    style={{ width: `${estado.percentual}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Users Table */}
      <div className="md3-card overflow-hidden opacity-0 animate-[slideUp_0.6s_ease-out_0.8s_forwards]">
        <div className="p-[1rem] md:p-[1.25rem] border-b border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem]">
          <div>
            <h4 className="headline-md text-[var(--content-text)]">Detalhamento de Usuários Críticos</h4>
            <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
              Monitoramento operacional profundo e histórico de ações
            </p>
          </div>
          <div className="flex gap-[0.5rem]">
            <button className="flex items-center gap-[0.375rem] px-[0.75rem] py-[0.375rem] border border-[var(--content-border)] label-caps shape-md hover:bg-[var(--content-hover)] transition-all text-[var(--content-text)] group">
              <span className="material-symbols-outlined text-[14px] transition-transform group-hover:rotate-90">filter_list</span> Filtros
            </button>
            <button className="md3-button-filled label-caps px-[0.75rem] py-[0.375rem] flex items-center gap-[0.375rem] group">
              <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-y-1">download</span> CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <table className="w-full">
              <thead className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <tr>
                  <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">Jogador</th>
                  <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">Tier</th>
                  <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">GGR Total</th>
                  <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">Ticket Médio</th>
                  <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-left">Status Risco</th>
                  <th className="px-[1rem] py-[0.75rem] label-caps text-[var(--content-text-secondary)] text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--content-border)]">
                {usuariosCriticos.map((user, i) => (
                  <tr key={i} className="hover:bg-[var(--content-hover)] transition-colors">
                    <td className="px-[1rem] py-[0.75rem]">
                      <div className="table-data text-[var(--content-text)]">{user.nome}</div>
                      <div className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>ID: {user.id}</div>
                    </td>
                    <td className="px-[1rem] py-[0.75rem]">
                      <span className="bg-[var(--content-hover)] text-[var(--content-text-secondary)] label-caps px-[0.5rem] py-[0.125rem] shape-xs border border-[var(--content-border)]" style={{ fontSize: '10px' }}>
                        {user.tier}
                      </span>
                    </td>
                    <td className="px-[1rem] py-[0.75rem] table-data font-bold text-[var(--content-text)]">{user.ggr}</td>
                    <td className="px-[1rem] py-[0.75rem] table-data text-[var(--content-text)]">{user.ticketMedio}</td>
                    <td className="px-[1rem] py-[0.75rem]">
                      <span className={`body-sm ${
                        user.risco === 'saudavel' ? 'text-[var(--content-text-secondary)]' :
                        user.risco === 'critico' ? 'text-red-500 font-bold' :
                        'text-[var(--content-text-secondary)]'
                      }`}>
                        {user.risco === 'saudavel' ? 'Saudável' : user.risco === 'critico' ? 'Alerta Crítico' : 'Suspeito'}
                      </span>
                    </td>
                    <td className="px-[1rem] py-[0.75rem] text-right">
                      <button className={`label-caps px-[0.75rem] py-[0.25rem] shape-md transition-colors ${
                        user.risco === 'critico'
                          ? 'bg-red-900/20 text-red-500 border border-red-800 hover:bg-red-900/30'
                          : 'bg-[var(--content-hover)] text-[var(--content-text-secondary)] hover:bg-[var(--content-border)]'
                      }`} style={{ fontSize: '11px' }}>
                        {user.risco === 'critico' ? 'Suspender' : user.risco === 'suspeito' ? 'Investigar' : 'Perfil'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-[1rem] py-[0.75rem] bg-[var(--content-hover)] border-t border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-center gap-[0.75rem]">
          <span className="label-caps text-[var(--content-text-secondary)]">
            Mostrando 1-3 de 158 usuários em risco
          </span>
          <div className="flex gap-[0.25rem]">
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md bg-[var(--md-sys-color-secondary)] text-white label-caps" style={{ fontSize: '10px' }}>
              1
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text)] label-caps hover:bg-[var(--content-hover)]" style={{ fontSize: '10px' }}>
              2
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text)] label-caps hover:bg-[var(--content-hover)]" style={{ fontSize: '10px' }}>
              3
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)]">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
