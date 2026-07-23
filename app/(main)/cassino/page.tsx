export default function Cassino() {
  const kpis = [
    { label: 'GGR hoje', value: 'R$ 61.445', change: '↑ +3% vs ontem', up: true },
    { label: 'Rodadas hoje', value: '428.927', change: 'Ref. 26/06/2026', neutral: true },
    { label: 'Jogadores únicos', value: '3.812', change: '↑ +7% vs ontem', up: true },
    { label: 'RTP médio', value: '96,4%', change: 'Dentro do limite', neutral: true },
  ];

  const topJogos = [
    { pos: 1, jogo: 'Sweet Bonanza', provider: 'Pragmatic Play', rodadas: '42.810', handle: 'R$ 284.200', ggr: 'R$ 11.368', rtp: '96,0%', status: 'ativo' },
    { pos: 2, jogo: 'Gates of Olympus', provider: 'Pragmatic Play', rodadas: '38.204', handle: 'R$ 241.900', ggr: 'R$ 9.676', rtp: '96,0%', status: 'ativo' },
    { pos: 3, jogo: 'Lightning Roulette', provider: 'Evolution', rodadas: '14.590', handle: 'R$ 1.021.300', ggr: 'R$ 8.170', rtp: '97,3%', status: 'ativo' },
  ];

  return (
    <div className="p-6 md:p-7">
      <h1 className="text-sm font-medium text-[var(--content-text)] mb-3.5">Cassino — Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-[var(--content-surface)] border border-[var(--content-border)] rounded-xl p-3.5">
            <div className="text-[11px] text-[var(--content-text-secondary)] uppercase tracking-[0.5px] mb-2">{kpi.label}</div>
            <div className="text-lg font-medium text-[var(--content-text)]">{kpi.value}</div>
            <div className={`text-[11px] mt-1.5 ${kpi.up ? 'text-[#81C995]' : 'text-[var(--content-text-secondary)]'}`}>
              {kpi.change}
            </div>
          </div>
        ))}
      </div>

      <div className="text-[11px] text-[var(--content-text-secondary)] uppercase tracking-[0.6px] mb-2.5">Top jogos — hoje</div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--content-border)]">
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">#</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Jogo</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Provider</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Rodadas</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Handle</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">GGR</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">RTP</th>
              <th className="text-[10px] text-[var(--content-text-secondary)] uppercase tracking-[0.8px] font-semibold text-left py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {topJogos.map((jogo) => (
              <tr key={jogo.pos} className="border-b border-[var(--content-border)] hover:bg-[var(--content-hover)] transition-colors">
                <td className="text-xs text-[var(--content-text-secondary)] py-2 px-3">{jogo.pos}</td>
                <td className="text-xs font-medium text-[var(--content-text)] py-2 px-3">{jogo.jogo}</td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3">{jogo.provider}</td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3 tabular-nums">{jogo.rodadas}</td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3 tabular-nums">{jogo.handle}</td>
                <td className="text-xs text-[#81C995] font-medium py-2 px-3 tabular-nums">{jogo.ggr}</td>
                <td className="text-xs text-[var(--content-text)] py-2 px-3">{jogo.rtp}</td>
                <td className="text-xs py-2 px-3">
                  <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border-[0.5px] border-[var(--content-badge-success-border)]">
                    Ativo
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
