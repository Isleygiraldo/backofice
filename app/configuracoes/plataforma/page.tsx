export default function Plataforma() {
  return (
    <div className="p-6 md:p-7">
      <h1 className="label-lg text-[var(--content-text)] mb-3.5">Plataforma</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-[var(--content-text-secondary)] uppercase tracking-[0.5px]">
            Nome da marca
          </label>
          <input
            type="text"
            defaultValue="Pix365"
            className="h-[34px] px-2.5 rounded-md bg-[var(--content-surface)] border border-[var(--content-border)] text-[var(--content-text)] text-[13px] focus:outline-none focus:border-[var(--md-sys-color-primary)]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-[var(--content-text-secondary)] uppercase tracking-[0.5px]">
            URL base
          </label>
          <input
            type="text"
            defaultValue="https://pix365.com.br"
            className="h-[34px] px-2.5 rounded-md bg-[var(--content-surface)] border border-[var(--content-border)] text-[var(--content-text)] text-[13px] focus:outline-none focus:border-[var(--md-sys-color-primary)]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-5">
        <label className="text-[11px] text-[var(--content-text-secondary)] uppercase tracking-[0.5px]">
          Descrição curta
        </label>
        <textarea
          rows={3}
          defaultValue="A melhor casa de apostas esportivas e cassino online do Brasil."
          className="px-2.5 py-2 rounded-md bg-[var(--content-surface)] border border-[var(--content-border)] text-[var(--content-text)] text-[13px] resize-vertical focus:outline-none focus:border-[var(--md-sys-color-primary)]"
        />
      </div>

      <div className="flex justify-end gap-2.5 pt-3 border-t border-[var(--content-border)]">
        <button className="px-4 py-1.5 rounded-full label-md text-[var(--md-sys-color-primary)] border border-[var(--content-border)] hover:bg-[rgba(208,188,255,0.08)] transition-colors">
          Cancelar
        </button>
        <button className="px-4 py-1.5 rounded-full label-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:shadow-md hover:opacity-95 transition-all">
          Salvar
        </button>
      </div>
    </div>
  );
}
