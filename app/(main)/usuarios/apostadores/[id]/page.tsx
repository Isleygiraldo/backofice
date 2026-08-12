'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Button, Card, IconButton, Input } from '@/app/_components/ui';

export default function PerfilApostadorPage() {
  const params = useParams();
  const [detailsExpanded, setDetailsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('transacoes');

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
    { id: 'TX-99823101', data: '24/05/2023 10:15', tipo: 'Saque', valor: 'R$ 2.450,00', status: 'pendente', gateway: 'PIX_SAFE' },
    { id: 'TX-99822554', data: '23/05/2023 18:42', tipo: 'Depósito', valor: 'R$ 5.000,00', status: 'aceito', gateway: 'BANCO_PAY' },
  ];

  const bonus = [
    { nome: 'Bônus de Primeiro Depósito', status: 'ativo', rollover: 75, valor: 'R$ 500,00', expira: '15/06/2023' },
    { nome: 'Cashback Semanal', status: 'concluido', rollover: 100, valor: 'R$ 120,50', finalizado: '20/05/2023' },
  ];

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem] md:space-y-[1.5rem] max-w-[1400px] mx-auto">
      {/* Card Expansível do Usuário */}
      <Card className="overflow-hidden transition-all">
        <div
          className="p-[1rem] md:p-[1.5rem] flex flex-col sm:flex-row items-start sm:items-center gap-[1rem] sm:gap-[1.5rem] cursor-pointer hover:bg-[var(--content-hover)] transition-colors"
          onClick={() => setDetailsExpanded(!detailsExpanded)}
        >
          <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] bg-[var(--md-sys-color-secondary)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-2xl md:text-3xl font-bold">
              {apostador.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>

          <div className="flex-1 min-w-0 w-full sm:w-auto">
            <h2 className="headline-lg text-[var(--content-text)] truncate">
              {apostador.nome}
            </h2>
            <div className="flex items-center gap-[0.5rem] md:gap-[1rem] mt-[0.5rem] flex-wrap">
              <span className="label-caps px-[0.5rem] md:px-[0.75rem] py-[0.25rem] bg-gradient-to-r from-[#D4AF37] to-[#F9E076] text-black shape-sm" style={{ fontSize: '9px' }}>
                {apostador.vip}
              </span>
              <div className="flex items-center gap-[0.375rem]">
                <span className="w-[0.5rem] h-[0.5rem] rounded-full bg-green-500"></span>
                <span className="label-caps text-green-500" style={{ fontSize: '9px' }}>{apostador.status}</span>
              </div>
              {apostador.kyc && (
                <div className="flex items-center gap-[0.25rem] px-[0.5rem] md:px-[0.625rem] py-[0.25rem] bg-[var(--content-badge-success-bg)] border border-[var(--content-badge-success-border)] shape-sm">
                  <span className="material-symbols-outlined text-[var(--content-badge-success-text)] text-[12px] md:text-[14px]">fingerprint</span>
                  <span className="label-caps text-[var(--content-badge-success-text)]" style={{ fontSize: '9px' }}>KYC Verificado</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-[0.5rem] md:gap-[1rem] w-full sm:w-auto">
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex-1 sm:flex-none px-[0.75rem] md:px-[1rem] py-[0.5rem] border border-red-500 text-red-500 shape-md label-caps hover:bg-red-500/10 transition-all flex items-center justify-center gap-[0.5rem]"
            >
              <span className="material-symbols-outlined text-[16px] md:text-[18px]">block</span>
              <span className="hidden sm:inline">Suspender</span>
            </button>
            <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full bg-[var(--content-hover)] text-[var(--md-sys-color-secondary)] flex-shrink-0">
              <span className={`material-symbols-outlined text-[24px] transition-transform ${detailsExpanded ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </div>
          </div>
        </div>

        {detailsExpanded && (
          <div className="px-[1.5rem] pb-[1.5rem] border-t border-[var(--content-border)] pt-[1.5rem] space-y-[2rem]">
            {/* Dados Pessoais */}
            <div className="space-y-[0.75rem]">
              <div className="flex items-center gap-[0.5rem] border-b border-[var(--content-border)] pb-[0.5rem]">
                <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px]">contact_page</span>
                <h3 className="label-caps text-[var(--content-text)]">Dados Pessoais</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1rem]">
                <div>
                  <p className="label-caps text-[var(--content-text-secondary)]">CPF</p>
                  <div className="flex items-center gap-[0.5rem]">
                    <p className="table-data text-[var(--content-text)]">{apostador.cpf}</p>
                    <button className="material-symbols-outlined text-[14px] text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]">
                      content_copy
                    </button>
                  </div>
                </div>
                <div>
                  <p className="label-caps text-[var(--content-text-secondary)]">Celular</p>
                  <p className="table-data text-[var(--content-text)]">{apostador.celular}</p>
                </div>
                <div className="col-span-2">
                  <p className="label-caps text-[var(--content-text-secondary)]">E-mail</p>
                  <p className="table-data text-[var(--content-text)] break-all">{apostador.email}</p>
                </div>
                <div>
                  <p className="label-caps text-[var(--content-text-secondary)]">Data de Cadastro</p>
                  <p className="table-data text-[var(--content-text)]">{apostador.cadastro}</p>
                </div>
                <div>
                  <p className="label-caps text-[var(--content-text-secondary)]">País</p>
                  <p className="table-data text-[var(--content-text)]">{apostador.pais}</p>
                </div>
              </div>
            </div>

            {/* Dados da Conta */}
            <div className="space-y-[0.75rem]">
              <div className="flex items-center gap-[0.5rem] border-b border-[var(--content-border)] pb-[0.5rem]">
                <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px]">badge</span>
                <h3 className="label-caps text-[var(--content-text)]">Dados da Conta</h3>
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-[1rem]">
                <div>
                  <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">ID (UUID)</p>
                  <div className="flex items-center gap-[0.5rem] bg-[var(--content-bg)] px-[0.5rem] py-[0.25rem] shape-sm border border-[var(--content-border)] w-fit">
                    <p className="body-sm font-mono text-[var(--content-text-secondary)]" style={{ fontSize: '11px' }}>{apostador.uuid}</p>
                    <button className="material-symbols-outlined text-[14px] text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]">
                      content_copy
                    </button>
                  </div>
                </div>
                <div className="flex gap-[1rem]">
                  <div>
                    <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Email Verif.</p>
                    <span className={`px-[0.5rem] py-[0.125rem] shape-xs label-caps ${apostador.emailVerificado ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)]' : 'bg-red-900/40 text-red-500'}`} style={{ fontSize: '10px' }}>
                      {apostador.emailVerificado ? 'SIM' : 'NÃO'}
                    </span>
                  </div>
                  <div>
                    <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Celular Verif.</p>
                    <span className={`px-[0.5rem] py-[0.125rem] shape-xs label-caps ${apostador.celularVerificado ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)]' : 'bg-red-900/40 text-red-500'}`} style={{ fontSize: '10px' }}>
                      {apostador.celularVerificado ? 'SIM' : 'NÃO'}
                    </span>
                  </div>
                </div>
                <button className="label-caps text-[var(--md-sys-color-secondary)] flex items-center gap-[0.25rem] hover:underline">
                  <span className="material-symbols-outlined text-[16px]">history</span>
                  Ver Histórico de Acessos
                </button>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Overview Financeiro */}
      <section className="space-y-[1rem] md:space-y-[1.5rem]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem]">
          <div className="flex items-center gap-[0.75rem]">
            <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[20px] md:text-[24px]">analytics</span>
            <h2 className="headline-md text-[var(--content-text)]">Overview Financeiro</h2>
          </div>
          <Button variant="filled" icon="add" fullWidth className="sm:w-auto">
            Adicionar Crédito
          </Button>
        </div>

        {/* Cards Financeiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
          <Card className="p-[1rem] border-t-4 border-t-[var(--md-sys-color-primary-container)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-[var(--md-sys-color-primary-container)] opacity-5">sports_soccer</span>
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Bônus Esportivo</p>
            <p className="headline-md text-[var(--content-text)]">{financeiro.bonusEsportivo}</p>
          </Card>

          <Card className="p-[1rem] border-t-4 border-t-[var(--md-sys-color-primary-container)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-[var(--md-sys-color-primary-container)] opacity-5">casino</span>
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Bônus Cassino</p>
            <p className="headline-md text-[var(--content-text)]">{financeiro.bonusCassino}</p>
          </Card>

          <Card className="p-[1rem] border-t-4 border-t-green-500 relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-green-500 opacity-5">trending_up</span>
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">GGR (Lifetime)</p>
            <p className="headline-md text-green-500">{financeiro.ggr}</p>
          </Card>

          <Card className="p-[1rem] border-t-4 border-t-[var(--md-sys-color-secondary)] relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-[60px] text-[var(--md-sys-color-secondary)] opacity-5">confirmation_number</span>
            <p className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">Net Cash</p>
            <p className="headline-md text-[var(--content-text)]">{financeiro.netCash}</p>
          </Card>
        </div>

        {/* LTV Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
          <div className="bg-[var(--md-sys-color-primary-container)] p-[1.5rem] shape-xl text-[var(--md-sys-color-on-primary-container)] flex justify-between items-center elevation-2">
            <div>
              <p className="label-caps opacity-70">Total Depositado (LifeTime)</p>
              <p className="headline-lg">{financeiro.totalDepositado}</p>
            </div>
            <span className="material-symbols-outlined text-[48px] opacity-20">payments</span>
          </div>

          <div className="bg-[var(--md-sys-color-secondary)] p-[1.5rem] shape-xl text-[var(--md-sys-color-on-secondary)] flex justify-between items-center elevation-2">
            <div>
              <p className="label-caps opacity-70">Total Sacado (LifeTime)</p>
              <p className="headline-lg">{financeiro.totalSacado}</p>
            </div>
            <span className="material-symbols-outlined text-[48px] opacity-20">account_balance_wallet</span>
          </div>
        </div>
      </section>

      {/* Tabs e Tabela */}
      <section className="space-y-[1rem]">
        <Card className="overflow-hidden">
          {/* Tabs */}
          <div className="flex bg-[var(--content-bg)] border-b border-[var(--content-border)] overflow-x-auto scrollbar-hide">
            {['transacoes', 'apostas', 'cassino', 'bonus', 'kyc', 'logins'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-[1.5rem] py-[1rem] label-caps whitespace-nowrap relative ${
                  activeTab === tab
                    ? 'text-[var(--md-sys-color-secondary)]'
                    : 'text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[0.125rem] bg-[var(--md-sys-color-secondary)]"></span>
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
                    <th className="px-[1.5rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">Data/Hora</th>
                    <th className="px-[1.5rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">Tipo</th>
                    <th className="px-[1.5rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">Valor</th>
                    <th className="px-[1.5rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">Status</th>
                    <th className="px-[1.5rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">Gateway</th>
                    <th className="px-[1.5rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">ID Transação</th>
                    <th className="px-[1.5rem] py-[0.75rem] text-right label-caps text-[var(--content-text-secondary)]">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--content-border)]">
                  {transacoes.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[var(--content-hover)] transition-colors">
                      <td className="px-[1.5rem] py-[1rem] table-data text-[var(--content-text)]">{tx.data}</td>
                      <td className="px-[1.5rem] py-[1rem] table-data text-[var(--content-text)]">{tx.tipo}</td>
                      <td className={`px-[1.5rem] py-[1rem] table-data font-bold ${tx.tipo === 'Saque' ? 'text-red-500' : 'text-green-500'}`}>
                        {tx.valor}
                      </td>
                      <td className="px-[1.5rem] py-[1rem]">
                        {tx.status === 'pendente' ? (
                          <span className="px-[0.5rem] py-[0.125rem] bg-amber-900/20 text-amber-500 shape-xs label-caps" style={{ fontSize: '10px' }}>Pendente</span>
                        ) : (
                          <span className="px-[0.5rem] py-[0.125rem] bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] shape-xs label-caps" style={{ fontSize: '10px' }}>Aceito</span>
                        )}
                      </td>
                      <td className="px-[1.5rem] py-[1rem] table-data text-[var(--content-text)]">{tx.gateway}</td>
                      <td className="px-[1.5rem] py-[1rem] body-sm font-mono text-[var(--content-text-secondary)]" style={{ fontSize: '11px' }}>{tx.id}</td>
                      <td className="px-[1.5rem] py-[1rem] text-right">
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
        </Card>
      </section>

      {/* Cards de Bônus */}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
        {bonus.map((b, i) => (
          <Card
            key={i}
            className={`p-[1.25rem] border-l-4 ${
              b.status === 'ativo' ? 'border-l-[var(--md-sys-color-secondary)]' : 'border-l-green-500'
            } space-y-[0.75rem]`}
          >
            <div className="flex justify-between items-start">
              <h4 className="table-data text-[var(--content-text)]">{b.nome}</h4>
              <span className={`px-[0.5rem] py-[0.125rem] shape-xs label-caps ${
                b.status === 'ativo'
                  ? 'bg-[var(--md-sys-color-secondary)]/10 text-[var(--md-sys-color-secondary)]'
                  : 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)]'
              }`} style={{ fontSize: '10px' }}>
                {b.status}
              </span>
            </div>
            <div>
              <div className="flex justify-between body-sm mb-[0.25rem]">
                <span className="label-caps text-[var(--content-text-secondary)]">Rollover</span>
                <span className={`font-bold ${b.status === 'ativo' ? 'text-[var(--md-sys-color-secondary)]' : 'text-green-500'}`}>
                  {b.rollover}%
                </span>
              </div>
              <div className="w-full bg-[var(--content-border)] shape-sm h-[0.375rem] overflow-hidden">
                <div
                  className={b.status === 'ativo' ? 'bg-[var(--md-sys-color-secondary)]' : 'bg-green-500'}
                  style={{ width: `${b.rollover}%`, height: '100%' }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between body-sm text-[var(--content-text-secondary)] italic">
              <span>Valor: {b.valor}</span>
              <span>{b.status === 'ativo' ? `Expira: ${b.expira}` : `Finalizado: ${b.finalizado}`}</span>
            </div>
          </Card>
        ))}

        <Card className="p-[1.25rem] border border-dashed flex flex-col justify-center items-center text-center gap-[0.5rem] hover:bg-[var(--content-hover)] transition-colors cursor-pointer group">
          <span className="material-symbols-outlined text-[var(--content-text-secondary)] group-hover:text-[var(--md-sys-color-secondary)] text-[32px]">
            add_circle
          </span>
          <p className="label-caps text-[var(--content-text-secondary)] group-hover:text-[var(--content-text)]">
            Atribuir novo bônus
          </p>
        </Card>
      </section>
    </div>
  );
}
