'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OperadoresPage() {
  const router = useRouter();
  const [filtros, setFiltros] = useState({
    busca: '',
    cargo: 'todos',
    status: 'todos',
  });

  const metricas = [
    { label: 'Ativos', valor: '118', trend: '+4', icon: 'group' },
    { label: 'Novos (Mês)', valor: '12', subtitle: 'Meta: 15', icon: 'person_add' },
    { label: 'Pendentes', valor: '3', subtitle: 'Aguardando', icon: 'schedule', accent: true },
    { label: 'Alertas', valor: '2', icon: 'warning', critical: true },
  ];

  const operadores = [
    {
      id: 1,
      nome: 'Ricardo Almeida',
      email: 'ricardo.a@bpx.com',
      cargo: 'Administrador Master',
      cpf: '000.***.***-00',
      ultimoLogin: '12/05/2023',
      horario: '14:30',
      mfa: true,
      status: 'ativo',
    },
    {
      id: 2,
      nome: 'Mariana Costa',
      email: 'm.costa@bpx.com',
      cargo: 'Gerente Operacional',
      cpf: '111.***.***-11',
      ultimoLogin: '20/01/2024',
      horario: '09:15',
      mfa: true,
      status: 'ativo',
    },
    {
      id: 3,
      nome: 'Felipe Pereira',
      email: 'felipe.p@bpx.com',
      cargo: 'Suporte N1',
      cpf: '222.***.***-22',
      ultimoLogin: '05/02/2024',
      horario: '18:45',
      mfa: false,
      status: 'inativo',
    },
    {
      id: 4,
      nome: 'Ana Silva',
      email: 'ana.s@bpx.com',
      cargo: 'Gerente Operacional',
      cpf: '333.***.***-33',
      ultimoLogin: '18/03/2024',
      horario: '10:22',
      mfa: true,
      status: 'ativo',
    },
    {
      id: 5,
      nome: 'Carlos Santos',
      email: 'carlos.s@bpx.com',
      cargo: 'Suporte N2',
      cpf: '444.***.***-44',
      ultimoLogin: '22/03/2024',
      horario: '16:50',
      mfa: true,
      status: 'ativo',
    },
  ];

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem] md:space-y-[1.5rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
        <div>
          <nav className="flex items-center gap-[0.375rem] label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
            <span>Configuração</span>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-[var(--md-sys-color-secondary)]">Operadores</span>
          </nav>
          <h2 className="headline-md text-[var(--content-text)]">Operadores do Sistema</h2>
        </div>
        <button
          className="w-full sm:w-auto md3-button-filled flex items-center justify-center gap-[0.5rem]"
          onClick={() => router.push('/configuracoes/operadores/novo')}
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          Novo Operador
        </button>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.75rem] md:gap-[1rem]">
        {metricas.map((metrica, i) => (
          <div
            key={i}
            className="md3-card p-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_forwards] hover:elevation-2 transition-all group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-[0.5rem]">
              <p className="label-caps text-[var(--content-text-secondary)]">{metrica.label}</p>
              <span
                className={`material-symbols-outlined text-[20px] transition-all duration-300 ${
                  metrica.critical
                    ? 'text-red-500 animate-[pulse_2s_ease-in-out_infinite]'
                    : metrica.accent
                    ? 'text-[var(--md-sys-color-secondary)] group-hover:scale-110'
                    : 'text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-secondary)] group-hover:scale-110'
                }`}
              >
                {metrica.icon}
              </span>
            </div>
            <h3
              className={`headline-lg ${
                metrica.critical ? 'text-red-500' : 'text-[var(--content-text)]'
              }`}
            >
              {metrica.valor}
            </h3>
            {(metrica.trend || metrica.subtitle) && (
              <div className="mt-[0.5rem] body-sm text-[var(--content-text-secondary)]">
                {metrica.trend && (
                  <span className="flex items-center gap-[0.25rem]">
                    <span className="material-symbols-outlined text-[14px]">north_east</span>
                    {metrica.trend}
                  </span>
                )}
                {metrica.subtitle && <span>{metrica.subtitle}</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Filtros */}
      <div className="md3-card p-[0.75rem] flex flex-col md:flex-row items-stretch md:items-center gap-[0.75rem] opacity-0 animate-[slideUp_0.6s_ease-out_0.4s_forwards]">
        <div className="relative flex-1">
          <input
            type="text"
            className="md3-input pl-[2rem]"
            placeholder="Buscar por nome, e-mail ou CPF..."
            value={filtros.busca}
            onChange={(e) => setFiltros({ ...filtros, busca: e.target.value })}
          />
          <span className="material-symbols-outlined absolute left-[0.5rem] top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] text-[18px]">
            search
          </span>
        </div>
        <select
          className="md3-select min-w-[160px]"
          value={filtros.cargo}
          onChange={(e) => setFiltros({ ...filtros, cargo: e.target.value })}
        >
          <option value="todos">Todos os Cargos</option>
          <option value="admin">Administrador Master</option>
          <option value="gerente">Gerente Operacional</option>
          <option value="suporte">Suporte N1</option>
        </select>
        <select
          className="md3-select min-w-[140px]"
          value={filtros.status}
          onChange={(e) => setFiltros({ ...filtros, status: e.target.value })}
        >
          <option value="todos">Situação: Todas</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
        <button className="body-sm text-[var(--md-sys-color-secondary)] font-bold hover:underline whitespace-nowrap">
          Limpar filtros
        </button>
        <div className="flex gap-[0.5rem] ml-auto">
          <button className="md3-icon-button" title="Exportar">
            <span className="material-symbols-outlined text-[18px]">download</span>
          </button>
          <button className="md3-icon-button" title="Atualizar">
            <span className="material-symbols-outlined text-[18px]">refresh</span>
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="md3-card overflow-hidden opacity-0 animate-[slideUp_0.6s_ease-out_0.5s_forwards]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Operador
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Cargo
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  CPF
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Último Login
                </th>
                <th className="px-[1rem] py-[0.75rem] text-center label-caps text-[var(--content-text-secondary)]">
                  MFA
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Situação
                </th>
                <th className="px-[1rem] py-[0.75rem] text-right label-caps text-[var(--content-text-secondary)]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {operadores.map((op) => (
                <tr key={op.id} className="hover:bg-[var(--content-hover)] transition-colors">
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="flex items-center gap-[0.75rem]">
                      <div className="w-[2rem] h-[2rem] rounded-full bg-[var(--md-sys-color-secondary)] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                        {op.nome
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()
                          .slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <p className="table-data text-[var(--content-text)] truncate">
                          {op.nome}
                        </p>
                        <p className="body-sm text-[var(--content-text-secondary)] truncate" style={{ fontSize: '11px' }}>
                          {op.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)]">
                    {op.cargo}
                  </td>
                  <td className="px-[1rem] py-[0.625rem] body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '11px' }}>
                    {op.cpf}
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <p className="table-data text-[var(--content-text)]">{op.ultimoLogin}</p>
                    <p className="body-sm text-[var(--content-text-secondary)]" style={{ fontSize: '11px' }}>
                      {op.horario}
                    </p>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-center">
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        op.mfa ? 'text-green-500' : 'text-[var(--content-text-secondary)] opacity-40'
                      }`}
                    >
                      {op.mfa ? 'verified_user' : 'gpp_maybe'}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <span
                      className={`label-caps px-[0.5rem] py-[0.125rem] shape-xs border ${
                        op.status === 'ativo'
                          ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border-[var(--content-badge-success-border)]'
                          : 'bg-red-900/20 text-red-500 border-red-800'
                      }`}
                      style={{ fontSize: '9px' }}
                    >
                      {op.status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-right">
                    <div className="flex justify-end gap-[0.25rem]">
                      <button className="md3-icon-button" title="Editar">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button className="md3-icon-button hover:text-red-500" title="Excluir">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="px-[1rem] py-[0.75rem] bg-[var(--content-hover)] border-t border-[var(--content-border)] flex flex-col sm:flex-row items-center justify-between gap-[0.75rem]">
          <span className="label-caps text-[var(--content-text-secondary)]">
            Exibindo <span className="font-bold text-[var(--content-text)]">1-5</span> de 124 registros
          </span>
          <div className="flex items-center gap-[0.25rem]">
            <button
              className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] disabled:opacity-50"
              disabled
            >
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
