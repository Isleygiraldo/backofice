export default function Dashboard() {
  const cards = [
    { label: 'Depósitos hoje', value: 'R$ 142.380', change: '↑ +12% vs ontem', up: true },
    { label: 'Saques pendentes', value: '38', change: '↑ +5 na última hora', down: true },
    { label: 'Usuários online', value: '2.847', change: 'Agora', neutral: true },
    { label: 'Apostas em aberto', value: '1.203', change: 'Esportivo', neutral: true },
    { label: 'GGR esportivo', value: 'R$ 28.910', change: '↑ +8% este mês', up: true },
    { label: 'GGR cassino', value: 'R$ 61.445', change: '↑ +3% este mês', up: true },
  ];

  return (
    <div className="p-6 md:p-7">
      <h1 className="text-sm font-medium text-[var(--md-sys-color-on-surface)] mb-3.5">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3.5">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[var(--md-sys-color-surface-container)] border border-[var(--md-sys-color-outline-variant)] rounded-xl p-4"
          >
            <div className="text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.5px] mb-2">
              {card.label}
            </div>
            <div className="text-lg font-medium text-[var(--md-sys-color-on-surface)]">
              {card.value}
            </div>
            <div
              className={`text-[11px] mt-1.5 ${
                card.up ? 'text-[#81C995]' : card.down ? 'text-[#F28B82]' : 'text-[var(--md-sys-color-on-surface-variant)]'
              }`}
            >
              {card.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
