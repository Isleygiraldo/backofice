# Estrutura Hierárquica das Sidebars - Backoffice Pix365

## Sidebar Principal

### Início
- **Rota:** `/`
- Link direto para o Dashboard principal

---

### Produtos

#### Cassino
- Dashboard → `/cassino`
- Jogos → `/cassino/jogos`
- Jogos ao vivo → `/cassino/jogos-ao-vivo`
- Fornecedores → `/cassino/fornecedores`
- Categorias → `/cassino/categorias`
- Bônus → `/cassino/bonus`
- Relatório → `/cassino/relatorio`

#### Esportes
- Dashboard → `/esportes`
- Eventos → `/esportes/eventos`
- Mercados → `/esportes/mercados`
- Relatório → `/esportes/relatorio`

---

### Operação

#### Usuários
- Dashboard → `/usuarios`
- Apostadores → `/usuarios/apostadores`
- Perfil → `/usuarios/perfil`

#### Afiliados
- **Rota:** `/afiliados`
- Link direto

#### Financeiro
- Dashboard → `/financeiro`
- Depósitos → `/financeiro/depositos`
- Saques → `/financeiro/saques`
- Transações → `/financeiro/transacoes`

#### Operação
- **Rota:** `/operacao`
- Link direto

---

### Marketing

#### Comunicação
- Dashboard → `/comunicacao`
- Campanhas → `/comunicacao/campanhas`
- Templates → `/comunicacao/templates`

---

### Gestão

#### Monitoramento
- **Rota:** `/monitoramento`
- Link direto

#### Sistema & Compliance
- **Rota:** `/sistema-compliance`
- Link direto

---

### Regulatório

#### SIGAP
- **Rota:** `/sigap`
- Link direto

---

### Configurações
- **Rota:** `/configuracoes/plataforma`
- Link no rodapé da sidebar que leva para a Sidebar de Configurações

---

## Sidebar de Configurações

### Voltar
- **Rota:** `/`
- Retorna ao Dashboard principal

---

### Plataforma

#### Plataforma
- Informações → `/configuracoes/plataforma`
- URL → `/configuracoes/plataforma/url`
- Provedores → `/configuracoes/plataforma/provedores`
- Permissões → `/configuracoes/plataforma/permissoes`
- Preferências → `/configuracoes/plataforma/preferencias`
- Código → `/configuracoes/plataforma/codigo`
- SIGAP → `/configuracoes/plataforma/sigap`

#### Branding
- Marca → `/configuracoes/branding`
- Logos → `/configuracoes/branding/logos`
- Cores → `/configuracoes/branding/cores`

#### SEO
- Informações → `/configuracoes/seo`
- Sitemap → `/configuracoes/seo/sitemap`
- Código → `/configuracoes/seo/codigo`

#### Social
- Redes Sociais → `/configuracoes/social`

#### CMS
- Conteúdo → `/configuracoes/cms`

---

### Sistema

#### Analytics
- Analytics → `/configuracoes/analytics`

#### Segurança
- Login → `/configuracoes/seguranca`
- Cadastro → `/configuracoes/seguranca/cadastro`
- GSE → `/configuracoes/seguranca/gse`
- KYC → `/configuracoes/seguranca/kyc`

#### Arquivo
- Arquivo → `/configuracoes/arquivo`

#### Geolocalização
- Geolocalização → `/configuracoes/geolocalizacao`

---

### Acesso (Itens com Tag ADM)

#### Cargos **[ADM]**
- Cargos → `/configuracoes/cargos`

#### Grupos **[ADM]**
- Grupos → `/usuarios/grupos`

#### Operadores **[ADM]**
- Operadores → `/configuracoes/operadores`

#### Autorizações **[ADM]**
- Autorizações → `/configuracoes/autorizacoes`

#### Bloqueios **[ADM]**
- Bloqueios → `/configuracoes/bloqueios`

---

## Notas

- **Visual:** Sidebar principal tem largura de 75px (apenas ícones + labels). Ao clicar em item com subitens, abre painel lateral de 240px à direita.
- **Configurações:** Mesma estrutura visual da sidebar principal (75px + painel 240px).
- **Tag ADM:** Itens da seção "Acesso" possuem badge ADM (fundo roxo #6f5fea).
- **Breadcrumbs:** Todas as páginas exibem breadcrumb automático no topo mostrando o caminho de navegação.
