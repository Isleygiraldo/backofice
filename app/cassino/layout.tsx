import IntNav from '@/components/IntNav';

const cassinoNav = [
  {
    title: 'Visão geral',
    items: [
      { label: 'Dashboard', href: '/cassino' },
    ],
  },
  {
    title: 'Jogos',
    items: [
      { label: 'Jogos', href: '/cassino/jogos' },
      { label: 'Jogos ao vivo', href: '/cassino/jogos-ao-vivo' },
    ],
  },
  {
    title: 'Catálogo',
    items: [
      { label: 'Fornecedores', href: '/cassino/fornecedores' },
      { label: 'Categorias', href: '/cassino/categorias' },
    ],
  },
  {
    title: 'Bônus',
    items: [
      { label: 'Bônus', href: '/cassino/bonus' },
    ],
  },
  {
    title: 'Dados',
    items: [
      { label: 'Relatório', href: '/cassino/relatorio' },
    ],
  },
];

export default function CassinoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      <IntNav groups={cassinoNav} />
      <div className="flex-1 overflow-y-auto min-w-0">{children}</div>
    </div>
  );
}
