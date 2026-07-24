'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card } from '@/app/_components/ui';
import { Breadcrumb } from '@/app/_components/layout';

export default function NovaAutorizacaoPage() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNome(value);

    if (value && !value.startsWith('ROLE_')) {
      setError('O nome deve começar com "ROLE_"');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.startsWith('ROLE_')) {
      setError('O nome deve começar com "ROLE_"');
      return;
    }
    // Submit logic here
    console.log({ nome, descricao });
  };

  return (
    <div className="p-[1rem] md:p-[2rem] space-y-[1.5rem] md:space-y-[2rem] max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
        <Breadcrumb
          items={[
            { label: 'Configuração' },
            { label: 'Autorizações' },
            { label: 'Nova Autorização', active: true },
          ]}
        />
        <div className="mt-[0.5rem]">
          <h2 className="headline-lg text-[var(--content-text)]">
            Criar Nova Autorização
          </h2>
          <p className="body-md text-[var(--content-text-secondary)] mt-[0.25rem]">
            Configure um novo privilégio de acesso para operadores do sistema.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-start opacity-0 animate-[slideUp_0.5s_ease-out_0.1s_forwards]">
        {/* Form Section */}
        <div className="lg:col-span-8">
          <Card className="overflow-hidden">
            <div className="p-[1.5rem] md:p-[2rem]">
              <div className="flex items-center gap-[0.75rem] mb-[2rem]">
                <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center text-[var(--md-sys-color-secondary)]">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                </div>
                <h3 className="headline-md text-[var(--content-text)]">Informações Básicas</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-[2rem]">
                <div>
                  <label htmlFor="auth-name" className="block label-caps text-[var(--content-text-secondary)] mb-[0.75rem]">
                    Nome da Autorização
                  </label>
                  <input
                    id="auth-name"
                    type="text"
                    placeholder="ROLE_..."
                    value={nome}
                    onChange={handleNomeChange}
                    className={`w-full md3-input ${error ? 'border-red-500' : ''}`}
                  />
                  {error && (
                    <p className="mt-[0.5rem] text-[11px] text-red-500 font-bold">{error}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="auth-desc" className="block label-caps text-[var(--content-text-secondary)] mb-[0.75rem]">
                    Descrição
                  </label>
                  <textarea
                    id="auth-desc"
                    placeholder="Descreva as responsabilidades e permissões vinculadas a esta autorização..."
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    rows={6}
                    className="w-full md3-input resize-none"
                  />
                </div>
              </form>
            </div>

            {/* Actions Footer */}
            <div className="px-[1.5rem] md:px-[2rem] py-[1.5rem] bg-[var(--content-hover)] border-t border-[var(--content-border)] flex items-center justify-end gap-[1rem]">
              <Button
                variant="outlined"
                onClick={() => router.back()}
              >
                Cancelar
              </Button>
              <Button
                variant="filled"
                onClick={handleSubmit}
              >
                Criar Autorização
              </Button>
            </div>
          </Card>
        </div>

        {/* Info Cards Section */}
        <div className="lg:col-span-4 space-y-[1.5rem]">
          {/* Security Orion Card */}
          <Card className="bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] p-[1.5rem]">
            <div className="relative z-10">
              <h4 className="headline-md mb-[0.75rem] text-white">Segurança Orion</h4>
              <p className="body-sm opacity-70 mb-[1.25rem]">
                Autorizações definem o perímetro de ação de cada operador dentro do ecossistema BPX.
              </p>
              <ul className="space-y-[1rem]">
                <li className="flex items-start gap-[0.75rem] body-sm text-[var(--content-text-secondary)]">
                  <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px] mt-[0.125rem]">
                    check_circle
                  </span>
                  <span>Granularidade total em nível de rota e ação.</span>
                </li>
                <li className="flex items-start gap-[0.75rem] body-sm text-[var(--content-text-secondary)]">
                  <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[18px] mt-[0.125rem]">
                    check_circle
                  </span>
                  <span>Integração nativa com logs de auditoria.</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Status Card */}
          <Card className="p-[2rem] flex flex-col items-center text-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center mb-[1.25rem]">
              <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[30px]">
                shield_person
              </span>
            </div>
            <h4 className="label-caps font-bold mb-[0.5rem]">Status de Implementação</h4>
            <div className="px-[1rem] py-[0.25rem] rounded bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold uppercase mb-[1rem]">
              Ativo
            </div>
            <p className="body-sm text-[var(--content-text-secondary)]">
              Novas autorizações são propagadas em tempo real para todos os gateways de API.
            </p>
          </Card>

          {/* Stats Card */}
          <Card className="p-[1.5rem]">
            <div className="flex items-center justify-between mb-[1rem]">
              <span className="label-caps text-[var(--content-text-secondary)]">Capacidade Operacional</span>
              <span className="label-caps font-bold text-[var(--md-sys-color-secondary)]">88%</span>
            </div>
            <div className="w-full h-[0.5rem] bg-[var(--content-hover)] rounded-full overflow-hidden">
              <div className="w-[88%] h-full bg-[var(--md-sys-color-secondary)]"></div>
            </div>
            <p className="text-[11px] text-[var(--content-text-secondary)] mt-[1rem] text-center">
              Baseado nas diretrizes do SIGAP e Compliance.
            </p>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
