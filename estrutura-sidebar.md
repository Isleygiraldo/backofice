# Estrutura da Sidebar — Backoffice Pix365

> Documento gerado a partir do mockup atual (`sidebar-mockup.html`).

---

## Sidebar Principal

### Principal
| Item | Notas |
|------|-------|
| Dashboard | Visão geral da plataforma |
| Operação | — |
| Financeiro | — |

### Produto
| Item | Sub-navegação |
|------|--------------|
| Cassino | — |
| Esportes | Esportes · Categorias · Torneios · Eventos · Competidores · Populares · Mercados · Grupos · Favoritos |
| Promoções | Bônus · Regras de afiliado · Regras de uso · Acionamentos |
| Comunicação | — |
| Conteúdo | — |
| Sistema & Compliance | Contratos · Exportações · Auditoria |

### Gestão
| Item | Conteúdo |
|------|---------|
| Usuários | Abas: Dados · Bloqueios · Transações · Bônus · Apostas · Cassino · Palpites · Notificações · Mensagem Privada · KYC · Autorizações · Grupos · Afiliados · Limites · Logins |
| Relatórios | Abas: Dashboard · Cassino · Esportivo · Resumo |
| Monitoramento | Sub-nav: API · Métricas · Status · Logs · Propriedades |
| Afiliados | Abas: Visão Geral · Cadastros · Comissões · Relatório |

### Rodapé
| Item | Comportamento |
|------|--------------|
| Configurações | Abre sidebar de configurações (substitui a sidebar principal) |

---

## Sidebar de Configurações

> Acessada ao clicar em **Configurações**. Possui botão "← Backoffice" para retornar.

### Plataforma
- Plataforma
- Branding
- SEO
- Social
- CMS

### Financeiro
- Financeiro
- Gateway
- PLD

### Comunicação
- Chat
- Anúncios
- Mensagem
- Notificações
- Buscas

### Sistema
- Analytics
- Segurança
- Arquivo
- Afiliado
- Geolocalização

### Acesso _(visível apenas para Admin)_
| Item | Descrição |
|------|-----------|
| Cargos | Definição de funções/roles dos operadores |
| Operadores | Usuários administradores/operadores do backoffice |
| Autorizações | Controle de permissões de acesso |
| Bloqueios | Bloqueio de usuários do sistema |

---

## Hierarquia resumida

```
Sidebar Principal
├── Principal
│   ├── Dashboard
│   ├── Operação
│   └── Financeiro
├── Produto
│   ├── Cassino
│   ├── Esportes
│   │   └── [Esportes, Categorias, Torneios, Eventos, Competidores, Populares, Mercados, Grupos, Favoritos]
│   ├── Promoções
│   │   └── [Bônus, Regras de afiliado, Regras de uso, Acionamentos]
│   ├── Comunicação
│   ├── Conteúdo
│   └── Sistema & Compliance
│       └── [Contratos, Exportações, Auditoria]
├── Gestão
│   ├── Usuários
│   ├── Relatórios
│   ├── Monitoramento
│   └── Afiliados ← novo
└── [rodapé] Configurações
    ├── Plataforma → [Plataforma, Branding, SEO, Social, CMS]
    ├── Financeiro → [Financeiro, Gateway, PLD]
    ├── Comunicação → [Chat, Anúncios, Mensagem, Notificações, Buscas]
    ├── Sistema → [Analytics, Segurança, Arquivo, Afiliado, Geolocalização]
    └── Acesso ★ admin → [Cargos, Operadores, Autorizações, Bloqueios]
```
