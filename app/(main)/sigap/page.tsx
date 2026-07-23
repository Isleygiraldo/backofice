'use client';

export default function SigapDashboard() {
  const metricas = {
    progressoTotal: 80,
    concluidos: 4,
    total: 5,
    enviados: 4,
    pendentes: 1,
    proximoDeadline: '01:00 AM',
  };

  const timelineEvents = [
    {
      tipo: 'error',
      status: 'Rejeitado pelo SIGAP',
      titulo: 'Operador Diário (00:33) — Parte 01/04',
      descricao: 'Fragmento enviado e processado com erro de integridade.',
      horario: '00:34:12',
      ref: '2026-06-26',
      log: '{ "status": "REJECTED", "error_code": "ERR_VAL_042", "message": "Invalid hash for fragment 01." }',
    },
    {
      tipo: 'success',
      status: 'Aceito',
      titulo: 'Apostador (00:30) — Parte 02/05',
      descricao: 'Fragmento (250 MB) validado com sucesso.',
      horario: '00:31:05',
      ref: '2026-06-26',
    },
    {
      tipo: 'success',
      status: 'Aceito',
      titulo: 'Apostador (00:30) — Parte 01/05',
      descricao: 'Fragmento (250 MB) validado com sucesso.',
      horario: '00:30:44',
      ref: '2026-06-26',
    },
    {
      tipo: 'info',
      status: 'Sessão Iniciada',
      titulo: 'Geração de Lote Diário',
      descricao: 'Sistema BPX iniciou a fragmentação dos arquivos de exportação.',
      horario: '00:00:01',
      ref: '2026-06-26',
    },
  ];

  const semana = [
    { dia: 'Seg', status: 'success' },
    { dia: 'Ter', status: 'success' },
    { dia: 'Qua', status: 'success' },
    { dia: 'Qui', status: 'error' },
    { dia: 'Sex', status: 'success' },
    { dia: 'Sab', status: 'success' },
    { dia: 'Dom', status: 'success' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 md:space-y-8">
      {/* Hero Header & Métricas */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-bold text-[var(--content-text)] tracking-tight">
            Auditoria e Timeline
          </h1>
          <p className="text-sm text-[var(--content-text-secondary)]">
            Log sequencial de eventos regulatórios para{' '}
            <span className="font-bold">Hoje, 26 de Junho de 2026</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 flex-1 lg:max-w-3xl">
          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)]">
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Progresso Total
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--content-text)]">
                {metricas.progressoTotal}%
              </span>
              <span className="text-[11px] text-green-600 font-bold">
                {metricas.concluidos}/{metricas.total}
              </span>
            </div>
            <div className="w-full bg-[var(--content-hover)] h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-[var(--md-sys-color-secondary)] h-full rounded-full"
                style={{ width: `${metricas.progressoTotal}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)]">
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Enviados
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-green-600">{metricas.enviados}</span>
              <span className="text-[11px] text-[var(--content-text-secondary)] font-medium">
                Aceitos
              </span>
            </div>
          </div>

          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)]">
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Pendentes
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-500">{metricas.pendentes}</span>
              <span className="text-[11px] text-[var(--content-text-secondary)] font-medium">
                Missing
              </span>
            </div>
          </div>

          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)]">
            <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px] mb-1">
              Próx. Deadline
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl md:text-2xl font-bold text-[var(--content-text)]">
                01:00
              </span>
              <span className="text-[11px] text-[var(--content-text-secondary)] font-medium">
                AM (BRT)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerta de Arquivo Ausente */}
      <div className="bg-[var(--content-badge-error-bg)] border-l-4 border-[var(--content-badge-error-text)] p-4 rounded-r-xl flex items-start md:items-center gap-3 md:gap-4">
        <span
          className="material-symbols-outlined text-[var(--content-badge-error-text)] flex-shrink-0"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          warning
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[var(--content-badge-error-text)] font-bold text-sm">
            ALERTA: ARQUIVO CRÍTICO AUSENTE
          </p>
          <p className="text-[var(--content-badge-error-text)] opacity-80 text-xs mt-0.5">
            O arquivo <span className="font-bold">Operador Diário (00:33)</span> não foi
            identificado pelo sistema até o momento.
          </p>
        </div>
        <span className="text-[10px] font-bold text-[var(--content-badge-error-text)] uppercase tracking-widest px-2 py-1 bg-[var(--content-badge-error-text)]/10 rounded flex-shrink-0">
          Urgente
        </span>
      </div>

      {/* Timeline Section */}
      <div className="bg-[var(--content-surface)] rounded-2xl shadow-sm border border-[var(--content-border)] overflow-hidden">
        <div className="px-4 md:px-6 py-4 border-b border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-[var(--content-hover)]">
          <h3 className="text-base md:text-lg font-semibold text-[var(--content-text)] flex items-center gap-2">
            <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)]">
              history
            </span>
            Audit Trail de Fragmentos
          </h3>
          <div className="flex gap-2 flex-wrap">
            <button className="text-xs font-bold px-3 py-1.5 border border-[var(--content-border)] rounded-full hover:bg-[var(--content-hover)] transition-colors text-[var(--content-text)]">
              Filtrar por Evento
            </button>
            <button className="text-xs font-bold px-3 py-1.5 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] rounded-full hover:opacity-90">
              Exportar Log
            </button>
          </div>
        </div>

        <div className="p-4 md:p-8">
          <div className="relative space-y-6 md:space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-[var(--content-border)]"></div>

            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-[40px] h-[40px] flex items-center justify-center">
                  <div
                    className={`w-3 h-3 rounded-full ring-4 z-10 ${
                      event.tipo === 'error'
                        ? 'bg-[var(--content-badge-error-text)] ring-[var(--content-badge-error-text)]/20'
                        : event.tipo === 'success'
                        ? 'bg-green-500 ring-green-500/20'
                        : 'bg-[var(--md-sys-color-secondary)] ring-[var(--md-sys-color-secondary)]/20'
                    }`}
                  ></div>
                </div>

                <div
                  className={`rounded-xl p-4 md:p-5 border ${
                    event.tipo === 'error'
                      ? 'bg-[var(--content-badge-error-bg)] border-[var(--content-badge-error-border)]'
                      : event.tipo === 'info'
                      ? 'bg-[var(--content-hover)] border-dashed border-[var(--content-border)]'
                      : 'bg-[var(--content-surface)] border-[var(--content-border)] shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                    <div className="flex-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                          event.tipo === 'error'
                            ? 'text-[var(--content-badge-error-text)] bg-[var(--content-badge-error-text)]/10'
                            : event.tipo === 'success'
                            ? 'text-green-600 bg-green-500/10'
                            : 'text-[var(--md-sys-color-secondary)] bg-[var(--md-sys-color-secondary)]/10'
                        }`}
                      >
                        {event.status}
                      </span>
                      <h4 className="font-bold text-[var(--content-text)] mt-1 text-sm md:text-base">
                        {event.titulo}
                      </h4>
                      <p className="text-xs text-[var(--content-text-secondary)]">
                        {event.descricao}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-[var(--content-text)]">
                        {event.horario}
                      </p>
                      <p className="text-[10px] text-[var(--content-text-secondary)] uppercase">
                        REF: {event.ref}
                      </p>
                    </div>
                  </div>

                  {event.log && (
                    <div className="rounded-lg bg-[var(--md-sys-color-primary-container)] p-4 font-mono text-[11px] text-[var(--md-sys-color-on-primary-container)] border border-[var(--content-border)] overflow-x-auto">
                      <p className="text-[var(--md-sys-color-on-primary-container)] opacity-70 font-bold mb-2 uppercase tracking-widest text-[9px]">
                        [SPA-BR-992 RESPONSE]
                      </p>
                      <pre className="whitespace-pre-wrap text-[var(--md-sys-color-on-primary-container)]">
                        {event.log}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <button className="text-xs font-bold text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-primary)] transition-colors flex items-center gap-2 mx-auto">
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              Carregar Eventos Anteriores
            </button>
          </div>
        </div>
      </div>

      {/* Footer Stats - Histórico Semanal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--content-surface)] p-6 rounded-2xl shadow-sm border border-[var(--content-border)] md:col-span-2">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <p className="text-[10px] font-semibold text-[var(--content-text-secondary)] uppercase tracking-[0.8px]">
                Histórico de Operação
              </p>
              <h4 className="text-base md:text-lg font-semibold text-[var(--content-text)]">
                Status Semanal de Envios
              </h4>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Sucesso
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--content-badge-error-text)]"></span>
                Falha
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {semana.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-3 p-3 rounded-xl border ${
                  item.status === 'error'
                    ? 'bg-[var(--content-badge-error-bg)] border-[var(--content-badge-error-border)]'
                    : 'bg-[var(--content-hover)] border-[var(--content-border)]'
                }`}
              >
                <span
                  className={`text-[10px] font-bold uppercase ${
                    item.status === 'error'
                      ? 'text-[var(--content-badge-error-text)]'
                      : 'text-[var(--content-text-secondary)] opacity-50'
                  }`}
                >
                  {item.dia}
                </span>
                <div
                  className={`w-full h-2 rounded-full ${
                    item.status === 'error'
                      ? 'bg-[var(--content-badge-error-text)] animate-pulse'
                      : 'bg-green-500'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--content-surface)] p-6 rounded-2xl shadow-sm border border-[var(--content-border)] flex flex-col justify-center">
          <div className="flex items-center gap-3 text-green-600 mb-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest">
              API Conectada • Produção
            </span>
          </div>
          <p className="text-[10px] text-[var(--content-text-secondary)] mt-2">
            <span className="material-symbols-outlined text-sm align-middle mr-1">
              verified_user
            </span>
            SIGAP Secure Protocol v2.4.0
          </p>
        </div>
      </div>
    </div>
  );
}
