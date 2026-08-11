'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, IconButton } from '@/app/_components/ui';
import type { Cargo } from '@/app/_lib/types';

export default function CargosPage() {
  const router = useRouter();
  const [filtroNome, setFiltroNome] = useState('');

  const cargos: Cargo[] = [
    {
      id: 1,
      nome: 'Master Admin',
      icon: 'admin_panel_settings',
      descricao: 'Acesso total irrestrito a todas as configurações e logs do sistema.',
    },
    {
      id: 2,
      nome: 'Financeiro Senior',
      icon: 'payments',
      descricao: 'Gestão de saques, depósitos e relatórios de lucratividade.',
    },
    {
      id: 3,
      nome: 'Suporte N2',
      icon: 'support_agent',
      descricao: 'Atendimento especializado e resolução de tickets críticos de usuários.',
    },
    {
      id: 4,
      nome: 'Marketing Afiliados',
      icon: 'campaign',
      descricao: 'Gestão de campanhas e acompanhamento de métricas de afiliados.',
    },
    {
      id: 5,
      nome: 'Compliance Officer',
      icon: 'verified_user',
      descricao: 'Monitoramento de atividades suspeitas e prevenção à fraude (KYC).',
    },
    {
      id: 6,
      nome: 'Moderador de Chat',
      icon: 'groups',
      descricao: 'Responsável pela moderação de conduta nas salas de apostas ao vivo.',
    },
  ];

  const metricas = {
    total: 11,
    ativos: 9,
    revisao: 2,
  };

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem] md:space-y-[1.5rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[0.75rem]">
        <div>
          <p className="body-md text-[var(--content-text-secondary)]">
            Gerenciamento de permissões e hierarquia do sistema
          </p>
        </div>
        <div className="flex items-center gap-[0.75rem] w-full sm:w-auto">
          <Button variant="outlined" icon="refresh" fullWidth className="sm:w-auto">
            Atualizar
          </Button>
          <Button
            variant="filled"
            icon="add"
            fullWidth
            className="sm:w-auto"
            onClick={() => router.push('/configuracoes/cargos/novo')}
          >
            Adicionar Cargo
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card className="p-[1rem] flex flex-col sm:flex-row items-stretch sm:items-end gap-[0.75rem]">
        <Input
          label="Filtrar por nome"
          placeholder="Ex: Administrador..."
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
          className="flex-1"
        />
        <Button variant="filled">Filtrar</Button>
      </Card>

      {/* Tabela */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Nome
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Descrição
                </th>
                <th className="px-[1rem] py-[0.75rem] text-right label-caps text-[var(--content-text-secondary)]">
                  Configurações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {cargos.map((cargo) => (
                <tr key={cargo.id} className="hover:bg-[var(--content-hover)] transition-colors group">
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="flex items-center gap-[0.75rem]">
                      <div className="w-[2rem] h-[2rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--md-sys-color-secondary)] transition-all">
                        <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px] group-hover:text-white transition-colors">
                          {cargo.icon}
                        </span>
                      </div>
                      <span className="table-data text-[var(--content-text)]">{cargo.nome}</span>
                    </div>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] body-md text-[var(--content-text-secondary)]">
                    {cargo.descricao}
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="flex items-center justify-end gap-[0.25rem]">
                      <IconButton icon="edit" title="Editar" />
                      <IconButton icon="delete" variant="danger" title="Excluir" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="px-[1rem] py-[0.75rem] bg-[var(--content-hover)] border-t border-[var(--content-border)] flex flex-col sm:flex-row items-center justify-between gap-[0.75rem]">
          <span className="body-sm text-[var(--content-text-secondary)]">
            Mostrando <span className="font-bold text-[var(--content-text)]">1-6</span> de{' '}
            <span className="font-bold text-[var(--content-text)]">11</span> resultados
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
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)]">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>
        </div>
      </Card>

      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem]">
        {/* Alert Card */}
        <div className="lg:col-span-2 bg-[var(--md-sys-color-secondary)] text-white p-[1.5rem] shape-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="headline-md mb-[0.5rem]">Segurança em primeiro lugar</h3>
            <p className="body-md opacity-90 max-w-[32rem] mb-[1rem]">
              Lembre-se que alterações em cargos afetam permissões em cascata para todos os
              usuários vinculados. Revise cuidadosamente cada módulo de acesso.
            </p>
            <button className="px-[1rem] py-[0.5rem] bg-white text-[var(--md-sys-color-secondary)] shape-md font-bold body-sm hover:opacity-90 transition-all">
              Ver Log de Auditoria
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4">
            <span className="material-symbols-outlined text-[240px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              security
            </span>
          </div>
        </div>

        {/* Métricas */}
        <Card className="p-[1.5rem]">
          <h4 className="label-caps text-[var(--content-text-secondary)] mb-[1rem]">
            Métricas de Cargos
          </h4>
          <div className="space-y-[1rem]">
            <div className="flex items-center justify-between">
              <span className="body-md text-[var(--content-text)]">Total de Cargos</span>
              <span className="body-md font-bold text-[var(--content-text)]">{metricas.total}</span>
            </div>
            <div className="w-full bg-[var(--content-hover)] h-[0.375rem] shape-sm overflow-hidden">
              <div
                className="bg-[var(--md-sys-color-secondary)] h-full shape-sm"
                style={{ width: '85%' }}
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="body-md text-[var(--content-text)]">Cargos Ativos</span>
              <span className="body-md font-bold text-green-500">{metricas.ativos}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="body-md text-[var(--content-text)]">Cargos em Revisão</span>
              <span className="body-md font-bold text-amber-500">{metricas.revisao}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
