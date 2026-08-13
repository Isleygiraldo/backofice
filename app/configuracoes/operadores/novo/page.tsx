'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Select, Card, IconButton } from '@/app/_components/ui';
import { Breadcrumb } from '@/app/_components/layout';

export default function NovoOperadorPage() {
  const router = useRouter();
  const [busca, setBusca] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [cargoSelecionado, setCargoSelecionado] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleBuscar = () => {
    setBuscando(true);
    setTimeout(() => {
      setUsuarioEncontrado(true);
      setBuscando(false);
    }, 1200);
  };

  const handleCriar = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      router.push('/configuracoes/operadores');
    }, 3000);
  };

  const acessos = [
    { nome: 'Gestão de Apostas', permitido: true },
    { nome: 'Fluxo de Caixa & Saques', permitido: true },
    { nome: 'Logs de Auditoria', permitido: true },
    { nome: 'Configurações de Sistema', permitido: false },
  ];

  return (
    <div className="p-[1rem] md:p-[1.5rem] max-w-[1200px] mx-auto">
      <Breadcrumb items={[
        { label: 'Configuração' },
        { label: 'Operadores' },
        { label: 'Novo Operador', active: true }
      ]} />

      <h2 className="headline-md text-[var(--content-text)] mb-[1.5rem] opacity-0 animate-[fadeIn_0.4s_ease-out_0.1s_forwards]">
        Novo Operador
      </h2>

      <Card className="overflow-hidden opacity-0 animate-[slideUp_0.5s_ease-out_0.2s_forwards]">
        {/* Step 1: Busca */}
        <section className="p-[1.5rem]">
          <div className="flex items-center gap-[0.75rem] mb-[1.5rem]">
            <div className="p-[0.5rem] bg-[var(--md-sys-color-secondary)]/10 shape-md">
              <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)]">
                person_search
              </span>
            </div>
            <h3 className="headline-md text-[var(--content-text)]">
              1. Buscar Usuário na Base Orion
            </h3>
          </div>

          <div className="space-y-[1rem]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[1rem]">
              <div className="md:col-span-9">
                <Input
                  label="Email ou CPF"
                  placeholder="Digite o e-mail ou número do CPF"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
              <div className="md:col-span-3 flex items-end">
                <Button
                  variant="filled"
                  icon={buscando ? 'sync' : 'search'}
                  fullWidth
                  onClick={handleBuscar}
                  disabled={buscando}
                  className={buscando ? '[&_span]:animate-spin' : ''}
                >
                  {buscando ? 'Buscando...' : 'Buscar Usuário'}
                </Button>
              </div>
            </div>

            {!usuarioEncontrado ? (
              <div className="border-2 border-dashed border-[var(--content-border)] shape-xl py-[3rem] flex flex-col items-center justify-center bg-[var(--content-hover)]">
                <p className="body-md text-[var(--content-text-secondary)] text-center max-w-xs">
                  Insira os dados acima para localizar o usuário na base global da Orion.
                </p>
              </div>
            ) : (
              <div className="bg-[var(--content-surface)] border border-[var(--md-sys-color-secondary)]/20 p-[1.5rem] shape-xl">
                <div className="flex items-center justify-between mb-[1rem]">
                  <div className="flex items-center gap-[1rem]">
                    <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[var(--md-sys-color-secondary)]/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)] text-[32px]">
                        account_circle
                      </span>
                    </div>
                    <div>
                      <h4 className="headline-md text-[var(--content-text)]">
                        Ricardo Almeida Santos
                      </h4>
                      <div className="flex gap-[0.5rem] mt-[0.25rem]">
                        <span className="bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] label-caps px-[0.5rem] py-[0.125rem] shape-xs border border-[var(--content-badge-success-border)]" style={{ fontSize: '9px' }}>
                          Verificado
                        </span>
                        <span className="bg-[var(--md-sys-color-secondary)]/10 text-[var(--md-sys-color-secondary)] label-caps px-[0.5rem] py-[0.125rem] shape-xs" style={{ fontSize: '9px' }}>
                          ID: 884.221.09-X
                        </span>
                      </div>
                    </div>
                  </div>
                  <IconButton
                    icon="close"
                    onClick={() => setUsuarioEncontrado(false)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-y-[1rem] pt-[1rem] border-t border-[var(--content-border)]">
                  <div>
                    <span className="label-caps text-[var(--content-text-secondary)]">Email</span>
                    <p className="table-data text-[var(--content-text)]">
                      r.almeida.santos@gmail.com
                    </p>
                  </div>
                  <div>
                    <span className="label-caps text-[var(--content-text-secondary)]">Telefone</span>
                    <p className="table-data text-[var(--content-text)]">
                      +55 (11) 98221-1223
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-[var(--content-border)] mx-[1.5rem]"></div>

        {/* Step 2: Cargo */}
        <section className="p-[1.5rem]">
          <div className="flex items-center gap-[0.75rem] mb-[1.5rem]">
            <div className="p-[0.5rem] bg-[var(--md-sys-color-secondary)]/10 shape-md">
              <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)]" style={{ fontVariationSettings: '"FILL" 1' }}>
                security
              </span>
            </div>
            <h3 className="headline-md text-[var(--content-text)]">2. Cargo & Permissões</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
            <div>
              <Select
                label="Atribuir Cargo (Grupo)"
                value={cargoSelecionado}
                onChange={(e) => setCargoSelecionado(e.target.value)}
              >
                <option value="">Selecione um cargo...</option>
                <option value="master">Master Admin (Full Access)</option>
                <option value="financeiro-senior">Financeiro Senior</option>
                <option value="financeiro-junior">Financeiro Junior</option>
                <option value="suporte-n2">Suporte N2 (Operacional)</option>
                <option value="suporte-n1">Suporte N1 (Atendimento)</option>
                <option value="compliance">Compliance Officer</option>
                <option value="auditor">Auditor Externo</option>
              </Select>
              <p className="body-sm text-[var(--content-text-secondary)] mt-[0.5rem] italic" style={{ fontSize: '11px' }}>
                * O cargo define quais telas e ações o operador poderá acessar.
              </p>
            </div>

            <div className="p-[1.25rem] bg-[var(--content-surface)] border border-[var(--content-border)] shape-xl">
              <span className="label-caps text-[var(--content-text-secondary)] block mb-[0.75rem]">
                Resumo de Acessos
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.75rem]">
                {acessos.map((acesso, idx) => (
                  <div key={idx} className="flex items-center gap-[0.5rem] body-sm">
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        acesso.permitido ? 'text-green-500' : 'text-[var(--content-text-secondary)] opacity-50'
                      }`}
                    >
                      {acesso.permitido ? 'check_circle' : 'block'}
                    </span>
                    <span className={acesso.permitido ? 'text-[var(--content-text)]' : 'text-[var(--content-text-secondary)] opacity-50'}>
                      {acesso.nome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Card>

      {/* Actions */}
      <div className="mt-[1.5rem] flex justify-end gap-[1rem] opacity-0 animate-[slideUp_0.5s_ease-out_0.3s_forwards]">
        <Button
          variant="outlined"
          onClick={() => router.push('/configuracoes/operadores')}
        >
          Cancelar
        </Button>
        <Button
          variant="filled"
          icon="how_to_reg"
          onClick={handleCriar}
          disabled={!usuarioEncontrado || !cargoSelecionado}
          className="px-[3rem]"
        >
          Criar Operador
        </Button>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-[2rem] right-[2rem] z-50 flex items-center gap-[1rem] bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] p-[1rem] shape-xl shadow-2xl border-l-4 border-[var(--md-sys-color-secondary)] animate-[slideUp_0.3s_ease-out]">
          <div className="bg-[var(--md-sys-color-secondary)]/20 p-[0.5rem] shape-md">
            <span className="material-symbols-outlined text-[var(--md-sys-color-secondary)]">
              check_circle
            </span>
          </div>
          <div>
            <p className="body-md font-bold text-white">Operador Criado!</p>
            <p className="label-caps text-white/60">
              O acesso de Ricardo Almeida Santos foi ativado.
            </p>
          </div>
        </div>
      )}

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
