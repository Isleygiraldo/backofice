'use client';

import { Card } from '@/app/_components/ui';

export default function SigapDashboard() {
  const metricas = {
    progressoTotal: 80,
    concluidos: 4,
    total: 5,
    enviados: 4,
    pendentes: 1,
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
    <div className="p-[1rem] md:p-[1.5rem] lg:p-[2rem] max-w-[1400px] mx-auto space-y-[1.5rem] md:space-y-[2rem]">
      {/* Hero Header & Métricas */}
      <div className="flex flex-col lg:flex-row justify-between gap-[1.5rem]">
        <div className="space-y-[0.25rem]">
          <h1 className="headline-lg text-[var(--content-text)]">
            Auditoria e Timeline
          </h1>
          <p className="body-md text-[var(--content-text-secondary)]">
            Log sequencial de eventos regulatórios para{' '}
            <span className="font-bold">Hoje, 26 de Junho de 2026</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.75rem] md:gap-[1rem] flex-1 lg:max-w-3xl">
          <Card className="p-[1rem]">
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
              Progresso Total
            </p>
            <div className="flex items-baseline gap-[0.5rem]">
              <span className="headline-lg text-[var(--content-text)]">
                {metricas.progressoTotal}%
              </span>
              <span className="label-caps text-green-600">
                {metricas.concluidos}/{metricas.total}
              </span>
            </div>
            <div className="w-full bg-[var(--content-hover)] h-[0.375rem] shape-sm mt-[0.75rem] overflow-hidden">
              <div
                className="bg-[var(--md-sys-color-secondary)] h-full shape-sm"
                style={{ width: `${metricas.progressoTotal}%` }}
              ></div>
            </div>
          </Card>

          <Card className="p-[1rem]">
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
              Enviados
            </p>
            <div className="flex items-baseline gap-[0.5rem]">
              <span className="headline-lg text-green-600">{metricas.enviados}</span>
              <span className="body-sm text-[var(--content-text-secondary)] font-medium">
                Aceitos
              </span>
            </div>
          </Card>

          <Card className="p-[1rem]">
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
              Pendentes
            </p>
            <div className="flex items-baseline gap-[0.5rem]">
              <span className="headline-lg text-amber-500">{metricas.pendentes}</span>
              <span className="body-sm text-[var(--content-text-secondary)] font-medium">
                Missing
              </span>
            </div>
          </Card>

          <Card className="p-[1rem]">
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
              Próx. Deadline
            </p>
            <div className="flex items-baseline gap-[0.5rem]">
              <span className="headline-lg text-[var(--content-text)]">
                01:00
              </span>
              <span className="body-sm text-[var(--content-text-secondary)] font-medium">
                AM (BRT)
              </span>
            </div>
          </Card>
        </div>
      </div>

      {/* Alerta de Arquivo Ausente */}
      <div className="bg-[var(--content-badge-error-bg)] border-l-4 border-[var(--content-badge-error-text)] p-[1rem] shape-md flex items-start md:items-center gap-[0.75rem] md:gap-[1rem]">
        <span
          className="material-symbols-outlined text-[var(--content-badge-error-text)] flex-shrink-0"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          warning
        </span>
        <div className="flex-1 min-w-0">
          <p className="body-md font-bold text-[var(--content-badge-error-text)]">
            ALERTA: ARQUIVO CRÍTICO AUSENTE
          </p>
          <p className="body-sm text-[var(--content-badge-error-text)] opacity-80 mt-[0.125rem]">
            O arquivo <span className="font-bold">Operador Diário (00:33)</span> não foi
            identificado pelo sistema até o momento.
          </p>
        </div>
        <span className="label-caps text-[var(--content-badge-error-text)] px-[0.5rem] py-[0.25rem] bg-[var(--content-badge-error-text)]/10 shape-xs flex-shrink-0">
          Urgente
        </span>
      </div>

      {/* Timeline Section */}
      <Card className="overflow-hidden">
        <div className="p-[1rem] md:p-[1.5rem] border-b border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] bg-[var(--content-hover)]">
          <h3 className="headline-md text-[var(--content-text)] flex items-center gap-[0.5rem]">
            <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)]">
              history
            </span>
            Audit Trail de Fragmentos
          </h3>
          <div className="flex gap-[0.5rem] flex-wrap">
            <button className="md3-button-outlined label-caps px-[0.75rem] py-[0.375rem]">
              Filtrar por Evento
            </button>
            <button className="md3-button-filled label-caps px-[0.75rem] py-[0.375rem]">
              Exportar Log
            </button>
          </div>
        </div>

        <div className="p-[1rem] md:p-[2rem]">
          <div className="relative space-y-[1.5rem] md:space-y-[2rem]">
            {/* Vertical Line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-[var(--content-border)]"></div>

            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pl-[3rem]">
                <div className="absolute left-0 top-[0.375rem] w-[40px] h-[40px] flex items-center justify-center">
                  <div
                    className={`w-[0.75rem] h-[0.75rem] rounded-full ring-4 z-10 ${
                      event.tipo === 'error'
                        ? 'bg-[var(--content-badge-error-text)] ring-[var(--content-badge-error-text)]/20'
                        : event.tipo === 'success'
                        ? 'bg-green-500 ring-green-500/20'
                        : 'bg-[var(--md-sys-color-secondary)] ring-[var(--md-sys-color-secondary)]/20'
                    }`}
                  ></div>
                </div>

                <div
                  className={`shape-xl p-[1rem] md:p-[1.25rem] border elevation-1 ${
                    event.tipo === 'error'
                      ? 'bg-[var(--content-badge-error-bg)] border-[var(--content-badge-error-border)]'
                      : event.tipo === 'info'
                      ? 'bg-[var(--content-hover)] border-dashed border-[var(--content-border)]'
                      : 'bg-[var(--content-surface)] border-[var(--content-border)]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-[0.75rem] mb-[0.75rem]">
                    <div className="flex-1">
                      <span
                        className={`label-caps px-[0.5rem] py-[0.125rem] shape-xs ${
                          event.tipo === 'error'
                            ? 'text-[var(--content-badge-error-text)] bg-[var(--content-badge-error-text)]/10'
                            : event.tipo === 'success'
                            ? 'text-green-600 bg-green-500/10'
                            : 'text-[var(--md-sys-color-secondary)] bg-[var(--md-sys-color-secondary)]/10'
                        }`}
                      >
                        {event.status}
                      </span>
                      <h4 className="table-data text-[var(--content-text)] mt-[0.25rem]">
                        {event.titulo}
                      </h4>
                      <p className="body-sm text-[var(--content-text-secondary)]">
                        {event.descricao}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="table-data text-[var(--content-text)]">
                        {event.horario}
                      </p>
                      <p className="label-caps text-[var(--content-text-secondary)]" style={{ fontSize: '10px' }}>
                        REF: {event.ref}
                      </p>
                    </div>
                  </div>

                  {event.log && (
                    <div className="shape-md bg-[var(--md-sys-color-primary-container)] p-[1rem] font-mono body-sm text-[var(--md-sys-color-on-primary-container)] border border-[var(--content-border)] overflow-x-auto">
                      <p className="text-[var(--md-sys-color-on-primary-container)] opacity-70 font-bold mb-[0.5rem] label-caps" style={{ fontSize: '9px' }}>
                        [SPA-BR-992 RESPONSE]
                      </p>
                      <pre className="whitespace-pre-wrap text-[var(--md-sys-color-on-primary-container)]" style={{ fontSize: '11px' }}>
                        {event.log}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[2rem] md:mt-[3rem] text-center">
            <button className="label-caps text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-primary)] transition-colors flex items-center gap-[0.5rem] mx-auto">
              <span className="material-symbols-outlined body-md">keyboard_arrow_down</span>
              Carregar Eventos Anteriores
            </button>
          </div>
        </div>
      </Card>

      {/* Footer Stats - Histórico Semanal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
        <Card className="p-[1.5rem] md:col-span-2">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-[1rem] mb-[1.5rem]">
            <div>
              <p className="label-caps text-[var(--content-text-secondary)]">
                Histórico de Operação
              </p>
              <h4 className="headline-md text-[var(--content-text)]">
                Status Semanal de Envios
              </h4>
            </div>
            <div className="flex items-center gap-[0.75rem] label-caps text-[var(--content-text-secondary)]">
              <div className="flex items-center gap-[0.375rem]">
                <span className="w-[0.5rem] h-[0.5rem] rounded-full bg-green-500"></span>
                Sucesso
              </div>
              <div className="flex items-center gap-[0.375rem]">
                <span className="w-[0.5rem] h-[0.5rem] rounded-full bg-[var(--content-badge-error-text)]"></span>
                Falha
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-[0.5rem]">
            {semana.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-[0.75rem] p-[0.75rem] shape-xl border ${
                  item.status === 'error'
                    ? 'bg-[var(--content-badge-error-bg)] border-[var(--content-badge-error-border)]'
                    : 'bg-[var(--content-hover)] border-[var(--content-border)]'
                }`}
              >
                <span
                  className={`label-caps ${
                    item.status === 'error'
                      ? 'text-[var(--content-badge-error-text)]'
                      : 'text-[var(--content-text-secondary)] opacity-50'
                  }`}
                >
                  {item.dia}
                </span>
                <div
                  className={`w-full h-[0.5rem] shape-sm ${
                    item.status === 'error'
                      ? 'bg-[var(--content-badge-error-text)] animate-pulse'
                      : 'bg-green-500'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-[1.5rem] flex flex-col justify-center">
          <div className="flex items-center gap-[0.75rem] text-green-600 mb-[0.5rem]">
            <span className="w-[0.5rem] h-[0.5rem] bg-green-500 rounded-full animate-pulse"></span>
            <span className="label-caps uppercase tracking-widest">
              API Conectada • Produção
            </span>
          </div>
          <p className="label-caps text-[var(--content-text-secondary)] mt-[0.5rem] flex items-center gap-[0.25rem]">
            <span className="material-symbols-outlined body-md align-middle">
              verified_user
            </span>
            SIGAP Secure Protocol v2.4.0
          </p>
        </Card>
      </div>
    </div>
  );
}
