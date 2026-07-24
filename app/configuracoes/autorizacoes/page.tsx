'use client';

import { useState } from 'react';
import { Button, Input, Card, IconButton } from '@/app/_components/ui';
import { Breadcrumb } from '@/app/_components/layout';

export default function AutorizacoesPage() {
  const [filtroNome, setFiltroNome] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const autorizacoes = [
    {
      id: 1,
      nome: 'auth.backoffice.admin',
      descricao: 'Acesso total irrestrito às ferramentas de gestão administrativa, incluindo configuração de sistemas, gerenciamento de logs e controle de acessos mestre.',
      icon: 'verified_user',
    },
    {
      id: 2,
      nome: 'auth.financial.read_only',
      descricao: 'Permissão para visualização de extratos bancários, relatórios de faturamento e dashboards financeiros sem permissão de alteração ou aprovação de pagamentos.',
      icon: 'payments',
    },
    {
      id: 3,
      nome: 'auth.operation.cs_manager',
      descricao: 'Gerenciamento completo de tickets de suporte, visualização de dados cadastrais de usuários e ferramentas de interação direta com o cliente final.',
      icon: 'support_agent',
    },
    {
      id: 4,
      nome: 'auth.api.full_access',
      descricao: 'Acesso via API para integrações de terceiros e sistemas externos com privilégios de leitura e escrita em todos os endpoints públicos e privados autorizados.',
      icon: 'developer_mode_tv',
    },
  ];

  return (
    <div className="p-[1rem] md:p-[2rem] space-y-[1.5rem] md:space-y-[2rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
        <Breadcrumb
          items={[
            { label: 'Configuração' },
            { label: 'Autorizações', active: true },
          ]}
        />
        <div className="flex justify-between items-end mt-[0.5rem]">
          <div>
            <h2 className="headline-lg text-[var(--content-text)]">
              Gerenciamento de Autorizações
            </h2>
            <p className="body-md text-[var(--content-text-secondary)] mt-[0.25rem]">
              Controle de acessos granulares e chaves de integração do sistema.
            </p>
          </div>
          <Button
            variant="filled"
            icon="add"
            onClick={() => setShowCreateModal(true)}
          >
            Nova Autorização
          </Button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.1s_forwards]">
        <Card className="p-[1.5rem] flex items-center gap-[1rem]">
          <div className="w-[3rem] h-[3rem] rounded-full bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)]">
            <span className="material-symbols-outlined text-[28px]">lock_open</span>
          </div>
          <div>
            <p className="label-caps text-[var(--content-text-secondary)]">Total Autorizações</p>
            <h3 className="headline-md text-[var(--content-text)]">156</h3>
          </div>
        </Card>

        <Card className="p-[1.5rem] flex items-center gap-[1rem]">
          <div className="w-[3rem] h-[3rem] rounded-full bg-red-900/20 flex items-center justify-center text-red-500">
            <span className="material-symbols-outlined text-[28px]">security_update_warning</span>
          </div>
          <div>
            <p className="label-caps text-[var(--content-text-secondary)]">Logs de Segurança</p>
            <h3 className="headline-md text-[var(--content-text)]">3 Falhas Hoje</h3>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-[1rem] flex flex-col sm:flex-row items-stretch sm:items-end gap-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.2s_forwards]">
        <Input
          label="Filtrar por Nome"
          icon="filter_list"
          placeholder="Ex: auth.admin"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
          className="flex-1"
        />
        <Button variant="filled" icon="search">
          Pesquisar
        </Button>
        <button className="body-sm text-[var(--md-sys-color-secondary)] font-bold hover:underline">
          Limpar Filtros
        </button>
      </Card>

      {/* Table */}
      <Card className="overflow-hidden opacity-0 animate-[slideUp_0.5s_ease-out_0.3s_forwards]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <th className="px-[1.5rem] py-[1rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Nome
                </th>
                <th className="px-[1.5rem] py-[1rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Descrição
                </th>
                <th className="px-[1.5rem] py-[1rem] text-right label-caps text-[var(--content-text-secondary)]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {autorizacoes.map((auth) => (
                <tr
                  key={auth.id}
                  className="hover:bg-[var(--content-hover)] transition-colors group"
                >
                  <td className="px-[1.5rem] py-[1rem]">
                    <div className="flex items-center gap-[0.75rem]">
                      <div className="w-[2rem] h-[2rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)]">
                        <span className="material-symbols-outlined text-[18px]">
                          {auth.icon}
                        </span>
                      </div>
                      <span className="table-data text-[var(--content-text)]">
                        {auth.nome}
                      </span>
                    </div>
                  </td>
                  <td className="px-[1.5rem] py-[1rem]">
                    <p className="body-md text-[var(--content-text-secondary)] leading-relaxed max-w-[40rem]">
                      {auth.descricao}
                    </p>
                  </td>
                  <td className="px-[1.5rem] py-[1rem] text-right">
                    <div className="flex justify-end gap-[0.5rem] opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconButton icon="edit" title="Editar" />
                      <IconButton
                        icon="delete"
                        variant="danger"
                        title="Excluir"
                        onClick={() => setShowDeleteModal(true)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-[1.5rem] py-[1rem] bg-[var(--content-hover)] border-t border-[var(--content-border)] flex flex-col sm:flex-row justify-between items-center gap-[1rem]">
          <p className="body-sm text-[var(--content-text-secondary)]">
            Exibindo <span className="font-bold text-[var(--content-text)]">4</span> de{' '}
            <span className="font-bold text-[var(--content-text)]">28</span> registros
          </p>
          <div className="flex items-center gap-[0.25rem]">
            <button
              className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] disabled:opacity-30"
              disabled
            >
              <span className="material-symbols-outlined text-[14px]">first_page</span>
            </button>
            <button
              className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] disabled:opacity-30"
              disabled
            >
              <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md bg-[var(--md-sys-color-secondary)] text-white label-caps">
              1
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text)] label-caps hover:bg-[var(--content-hover)]">
              2
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text)] label-caps hover:bg-[var(--content-hover)]">
              3
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)]">
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
            <button className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)]">
              <span className="material-symbols-outlined text-[14px]">last_page</span>
            </button>
          </div>
        </div>
      </Card>

      {/* Footer Info */}
      <div className="flex justify-center opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
        <div className="flex items-center gap-[0.5rem] text-[var(--content-text-secondary)] bg-[var(--content-hover)] px-[1rem] py-[0.5rem] shape-lg border border-[var(--content-border)]">
          <span className="material-symbols-outlined text-[14px]">info</span>
          <p className="label-caps" style={{ fontSize: '10px' }}>
            Nota: O tempo de propagação de cache para novas autorizações é de aproximadamente 120s.
          </p>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md p-[1.5rem]">
            <div className="flex justify-between items-center mb-[1.5rem]">
              <h3 className="headline-md text-[var(--content-text)]">Nova Autorização</h3>
              <IconButton icon="close" onClick={() => setShowCreateModal(false)} />
            </div>
            <div className="space-y-[1rem]">
              <Input label="Nome" placeholder="Ex: auth.admin" />
              <div className="space-y-[0.25rem]">
                <label className="label-caps text-[var(--content-text-secondary)]">
                  Descrição
                </label>
                <textarea
                  className="md3-input resize-none"
                  placeholder="Descreva a finalidade desta autorização..."
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end gap-[0.75rem] mt-[2rem]">
              <Button variant="outlined" onClick={() => setShowCreateModal(false)}>
                Cancelar
              </Button>
              <Button variant="filled">Adicionar</Button>
            </div>
          </Card>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-sm p-[1.5rem]">
            <div className="flex items-center gap-[0.75rem] text-red-500 mb-[1rem]">
              <span className="material-symbols-outlined text-[32px]">warning</span>
              <h3 className="headline-md">Confirmar Exclusão</h3>
            </div>
            <p className="body-md text-[var(--content-text-secondary)] mb-[2rem]">
              Tem certeza de que deseja excluir este item? Essa ação não pode ser desfeita!
            </p>
            <div className="flex justify-end gap-[0.75rem]">
              <Button variant="outlined" onClick={() => setShowDeleteModal(false)}>
                Cancelar
              </Button>
              <button className="bg-red-500 text-white px-[1.5rem] py-[0.5rem] shape-lg label-caps font-bold hover:opacity-90 transition-all">
                Excluir
              </button>
            </div>
          </Card>
        </div>
      )}

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
