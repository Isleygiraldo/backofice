'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pathLabels: Record<string, string> = {
  '': 'Dashboard',
  'cassino': 'Cassino',
  'jogos': 'Jogos',
  'jogos-ao-vivo': 'Jogos ao Vivo',
  'fornecedores': 'Fornecedores',
  'categorias': 'Categorias',
  'bonus': 'Bônus',
  'relatorio': 'Relatório',
  'esportes': 'Esportes',
  'eventos': 'Eventos',
  'mercados': 'Mercados',
  'usuarios': 'Usuários',
  'apostadores': 'Apostadores',
  'perfil': 'Perfil',
  'grupos': 'Grupos',
  'afiliados': 'Afiliados',
  'financeiro': 'Financeiro',
  'depositos': 'Depósitos',
  'saques': 'Saques',
  'transacoes': 'Transações',
  'operacao': 'Operação',
  'comunicacao': 'Comunicação',
  'campanhas': 'Campanhas',
  'templates': 'Templates',
  'monitoramento': 'Monitoramento',
  'sistema-compliance': 'Sistema & Compliance',
  'sigap': 'SIGAP',
  'configuracoes': 'Configurações',
  'plataforma': 'Plataforma',
  'url': 'URL',
  'provedores': 'Provedores',
  'permissoes': 'Permissões',
  'preferencias': 'Preferências',
  'codigo': 'Código',
  'branding': 'Branding',
  'logos': 'Logos',
  'cores': 'Cores',
  'seo': 'SEO',
  'sitemap': 'Sitemap',
  'social': 'Social',
  'cms': 'CMS',
  'analytics': 'Analytics',
  'seguranca': 'Segurança',
  'cadastro': 'Cadastro',
  'gse': 'GSE',
  'kyc': 'KYC',
  'arquivo': 'Arquivo',
  'geolocalizacao': 'Geolocalização',
  'cargos': 'Cargos',
  'operadores': 'Operadores',
  'autorizacoes': 'Autorizações',
  'bloqueios': 'Bloqueios',
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = [
    { label: 'Início', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = pathLabels[segment] || segment;
      return { label, href };
    })
  ];

  if (breadcrumbs.length === 1) return null;

  return (
    <nav className="flex items-center gap-2 body-md text-[var(--content-text-secondary)]">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          {index === breadcrumbs.length - 1 ? (
            <span className="text-[var(--content-text)] font-medium">{crumb.label}</span>
          ) : (
            <>
              <Link
                href={crumb.href}
                className="hover:text-[var(--md-sys-color-secondary)] transition-colors"
              >
                {crumb.label}
              </Link>
              <i className="ti ti-chevron-right body-sm" />
            </>
          )}
        </div>
      ))}
    </nav>
  );
}
