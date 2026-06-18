# Decisão — Configurações como página dedicada

## O que mudar

### 1. Sidebar principal
- "Configurações" deve ficar no **rodapé da sidebar**, separado por uma linha divisória dos demais itens
- Ao clicar, **navega para uma página dedicada** — não abre inline, não expande dropdown

### 2. Página de Configurações
- Tem sua **própria sidebar completa**, seguindo exatamente o mesmo padrão visual e de comportamento da sidebar principal
- No topo da sidebar de configurações: botão `← Backoffice` para voltar ao backoffice principal
- O conteúdo à direita mantém o mesmo padrão atual (tabs, formulários, botão Salvar no rodapé)

### 3. Sidebar de Configurações — estrutura

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

---

## Por que essa mudança

A sidebar principal fica com muitos itens quando Configurações está expandida. Como são 19 módulos de configuração, faz mais sentido tratá-los como uma área própria — com navegação dedicada — do que tentar encaixá-los dentro da sidebar principal ou em uma nav interna lateral.

---

## Comportamento esperado

- Clicar em "Configurações" → abre a página de Configurações (troca o layout inteiro)
- Clicar em "← Backoffice" → volta para o backoffice no estado anterior
- A sidebar de Configurações segue o mesmo padrão responsivo: ícones no tablet, drawer no mobile
- URLs do tipo `/config/*` continuam funcionando normalmente
