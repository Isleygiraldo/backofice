# Proposta de Sidebar — Backoffice Pix365

> Documento de solução da navegação principal do backoffice.
> Versão: 2.0 — Junho 2026
> Relaciona cada decisão/apontamento dos documentos de spec ao que foi implementado no mockup.

---

## Fontes consultadas

| Documento | Conteúdo |
|-----------|----------|
| `decisao-configuracoes-pagina-dedicada.md` | Decisão de separar Configurações em área própria |
| `responsividade-sidebar.md` | Comportamento em cada breakpoint |
| `navegacao-backoffice-pix365-sidebar-atualizada.md` | Estrutura de módulos e padrões de navegação |

---

## 1. Estrutura da Sidebar Principal

### De → Para

| Apontamento | Implementado |
|-------------|-------------|
| Sidebar com 9 seções principais + Configurações | ✅ 3 grupos (Principal, Produto, Gestão) com 12 itens |
| Configurações não deve expandir submenu dentro da sidebar | ✅ Nenhum item abre dropdown — navegação interna acontece na página |
| `"Configurações"` no **rodapé da sidebar**, separado por linha divisória | ✅ `.sidebar-bottom` com `margin-top: auto` + `.sidebar-divider` (`height: 0.5px; background: #1f1f1f`) |
| Labels de seção em maiúsculas (PRINCIPAL, PRODUTO, GESTÃO) | ✅ `.sidebar-label` — `9px / uppercase / #444` |
| Logo com marca e sub-texto no topo | ✅ `.sidebar-logo` — `BPX` (18px bold) + `PIX365 · BACKOFFICE` (9px uppercase #555) |

### Estrutura implementada

```
BPX
PIX365 · BACKOFFICE
──────────────────────
PRINCIPAL
  Dashboard
  Operação
  Financeiro

PRODUTO
  Cassino
  Esportes
  Promoções
  Comunicação
  Conteúdo
  Sistema & Compliance

GESTÃO
  Usuários
  Relatórios
  Monitoramento
──────────────────────
  Configurações         ← rodapé, separado
```

---

## 2. Configurações — Sidebar Dedicada

### De → Para

| Apontamento (`decisao-configuracoes-pagina-dedicada.md`) | Implementado |
|----------------------------------------------------------|-------------|
| Ao clicar em Configurações → **troca o layout inteiro**, não abre inline | ✅ `navigate()` oculta `#sidebar` e exibe `#sidebarConfig` |
| Página de Configurações tem **sua própria sidebar completa** | ✅ `<nav id="sidebarConfig">` usa as mesmas classes CSS da sidebar principal |
| Logo padronizada (igual à sidebar principal) | ✅ `.sidebar-logo` com `BPX` + `PIX365 · BACKOFFICE` no topo do `#sidebarConfig` |
| Botão `← Backoffice` no topo da sidebar de Configurações | ✅ `.sidebar-back` com `onclick="exitConfig()"` — posicionado após a logo |
| Clicar em `← Backoffice` → volta ao backoffice no estado anterior | ✅ `exitConfig()` oculta `#sidebarConfig`, exibe `#sidebar`, navega para Dashboard |
| Sidebar de Configurações segue o **mesmo padrão responsivo** | ✅ Herda todas as regras CSS de `.sidebar` (tablet 56px, drawer mobile) |
| 19 itens organizados em 4 grupos | ✅ PLATAFORMA (5), FINANCEIRO (3), COMUNICAÇÃO (5), SISTEMA (5) |

### Estrutura da sidebar de Configurações implementada

```
BPX
PIX365 · BACKOFFICE
─────────────────────
← Backoffice
─────────────────────
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

---

## 3. Responsividade

### De → Para

| Apontamento (`responsividade-sidebar.md`) | Implementado |
|-------------------------------------------|-------------|
| Desktop > 1024px: 210px, ícone + label | ✅ `.sidebar { width: 210px }` — estado padrão |
| Tablet 769–1024px: colapsa para **56px ícones** automaticamente | ✅ `@media (max-width: 1024px) { .sidebar { width: 56px } }` |
| Tablet: labels e grupos ocultos | ✅ `.sidebar-label { opacity: 0; height: 0 }` + `.item-label { display: none }` |
| Tablet: tooltip com nome do item no hover | ✅ `.sidebar-item::after { content: attr(data-label) }` — aparece `opacity: 1` no hover |
| Tablet: transição suave `width 0.2s ease` | ✅ `.sidebar { transition: width 0.2s ease, min-width 0.2s ease }` |
| Mobile ≤768px: sidebar vira **drawer off-screen** | ✅ `position: fixed; left: -210px; transition: left 0.22s ease` |
| Mobile: **botão hambúrguer** visível no topbar | ✅ `.hamburger { display: flex }` no breakpoint mobile — estilizado com `background: #1a1a1a; border-radius: 6px` |
| Mobile: **pull-tab lateral** indicando que há sidebar | ✅ `.sidebar-pushtab` — 14px × 44px fixado na borda esquerda, com `›` |
| Mobile: drawer fecha ao navegar | ✅ `closeSidebar()` chamado ao final de `navigate()` e `selectConfigSidebar()` |
| Mobile: dentro do drawer, labels **restaurados** (não fica icon-only) | ✅ `.sidebar .item-label { display: inline }` + overrides de padding/gap |
| Mobile: overlay escuro ao abrir o drawer | ✅ `.sidebar-overlay { background: rgba(0,0,0,0.65) }` — fecha ao clicar |
| Mobile: `int-nav` lateral vira **tabs horizontais scrolláveis** | ✅ `@media (max-width: 768px) { .int-nav { display: flex; flex-direction: row; overflow-x: auto } }` |
| Mobile: labels dos grupos ocultos nas tabs | ✅ `.int-nav-label { display: none }` no breakpoint mobile |
| Mobile: item ativo nas tabs — `border-bottom` em vez de `border-left` | ✅ `.int-nav-item.active { border-bottom-color: #fff; border-left-color: transparent }` |
| Mobile: formulários em **coluna única** | ✅ `.form-grid { grid-template-columns: 1fr }` |
| Mobile: Dashboard **2 colunas** | ✅ `.dash-grid { grid-template-columns: 1fr 1fr }` |
| Mobile XS ≤480px: Dashboard **1 coluna** | ✅ `@media (max-width: 480px) { .dash-grid { grid-template-columns: 1fr } }` |
| Botão Salvar fixo no rodapé em todos os tamanhos | ✅ `.footer-bar` no fim do flex container da página — sempre visível |
| Breadcrumb no topbar em todos os breakpoints | ✅ `.topbar` presente em todos os breakpoints; breadcrumb atualiza via `setBreadcrumb()` |

---

## 4. Padrões de Navegação Interna

### De → Para

| Apontamento (`navegacao-backoffice-pix365-sidebar-atualizada.md`) | Implementado |
|-------------------------------------------------------------------|-------------|
| Configurações → página centralizadora com nav interna | ✅ Substituída por sidebar própria (decisão atualizada) |
| Branding → nav lateral interna própria (caso especial) | ✅ `.branding-layout` com `.branding-nav` lateral e `.branding-body` |
| Branding mobile → nav horizontal scrollável | ✅ `@media (max-width: 768px) { .branding-nav { display: flex; flex-direction: row } }` |
| Perfil apostador → **15 tabs scrolláveis** com setas | ✅ `.ptabs-scroll` com `overflow-x: auto` + `.scroll-arrow` (`‹` `›`) |
| Breadcrumb obrigatório em páginas de detalhe | ✅ `setBreadcrumb(nome, pai, secao)` — gera link clicável para o pai |
| Listas com filtros + scroll horizontal em tabelas | ✅ `.list-filters` + `.table-wrap { overflow-x: auto }` |
| Tabs horizontais para sub-páginas | ✅ `.tabs` + `.tab` — max 7, ativo com `border-bottom: 2px solid #fff` |
| Módulos sem sub-páginas → `.empty-page` | ✅ `#pageEmpty` exibido para seções sem página mapeada |

---

## 5. Visual — Tokens Implementados

| Elemento | Valor |
|----------|-------|
| Sidebar width desktop | `210px` |
| Sidebar width tablet | `56px` |
| Sidebar background | `#0d0d0d` |
| Sidebar borda direita | `0.5px solid #1f1f1f` |
| Item cor inativa | `#888` |
| Item hover | `color: #ddd; background: #161616` |
| Item ativo | `color: #fff; background: #1c1c1c; border-left: 2px solid #fff` |
| Label de grupo | `9px / 600 / uppercase / #444 / letter-spacing: 1.2px` |
| Logo mark | `18px / 700 / #fff / letter-spacing: -0.5px` |
| Logo sub | `9px / uppercase / #555 / letter-spacing: 1px` |
| Ícones | Tabler Icons webfont — `16px` desktop, `18px` tablet |
| Topbar height | `46px` |
| Topbar background | `#0d0d0d` |

---

## 6. Critérios de Aceite

- [ ] Sidebar exibe 3 grupos + Configurações no rodapé separado por linha divisória
- [ ] Configurações **troca o layout completo** para a sidebar dedicada (não expande inline)
- [ ] Sidebar de Configurações tem logo `BPX / PIX365 · BACKOFFICE` no topo
- [ ] Sidebar de Configurações tem botão `← Backoffice` abaixo da logo
- [ ] Clicar em `← Backoffice` retorna ao backoffice e abre o Dashboard
- [ ] Em desktop (> 1024px): sidebar com 210px, ícone + label visíveis
- [ ] Em tablet (769–1024px): sidebar colapsa para 56px automaticamente, tooltip no hover
- [ ] Em mobile (≤ 768px): hambúrguer visível no topbar, pull-tab lateral visível, drawer funcional
- [ ] Sidebar de Configurações segue o mesmo comportamento responsivo da principal
- [ ] `int-nav` lateral vira tabs horizontais no mobile com `display: flex`
- [ ] Branding mantém nav lateral própria (desktop/tablet); vira horizontal no mobile
- [ ] Perfil apostador com 15 tabs scrolláveis e setas de navegação
- [ ] Breadcrumb atualiza corretamente em todas as navegações
- [ ] Botão Salvar fixo no rodapé em todos os breakpoints

---

*Documento gerado em 18/06/2026 — Backoffice Pix365 (Orion)*
*Mockup interativo: `sidebar-mockup.html`*
