'use client';

import { useState } from 'react';
import { Button, Card, IconButton, Table, TablePagination, Badge } from '@/app/_components/ui';

export default function JogosPage() {
  const [filtros, setFiltros] = useState({
    nome: '',
    genero: 'todos',
    fornecedor: 'todos',
    status: 'todos',
    volatilidade: 'qualquer',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const jogos = [
    { id: 153126, nome: 'Classic Speed Blackjack 90', genero: 'Blackjack', fornecedor: 'Evolution', rtp: 99.28, hitRate: 42.3, volatilidade: 'low', status: 'inativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=BJ' },
    { id: 157216, nome: 'Blackjack VIP 55', genero: 'Blackjack', fornecedor: 'Evolution', rtp: 99.50, hitRate: 41.1, volatilidade: 'low', status: 'inativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=VIP' },
    { id: 6365, nome: 'Ru Yi Speed Baccarat', genero: 'Baccarat', fornecedor: 'Playtech', rtp: 98.94, hitRate: 45.8, volatilidade: 'medium', status: 'ativo', destaque: true, thumb: 'https://via.placeholder.com/80x48/333/fff?text=BAC' },
    { id: 157516, nome: 'First Person Mega Ball', genero: 'Bingo', fornecedor: 'Evolution', rtp: 95.40, hitRate: 22.5, volatilidade: 'high', status: 'inativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=BINGO' },
    { id: 158822, nome: 'Infinite Blackjack', genero: 'Blackjack', fornecedor: 'Evolution', rtp: 99.47, hitRate: 38.9, volatilidade: 'low', status: 'ativo', destaque: false, thumb: 'https://via.placeholder.com/80x48/333/fff?text=INF' },
  ];

  const columns = [
    {
      key: 'thumb',
      label: 'Thumbnail',
      render: (_: any, row: any) => (
        <div className="w-[2.5rem] h-[1.5rem] rounded bg-[var(--content-hover)] overflow-hidden border border-[var(--content-border)]">
          <img className="w-full h-full object-cover" src={row.thumb} alt={row.nome} />
        </div>
      ),
    },
    { key: 'nome', label: 'Nome' },
    { key: 'id', label: 'ID' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'ativo' ? 'success' : 'error'}>
          {value === 'ativo' ? 'ATIVO' : 'INATIVO'}
        </Badge>
      ),
    },
    { key: 'genero', label: 'Gênero' },
    { key: 'fornecedor', label: 'Fornecedor' },
    {
      key: 'rtp',
      label: 'RTP %',
      align: 'center' as const,
      render: (value: number) => <span className="text-[var(--md-sys-color-secondary)] font-medium">{value}%</span>,
    },
    {
      key: 'hitRate',
      label: 'Hit Rate',
      align: 'center' as const,
      render: (value: number) => `${value}%`,
    },
    {
      key: 'volatilidade',
      label: 'Volatilidade',
      align: 'center' as const,
      render: (value: string) => (
        <Badge
          variant={value === 'low' ? 'default' : value === 'medium' ? 'warning' : 'error'}
        >
          {value === 'low' ? 'BAIXA' : value === 'medium' ? 'MÉDIA' : 'ALTA'}
        </Badge>
      ),
    },
    {
      key: 'destaque',
      label: 'Destaque',
      render: (value: boolean) => (
        <Badge variant={value ? 'success' : 'default'}>{value ? 'ON' : 'OFF'}</Badge>
      ),
    },
    {
      key: 'actions',
      label: 'Ações',
      align: 'right' as const,
      render: () => (
        <div className="flex justify-end gap-1">
          <IconButton icon="visibility" title="Visualizar" />
          <IconButton icon="edit" title="Editar" />
          <IconButton icon="settings" title="Configurações" />
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="display-md text-[var(--content-text)]">Jogos</h2>
          <p className="body-md text-[var(--content-text-secondary)] mt-1">
            Gerenciamento de todos os jogos do cassino
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--md-sys-color-secondary)] text-white rounded-lg hover:bg-[var(--md-sys-color-primary-container)] transition-colors">
          <i className="ti ti-plus text-lg" />
          <span className="label-lg">Novo Jogo</span>
        </button>
      </div>

      {/* Filter Section */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 items-end">
          <div className="space-y-1">
            <label className="label-md text-[var(--content-text-secondary)]">Nome</label>
            <input
              type="text"
              className="md3-input"
              placeholder="Filtrar por nome"
              value={filtros.nome}
              onChange={(e) => setFiltros({ ...filtros, nome: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="label-md text-[var(--content-text-secondary)]">Gênero</label>
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
          <div className="space-y-1">
            <label className="label-md text-[var(--content-text-secondary)]">Fornecedor</label>
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
          <div className="space-y-1">
            <label className="label-md text-[var(--content-text-secondary)]">Status</label>
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
          <div className="space-y-1">
            <label className="label-md text-[var(--content-text-secondary)]">Volatilidade</label>
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
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[var(--md-sys-color-secondary)] text-white rounded-lg hover:bg-[var(--md-sys-color-primary-container)] transition-colors">
              <i className="ti ti-search text-lg" />
              <span className="label-lg">Pesquisar</span>
            </button>
            <button className="p-2 rounded-lg hover:bg-[var(--content-hover)] transition-colors">
              <i className="ti ti-refresh text-xl text-[var(--content-text)]" />
            </button>
          </div>
        </div>
      </Card>

      {/* Table */}
      <div className="space-y-0">
        <Table columns={columns} data={jogos} />
        <TablePagination
          currentPage={currentPage}
          totalPages={Math.ceil(3480 / itemsPerPage)}
          itemsPerPage={itemsPerPage}
          totalItems={3480}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </div>
  );
}
