'use client';

export default function UsuariosDashboard() {
  // Mock data
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
    { nome: 'Legend', icon: 'workspace_premium', ativos: 64, percentual: 2, cor: 'bg-gradient-to-br from-amber-400 to-yellow-600' },
    { nome: 'Elite', icon: 'military_tech', ativos: 82, percentual: 3, cor: 'bg-[var(--md-sys-color-secondary)]' },
    { nome: 'Exclusive', icon: 'stars', ativos: 453, percentual: 16, cor: 'bg-purple-400' },
    { nome: 'Black', icon: 'token', ativos: 2115, percentual: 78, cor: 'bg-[var(--md-sys-color-primary-container)]' },
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
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--content-text)]">
            Dashboard de Usuários & Fidelidade
          </h2>
          <p className="text-xs text-[var(--content-text-secondary)] mt-0.5">
            Monitoramento VIP e detecção de riscos em tempo real
          </p>
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-[var(--content-surface)] p-4 rounded-xl border border-[var(--content-border)] flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Total de VIPs Ativos
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--content-text)]">
              {vipStats.totalAtivos.toLocaleString('pt-BR')}
            </h3>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-green-600">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            +5.2% vs mês anterior
          </div>
        </div>

        <div className="bg-[var(--content-surface)] p-4 rounded-xl border border-[var(--content-border)] flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              VIPs em Risco (Critical)
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--content-badge-error-text)]">
              {vipStats.emRisco}
            </h3>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[var(--content-badge-error-text)]">
            <span className="material-symbols-outlined text-sm">warning</span>
            8 pendentes de revisão
          </div>
        </div>

        <div className="bg-[var(--content-surface)] p-4 rounded-xl border border-[var(--content-border)] flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Crescimento High-Tiers
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--md-sys-color-secondary)]">
              {vipStats.crescimentoHighTier}%
            </h3>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-green-600">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Novas promoções para 'Legend'
          </div>
        </div>

        <div className="bg-[var(--content-surface)] p-4 rounded-xl border border-[var(--content-border)] flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Churn Rate (VIPs)
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--content-text)]">
              {vipStats.churnRate}%
            </h3>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[var(--content-text-secondary)]">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Abaixo da meta de 2.5%
          </div>
        </div>
      </div>

      {/* Main Content: Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left: Risk Alerts */}
        <div className="lg:col-span-7 bg-[var(--content-surface)] rounded-xl border border-[var(--content-border)] overflow-hidden">
          <div className="p-4 md:p-5 border-b border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-[var(--content-text)]">
                Alertas de Risco & Segurança
              </h4>
              <p className="text-xs text-[var(--content-text-secondary)] mt-0.5">
                Detecção de anomalias em tempo real
              </p>
            </div>
            <span className="bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border border-[var(--content-badge-error-border)]">
              12 Ocorrências Hoje
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <table className="w-full">
                <thead className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                  <tr>
                    <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">
                      Jogador ID / Username
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-center">
                      Score
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">
                      Motivo do Alerta
                    </th>
                    <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-right">
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--content-border)]">
                  {alertas.map((alerta, i) => (
                    <tr key={i} className="hover:bg-[var(--content-hover)] transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-bold text-sm text-[var(--content-text)]">{alerta.id}</div>
                        <div className="text-[10px] text-[var(--content-text-secondary)]">
                          {alerta.username} • {alerta.tempo}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                          alerta.tipo === 'critical' ? 'bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)]' :
                          alerta.tipo === 'warning' ? 'bg-[var(--content-badge-warning-bg)] text-[var(--content-badge-warning-text)]' :
                          'bg-[var(--content-hover)] text-[var(--content-text)]'
                        }`}>
                          {alerta.score}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          alerta.tipo === 'critical' ? 'bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)] border border-[var(--content-badge-error-border)]' :
                          alerta.tipo === 'warning' ? 'bg-[var(--content-badge-warning-bg)] text-[var(--content-badge-warning-text)] border border-[var(--content-badge-warning-border)]' :
                          'bg-[var(--content-hover)] text-[var(--content-text)] border border-[var(--content-border)]'
                        }`}>
                          {alerta.motivo}
                        </span>
                        <p className="text-[10px] text-[var(--content-text-secondary)] mt-1">{alerta.detalhe}</p>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-xs font-bold text-[var(--md-sys-color-secondary)] hover:underline">
                          REVISAR
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 bg-[var(--content-hover)] border-t border-[var(--content-border)] text-center">
            <button className="text-[11px] font-bold text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary)] hover:text-white px-4 py-1.5 rounded transition-colors uppercase">
              Ver Todos os Alertas de Risco
            </button>
          </div>
        </div>

        {/* Right: VIP Distribution & Migration */}
        <div className="lg:col-span-5 space-y-4">
          {/* VIP Tiers */}
          <div className="bg-[var(--content-surface)] rounded-xl border border-[var(--content-border)] p-4 md:p-5">
            <h4 className="text-base md:text-lg font-semibold text-[var(--content-text)] mb-4">
              Distribuição VIP & Fidelidade
            </h4>
            <div className="space-y-3.5">
              {vipTiers.map((tier, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${tier.cor} flex items-center justify-center text-white flex-shrink-0`}>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
                      {tier.icon}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-bold text-[var(--content-text)]">{tier.nome}</span>
                      <span className="text-xs font-bold text-[var(--content-text-secondary)]">{tier.ativos} Ativos</span>
                    </div>
                    <div className="w-full bg-[var(--content-hover)] h-1.5 rounded-full overflow-hidden">
                      <div className={`${tier.cor} h-full`} style={{ width: `${tier.percentual}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier Migration */}
          <div className="bg-[var(--content-surface)] rounded-xl border border-[var(--content-border)] p-4 md:p-5">
            <h4 className="text-base md:text-lg font-semibold text-[var(--content-text)] mb-3">
              Migração de Tiers (24h)
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="material-symbols-outlined text-green-600 flex-shrink-0">arrow_upward</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-green-700 dark:text-green-400">Promovidos para Elite</p>
                    <p className="text-[10px] text-green-600 dark:text-green-500">4 jogadores atingiram meta GGR</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600 flex-shrink-0 ml-2">+4</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="material-symbols-outlined text-red-600 flex-shrink-0">arrow_downward</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-red-700 dark:text-red-400">Risco de Demoted (Black)</p>
                    <p className="text-[10px] text-red-600 dark:text-red-500">12 jogadores inativos há &gt;15 dias</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-red-600 flex-shrink-0 ml-2">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Concentration */}
      <div className="bg-[var(--content-surface)] rounded-xl border border-[var(--content-border)] p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-[var(--content-text)]">
              Concentração por Localidade (VIPs)
            </h4>
            <p className="text-xs text-[var(--content-text-secondary)] mt-0.5">
              Distribuição geográfica dos jogadores de alto valor no Brasil
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div>
              <p className="text-[10px] text-[var(--content-text-secondary)] uppercase font-bold">Top Estado</p>
              <p className="text-lg md:text-xl font-bold text-[var(--content-text)]">São Paulo (47%)</p>
            </div>
            <div className="w-px bg-[var(--content-border)]"></div>
            <div>
              <p className="text-[10px] text-[var(--content-text-secondary)] uppercase font-bold">Total GGR VIP</p>
              <p className="text-lg md:text-xl font-bold text-[var(--md-sys-color-secondary)]">R$ 287,4M</p>
            </div>
          </div>
        </div>

        <div className="space-y-3.5">
          {estadosTop.map((estado, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-6 text-[10px] font-bold text-[var(--content-text-secondary)] flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[var(--content-text)]">{estado.estado}</span>
                  <span className="text-[var(--content-text-secondary)]">{estado.vips} VIPs</span>
                </div>
                <div className="w-full bg-[var(--content-hover)] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[var(--md-sys-color-secondary)] h-full"
                    style={{ width: `${estado.percentual}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Users Table */}
      <div className="bg-[var(--content-surface)] rounded-xl border border-[var(--content-border)] overflow-hidden">
        <div className="p-4 md:p-5 border-b border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-[var(--content-text)]">
              Detalhamento de Usuários Críticos
            </h4>
            <p className="text-xs text-[var(--content-text-secondary)] mt-0.5">
              Monitoramento operacional profundo e histórico de ações
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--content-border)] text-xs font-bold rounded hover:bg-[var(--content-hover)] transition-colors text-[var(--content-text)]">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filtros
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-xs font-bold rounded hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-sm">download</span> CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            <table className="w-full">
              <thead className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <tr>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">Jogador</th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">Tier</th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">GGR Total</th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">Ticket Médio</th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-left">Status Risco</th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--content-border)]">
                {usuariosCriticos.map((user, i) => (
                  <tr key={i} className="hover:bg-[var(--content-hover)] transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-bold text-sm text-[var(--content-text)]">{user.nome}</div>
                      <div className="text-[10px] text-[var(--content-text-secondary)]">ID: {user.id}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-gradient-to-br from-amber-400 to-yellow-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        {user.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-sm text-[var(--content-text)]">{user.ggr}</td>
                    <td className="px-4 py-3 text-sm text-[var(--content-text)]">{user.ticketMedio}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-bold ${
                        user.risco === 'saudavel' ? 'text-green-600' :
                        user.risco === 'critico' ? 'text-[var(--content-badge-error-text)]' :
                        'text-[var(--content-badge-warning-text)]'
                      }`}>
                        {user.risco === 'saudavel' ? 'Saudável' : user.risco === 'critico' ? 'Alerta Crítico' : 'Suspeito'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className={`text-xs font-bold px-3 py-1 rounded transition-colors ${
                        user.risco === 'critico'
                          ? 'bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)] hover:opacity-80'
                          : 'bg-[var(--content-hover)] text-[var(--content-text)] hover:bg-[var(--content-border)]'
                      }`}>
                        {user.risco === 'critico' ? 'Suspender' : user.risco === 'suspeito' ? 'Investigar' : 'Perfil'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-4 py-3 bg-[var(--content-hover)] border-t border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[11px] text-[var(--content-text-secondary)] font-bold">
            Mostrando 1-3 de 158 usuários em risco
          </span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-[10px] font-bold">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text)] text-[10px] font-bold hover:bg-[var(--content-hover)]">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text)] text-[10px] font-bold hover:bg-[var(--content-hover)]">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)]">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
