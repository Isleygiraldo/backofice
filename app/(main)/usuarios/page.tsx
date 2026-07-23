export default function Usuarios() {
  const usuarios = [
    { nome: 'André Silva', cpf: '•••.456.789-00', email: 'andre@email.com', status: 'ativo', criado: '2026-06-10' },
    { nome: 'Mariana Costa', cpf: '•••.123.456-78', email: 'mariana@email.com', status: 'revisao', criado: '2026-06-12' },
    { nome: 'João Santos', cpf: '•••.987.654-32', email: 'joao@email.com', status: 'bloqueado', criado: '2026-06-05' },
  ];

  return (
    <div className="p-6 md:p-7">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h1 className="text-sm font-medium text-[var(--content-text)]">Usuários</h1>
        <button className="px-4 py-1.5 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-xs font-medium">
          + Novo usuário
        </button>
      </div>

      <div className="flex gap-2 mb-3.5 flex-wrap">
        <input
          type="text"
          placeholder="Buscar por nome ou CPF..."
          className="h-8 px-2.5 rounded-md bg-[var(--content-surface)] border border-[var(--content-border)] text-[var(--content-text)] text-xs w-[220px]"
        />
        <select className="h-8 px-2.5 rounded-md bg-[var(--content-surface)] border border-[var(--content-border)] text-[var(--content-text)] text-xs">
          <option>Todos status</option>
          <option>Ativo</option>
          <option>Em revisão</option>
          <option>Bloqueado</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--content-border)]">
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Nome</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">CPF</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Email</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Status</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Criado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, i) => (
              <tr key={i} className="border-b border-[rgba(73,69,79,0.4)] hover:bg-[rgba(202,196,208,0.08)] cursor-pointer">
                <td className="text-xs text-[var(--content-text)] py-2 px-3">{user.nome}</td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3">{user.cpf}</td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3">{user.email}</td>
                <td className="text-xs py-2 px-3">
                  <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-[0.4px] ${
                    user.status === 'ativo' ? 'bg-[#1a2600] text-[#81C995] border-[0.5px] border-[#2d4400]' :
                    user.status === 'revisao' ? 'bg-[#2a2210] text-[#E6C07B] border-[0.5px] border-[#4a3a10]' :
                    'bg-[#2a1010] text-[#F28B82] border-[0.5px] border-[#4a1a1a]'
                  }`}>
                    {user.status === 'ativo' ? 'Ativo' : user.status === 'revisao' ? 'Em revisão' : 'Bloqueado'}
                  </span>
                </td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3">{user.criado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
