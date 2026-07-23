import IntNav from '@/components/IntNav';

const configNav = [
  {
    title: 'Plataforma',
    items: [
      { label: 'Plataforma', href: '/configuracoes/plataforma' },
      { label: 'Branding', href: '/configuracoes/branding' },
      { label: 'SEO', href: '/configuracoes/seo' },
      { label: 'Social', href: '/configuracoes/social' },
      { label: 'CMS', href: '/configuracoes/cms' },
    ],
  },
  {
    title: 'Sistema',
    items: [
      { label: 'Analytics', href: '/configuracoes/analytics' },
      { label: 'Segurança', href: '/configuracoes/seguranca' },
      { label: 'Arquivo', href: '/configuracoes/arquivo' },
      { label: 'Geolocalização', href: '/configuracoes/geolocalizacao' },
    ],
  },
  {
    title: 'Acesso',
    items: [
      { label: 'Cargos', href: '/configuracoes/cargos' },
      { label: 'Operadores', href: '/configuracoes/operadores' },
      { label: 'Autorizações', href: '/configuracoes/autorizacoes' },
      { label: 'Bloqueios', href: '/configuracoes/bloqueios' },
    ],
  },
];

export default function ConfiguracoesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      <IntNav groups={configNav} />
      <div className="flex-1 overflow-y-auto min-w-0">{children}</div>
    </div>
  );
}
