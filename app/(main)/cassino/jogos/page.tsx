'use client';

import { useState } from 'react';
import { Button, Input, Select, Card, IconButton } from '@/app/_components/ui';

export default function JogosPage() {
  const [filtros, setFiltros] = useState({
    nome: '',
    genero: 'todos',
    fornecedor: 'todos',
    status: 'todos',
    volatilidade: 'qualquer',
  });

  const jogos = [
    { id: 153126, nome: 'Classic Speed Blackjack 90', genero: 'Blackjack', fornecedor: 'Evolution', rtp: 99.28, hitRate: 42.3, volatilidade: 'low', status: 'inativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=BJ' },
    { id: 157216, nome: 'Blackjack VIP 55', genero: 'Blackjack', fornecedor: 'Evolution', rtp: 99.50, hitRate: 41.1, volatilidade: 'low', status: 'inativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=VIP' },
    { id: 6365, nome: 'Ru Yi Speed Baccarat', genero: 'Baccarat', fornecedor: 'Playtech', rtp: 98.94, hitRate: 45.8, volatilidade: 'medium', status: 'ativo', destaque: true, thumb: 'https://via.placeholder.com/80x48/333/fff?text=BAC' },
    { id: 157516, nome: 'First Person Mega Ball', genero: 'Bingo', fornecedor: 'Evolution', rtp: 95.40, hitRate: 22.5, volatilidade: 'high', status: 'inativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=BINGO' },
    { id: 158822, nome: 'Infinite Blackjack', genero: 'Blackjack', fornecedor: 'Evolution', rtp: 99.47, hitRate: 38.9, volatilidade: 'low', status: 'ativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=INF' },
  ];

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem]">
        <div>
          <h2 className="headline-md text-[var(--content-text)]">Jogos</h2>
          <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
            Gerenciamento de todos os jogos do cassino
          </p>
        </div>
        <Button variant="filled" icon="add">
          Novo Jogo
        </Button>
      </div>

      {/* Filter Section */}
      <Card className="p-[0.875rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[0.75rem] items-end">
          <div className="space-y-[0.25rem]">
            <label className="label-caps text-[var(--content-text-secondary)]">Nome</label>
            <input
              type="text"
              className="md3-input"
              placeholder="Filtrar por nome"
              value={filtros.nome}
              onChange={(e) => setFiltros({ ...filtros, nome: e.target.value })}
            />
          </div>
          <div className="space-y-[0.25rem]">
            <label className="label-caps text-[var(--content-text-secondary)]">Gênero</label>
            <select
              className="md3-select"
              value={filtros.genero}
              onChange={(e) => setFiltros({ ...filtros, genero: e.target.value })}
            >
              <option value="todos">Todos</option>
              <option value="blackjack">Blackjack</option>
              <option value="baccarat">Baccarat</option>
              <option value="roleta">Roleta</option>
              <option value="bingo">Bingo</option>
            </select>
          </div>
          <div className="space-y-[0.25rem]">
            <label className="label-caps text-[var(--content-text-secondary)]">Fornecedor</label>
            <select
              className="md3-select"
              value={filtros.fornecedor}
              onChange={(e) => setFiltros({ ...filtros, fornecedor: e.target.value })}
            >
              <option value="todos">Todos</option>
              <option value="evolution">Evolution</option>
              <option value="pragmatic">Pragmatic Play</option>
              <option value="playtech">Playtech</option>
            </select>
          </div>
          <div className="space-y-[0.25rem]">
            <label className="label-caps text-[var(--content-text-secondary)]">Status</label>
            <select
              className="md3-select"
              value={filtros.status}
              onChange={(e) => setFiltros({ ...filtros, status: e.target.value })}
            >
              <option value="todos">Todos</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
          <div className="space-y-[0.25rem]">
            <label className="label-caps text-[var(--content-text-secondary)]">Volatilidade</label>
            <select
              className="md3-select"
              value={filtros.volatilidade}
              onChange={(e) => setFiltros({ ...filtros, volatilidade: e.target.value })}
            >
              <option value="qualquer">Qualquer</option>
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>
          <div className="flex gap-[0.375rem]">
            <button className="flex-1 md3-button-filled label-caps flex items-center justify-center gap-[0.375rem]">
              <span className="material-symbols-outlined text-[14px]">search</span>
              Pesquisar
            </button>
            <IconButton icon="refresh" />
          </div>
        </div>
      </Card>

      {/* Main Table */}
      <Card className="overflow-hidden">
        <div className="p-[0.625rem] flex items-center justify-between bg-[var(--content-bg)]/50 border-b border-[var(--content-border)]">
          <span className="body-sm text-[var(--content-text-secondary)]">
            Exibindo <span className="font-bold text-[var(--content-text)]">1 - 5</span> de{' '}
            <span className="font-bold text-[var(--content-text)]">3480</span> jogos
          </span>
          <div className="flex items-center gap-[0.5rem]">
            <span className="label-caps text-[var(--content-text-secondary)]">Itens:</span>
            <select className="bg-transparent border-none body-sm text-[var(--content-text)] focus:ring-0 cursor-pointer py-0">
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Thumbnail
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Nome
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  ID
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Status
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Gênero
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Fornecedor
                </th>
                <th className="px-[1rem] py-[0.75rem] text-center label-caps text-[var(--content-text-secondary)]">
                  RTP %
                </th>
                <th className="px-[1rem] py-[0.75rem] text-center label-caps text-[var(--content-text-secondary)]">
                  Hit Rate
                </th>
                <th className="px-[1rem] py-[0.75rem] text-center label-caps text-[var(--content-text-secondary)]">
                  Volatilidade
                </th>
                <th className="px-[1rem] py-[0.75rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Destaque
                </th>
                <th className="px-[1rem] py-[0.75rem] text-right label-caps text-[var(--content-text-secondary)]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {jogos.map((jogo) => (
                <tr
                  key={jogo.id}
                  className={`hover:bg-[var(--content-hover)] transition-colors ${
                    jogo.status === 'ativo' ? 'bg-[var(--md-sys-color-secondary)]/5' : ''
                  }`}
                >
                  <td className="px-[1rem] py-[0.625rem]">
                    <div className="w-[2.5rem] h-[1.5rem] shape-sm bg-[var(--content-hover)] overflow-hidden border border-[var(--content-border)]">
                      <img
                        className="w-full h-full object-cover"
                        src={jogo.thumb}
                        alt={jogo.nome}
                      />
                    </div>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)] truncate max-w-[150px]">
                    {jogo.nome}
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text-secondary)]">
                    {jogo.id}
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <span
                      className={`label-caps px-[0.375rem] py-[0.125rem] shape-xs ${
                        jogo.status === 'ativo'
                          ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border border-[var(--content-badge-success-border)]'
                          : 'bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)] border border-[var(--content-badge-error-border)]'
                      }`}
                      style={{ fontSize: '9px' }}
                    >
                      {jogo.status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)]">
                    {jogo.genero}
                  </td>
                  <td className="px-[1rem] py-[0.625rem] table-data text-[var(--content-text)]">
                    {jogo.fornecedor}
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-center table-data text-[var(--md-sys-color-secondary)]">
                    {jogo.rtp}%
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-center table-data text-[var(--content-text-secondary)]">
                    {jogo.hitRate}%
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-center">
                    <span
                      className={`label-caps px-[0.375rem] py-[0.125rem] shape-xs ${
                        jogo.volatilidade === 'low'
                          ? 'bg-blue-900/30 text-blue-400'
                          : jogo.volatilidade === 'medium'
                          ? 'bg-yellow-900/30 text-yellow-400'
                          : 'bg-red-900/30 text-red-400'
                      }`}
                      style={{ fontSize: '10px' }}
                    >
                      {jogo.volatilidade === 'low' ? 'Baixa' : jogo.volatilidade === 'medium' ? 'Média' : 'Alta'}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem]">
                    <span
                      className={`label-caps px-[0.375rem] py-[0.125rem] shape-xs ${
                        jogo.destaque
                          ? 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border border-[var(--content-badge-success-border)]'
                          : 'bg-[var(--content-hover)] text-[var(--content-text-secondary)] border border-[var(--content-border)]'
                      }`}
                      style={{ fontSize: '9px' }}
                    >
                      {jogo.destaque ? 'On' : 'Off'}
                    </span>
                  </td>
                  <td className="px-[1rem] py-[0.625rem] text-right">
                    <div className="flex justify-end gap-[0.125rem]">
                      <IconButton icon="visibility" title="Visualizar" />
                      <IconButton icon="edit" title="Editar" />
                      <IconButton icon="settings" title="Configurações" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-[0.625rem] border-t border-[var(--content-border)] flex items-center justify-between">
          <div className="flex gap-[0.25rem] items-center">
            <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm border border-[var(--content-border)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] disabled:opacity-30">
              <span className="material-symbols-outlined text-base">first_page</span>
            </button>
            <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm border border-[var(--content-border)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] disabled:opacity-30">
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <div className="flex gap-[0.25rem] mx-[0.375rem]">
              <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm bg-[var(--md-sys-color-secondary)] text-white font-bold label-caps">
                1
              </button>
              <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] label-caps">
                2
              </button>
              <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] label-caps">
                3
              </button>
              <span className="px-[0.125rem] text-[var(--content-text-secondary)] label-caps">...</span>
              <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] label-caps">
                140
              </button>
            </div>
            <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm border border-[var(--content-border)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)]">
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
            <button className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-sm border border-[var(--content-border)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)]">
              <span className="material-symbols-outlined text-base">last_page</span>
            </button>
          </div>
          <div className="label-caps text-[var(--content-text-secondary)] italic">Page 1 / 140</div>
        </div>
      </Card>
    </div>
  );
}
