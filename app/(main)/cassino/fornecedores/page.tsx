export default function Fornecedores() {
  const providers = [
    { nome: 'Pragmatic Play', jogos: 184, rodadas: '198.420', ggr: 'R$ 27.650', part: '45,0%' },
    { nome: 'Evolution', jogos: 62, rodadas: '48.310', ggr: 'R$ 18.090', part: '29,4%' },
    { nome: 'PG Soft', jogos: 98, rodadas: '121.340', ggr: 'R$ 9.707', part: '15,8%' },
  ];

  return (
    <div className="p-6 md:p-7">
      <h1 className="text-sm font-medium text-[var(--md-sys-color-on-surface)] mb-3.5">Fornecedores</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--md-sys-color-outline-variant)]">
              <th className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Provider</th>
              <th className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Jogos</th>
              <th className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Rodadas</th>
              <th className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">GGR</th>
              <th className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Participação</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((p, i) => (
              <tr key={i} className="border-b border-[rgba(73,69,79,0.4)] hover:bg-[rgba(202,196,208,0.08)]">
                <td className="text-xs font-medium text-[var(--md-sys-color-on-surface)] py-2 px-3">{p.nome}</td>
                <td className="text-xs text-[var(--md-sys-color-on-surface)] py-2 px-3">{p.jogos}</td>
                <td className="text-xs text-[var(--md-sys-color-on-surface)] py-2 px-3 tabular-nums">{p.rodadas}</td>
                <td className="text-xs font-medium text-[var(--md-sys-color-on-surface)] py-2 px-3 tabular-nums">{p.ggr}</td>
                <td className="text-xs text-[var(--md-sys-color-on-surface)] py-2 px-3">{p.part}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
