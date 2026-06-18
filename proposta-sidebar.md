# Proposta de Sidebar — Backoffice Pix365

> Documento de design e comportamento da navegação principal do backoffice.
> Versão: 1.0 — Junho 2026

---

## 1. Visão Geral

A sidebar é o eixo de navegação do backoffice. Ela deve refletir os **módulos principais** do sistema — sem expor sub-itens diretamente — e se adaptar ao tamanho de tela do operador sem perder funcionalidade.

### Princípios

- **Clareza** — cada item representa um módulo distinto, sem ambiguidade
- **Hierarquia única** — a sidebar navega entre módulos; a navegação interna organiza sub-páginas
- **Presença constante** — visível em todos os breakpoints, mesmo que de forma reduzida

---

## 2. Estrutura de Itens

### 2.1 Grupos e itens

```
BPX
Pix365 · Backoffice

── PRINCIPAL ──────────────────
  Dashboard
  Operação
  Financeiro

── PRODUTO ────────────────────
  Cassino
  Esportes
  Promoções
  Comunicação
  Conteúdo
  Sistema & Compliance

── GESTÃO ─────────────────────
  Usuários
  Relatórios
  Monitoramento
  Configurações
```

### 2.2 Regras de estrutura

- Máximo de **3 grupos** com label de seção
- Cada grupo agrupa itens por natureza: operacional, produto e gestão
- Nenhum item da sidebar abre um submenu dentro dela — a navegação secundária acontece dentro da página
- **Configurações fica no rodapé da sidebar**, separado dos demais grupos por uma linha divisória
- Clicar em Configurações **troca o layout inteiro** — a sidebar principal é substituída por uma sidebar dedicada de Configurações

---

## 3. Visual

### 3.1 Dimensões e cores

| Elemento              | Valor                        |
|-----------------------|------------------------------|
| Largura (desktop)     | `210px`                      |
| Largura (tablet)      | `56px` — ícones apenas       |
| Background            | `#0d0d0d`                    |
| Borda direita         | `0.5px solid #1f1f1f`        |
| Item inativo          | `color: #888`                |
| Item hover            | `color: #ddd; bg: #161616`   |
| Item ativo            | `color: #fff; bg: #1c1c1c; border-left: 2px solid #fff` |
| Label de grupo        | `9px / uppercase / #444`     |
| Ícone                 | Tabler Icons, `16px` desktop / `18px` tablet |

### 3.2 Logo

```
┌─────────────────────┐
│  BPX                │  ← 18px bold, branco
│  PIX365 · BACKOFFICE│  ← 9px uppercase, #555
└─────────────────────┘
```

---

## 4. Responsividade

### 4.1 Breakpoints

| Breakpoint  | Largura       | Comportamento da sidebar          |
|-------------|---------------|-----------------------------------|
| Desktop     | > 1024px      | 210px expandida — ícone + label   |
| Tablet      | 769 – 1024px  | 56px — ícones com tooltip no hover |
| Mobile      | ≤ 768px       | Drawer off-screen, abre por hambúrguer |
| Mobile XS   | ≤ 480px       | Igual mobile                      |

### 4.2 Desktop (> 1024px)

- Sidebar fixa à esquerda, sempre visível
- Ícone + label em cada item
- Labels de grupo visíveis

### 4.3 Tablet (769 – 1024px)

- Sidebar colapsa automaticamente para `56px`
- Labels e grupos ocultados
- Ícones centralizados, `18px`
- Tooltip com o nome do item aparece no hover (posicionado à direita do ícone)
- Transição suave: `transition: width 0.2s ease`

```
┌────┐
│ ⊞  │  ← Dashboard (tooltip ao hover)
│ ⚡ │  ← Operação
│ 💰 │  ← Financeiro
│    │
│ 🎰 │  ← Cassino
│ 🏆 │  ← Esportes
│ 🎁 │  ← Promoções
│    │
│ 👥 │  ← Usuários
│ 📊 │  ← Relatórios
│ 📡 │  ← Monitoramento
│ ⚙️  │  ← Configurações
└────┘
```

### 4.4 Mobile (≤ 768px)

- Sidebar sai da tela (`left: -210px`, `position: fixed`)
- Topbar exibe botão hambúrguer estilizado no canto esquerdo
- Pull-tab lateral (`14px`) fixado verticalmente no centro da borda esquerda — sempre visível quando o drawer está fechado, indica que há navegação disponível
- Ao abrir: sidebar desliza da esquerda com overlay escuro (`rgba(0,0,0,0.65)`) por baixo
- Dentro do drawer: labels completos restaurados (não fica icon-only)
- Fechar: clicar no overlay ou navegar para qualquer página

**Topbar mobile:**

```
┌────────────────────────────────────────┐
│  [≡ Menu]   🏠 › Configurações         │
└────────────────────────────────────────┘
```

**Pull-tab (estado fechado):**

```
│▸│  ← aba fina na borda esquerda, 14px × 44px
```

### 4.5 Navegação interna no mobile

Páginas com `int-nav` lateral (Configurações, Esportes, Monitoramento, etc.) adaptam a navegação interna para **tabs horizontais scrolláveis** no topo do conteúdo:

```
┌──────────────────────────────────────────────────┐
│  Plataforma · Branding · SEO · Social · CMS · …  │  ← scroll horizontal
├──────────────────────────────────────────────────┤
│  Conteúdo da sub-página ativa                    │
└──────────────────────────────────────────────────┘
```

- Labels de grupo ocultados nas tabs horizontais — apenas os itens aparecem
- Item ativo: `border-bottom: 2px solid #fff`

### 4.6 Adaptações adicionais no mobile

| Elemento           | Comportamento mobile                          |
|--------------------|-----------------------------------------------|
| Formulários        | Grid passa de 2 colunas para **1 coluna**     |
| Dashboard cards    | 2 colunas (abaixo de 480px: 1 coluna)         |
| Tabelas            | Wrapper com **scroll horizontal**             |
| Botão Salvar       | Fixo no rodapé em todos os tamanhos           |
| Breadcrumb         | Mantido no topbar em todos os breakpoints     |

---

## 5. Comportamento da Navegação

### 5.1 Seleção de item

- Clicar em um item da sidebar: marca como `.active`, exibe a página correspondente, atualiza o breadcrumb
- Apenas um item pode estar ativo por vez
- No mobile: fecha o drawer automaticamente após navegar

### 5.2 Configurações — troca de layout

Configurações é tratado como uma **área separada** do backoffice, não como mais uma página:

- Fica no **rodapé da sidebar principal**, separado por linha divisória
- Ao clicar, a sidebar principal é **substituída** por uma sidebar dedicada de Configurações
- A sidebar de Configurações segue o **mesmo padrão visual e responsivo** da principal
- No topo da sidebar de Configurações: botão `← Backoffice` que retorna ao backoffice e abre o Dashboard
- Ao retornar, a sidebar principal volta a ser exibida normalmente

**Estrutura da sidebar de Configurações:**

```
← Backoffice
─────────────────
PLATAFORMA
  Plataforma
  Branding
  SEO
  Social
  CMS

FINANCEIRO
  Financeiro
  Gateway
  PLD

COMUNICAÇÃO
  Chat
  Anúncios
  Mensagem
  Notificações
  Buscas

SISTEMA
  Analytics
  Segurança
  Arquivo
  Afiliado
  Geolocalização
```

### 5.2 Breadcrumb

- Exibido no topbar em todas as páginas
- Formato: `🏠 › [Seção] › [Sub-seção] › [Item atual]`
- O item atual não é clicável; os anteriores são links de retorno
- Obrigatório em páginas de detalhe (ex.: perfil de apostador)

### 5.3 Tooltip no tablet

- Aparece apenas no hover, posicionado à direita do ícone (`left: 62px`)
- Background `#252525`, borda `0.5px solid #333`, `border-radius: 5px`
- Exibe o nome completo do item
- `z-index: 200` para sobrepor o conteúdo à direita

---

## 6. Tecnologia de Referência

- Ícones: **Tabler Icons** (webfont via CDN)
- Fonte: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Nenhuma dependência de framework JS — HTML + CSS + JS vanilla
- Mockup interativo disponível em: `sidebar-mockup.html`

---

## 7. Critérios de Aceite

- [ ] Sidebar exibe os itens dos 3 grupos + Configurações no rodapé separado por linha divisória
- [ ] Configurações troca o layout completo para a sidebar dedicada (não expande inline)
- [ ] Sidebar de Configurações exibe botão `← Backoffice` no topo
- [ ] Clicar em `← Backoffice` retorna ao backoffice principal e abre o Dashboard
- [ ] Em desktop (> 1024px): sidebar com 210px, ícone + label visíveis
- [ ] Em tablet (769–1024px): sidebar colapsa para 56px automaticamente, tooltip funcional no hover
- [ ] Em mobile (≤ 768px): sidebar se torna drawer, hambúrguer visível no topbar, pull-tab lateral visível quando fechado
- [ ] Drawer abre e fecha com transição suave (`left 0.22s ease`)
- [ ] Overlay fecha o drawer ao ser clicado
- [ ] Navegar fecha o drawer automaticamente no mobile
- [ ] Dentro do drawer, labels são restaurados (não permanece icon-only)
- [ ] `int-nav` lateral vira tabs horizontais scrolláveis no mobile com `display: flex`
- [ ] Item ativo é visualmente identificado em todos os breakpoints
- [ ] Breadcrumb atualiza corretamente a cada navegação
- [ ] Botão Salvar mantém posição fixa no rodapé em todos os tamanhos

---

*Proposta gerada em 18/06/2026 — Backoffice Pix365 (Orion)*
