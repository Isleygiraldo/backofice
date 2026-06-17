# Guia de Navegação — Backoffice Pix365 (Orion)

> Documento de referência para implementação de padrões de navegação e sub-páginas.
> Baseado em mapeamento real do sistema em 17/06/2026.

---

## 1. Visão Geral da Estrutura de Navegação

O backoffice é composto por **9 seções principais** na sidebar, cada uma com páginas e sub-páginas. Este documento define qual padrão de navegação deve ser usado em cada caso.

### Padrões Disponíveis

| Padrão | Quando usar | Exemplo |
|--------|-------------|---------|
| **Tabs horizontais** | 3–7 sub-páginas, nomes curtos | Financeiro, SEO, Segurança |
| **Nav lateral interna** | 8+ sub-páginas ou 2 níveis de tabs | Branding |
| **Seções com scroll** | Conteúdo relacionado sem necessidade de salto | Gateway, Chat |
| **Breadcrumb + página dedicada** | Abertura de item de lista (detalhe) | Perfil de Apostador |
| **Acordeão** | Lista de componentes ativáveis/desativáveis | CMS |

---

## 2. Mapeamento por Seção

---

### 2.1 CONFIGURAÇÕES

Seção com 19 itens que atualmente aparecem colapsados em um único dropdown na sidebar.

#### 🔴 Problema Atual

O dropdown **Configurações** concentra itens de naturezas diferentes, como Plataforma, Branding, SEO, Gateway, PLD, Chat, Segurança e Geolocalização. Isso gera uma sidebar pesada, dificulta a leitura e aumenta o esforço para o usuário encontrar uma configuração específica.

#### ✅ Decisão de Navegação

A seção **Configurações** não deve exibir todos os seus itens diretamente como submenus longos dentro da sidebar principal.

A sidebar global deve manter apenas o item **Configurações**. Ao clicar nesse item, o usuário será direcionado para uma página centralizadora de configurações, onde os itens serão organizados por grupos em uma navegação lateral interna.

Essa decisão separa dois níveis de navegação:

| Nível | Responsabilidade |
|-------|------------------|
| **Sidebar global** | Navegação entre módulos principais do backoffice |
| **Navegação interna** | Organização de itens dentro de um módulo complexo |

---

#### ✅ Estrutura Proposta

##### Sidebar global

```txt
BACKOFFICE PIX365

├── Dashboard
├── Operação
├── Financeiro
├── Cassino
├── Esportes
├── Promoções
├── Comunicação
├── Conteúdo
├── Relatórios
├── Monitoramento
└── Configurações
```

##### Página Configurações

Ao acessar **Configurações**, o usuário visualiza uma página dedicada com navegação lateral interna.

```txt
Configurações

┌──────────────────────┬────────────────────────────────────────────┐
│ PLATAFORMA           │  Conteúdo da página selecionada             │
│ ▸ Plataforma         │                                            │
│   Branding           │  Exemplo: Plataforma                        │
│   SEO                │                                            │
│   Social             │  [Informações] [URL] [Provedores]          │
│   CMS                │  [Permissões] [Preferências] [Código]      │
│                      │  [SIGAP]                                   │
│ FINANCEIRO           │                                            │
│   Financeiro         │  Conteúdo da aba ativa                     │
│   Gateway            │                                            │
│   PLD                │                              [Salvar]      │
│                      │                                            │
│ COMUNICAÇÃO          │                                            │
│   Chat               │                                            │
│   Anúncios           │                                            │
│   Mensagem           │                                            │
│   Notificações       │                                            │
│   Buscas             │                                            │
│                      │                                            │
│ SISTEMA              │                                            │
│   Analytics          │                                            │
│   Segurança          │                                            │
│   Arquivo            │                                            │
│   Afiliado           │                                            │
│   Geolocalização     │                                            │
└──────────────────────┴────────────────────────────────────────────┘
```

---

#### Agrupamento Interno de Configurações

```txt
CONFIGURAÇÕES
├── PLATAFORMA
│   ├── Plataforma          → tabs: Informações | URL | Provedores | Permissões | Preferências | Código | SIGAP
│   ├── Branding            → nav lateral interna própria
│   ├── SEO                 → tabs: Informações | Sitemap | Código
│   ├── Social              → página única
│   └── CMS                 → acordeão de componentes
│
├── FINANCEIRO
│   ├── Financeiro          → tabs: Saque | Depósito | Apostas | Cassino | Palpite
│   ├── Gateway             → seções com scroll: Saque | Depósito | Teste de Gateways
│   └── PLD                 → página única
│
├── COMUNICAÇÃO
│   ├── Chat                → seções com scroll
│   ├── Anúncios            → página única
│   ├── Mensagem            → página única
│   ├── Notificações        → tabs: Ao depositar | Ao sacar | Ao ganhar apostas | Ao ganhar palpite
│   └── Buscas              → página única
│
└── SISTEMA
    ├── Analytics           → página única
    ├── Segurança           → tabs: Login | Cadastro | GSE | KYC
    ├── Arquivo             → página única
    ├── Afiliado            → página única
    └── Geolocalização      → seções com scroll
```

---

#### Regras de Comportamento

- A sidebar principal deve exibir apenas **Configurações** como item de primeiro nível.
- Os itens internos de Configurações devem ser exibidos apenas dentro da página **Configurações**.
- Os grupos internos devem ser apresentados em ordem fixa: **Plataforma**, **Financeiro**, **Comunicação** e **Sistema**.
- O item ativo da navegação interna deve ter destaque visual claro.
- A troca entre itens internos deve preservar o contexto da página, sem expandir a sidebar global.
- As URLs atuais podem ser mantidas, desde que todas sejam acessadas a partir da central de Configurações.
- Não deve existir terceiro nível de navegação na sidebar global.

---

#### Benefícios Esperados

| Benefício | Resultado |
|----------|-----------|
| Sidebar mais limpa | Reduz a quantidade de itens visíveis no menu principal |
| Melhor encontrabilidade | Usuário encontra configurações por domínio sem percorrer lista extensa |
| Escalabilidade | Novas configurações podem ser adicionadas sem inflar a sidebar |
| Menor complexidade visual | Evita dropdowns longos e menus com múltiplos níveis |
| Separação de contexto | Sidebar navega entre módulos; navegação interna organiza detalhes do módulo |

---

#### Critérios de Aceite

- [ ] A sidebar global exibe apenas o item **Configurações**, sem listar os 19 itens internos diretamente.
- [ ] Ao clicar em **Configurações**, o usuário acessa uma página centralizadora.
- [ ] A página centralizadora possui navegação lateral interna com os grupos Plataforma, Financeiro, Comunicação e Sistema.
- [ ] Cada item interno mantém seu padrão de navegação adequado: tabs, scroll, acordeão ou página única.
- [ ] O item ativo é visualmente identificado na navegação lateral interna.
- [ ] Não existe navegação com três níveis dentro da sidebar global.
- [ ] As URLs atuais continuam acessíveis e compatíveis com a estrutura nova.
- [ ] O botão **Salvar** mantém posição padronizada no rodapé ou área fixa da página.

---

#### Detalhe: Plataforma

**URL base:** `/config/platform`

**Padrão:** Tabs horizontais (7 itens — limite máximo recomendado)

| Tab | Conteúdo |
|-----|----------|
| Informações | Nome, título, CNPJ, telefone, fuso horário, descrição |
| URL | Configurações de URL da plataforma |
| Provedores | Provedores integrados |
| Permissões | Controle de acesso |
| Preferências | Preferências gerais do sistema |
| Código | Scripts e CSS customizados |
| SIGAP | Configurações do SIGAP |

```
🏠 Configurações > Plataforma

[ Informações ] [ URL ] [ Provedores ] [ Permissões ] [ Preferências ] [ Código ] [ SIGAP ]
─────────────────────────────────────────────────────────────────────────────────────────
  conteúdo da tab ativa
                                                                            [ Salvar ]
```

---

#### Detalhe: SEO

**URL base:** `/config/seo`

**Padrão:** Tabs horizontais (3 itens — ideal)

| Tab | Conteúdo |
|-----|----------|
| Informações | Nome, palavras-chave, descrição |
| Sitemap | Configuração do sitemap |
| Código | Scripts de rastreamento |

---

#### Detalhe: Financeiro

**URL base:** `/config/financial`

**Padrão:** Tabs horizontais (5 itens — ideal)

| Tab | Conteúdo |
|-----|----------|
| Saque | Limite mínimo, máximo sem aprovação, máximo com aprovação, máximo diário, limite diário, permitir saques, saque VIP |
| Depósito | Configurações de depósito |
| Apostas | Limites de apostas |
| Cassino | Configurações de cassino |
| Palpite | Configurações de palpites |

---

#### Detalhe: Segurança

**URL base:** `/config/security`

**Padrão:** Tabs horizontais (4 itens — ideal)

| Tab | Conteúdo |
|-----|----------|
| Login | Autenticação por email/CPF/telefone/nickname, Fingerprint, política de cookies, MFA |
| Cadastro | Regras de cadastro |
| GSE | Configurações GSE |
| KYC | Regras de verificação |

---

#### Detalhe: Notificações

**URL base:** `/config/pushnotification`

**Padrão:** Tabs horizontais (4 itens — ideal)

| Tab | Conteúdo |
|-----|----------|
| Ao depositar | Título, corpo, URL, email da notificação push |
| Ao sacar | Idem |
| Ao ganhar apostas esportivas | Idem |
| Ao ganhar palpite grátis | Idem |

---

#### Detalhe: Gateway

**URL base:** `/config/gateway`

**Padrão:** Seções com scroll (conteúdo relacionado, sem necessidade de tabs)

| Seção | Conteúdo |
|-------|----------|
| Saque | PayBrokers, Pixs, ZenetPay — chaves PIX (CPF, Email, Telefone) |
| Depósito | PayBrokers, Pixs, ZenetPay, Pay365 |
| Teste de Gateways | Simulação de operações |

---

### 2.2 BRANDING (caso especial — nav lateral interna)

**URL base:** `/config/brading`

**Problema:** Atualmente usa **dois níveis de tabs sobrepostos**, o que cria confusão de navegação.

```
❌ ESTRUTURA ATUAL (problemática):

[ Galeria ] [ Estilos ] [ Cabeçalho ] [ Código ]    ← nível 1

  [ Logotipo ] [ Banners ] [ Slides ] [ Elementos ]  ← nível 2 (dentro de Galeria)
  [ Front ] [ Menu Principal ] [ Pop up ] [ Rodapé ] ← nível 2 (dentro de Código)
```

```
✅ ESTRUTURA PROPOSTA (nav lateral interna):

┌─────────────────┬──────────────────────────────────────────────────────┐
│                 │                                                      │
│  GALERIA        │   🖼️  Logotipo                                      │
│  ▸ Logotipo ◀  │   ──────────────────────────────────────────────     │
│    Banners      │                                                      │
│    Slides       │   Logo padrão          [Alterar]                    │
│    Elementos    │   Logo escura          [Alterar]                    │
│                 │   Logo clara           [Alterar]                    │
│  APARÊNCIA      │   Logo Mobile          [Alterar]                    │
│    Estilos      │   Favicon              [Alterar]                    │
│    Cabeçalho    │   Escudo Default       [Alterar]                    │
│                 │   Logo Sport Default   [Alterar]                    │
│  CÓDIGO         │                                                      │
│    Front        │                                   [ Salvar ]        │
│    Menu         │                                                      │
│    Pop up       │                                                      │
│    Rodapé       │                                                      │
│    Palpite      │                                                      │
│    CTA          │                                                      │
│                 │                                                      │
└─────────────────┴──────────────────────────────────────────────────────┘
```

**Estrutura completa da nav lateral interna:**

| Grupo | Item | Conteúdo |
|-------|------|----------|
| **GALERIA** | Logotipo | Logo padrão, Logo escura, Logo clara, Logo Mobile, Favicon, Escudo Default, Logo Sport Default |
| | Banners | Banner desktop (800x400px), Banner mobile (600x600px), Banner Promoção |
| | Slides | Slides do site |
| | Elementos unitários | Ícones e elementos avulsos |
| **APARÊNCIA** | Estilos | Layout Claro (cores: Primária, Secundária, Escura, Clara, Sombra, Escuro suave, Fonte), Layout Escuro |
| | Cabeçalho | Preview do header, Topo Claro/Escuro, Botão topo, Link Topo, Categorias do header |
| **CÓDIGO** | Front | HTML + CSS injetados no front |
| | Menu Principal | Scripts do menu |
| | Pop up | Scripts de pop-ups |
| | Rodapé | HTML + CSS do rodapé |
| | Palpite | Scripts da seção de palpites |
| | CTA | Scripts de call-to-action |

---

### 2.3 USUÁRIOS

#### Perfil do Apostador (caso de navegação por breadcrumb)

**URL base:** `/system-users/{id}/info`

**Padrão:** Breadcrumb + página dedicada com tabs horizontais scrolláveis

O perfil tem **15 tabs** — muitas para tabs horizontais padrão. A solução é usar **tabs scrolláveis horizontalmente** com seta de navegação (já implementado no sistema atual), complementadas com breadcrumb no topo.

```
Breadcrumb:
🏠 Início  >  Usuários  >  Apostadores  >  ISLEY DAVID LOPEZ GIRALDO

┌─────────────────────────────────────────────────────────────────────┐
│  👤 ISLEY DAVID LOPEZ GIRALDO                                       │
│  isley.giraldo@twinfo.io  |  CPF: 708.758.834-60  |  ✅ Verificado  │
├──────────────────┬──────────────────┬───────────────────────────────┤
│ Saldo disponível │ Depósito pend.   │  Saque pendente               │
│      R$ 0,00     │     R$ 0,00      │       R$ 0,00                 │
├──────────────────┴──────────────────┴───────────────────────────────┤
│ Saldo bônus esp. │ Saldo free bet   │  Saldo bônus cassino          │
│      R$ 0,00     │     R$ 0,00      │       R$ 0,00                 │
├──────────────────────────────┬──────────────────────────────────────┤
│     Total depositado         │         Total sacado                 │
│          R$ 0,00             │             R$ 0,00                  │
└──────────────────────────────┴──────────────────────────────────────┘

< [ Dados ][ Bloqueios ][ Transações ][ Bônus ][ Apostas ][ Cassino ][ Palpites ][ Notificações ][ Mensagem Privada ][ KYC ][ Autorizações ][ Grupos ][ Afiliados ][ Limites ][ Logins ] >
─────────────────────────────────────────────────────────────────────
  conteúdo da tab ativa
                               [ Impersonar ]  [ Voltar ]  [ Editar ]
```

**Detalhamento das tabs do perfil:**

| Tab | Conteúdo |
|-----|----------|
| **Dados** | Dados pessoais (nome, CPF, nascimento, gênero, celular, email, Instagram), Endereço, Dados da conta (data cadastro, ID, IP, verificações, situação, permissões, status do apostador, cargo, informações bancárias) |
| **Bloqueios** | Histórico e controle de bloqueios da conta |
| **Transações** | Histórico completo de depósitos e saques |
| **Bônus** | Bônus ativos, histórico de bônus utilizados |
| **Apostas** | Histórico de apostas esportivas |
| **Cassino** | Histórico de sessões e apostas no cassino |
| **Palpites** | Histórico de palpites realizados |
| **Notificações** | Notificações enviadas ao usuário |
| **Mensagem Privada** | Mensagens trocadas via chat |
| **KYC** | Documentos enviados e status de verificação |
| **Autorizações** | Permissões especiais concedidas |
| **Grupos** | Grupos de segmentação do apostador |
| **Afiliados** | Vínculo com afiliado indicador |
| **Limites** | Limites personalizados de saque/depósito/aposta |
| **Logins** | Histórico de acessos (IP, dispositivo, data) |

---

### 2.4 PROMOÇÕES

| Página | Padrão | Sub-páginas |
|--------|--------|-------------|
| Bônus | Lista com filtros | Detalhe do bônus: breadcrumb + página dedicada |
| Regras de afiliado | Página única | — |
| Regras de uso | Página única | — |
| Acionamentos | Lista | — |

---

### 2.5 CASSINO

| Página | Padrão | Observação |
|--------|--------|------------|
| Jogos | Lista com filtros | 14.583 jogos — filtros: Nome, Gênero, Fornecedor, Status, Destaque, ID |
| Jogos ao vivo | Lista com filtros | — |
| Mesas ao vivo | Lista com filtros | — |
| Fornecedores | Lista | — |
| Categorias | Lista | — |
| Categorias Fixas | Lista | — |

**Detalhe de um jogo:** breadcrumb + página dedicada

```
Breadcrumb:
🏠 Início  >  Cassino  >  Jogos  >  Fortune Tiger

[ Informações do jogo ]
  Nome: Fortune Tiger
  ID: 4776
  Status: ATIVO
  Gênero: Slots
  Fornecedor: PG Soft
  Ordem: 2º
  Status ALEA: ONLINE
  Destaque: ATIVADA
  Lançamento: 26/05/2023
```

---

### 2.6 SPORTS BOOKING + MERCADOS DE APOSTAS

Recomendação: **unificar em uma seção "ESPORTES"** com os seguintes grupos:

```
ESPORTES
├── CONFIGURAÇÃO
│   ├── Esportes
│   ├── Categorias
│   └── Torneios
│
├── EVENTOS
│   ├── Eventos
│   ├── Competidores
│   └── Populares
│
└── MERCADOS
    ├── Mercados
    ├── Grupos
    └── Favoritos
```

---

### 2.7 GERAIS (proposta de renomeação: CONTEÚDO & SISTEMA)

Seção atual muito heterogênea. Proposta de divisão:

```
CONTEÚDO
├── Parâmetros
├── Conteúdos
├── Emails
├── SMS
└── Comunicados

SISTEMA & COMPLIANCE
├── Contratos
├── Exportações
└── Auditoria
```

---

### 2.8 RELATÓRIOS

**Padrão atual:** 4 itens na sidebar como páginas independentes.

**Proposta:** Manter como está, mas agrupar os itens de relatório em tabs dentro de uma única página "Relatórios":

```
URL: /reports

[ Dashboard ] [ Cassino ] [ Esportivo ] [ Resumo ]
───────────────────────────────────────────────────
  conteúdo do relatório selecionado
```

---

### 2.9 MONITORAMENTO

**Padrão:** 5 itens que fazem sentido manter como páginas independentes na sidebar. São ferramentas técnicas com finalidades distintas.

| Página | Função |
|--------|--------|
| API | Documentação e teste de endpoints |
| Métricas | Métricas de performance do sistema |
| Status | Status dos serviços integrados |
| Logs | Logs de sistema e erros |
| Propriedades | Propriedades de configuração avançada |

---

## 3. Regras Gerais de Navegação

### Breadcrumb
- Obrigatório em **todas as páginas de detalhe** (abertura de item de lista)
- Formato: `🏠 Início  >  [Seção]  >  [Sub-seção]  >  [Item]`
- O último item não é clicável (é a página atual)
- Cada item anterior é um link de retorno

### Tabs horizontais
- Máximo: **7 tabs**
- Nomes: curtos (1–2 palavras)
- Tab ativa: indicador visual claro (sublinhado colorido ou fundo)
- Nunca usar tabs dentro de tabs

### Nav lateral interna
- Largura fixa recomendada: ~180px a 240px, conforme densidade dos itens
- Grupos com título em maiúsculas
- Item ativo: destaque visual com borda, fundo ou cor de apoio
- Aplicar em módulos com muitos itens internos, como Configurações
- Branding pode usar uma segunda navegação interna própria, por ser um caso especial com muitos agrupamentos

### Seções com scroll
- Separação visual entre seções: título em negrito + linha divisória
- Botão "Salvar" fixo no rodapé da página (ou flutuante)
- Usar quando o usuário precisa ver múltiplas configurações relacionadas de uma vez

### Listas
- Filtros colapsáveis (botão "Filtrar" que abre/fecha o painel)
- Paginação: opções 5, 10, 25, 50 itens por página
- Clique na linha → navega para detalhe com breadcrumb

---

## 4. URLs de Referência

| Seção | URL atual |
|-------|-----------|
| Plataforma | `/config/platform` |
| Branding | `/config/brading` |
| SEO | `/config/seo` |
| Social | `/config/social` |
| Financeiro | `/config/financial` |
| Gateway | `/config/gateway` |
| CMS | `/config/cms` |
| Afiliado | `/config/affiliate` |
| Analytics | `/config/analylitcs` |
| Segurança | `/config/security` |
| Arquivo | `/config/archive` |
| Chat | `/config/chat` |
| Anúncios | `/config/announcement` |
| Mensagem | `/config/mail` |
| Notificações | `/config/pushnotification` |
| Buscas | `/config/filter` |
| PLD | `/config/pld` |
| Geolocalização | `/config/geolocation` |
| Transações | `/transaction` |
| Tickets | `/tickets` |
| Palpites | `/challenge` |
| KYC | — |
| Bônus | `/bonus` |
| Jogos | `/casino-game/standart` |
| Apostadores | `/system-users` |
| Perfil Apostador | `/system-users/{id}/info` |

---

## 5. Checklist de Implementação

- [ ] Transformar "Configurações" em página centralizadora com navegação lateral interna
- [ ] Implementar nav lateral interna no Branding, eliminando tabs duplos
- [ ] Adicionar breadcrumb em todas as páginas de detalhe
- [ ] Unificar Sports Booking + Mercados de Apostas em "Esportes"
- [ ] Mover Transações, Tickets, KYC e Palpites para seção própria ou Usuários
- [ ] Dividir seção "GERAIS" em Conteúdo e Sistema & Compliance
- [ ] Consolidar Relatórios em página única com tabs
- [ ] Padronizar botão Salvar (posição fixa no rodapé em todos os formulários)

---

*Documento gerado em 17/06/2026 com base no mapeamento do Backoffice Pix365 (Orion)*
