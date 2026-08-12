'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Card, IconButton, TablePagination } from '@/app/_components/ui';

export default function ApostadoresPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const recent = [
    { name: 'Isley Lopez', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Maria Silva', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Carlos Eduardo', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Ana Paula', avatar: 'https://i.pravatar.cc/150?img=4' },
  ];

  const apostadores = [
    {
      id: '8921',
      name: 'Isley David Lopez Giraldo',
      avatar: 'https://i.pravatar.cc/150?img=11',
      cpf: '708.758.834-60',
      email: 'isley.giraldo@twinfo.io',
      cadastro: '17/01/2024',
      depositos: 'R$ 12.450,00',
      status: 'verificado',
    },
    {
      id: '9042',
      name: 'Maria Silva Santos',
      avatar: 'https://i.pravatar.cc/150?img=12',
      cpf: '123.456.789-00',
      email: 'maria.santos@email.com',
      cadastro: '05/03/2024',
      depositos: 'R$ 5.920,00',
      status: 'verificado',
    },
    {
      id: '9155',
      name: 'Carlos Eduardo Melo',
      avatar: 'https://i.pravatar.cc/150?img=13',
      cpf: '987.654.321-00',
      email: 'carlos.melo@gmail.com',
      cadastro: '22/04/2024',
      depositos: 'R$ 2.100,00',
      status: 'pendente',
    },
    {
      id: '9201',
      name: 'Ana Paula Ferreira',
      avatar: 'https://i.pravatar.cc/150?img=14',
      cpf: '456.123.789-00',
      email: 'ana.ferreira@outlook.com',
      cadastro: '10/06/2024',
      depositos: 'R$ 0,00',
      status: 'bloqueado',
    },
    {
      id: '9302',
      name: 'João Pedro Almeida',
      avatar: 'https://i.pravatar.cc/150?img=15',
      cpf: '234.567.890-12',
      email: 'joao.almeida@gmail.com',
      cadastro: '15/07/2024',
      depositos: 'R$ 8.750,00',
      status: 'verificado',
    },
    {
      id: '9403',
      name: 'Fernanda Costa Lima',
      avatar: 'https://i.pravatar.cc/150?img=16',
      cpf: '345.678.901-23',
      email: 'fernanda.lima@hotmail.com',
      cadastro: '20/08/2024',
      depositos: 'R$ 15.200,00',
      status: 'verificado',
    },
    {
      id: '9504',
      name: 'Roberto Carlos Souza',
      avatar: 'https://i.pravatar.cc/150?img=17',
      cpf: '456.789.012-34',
      email: 'roberto.souza@yahoo.com',
      cadastro: '03/09/2024',
      depositos: 'R$ 3.400,00',
      status: 'pendente',
    },
    {
      id: '9605',
      name: 'Juliana Oliveira Pinto',
      avatar: 'https://i.pravatar.cc/150?img=18',
      cpf: '567.890.123-45',
      email: 'juliana.pinto@email.com',
      cadastro: '12/09/2024',
      depositos: 'R$ 22.890,00',
      status: 'verificado',
    },
    {
      id: '9706',
      name: 'Marcos Antonio Ribeiro',
      avatar: 'https://i.pravatar.cc/150?img=19',
      cpf: '678.901.234-56',
      email: 'marcos.ribeiro@gmail.com',
      cadastro: '25/09/2024',
      depositos: 'R$ 6.120,00',
      status: 'verificado',
    },
    {
      id: '9807',
      name: 'Patricia Mendes Silva',
      avatar: 'https://i.pravatar.cc/150?img=20',
      cpf: '789.012.345-67',
      email: 'patricia.mendes@outlook.com',
      cadastro: '05/10/2024',
      depositos: 'R$ 1.850,00',
      status: 'pendente',
    },
  ];

  return (
    <div className="p-[1rem] space-y-[1rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] py-[0.5rem]">
        <h2 className="headline-md text-[var(--content-text)]">
          Gerenciamento de Apostadores
        </h2>
        <Button variant="filled" icon="add" fullWidth className="sm:w-auto">
          Novo Apostador
        </Button>
      </div>

      {/* Recent Users Chips (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-[0.75rem] py-[0.25rem]">
        <span className="label-caps text-[var(--content-text-secondary)] flex-shrink-0">
          Recentes:
        </span>
        <div className="flex gap-[0.5rem] overflow-x-auto">
          {recent.map((user, i) => (
            <div
              key={i}
              className="group relative flex items-center gap-[0.375rem] px-[0.5rem] py-[0.25rem] bg-[var(--content-surface)] border border-[var(--content-border)] shape-md hover:elevation-1 transition-all cursor-pointer"
            >
              <div className="w-[1rem] h-[1rem] rounded-full bg-[var(--md-sys-color-secondary)] text-white flex items-center justify-center text-[9px] font-bold">
                {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <span className="body-sm text-[var(--content-text)] whitespace-nowrap">{user.name}</span>
              <button className="opacity-0 group-hover:opacity-100 absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center transition-opacity">
                <i className="ti ti-x text-[10px]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <Card className="px-[0.75rem] py-[0.5rem] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-[0.75rem]">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[0.75rem] flex-1">
          <div className="relative w-full sm:flex-1 sm:max-w-[240px]">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="md3-input h-[2rem] pl-[2rem]"
            />
            <span className="material-symbols-outlined absolute left-[0.5rem] top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] text-[18px]">
              search
            </span>
          </div>

          {/* Filters - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-[1rem] border-l border-[var(--content-border)] pl-[1rem]">
            <button className="flex items-center gap-[0.375rem] group">
              <span className="body-sm text-[var(--content-text)]">Vip</span>
              <span className="bg-[var(--md-sys-color-secondary)] text-[var(--md-sys-color-on-secondary)] label-caps w-[1rem] h-[1rem] flex items-center justify-center rounded-full" style={{ fontSize: '9px' }}>
                3
              </span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] text-[14px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-[0.375rem] group">
              <span className="body-sm text-[var(--content-text)]">Status</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] text-[14px]">
                expand_more
              </span>
            </button>

            <button className="flex items-center gap-[0.375rem] group">
              <span className="body-sm text-[var(--content-text)]">Data</span>
              <span className="material-symbols-outlined text-[var(--content-text-secondary)] text-[14px]">
                expand_more
              </span>
            </button>
          </div>
        </div>

        <button className="px-[0.75rem] py-[0.375rem] shape-md border border-[var(--content-border)] text-[var(--content-text-secondary)] label-caps hover:bg-[var(--content-hover)] transition-all whitespace-nowrap">
          Limpar filtros
        </button>
      </Card>

      {/* Data Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-[var(--content-bg)] border-b border-[var(--content-border)]">
              <tr>
                <th className="w-[28%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)]">
                  Apostador
                </th>
                <th className="w-[14%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  CPF
                </th>
                <th className="w-[20%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)]">
                  Email
                </th>
                <th className="w-[12%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  Cadastro
                </th>
                <th className="w-[14%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-right">
                  Depósitos
                </th>
                <th className="w-[10%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  Status KYC
                </th>
                <th className="w-[2%] px-[1rem] py-[0.625rem] label-caps text-[var(--content-text-secondary)] text-center">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {apostadores.map((user) => (
                <tr key={user.id} className="hover:bg-[var(--content-hover)] transition-colors cursor-pointer group">
                  <td className="px-[1rem] py-[0.5rem]">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="flex items-center gap-[0.5rem]">
                      <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-[var(--md-sys-color-secondary)] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0">
                        {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="truncate">
                        <p className="table-data text-[var(--content-text)] truncate">
                          {user.name}
                        </p>
                        <p className="body-sm text-[var(--content-text-secondary)] opacity-50" style={{ fontSize: '11px' }}>
                          ID: #{user.id}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center body-sm text-[var(--content-text-secondary)] tabular-nums">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.cpf}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] body-sm text-[var(--content-text-secondary)] truncate">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block truncate">
                      {user.email}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center body-sm text-[var(--content-text-secondary)]">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.cadastro}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-right table-data font-bold text-[var(--content-text)] tabular-nums">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.depositos}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center">
                    <Link href={`/usuarios/apostadores/${user.id}`} className="block">
                      {user.status === 'verificado' && (
                        <span className="inline-block px-[0.375rem] py-[0.125rem] shape-xs label-caps bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border border-[var(--content-badge-success-border)] leading-none" style={{ fontSize: '9px' }}>
                          Verificado
                        </span>
                      )}
                      {user.status === 'pendente' && (
                        <span className="inline-block px-[0.375rem] py-[0.125rem] shape-xs label-caps bg-amber-900/40 text-amber-500 border border-amber-700/50 leading-none" style={{ fontSize: '9px' }}>
                          Pendente
                        </span>
                      )}
                      {user.status === 'bloqueado' && (
                        <span className="inline-block px-[0.375rem] py-[0.125rem] shape-xs label-caps bg-red-900/40 text-red-500 border border-red-700/50 leading-none" style={{ fontSize: '9px' }}>
                          Bloqueado
                        </span>
                      )}
                    </Link>
                  </td>
                  <td className="px-[1rem] py-[0.5rem] text-center">
                    <Link
                      href={`/usuarios/apostadores/${user.id}`}
                      className="w-[1.75rem] h-[1.75rem] flex items-center justify-center shape-md hover:bg-[var(--md-sys-color-secondary)]/10 text-[var(--content-text-secondary)] hover:text-[var(--md-sys-color-secondary)] transition-all mx-auto"
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>
                        visibility
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          currentPage={currentPage}
          totalPages={Math.ceil(250 / itemsPerPage)}
          itemsPerPage={itemsPerPage}
          totalItems={250}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </Card>
    </div>
  );
}
