'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, Tab } from '@/app/_components/ui';

export default function NovoCargo() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('grupos');
  const [nomeCargo, setNomeCargo] = useState('');
  const [descricaoCargo, setDescricaoCargo] = useState('');

  const [permissoes, setPermissoes] = useState({
    cassino: { todos: false, items: ['visualizar', 'gerenciarRTP', 'banir', 'relatorios'] },
    financeiro: { todos: false, items: ['aprovarSaques', 'conciliacao', 'dre', 'extornar'] },
    usuarios: { todos: false, items: ['editarPerfis', 'resetarSenha', 'logs'] },
    sistema: { todos: false, items: ['branding', 'manutencao'] },
    relatorios: { todos: false, items: ['esportivo', 'cassino', 'resumo', 'depositos', 'saques'] },
    operacao: { todos: false, items: ['dashboard', 'apostasAoVivo', 'historico', 'limites', 'regras'] },
    esportes: { todos: false, items: ['dashboard', 'configuracao', 'eventos', 'mercados', 'dados'] },
    comunicacao: { todos: false, items: ['chat', 'anuncios', 'mensagem', 'notificacoes', 'buscas'] },
    monitoramento: { todos: false, items: ['api', 'metricas', 'status', 'logs', 'propriedades'] },
    compliance: { todos: false, items: ['contratos', 'exportacoes', 'auditoria'] },
  });

  const categorias = [
    {
      key: 'cassino',
      nome: 'Cassino',
      icon: 'casino',
      cor: 'secondary',
      permissoesLista: [
        { key: 'visualizar', nome: 'Visualizar Jogos', desc: 'Acesso à lista completa de provedores.' },
        { key: 'gerenciarRTP', nome: 'Gerenciar RTP', desc: 'Alterar percentuais de retorno operacional.' },
        { key: 'banir', nome: 'Banir Jogadores', desc: 'Restringir acesso a jogos específicos.' },
        { key: 'relatorios', nome: 'Relatórios de Apostas', desc: 'Exportar logs de transações de cassino.' },
      ],
    },
    {
      key: 'financeiro',
      nome: 'Financeiro',
      icon: 'payments',
      cor: 'error',
      permissoesLista: [
        { key: 'aprovarSaques', nome: 'Aprovar Saques', desc: 'Liberação manual de retiradas via PIX.' },
        { key: 'conciliacao', nome: 'Conciliação Bancária', desc: 'Verificar saldos entre gateway e plataforma.' },
        { key: 'dre', nome: 'Visualizar DRE', desc: 'Acesso a dados sensíveis de lucro/prejuízo.' },
        { key: 'extornar', nome: 'Extornar Valores', desc: 'Devolver depósitos manualmente.', risco: true },
      ],
    },
    {
      key: 'usuarios',
      nome: 'Usuários',
      icon: 'group',
      cor: 'primary',
      permissoesLista: [
        { key: 'editarPerfis', nome: 'Editar Perfis', desc: 'Alterar e-mail, telefone e KYC.' },
        { key: 'resetarSenha', nome: 'Resetar Senha', desc: 'Enviar link de recuperação de conta.' },
        { key: 'logs', nome: 'Visualizar Logs de Acesso', desc: 'Auditoria de IP e localização de login.' },
      ],
    },
    {
      key: 'sistema',
      nome: 'Sistema',
      icon: 'settings_suggest',
      cor: 'tertiary',
      permissoesLista: [
        { key: 'branding', nome: 'Configuração de Branding', desc: 'Alterar logos, cores e domínios.' },
        { key: 'manutencao', nome: 'Manutenção', desc: 'Ativar/Desativar modo de manutenção global.' },
      ],
    },
    {
      key: 'relatorios',
      nome: 'Relatórios',
      icon: 'monitoring',
      cor: 'secondary-fixed',
      permissoesLista: [
        { key: 'esportivo', nome: 'Esportivo', desc: 'Relatórios detalhados de apostas esportivas.' },
        { key: 'cassino', nome: 'Cassino', desc: 'Relatórios detalhados de jogos de cassino.' },
        { key: 'resumo', nome: 'Resumo', desc: 'Visão geral consolidada da operação.' },
        { key: 'depositos', nome: 'Depósitos', desc: 'Histórico e métricas de depósitos.' },
        { key: 'saques', nome: 'Saques', desc: 'Histórico e métricas de retiradas.' },
      ],
    },
    {
      key: 'operacao',
      nome: 'Operação',
      icon: 'dashboard',
      cor: 'secondary',
      permissoesLista: [
        { key: 'dashboard', nome: 'Dashboard', desc: 'Visão operacional em tempo real.' },
        { key: 'apostasAoVivo', nome: 'Apostas ao vivo', desc: 'Gerenciar mercados em andamento.' },
        { key: 'historico', nome: 'Histórico', desc: 'Logs de ações operacionais.' },
        { key: 'limites', nome: 'Limites', desc: 'Configurar limites de aposta.' },
        { key: 'regras', nome: 'Regras', desc: 'Definição de regras de negócio.' },
      ],
    },
    {
      key: 'esportes',
      nome: 'Esportes',
      icon: 'sports_soccer',
      cor: 'secondary',
      permissoesLista: [
        { key: 'dashboard', nome: 'Dashboard', desc: 'Métricas de performance esportiva.' },
        { key: 'configuracao', nome: 'Configuração', desc: 'Esportes, Categorias e Torneios.' },
        { key: 'eventos', nome: 'Eventos', desc: 'Gestão de partidas e eventos.' },
        { key: 'mercados', nome: 'Mercados', desc: 'Gestão de odds e mercados.' },
        { key: 'dados', nome: 'Dados', desc: 'Relatórios técnicos de esportes.' },
      ],
    },
    {
      key: 'comunicacao',
      nome: 'Comunicação',
      icon: 'chat',
      cor: 'secondary',
      permissoesLista: [
        { key: 'chat', nome: 'Chat', desc: 'Suporte ao vivo e moderação.' },
        { key: 'anuncios', nome: 'Anúncios', desc: 'Gestão de banners e popups.' },
        { key: 'mensagem', nome: 'Mensagem', desc: 'Envio de e-mails e SMS.' },
        { key: 'notificacoes', nome: 'Notificações', desc: 'Gestão de push notifications.' },
        { key: 'buscas', nome: 'Buscas', desc: 'Logs de pesquisa de usuários.' },
      ],
    },
    {
      key: 'monitoramento',
      nome: 'Monitoramento',
      icon: 'monitor_heart',
      cor: 'secondary',
      permissoesLista: [
        { key: 'api', nome: 'API', desc: 'Status e logs de integração.' },
        { key: 'metricas', nome: 'Métricas', desc: 'Saúde técnica do sistema.' },
        { key: 'status', nome: 'Status', desc: 'Uptime de serviços.' },
        { key: 'logs', nome: 'Logs', desc: 'Logs de erro e sistema.' },
        { key: 'propriedades', nome: 'Propriedades', desc: 'Configurações de ambiente.' },
      ],
    },
    {
      key: 'compliance',
      nome: 'Compliance',
      icon: 'gavel',
      cor: 'secondary',
      permissoesLista: [
        { key: 'contratos', nome: 'Contratos', desc: 'Gestão de termos e condições.' },
        { key: 'exportacoes', nome: 'Exportações', desc: 'Exportação de dados regulatórios.' },
        { key: 'auditoria', nome: 'Auditoria', desc: 'Logs de auditoria externa.' },
      ],
    },
  ];

  const toggleTodos = (categoria: string) => {
    setPermissoes((prev) => ({
      ...prev,
      [categoria]: {
        ...prev[categoria as keyof typeof prev],
        todos: !prev[categoria as keyof typeof prev].todos,
      },
    }));
  };

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem] md:space-y-[1.5rem] max-w-[1600px] mx-auto">
      {/* Tabs */}
      <div className="flex bg-[var(--content-hover)] shape-lg p-[0.25rem] gap-[0.25rem] opacity-0 animate-[fadeIn_0.4s_ease-out_forwards] overflow-x-auto">
        <Tab active={activeTab === 'autorizacoes'} onClick={() => setActiveTab('autorizacoes')}>Autorizações</Tab>
        <Tab active={activeTab === 'grupos'} onClick={() => setActiveTab('grupos')}>Grupo de autorizações</Tab>
        <Tab active={activeTab === 'otp'} onClick={() => setActiveTab('otp')}>Gerenciamento OTP</Tab>
        <Tab active={activeTab === 'apikey'} onClick={() => setActiveTab('apikey')}>API Key</Tab>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[0.75rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.1s_forwards]">
        <div>
          <h2 className="headline-md text-[var(--content-text)]">Criar Grupo de Autorização</h2>
          <p className="body-md text-[var(--content-text-secondary)] mt-[0.25rem]">
            Defina o nível de acesso e as ações permitidas para este perfil.
          </p>
        </div>
        <Button variant="filled" icon="add_circle" fullWidth className="sm:w-auto">
          Criar Cargo
        </Button>
      </div>

      {/* Form Card */}
      <Card className="p-[1.5rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.2s_forwards]">
        <div className="flex items-center gap-[1rem] mb-[1.5rem]">
          <div className="w-[3rem] h-[3rem] shape-xl bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)] flex-shrink-0">
            <span className="material-symbols-outlined text-[32px]">badge</span>
          </div>
          <div>
            <h3 className="headline-md text-[var(--content-text)]">Definição do Novo Cargo</h3>
            <p className="body-sm text-[var(--content-text-secondary)]">
              Preencha os dados básicos antes de configurar as permissões abaixo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
          <Input
            label="Nome do Cargo"
            placeholder="Ex: Analista de Compliance"
            value={nomeCargo}
            onChange={(e) => setNomeCargo(e.target.value)}
          />
          <div className="space-y-[0.25rem]">
            <label className="label-caps text-[var(--content-text-secondary)]">Descrição</label>
            <textarea
              className="md3-input resize-none"
              placeholder="Descreva as responsabilidades e o escopo deste cargo..."
              rows={1}
              value={descricaoCargo}
              onChange={(e) => setDescricaoCargo(e.target.value)}
            ></textarea>
          </div>
        </div>
      </Card>

      {/* Permissions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.3s_forwards]">
        {categorias.map((cat, idx) => (
          <Card key={cat.key} className="p-[1.5rem] flex flex-col hover:elevation-2 transition-all">
            <div className="flex justify-between items-start mb-[1.5rem]">
              <div className="flex items-center gap-[0.75rem]">
                <div className="w-[2.5rem] h-[2.5rem] shape-md bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)] flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                </div>
                <div>
                  <h4 className="headline-md text-[var(--content-text)] mb-[0.125rem]">{cat.nome}</h4>
                  <p className="label-caps text-[var(--content-text-secondary)]" style={{ fontSize: '9px' }}>
                    {cat.permissoesLista.length} permissões
                  </p>
                </div>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <span className="mr-[0.5rem] label-caps text-[var(--md-sys-color-secondary)]" style={{ fontSize: '9px' }}>
                  Todos
                </span>
                <input
                  type="checkbox"
                  className="w-[1.25rem] h-[1.25rem] rounded border-[var(--content-border)] text-[var(--md-sys-color-secondary)] focus:ring-[var(--md-sys-color-secondary)] cursor-pointer"
                  checked={permissoes[cat.key as keyof typeof permissoes].todos}
                  onChange={() => toggleTodos(cat.key)}
                />
              </label>
            </div>
            <div className="space-y-[0.75rem] flex-grow">
              {cat.permissoesLista.map((perm) => (
                <div key={perm.key} className="flex items-center justify-between p-[0.75rem] shape-md hover:bg-[var(--content-hover)] transition-colors group">
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-[0.5rem]">
                      <span className="body-md font-semibold text-[var(--content-text)] truncate">{perm.nome}</span>
                      {perm.risco && (
                        <span className="px-[0.375rem] py-[0.125rem] bg-red-900/20 text-red-500 label-caps shape-xs border border-red-800" style={{ fontSize: '8px' }}>
                          Alto Risco
                        </span>
                      )}
                    </div>
                    <span className="body-sm text-[var(--content-text-secondary)] truncate" style={{ fontSize: '11px' }}>
                      {perm.desc}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    className="w-[1.25rem] h-[1.25rem] rounded border-[var(--content-border)] text-[var(--md-sys-color-secondary)] focus:ring-[var(--md-sys-color-secondary)] cursor-pointer flex-shrink-0 ml-[0.5rem]"
                  />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Alert Cards */}
      <div className="space-y-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.4s_forwards]">
        <div className="bg-[var(--md-sys-color-secondary)]/10 border border-[var(--md-sys-color-secondary)]/20 p-[1rem] shape-xl flex items-start gap-[0.75rem]">
          <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] flex-shrink-0">info</span>
          <p className="body-sm text-[var(--content-text)]">
            <strong className="font-bold">Nota sobre Acessos:</strong> Ao selecionar um grupo ou permissão individual acima, você está definindo explicitamente quais módulos e funcionalidades estarão visíveis e operacionais para qualquer usuário vinculado a este cargo.
          </p>
        </div>
        <div className="bg-red-900/10 border border-red-800 p-[1rem] shape-xl flex items-start gap-[0.75rem]">
          <span className="material-symbols-outlined text-red-500 flex-shrink-0">warning</span>
          <p className="body-sm text-[var(--content-text)]">
            <strong className="font-bold text-red-500">Aviso de Propagação:</strong> Alterações em permissões de cargos existentes podem levar até 5 minutos para serem propagadas em todos os servidores de cache. Usuários logados podem precisar atualizar a página para visualizar as mudanças.
          </p>
        </div>
      </div>

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
