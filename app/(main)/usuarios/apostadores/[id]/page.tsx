'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function PerfilApostadorPage() {
  const params = useParams();
  const [detailsExpanded, setDetailsExpanded] = useState(true); // Iniciar aberto
  const [activeTab, setActiveTab] = useState('transacoes');

  // Mock data - em produção viria de API baseado no params.id
  const apostador = {
    nome: 'Ricardo Alves de Souza',
    vip: 'Apostador Legend',
    status: 'Ativa',
    kyc: true,
    cpf: '452.***.***-09',
    celular: '+55 (11) 98765-4321',
    email: 'ricardo.souza@mail.com',
    cadastro: '22/01/2023 14:30',
    pais: 'Brasil 🇧🇷',
    uuid: '8a7f-99c1-42e1-93bc-002d',
    emailVerificado: true,
    celularVerificado: false,
  };

  const financeiro = {
    bonusEsportivo: 'R$ 1.200,00',
    bonusCassino: 'R$ 350,00',
    ggr: 'R$ +54.479,88',
    netCash: 'R$ 150,00',
    totalDepositado: 'R$ 142.900,00',
    totalSacado: 'R$ 88.420,12',
  };

  const transacoes = [
    {
      id: 'TX-99823101',
      data: '24/05/2023 10:15',
      tipo: 'Saque',
      valor: 'R$ 2.450,00',
      status: 'pendente',
      gateway: 'PIX_SAFE',
    },
    {
      id: 'TX-99822554',
      data: '23/05/2023 18:42',
      tipo: 'Depósito',
      valor: 'R$ 5.000,00',
      status: 'aceito',
      gateway: 'BANCO_PAY',
    },
  ];

  const bonus = [
    {
      nome: 'Bônus de Primeiro Depósito',
      status: 'ativo',
      rollover: 75,
      valor: 'R$ 500,00',
      expira: '15/06/2023',
    },
    {
      nome: 'Cashback Semanal',
      status: 'concluido',
      rollover: 100,
      valor: 'R$ 120,50',
      finalizado: '20/05/2023',
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 max-w-[1400px] mx-auto">
      {/* Card Expansível do Usuário */}
      <section className="bg-[var(--content-surface)] rounded-xl shadow-sm border border-[var(--content-border)] overflow-hidden transition-all">
        {/* Header */}
        <div
          className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 cursor-pointer hover:bg-[var(--content-hover)] transition-colors"
          onClick={() => setDetailsExpanded(!detailsExpanded)}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--md-sys-color-secondary)]/10 rounded-full flex items-center justify-center border-2 border-[var(--content-border)] flex-shrink-0">
            <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[32px] md:text-[40px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              person
            </span>
          </div>

          <div className="flex-1 min-w-0 w-full sm:w-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--content-text)] truncate">
              {apostador.nome}
            </h2>
            <div className="flex items-center gap-2 md:gap-4 mt-2 flex-wrap">
              <span className="text-[9px] md:text-[10px] font-bold uppercase px-2 md:px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F9E076] text-black rounded-full">
                {apostador.vip}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-[9px] md:text-[10px] font-bold text-green-500 uppercase">{apostador.status}</span>
              </div>
              {apostador.kyc && (
                <div className="flex items-center gap-1 px-2 md:px-2.5 py-1 bg-[var(--content-badge-success-bg)] border border-[var(--content-badge-success-border)] rounded-full">
                  <span className="material-symbols-outlined text-[var(--content-badge-success-text)] text-[12px] md:text-[14px]">fingerprint</span>
                  <span className="text-[9px] md:text-[10px] font-bold text-[var(--content-badge-success-text)] uppercase">KYC Verificado</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto">
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex-1 sm:flex-none px-3 md:px-4 py-2 border border-red-500 text-red-500 rounded-lg text-[10px] md:text-[11px] font-bold uppercase hover:bg-red-500/10 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px] md:text-[18px]">block</span>
              <span className="hidden sm:inline">Suspender</span>
            </button>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--content-hover)] text-[var(--md-sys-color-secondary)] flex-shrink-0">
              <span
                className={`material-symbols-outlined text-[24px] transition-transform ${detailsExpanded ? 'rotate-180' : ''}`}
              >
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Conteúdo Expansível */}
        {detailsExpanded && (
          <div className="px-6 pb-6 border-t border-[var(--content-border)] pt-6 space-y-8">
            {/* Dados Pessoais */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[var(--content-border)] pb-2">
                <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px]">contact_page</span>
                <h3 className="text-[11px] font-bold text-[var(--content-text)] uppercase tracking-wider">Dados Pessoais</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">CPF</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[var(--content-text)]">{apostador.cpf}</p>
                    <button className="material-symbols-outlined text-[14px] text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]">
                      content_copy
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">Celular</p>
                  <p className="text-sm font-medium text-[var(--content-text)]">{apostador.celular}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">E-mail</p>
                  <p className="text-sm font-medium text-[var(--content-text)] break-all">{apostador.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">Data de Cadastro</p>
                  <p className="text-sm font-medium text-[var(--content-text)]">{apostador.cadastro}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase">País</p>
                  <p className="text-sm font-medium text-[var(--content-text)]">{apostador.pais}</p>
                </div>
              </div>
            </div>

            {/* Dados da Conta */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[var(--content-border)] pb-2">
                <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px]">badge</span>
                <h3 className="text-[11px] font-bold text-[var(--content-text)] uppercase tracking-wider">Dados da Conta</h3>
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div>
                  <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">ID (UUID)</p>
                  <div className="flex items-center gap-2 bg-[var(--content-bg)] px-2 py-1 rounded border border-[var(--content-border)] w-fit">
                    <p className="text-[11px] font-mono text-[var(--content-text-secondary)]">{apostador.uuid}</p>
                    <button className="material-symbols-outlined text-[14px] text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]">
                      content_copy
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">Email Verif.</p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${apostador.emailVerificado ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)]' : 'bg-red-900/40 text-red-500'}`}>
                      {apostador.emailVerificado ? 'SIM' : 'NÃO'}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">Celular Verif.</p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${apostador.celularVerificado ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)]' : 'bg-red-900/40 text-red-500'}`}>
                      {apostador.celularVerificado ? 'SIM' : 'NÃO'}
                    </span>
                  </div>
                </div>
                <button className="text-[11px] font-bold text-[var(--md-sys-color-secondary)] uppercase flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-[16px]">history</span>
                  Ver Histórico de Acessos
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Overview Financeiro */}
      <section className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[20px] md:text-[24px]">analytics</span>
            <h2 className="text-lg md:text-xl font-semibold text-[var(--content-text)]">Overview Financeiro</h2>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] rounded-lg text-[11px] font-bold uppercase flex items-center justify-center gap-2 shadow-sm hover:opacity-90">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Adicionar Crédito
          </button>
        </div>

        {/* Cards Financeiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)] border-t-4 border-t-[var(--md-sys-color-primary-container)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-[var(--md-sys-color-primary-container)] opacity-5">sports_soccer</span>
            <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">Bônus Esportivo</p>
            <p className="text-xl font-semibold text-[var(--content-text)]">{financeiro.bonusEsportivo}</p>
          </div>

          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)] border-t-4 border-t-[var(--md-sys-color-primary-container)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-[var(--md-sys-color-primary-container)] opacity-5">casino</span>
            <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">Bônus Cassino</p>
            <p className="text-xl font-semibold text-[var(--content-text)]">{financeiro.bonusCassino}</p>
          </div>

          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)] border-t-4 border-t-green-500 relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-green-500 opacity-5">trending_up</span>
            <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">GGR (Lifetime)</p>
            <p className="text-xl font-semibold text-green-500">{financeiro.ggr}</p>
          </div>

          <div className="bg-[var(--content-surface)] p-4 rounded-xl shadow-sm border border-[var(--content-border)] border-t-4 border-t-[var(--md-sys-color-secondary)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-[var(--md-sys-color-secondary)] opacity-5">confirmation_number</span>
            <p className="text-[10px] font-bold text-[var(--content-text-secondary)] uppercase mb-1">Net Cash</p>
            <p className="text-xl font-semibold text-[var(--content-text)]">{financeiro.netCash}</p>
          </div>
        </div>

        {/* LTV Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--md-sys-color-primary-container)] p-6 rounded-xl text-[var(--md-sys-color-on-primary-container)] flex justify-between items-center shadow-lg">
            <div>
              <p className="text-[10px] opacity-70 uppercase font-bold">Total Depositado (LifeTime)</p>
              <p className="text-2xl font-bold">{financeiro.totalDepositado}</p>
            </div>
            <span className="material-symbols-outlined text-[48px] opacity-20">payments</span>
          </div>

          <div className="bg-[var(--md-sys-color-secondary)] p-6 rounded-xl text-[var(--md-sys-color-on-secondary)] flex justify-between items-center shadow-lg">
            <div>
              <p className="text-[10px] opacity-70 uppercase font-bold">Total Sacado (LifeTime)</p>
              <p className="text-2xl font-bold">{financeiro.totalSacado}</p>
            </div>
            <span className="material-symbols-outlined text-[48px] opacity-20">account_balance_wallet</span>
          </div>
        </div>
      </section>

      {/* Tabs e Tabela */}
      <section className="space-y-4">
        <div className="bg-[var(--content-surface)] rounded-xl shadow-sm border border-[var(--content-border)] overflow-hidden">
          {/* Tabs */}
          <div className="flex bg-[var(--content-bg)] border-b border-[var(--content-border)] overflow-x-auto scrollbar-hide">
            {['transacoes', 'apostas', 'cassino', 'bonus', 'kyc', 'logins'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-[11px] font-bold uppercase whitespace-nowrap relative ${
                  activeTab === tab
                    ? 'text-[var(--md-sys-color-secondary)]'
                    : 'text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--md-sys-color-secondary)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tabela de Transações */}
          {activeTab === 'transacoes' && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-[var(--content-bg)] border-b border-[var(--content-border)]">
                  <tr>
                    <th className="px-6 py-3 text-left text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">Data/Hora</th>
                    <th className="px-6 py-3 text-left text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-left text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">Valor</th>
                    <th className="px-6 py-3 text-left text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">Gateway</th>
                    <th className="px-6 py-3 text-left text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">ID Transação</th>
                    <th className="px-6 py-3 text-right text-[10px] font-bold text-[var(--content-text-secondary)] uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--content-border)]">
                  {transacoes.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[var(--content-hover)] transition-colors">
                      <td className="px-6 py-4 text-sm text-[var(--content-text)]">{tx.data}</td>
                      <td className="px-6 py-4 text-sm text-[var(--content-text)]">{tx.tipo}</td>
                      <td className={`px-6 py-4 text-sm font-bold ${tx.tipo === 'Saque' ? 'text-red-500' : 'text-green-500'}`}>
                        {tx.valor}
                      </td>
                      <td className="px-6 py-4">
                        {tx.status === 'pendente' ? (
                          <span className="px-2 py-0.5 bg-amber-900/20 text-amber-500 rounded text-[10px] font-bold uppercase">Pendente</span>
                        ) : (
                          <span className="px-2 py-0.5 bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] rounded text-[10px] font-bold uppercase">Aceito</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--content-text)]">{tx.gateway}</td>
                      <td className="px-6 py-4 text-[11px] font-mono text-[var(--content-text-secondary)]">{tx.id}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="material-symbols-outlined text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]">
                          visibility
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Cards de Bônus */}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {bonus.map((b, i) => (
          <div
            key={i}
            className={`bg-[var(--content-surface)] p-5 rounded-xl shadow-sm border-l-4 ${
              b.status === 'ativo' ? 'border-l-[var(--md-sys-color-secondary)]' : 'border-l-green-500'
            } space-y-3`}
          >
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-bold text-[var(--content-text)]">{b.nome}</h4>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                b.status === 'ativo'
                  ? 'bg-[var(--md-sys-color-secondary)]/10 text-[var(--md-sys-color-secondary)]'
                  : 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)]'
              }`}>
                {b.status}
              </span>
            </div>
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[var(--content-text-secondary)] uppercase font-bold">Rollover</span>
                <span className={`font-bold ${b.status === 'ativo' ? 'text-[var(--md-sys-color-secondary)]' : 'text-green-500'}`}>
                  {b.rollover}%
                </span>
              </div>
              <div className="w-full bg-[var(--content-border)] rounded-full h-1.5 overflow-hidden">
                <div
                  className={b.status === 'ativo' ? 'bg-[var(--md-sys-color-secondary)]' : 'bg-green-500'}
                  style={{ width: `${b.rollover}%`, height: '100%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-[var(--content-text-secondary)] italic">
              <span>Valor: {b.valor}</span>
              <span>{b.status === 'ativo' ? `Expira: ${b.expira}` : `Finalizado: ${b.finalizado}`}</span>
            </div>
          </div>
        ))}

        <div className="bg-[var(--content-surface)] p-5 rounded-xl border border-dashed border-[var(--content-border)] flex flex-col justify-center items-center text-center gap-2 hover:bg-[var(--content-hover)] transition-colors cursor-pointer group">
          <span className="material-symbols-outlined text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-secondary)] text-[32px]">
            add_circle
          </span>
          <p className="text-[11px] font-bold text-[var(--content-text-secondary)] uppercase group-hover:text-[var(--content-text)]">
            Atribuir novo bônus
          </p>
        </div>
      </section>
    </div>
  );
}
