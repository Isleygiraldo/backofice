# Sistema de Tipografia Padronizado

## Classes Disponíveis

### Display - Títulos Grandes
- `display-lg` (28px) - Hero sections, títulos de dashboard
- `display-md` (24px) - Títulos principais de página

### Headline - Títulos de Seção
- `headline-lg` (20px) - Títulos de cards principais
- `headline-md` (16px) - Títulos de seções
- `headline-sm` (14px) - Subtítulos

### Body - Texto Principal
- `body-lg` (15px) - Texto destacado, descrições importantes
- `body-md` (13px) - Texto padrão do sistema
- `body-sm` (12px) - Textos auxiliares, legendas

### Label - Labels e Tags
- `label-lg` (13px) - Labels de formulários
- `label-md` (12px) - Labels padrão
- `label-sm` (11px) - Labels compactas
- `label-caps` (10px) - Labels uppercase (categorias, status)

### Table - Dados de Tabela
- `table-header` (11px) - Cabeçalhos de tabela
- `table-data` (13px) - Dados principais de tabela
- `table-data-sm` (12px) - Dados auxiliares

## Guia de Uso

### Páginas Principais
```tsx
<div>
  <h1 className="display-md">Título da Página</h1>
  <p className="body-md text-[var(--content-text-secondary)]">
    Descrição da página
  </p>
</div>
```

### Cards
```tsx
<Card>
  <h3 className="headline-md">Título do Card</h3>
  <p className="body-sm text-[var(--content-text-secondary)]">
    Descrição
  </p>
</Card>
```

### Formulários
```tsx
<div>
  <label className="label-lg text-[var(--content-text)]">Nome do Campo</label>
  <p className="body-sm text-[var(--content-text-secondary)]">Ajuda</p>
</div>
```

### Tabelas
```tsx
<thead>
  <th className="table-header text-[var(--content-text-secondary)]">Coluna</th>
</thead>
<tbody>
  <td className="table-data text-[var(--content-text)]">Dado</td>
</tbody>
```

### Badges/Tags
```tsx
<span className="label-caps">Status Ativo</span>
```

## Regras

1. **NUNCA** usar tamanhos inline (`text-[13px]`)
2. **SEMPRE** usar classes MD3
3. Cores sempre com variáveis CSS (`var(--content-text)`)
4. Uma classe por contexto (não misturar)
