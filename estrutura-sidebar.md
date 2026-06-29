# Estrutura da Sidebar — Backoffice Pix365

> Documento gerado a partir do mockup atual (`sidebar-mockup.html`). Última atualização: 2026-06-29.

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

### Regulatório
| Item | Conteúdo |
|------|---------|
| SIGAP | Nav interna: Dashboard · Arquivos |

#### SIGAP — Dashboard
- Barra de status da API + botão "Enviar tudo agora"
- Cards de resumo do dia (agendados / enviados / erros / total de registros)
- Tabela **Agendados para hoje**: arquivo · horário agendado · referência · registros · status · ação
- **Histórico de envios**: filtrável por data, tipo e status — ações por linha: Baixar · Ver erro · Reenviar · Notificar (pendentes destacados em amarelo, rejeitados em vermelho)

#### SIGAP — Arquivos
- Catálogo informativo com **cards por tipo de arquivo**
- Cada card exibe: frequência (Diário / Mensal) · formato (JSON · GZIP) · deadline · último envio · registros e campos enviados
- Tipos: Apostador · Carteira · Operador Diário · Operador Mensal · Apostas Esportivas · Cassino

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
│   └── Afiliados
├── Regulatório
│   └── SIGAP → [Dashboard, Arquivos]
└── [rodapé] Configurações
    ├── Plataforma → [Plataforma, Branding, SEO, Social, CMS]
    ├── Financeiro → [Financeiro, Gateway, PLD]
    ├── Comunicação → [Chat, Anúncios, Mensagem, Notificações, Buscas]
    ├── Sistema → [Analytics, Segurança, Arquivo, Afiliado, Geolocalização]
    └── Acesso ★ admin → [Cargos, Operadores, Autorizações, Bloqueios]
```

---

## Tema visual — Orion

### Paleta

| Token | Hex | Uso |
|-------|-----|-----|
| `--orion-sidebar-bg` | `#0d061c` | Sidebar, topbar, footer |
| `--orion-content-bg` | `#f5f5f7` | Área de conteúdo principal |
| `--orion-card-bg` | `#ffffff` | Cards, inputs, tabelas |
| `--orion-accent` | `#5b169f` | Borda ativa sidebar, botão primário, tab ativo, foco |
| `--orion-accent-hover` | `#8b5fbf` | Hover botão primário |
| `--orion-border-dark` | `#1e1535` | Bordas dentro da sidebar |
| `--orion-border-light` | `#e0e0e0` | Bordas na área de conteúdo |
| `--orion-secondary` | `#b9e918` | Badge sucesso (verde-limão) |

### Princípio de cores

- **Sidebar** (dark): fundo `#0d061c`, texto branco/cinza neutro, roxo **apenas** na borda esquerda do item ativo
- **Conteúdo** (light): fundo `#f5f5f7`, cards brancos, texto escuro (`#111` / `#333` / `#888`)
- Roxo como **detalhe**: borda ativa, botão primário, underline de tab ativo, foco de input
