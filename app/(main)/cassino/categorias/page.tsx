'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card } from '@/app/_components/ui';

interface Category {
  id: number;
  nome: string;
  slug: string;
  ordem: number;
  ativo: boolean;
}

type TabType = 'home' | 'cassino' | 'cassino-ao-vivo';

export default function CategoriasPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [filtroNome, setFiltroNome] = useState('');
  const [previewCategory, setPreviewCategory] = useState<Category | null>(null);

  const categoriasData = {
    home: {
      ativas: [
        { id: 1, nome: 'Top Jogos No Brasil Hoje', slug: 'top-jogos-no-brasil-hoje', ordem: 1, ativo: true },
        { id: 2, nome: 'Jogos Populares', slug: 'jogos-populares', ordem: 2, ativo: true },
        { id: 3, nome: 'Top 10', slug: 'top-10', ordem: 3, ativo: true },
        { id: 5, nome: 'Slots', slug: 'slots', ordem: 4, ativo: true },
      ],
      inativas: [
        { id: 6, nome: 'Promoções Sazonais', slug: 'promocoes-sazonais', ordem: 0, ativo: false },
        { id: 8, nome: 'Novos Jogos', slug: 'novos-jogos', ordem: 0, ativo: false },
      ],
    },
    cassino: {
      ativas: [
        { id: 1, nome: 'Top Jogos No Brasil Hoje', slug: 'top-jogos-no-brasil-hoje', ordem: 1, ativo: true },
        { id: 2, nome: 'Jogos Populares', slug: 'jogos-populares', ordem: 2, ativo: true },
        { id: 3, nome: 'Top 10', slug: 'top-10', ordem: 3, ativo: true },
        { id: 5, nome: 'Slots', slug: 'slots', ordem: 4, ativo: true },
        { id: 9, nome: 'Jackpots', slug: 'jackpots', ordem: 5, ativo: true },
      ],
      inativas: [
        { id: 7, nome: 'Jogos Clássicos', slug: 'jogos-classicos', ordem: 0, ativo: false },
      ],
    },
    'cassino-ao-vivo': {
      ativas: [
        { id: 2, nome: 'Jogos Populares', slug: 'jogos-populares', ordem: 1, ativo: true },
        { id: 4, nome: 'Jogos Brasileiros Ao Vivo', slug: 'jogos-brasileiros-ao-vivo', ordem: 2, ativo: true },
        { id: 10, nome: 'Mesas VIP', slug: 'mesas-vip', ordem: 3, ativo: true },
      ],
      inativas: [
        { id: 11, nome: 'Roleta Lightning', slug: 'roleta-lightning', ordem: 0, ativo: false },
      ],
    },
  };

  const currentData = categoriasData[activeTab];
  const totalCategorias = currentData.ativas.length + currentData.inativas.length;

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem]">
        <div>
          <h2 className="headline-md text-[var(--content-text)]">Categorias de Cassino</h2>
          <p className="body-sm text-[var(--content-text-secondary)] mt-[0.25rem]">
            Gerencie as categorias de jogos por página
          </p>
        </div>
        <div className="flex gap-[0.5rem] flex-wrap">
          <Button variant="outlined" icon="save">
            Salvar Ordenação
          </Button>
          <Button variant="outlined" icon="refresh">
            Atualizar
          </Button>
          <Button variant="filled" icon="add" onClick={() => router.push('/cassino/categorias/nova')}>
            Adicionar
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[var(--content-hover)] shape-lg p-[0.25rem] gap-[0.25rem] overflow-x-auto">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-[1rem] py-[0.5rem] shape-md label-md transition-colors ${
            activeTab === 'home'
              ? 'bg-[var(--md-sys-color-secondary)] text-white'
              : 'text-[var(--content-text-secondary)] hover:bg-[var(--content-surface)]'
          }`}
        >
          Página Inicial
        </button>
        <button
          onClick={() => setActiveTab('cassino')}
          className={`px-[1rem] py-[0.5rem] shape-md label-md transition-colors ${
            activeTab === 'cassino'
              ? 'bg-[var(--md-sys-color-secondary)] text-white'
              : 'text-[var(--content-text-secondary)] hover:bg-[var(--content-surface)]'
          }`}
        >
          Página do Cassino
        </button>
        <button
          onClick={() => setActiveTab('cassino-ao-vivo')}
          className={`px-[1rem] py-[0.5rem] shape-md label-md whitespace-nowrap transition-colors ${
            activeTab === 'cassino-ao-vivo'
              ? 'bg-[var(--md-sys-color-secondary)] text-white'
              : 'text-[var(--content-text-secondary)] hover:bg-[var(--content-surface)]'
          }`}
        >
          Cassino ao Vivo
        </button>
      </div>

      {/* Filtro Nome */}
      <Card className="p-[1rem]">
        <div className="flex gap-[1rem] items-end">
          <div className="flex-1">
            <label className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem] block">
              Filtrar por Nome
            </label>
            <input
              type="text"
              placeholder="Digite o nome da categoria..."
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
              className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] body-md focus:outline-none focus:border-[var(--md-sys-color-secondary)]"
            />
          </div>
          <div className="flex gap-[0.5rem]">
            <button
              onClick={() => setFiltroNome('')}
              className="w-[2.5rem] h-[2.5rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] transition-colors"
              title="Limpar filtro"
            >
              <i className="ti ti-x text-[18px]" />
            </button>
            <Button variant="filled" icon="search">
              Pesquisar
            </Button>
          </div>
        </div>
      </Card>

      {/* Info de Paginação */}
      <div className="flex justify-between items-center">
        <span className="body-sm text-[var(--content-text-secondary)]">
          1 - {totalCategorias} de {totalCategorias}
        </span>
        <select className="bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-2 py-1 body-sm text-[var(--content-text)] focus:outline-none">
          <option>50</option>
          <option>100</option>
        </select>
      </div>

      {/* Categorias Ativas */}
      <Card className="overflow-hidden">
        <div className="px-[1rem] py-[0.75rem] bg-[var(--content-hover)] border-b border-[var(--content-border)]">
          <h3 className="headline-md text-[var(--content-text)]">Categorias Ativas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[var(--content-hover)] border-b border-[var(--content-border)]">
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Nome
                </th>
                <th className="px-[1rem] py-[0.625rem] text-left label-caps text-[var(--content-text-secondary)]">
                  Slug
                </th>
                <th className="px-[1rem] py-[0.625rem] text-center label-caps text-[var(--content-text-secondary)]">
                  Ordem
                </th>
                <th className="px-[1rem] py-[0.625rem] text-center label-caps text-[var(--content-text-secondary)]">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--content-border)]">
              {currentData.ativas.map((cat) => (
                <tr key={cat.id} className="hover:bg-[var(--content-hover)] transition-colors">
                  <td className="px-[1rem] py-[0.75rem] table-data text-[var(--content-text)]">
                    {cat.nome}
                  </td>
                  <td className="px-[1rem] py-[0.75rem] table-data text-[var(--content-text-secondary)]">
                    {cat.slug}
                  </td>
                  <td className="px-[1rem] py-[0.75rem] text-center table-data text-[var(--content-text-secondary)]">
                    {cat.ordem}º
                  </td>
                  <td className="px-[1rem] py-[0.75rem]">
                    <div className="flex items-center justify-center gap-[0.25rem]">
                      <button
                        onClick={() => setPreviewCategory(cat)}
                        className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] transition-colors"
                        title="Visualizar"
                      >
                        <i className="ti ti-eye text-[16px]" />
                      </button>
                      <button
                        onClick={() => router.push(`/cassino/categorias/nova?id=${cat.id}`)}
                        className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] transition-colors"
                        title="Editar"
                      >
                        <i className="ti ti-edit text-[16px]" />
                      </button>
                      <button
                        className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] hover:text-[var(--content-badge-error-text)] hover:border-[var(--content-badge-error-border)] transition-colors"
                        title="Excluir"
                      >
                        <i className="ti ti-trash text-[16px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Categorias Inativas / Backlog */}
      {currentData.inativas.length > 0 && (
        <div className="opacity-60 hover:opacity-100 transition-opacity">
          <div className="px-[1rem] py-[0.5rem] mb-[0.5rem] flex items-center gap-[0.5rem]">
            <i className="ti ti-archive text-[var(--content-text-secondary)]" />
            <h3 className="headline-md text-[var(--content-text-secondary)]">
              Categorias Inativas / Backlog
            </h3>
          </div>
          <Card className="overflow-hidden border-dashed">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <tbody className="divide-y divide-[var(--content-border)] divide-dashed">
                  {currentData.inativas.map((cat) => (
                    <tr key={cat.id} className="hover:bg-[var(--content-hover)] transition-colors">
                      <td className="px-[1rem] py-[0.75rem] table-data text-[var(--content-text-secondary)]">
                        {cat.nome}
                      </td>
                      <td className="px-[1rem] py-[0.75rem] table-data text-[var(--content-text-secondary)]">
                        {cat.slug}
                      </td>
                      <td className="px-[1rem] py-[0.75rem] text-center table-data text-[var(--content-text-secondary)]">
                        -
                      </td>
                      <td className="px-[1rem] py-[0.75rem]">
                        <div className="flex items-center justify-center gap-[0.25rem]">
                          <button
                            onClick={() => router.push(`/cassino/categorias/nova?id=${cat.id}`)}
                            className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] transition-colors"
                            title="Editar"
                          >
                            <i className="ti ti-edit text-[16px]" />
                          </button>
                          <button
                            className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-badge-success-text)] hover:bg-[var(--content-badge-success-bg)] transition-colors"
                            title="Publicar"
                          >
                            <i className="ti ti-upload text-[14px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* Modal Preview */}
      {previewCategory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-[1rem]" onClick={() => setPreviewCategory(null)}>
          <div className="w-full max-w-[900px] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <Card className="p-[1.5rem]">
              {/* Header Modal */}
              <div className="flex justify-between items-start mb-[1.5rem]">
                <div>
                  <h3 className="headline-lg text-[var(--content-text)] mb-[0.25rem]">
                    {previewCategory.nome}
                  </h3>
                  <p className="body-md text-[var(--content-text-secondary)]">
                    {previewCategory.slug}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewCategory(null)}
                  className="w-[2rem] h-[2rem] flex items-center justify-center shape-md border border-[var(--content-border)] bg-[var(--content-surface)] text-[var(--content-text-secondary)] hover:bg-[var(--content-hover)] transition-colors"
                >
                  <i className="ti ti-x text-[18px]" />
                </button>
              </div>

              {/* Preview da Categoria */}
              <div className="mb-[1.5rem]">
                <div className="label-caps text-[var(--content-text-secondary)] mb-[0.75rem]">
                  Preview da Categoria
                </div>
                <div className="bg-[var(--content-bg)] shape-lg p-[1.5rem]">
                  <div className="flex items-center justify-between gap-[0.75rem]">
                    <div className="flex items-center gap-[0.75rem]">
                      <div className="w-[3rem] h-[3rem] shape-md bg-[var(--md-sys-color-primary)]/20 flex items-center justify-center">
                        <i className="ti ti-category text-[var(--md-sys-color-primary)] text-[24px]" />
                      </div>
                      <div>
                        <div className="headline-md text-[var(--content-text)]">
                          {previewCategory.nome}
                        </div>
                        <div className="body-sm text-[var(--content-text-secondary)]">
                          Ordem: {previewCategory.ordem}º
                        </div>
                      </div>
                    </div>
                    <div className={`px-[0.75rem] py-[0.375rem] shape-sm ${
                      previewCategory.ativo
                        ? 'bg-[var(--content-badge-success-bg)] border border-[var(--content-badge-success-border)]'
                        : 'bg-[var(--content-badge-warning-bg)] border border-[var(--content-badge-warning-border)]'
                    }`}>
                      <span className={`label-sm ${
                        previewCategory.ativo
                          ? 'text-[var(--content-badge-success-text)]'
                          : 'text-[var(--content-badge-warning-text)]'
                      }`}>
                        {previewCategory.ativo ? 'ATIVO' : 'INATIVO'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview do Widget */}
              <div>
                <div className="label-caps text-[var(--content-text-secondary)] mb-[0.75rem]">
                  Preview do Widget no Site
                </div>
                <div className="bg-[#0A0A0A] shape-lg p-[1.5rem]">
                  {/* Simulação do widget como aparece no site */}
                  <div className="mb-[1rem]">
                    <h4 className="headline-md text-white mb-[0.5rem]">
                      {previewCategory.nome}
                    </h4>
                    <div className="h-[1px] bg-[var(--md-sys-color-primary)] w-[3rem]" />
                  </div>

                  {/* Grid de jogos simulados */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[0.75rem]">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="aspect-[3/4] shape-md bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[var(--md-sys-color-primary)] transition-colors cursor-pointer group relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <i className="ti ti-device-gamepad-2 text-[#3A3A3A] text-[48px]" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-[0.5rem] translate-y-full group-hover:translate-y-0 transition-transform">
                          <div className="body-sm text-white font-medium truncate">Jogo {item}</div>
                          <div className="label-sm text-white/60">Fornecedor</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Botão Ver Mais simulado */}
                  <div className="mt-[1rem] flex justify-center">
                    <button className="px-[1.5rem] py-[0.625rem] shape-md border border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-primary)] hover:text-white transition-colors label-md">
                      Ver Mais Jogos
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-[1.5rem] flex justify-end gap-[0.5rem]">
                <Button variant="outlined" onClick={() => setPreviewCategory(null)}>
                  Fechar
                </Button>
                <Button variant="filled" icon="edit" onClick={() => {
                  setPreviewCategory(null);
                  router.push(`/cassino/categorias/nova?id=${previewCategory.id}`);
                }}>
                  Editar Categoria
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
