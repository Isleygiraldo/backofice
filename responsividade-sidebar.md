# Responsividade da Sidebar — Backoffice Pix365

## Contexto

O backoffice possui duas navs lado a lado em algumas páginas:
- **Sidebar principal** (210px) — navegação entre módulos
- **Nav interna** (190px) — navegação dentro de módulos complexos (Configurações, Esportes, etc.)

O objetivo é tornar o layout funcional em desktop, tablet e mobile sem travar a experiência de trabalho.

---

## Comportamento por breakpoint

### Desktop — acima de 1024px
- Layout atual mantido
- Sidebar principal: 210px, ícone + label
- Nav interna: 190px, visível ao lado do conteúdo

### Tablet — 769px a 1024px
- Sidebar colapsa automaticamente para **ícones apenas (56px)**
- Labels e grupos de seção ficam ocultos
- Tooltip com o nome do item aparece no hover
- Nav interna permanece visível ao lado do conteúdo
- Transição suave: `transition: width 0.2s ease`

### Mobile — até 768px
- Sidebar vira **drawer** (posição fixed, fora da tela por padrão)
- Topbar recebe botão hambúrguer que abre o drawer
- Drawer desliza da esquerda com overlay escuro por baixo
- Clicar no overlay ou navegar para uma página fecha o drawer
- Nav interna (Configurações, Esportes, Monitoramento etc.) vira **tabs horizontais scrolláveis** acima do conteúdo
- Formulários passam para **coluna única**
- Tabelas de lista ficam com **scroll horizontal** em wrapper próprio
- Dashboard cards: **2 colunas** (abaixo de 480px: 1 coluna)

---

## Regras de implementação

- Sidebar usa `transition: width 0.2s ease` no collapse (sem reflow brusco)
- No mobile, a sidebar restaura labels completos dentro do drawer (não fica icon-only)
- A nav interna no mobile mantém o item ativo destacado visualmente nas tabs
- Grupos de seção (labels tipo "PLATAFORMA", "FINANCEIRO") ficam ocultos nas tabs horizontais — só os itens aparecem
- Botão salvar mantém posição fixa no rodapé em todos os tamanhos
- Breadcrumb se mantém no topbar em todos os breakpoints

---

## Breakpoints

| Breakpoint | Largura       | Sidebar            | Nav interna         |
|------------|---------------|--------------------|---------------------|
| Desktop    | > 1024px      | 210px expandida    | 190px lateral       |
| Tablet     | 769 – 1024px  | 56px ícones        | 190px lateral       |
| Mobile     | ≤ 768px       | Drawer (off-screen)| Tabs horizontais    |
| Mobile XS  | ≤ 480px       | Drawer             | Tabs horizontais    |
