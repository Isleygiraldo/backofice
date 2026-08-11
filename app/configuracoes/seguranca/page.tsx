'use client';

import { useState } from 'react';
import { Card } from '@/app/_components/ui';

/**
 * Página unificada de Segurança
 *
 * Decisão de design: todas as configurações relacionadas à segurança (Autenticação,
 * Cadastro, GSE, KYC) foram consolidadas em uma única página para melhor UX.
 * Anteriormente, essas configurações estavam distribuídas em múltiplas páginas
 * (login, cadastro, gse, kyc), mas a centralização facilita a gestão e visualização
 * das políticas de segurança globais.
 */
export default function SegurancaPage() {
  const [config, setConfig] = useState({
    authEmail: true,
    authCpf: true,
    authPhone: false,
    authNickname: true,
    authInstagram: false,
    fingerprint: false,
    blockVpn: false,
    blockIncognito: false,
    cookiesModal: false,
    mfaRequired: false,
    mfaDaily: false,
    passwordResetDays: 300,
    maxLoginAttempts: 30,
    minChars: 6,
    maxChars: 45,
    requireLowercase: false,
    requireUppercase: false,
    requireNumbers: false,
    requireSpecial: false,
    captchaEnabled: true,
    captchaProvider: 'cloudflare',
    kycEnabled: true,
    kycProvider: 'legitimuz',
    kycOnWithdraw: true,
    kycOnRegister: false,
    kycOnLogin: false,
  });

  const Toggle = ({ id, checked, onChange }: { id: string; checked: boolean; onChange: () => void }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-[#4a5568] rounded-full peer peer-checked:bg-[#6f5fea] peer-focus:ring-2 peer-focus:ring-[#6f5fea]/50 transition-all">
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    </label>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--content-text)] mb-1">
            Configurações Globais de Segurança
          </h2>
          <p className="text-sm text-[var(--content-text-secondary)]">
            Gerencie políticas de acesso, validação e compliance em todos os módulos.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-[#6f5fea] text-white rounded-lg hover:bg-[#5d4ed4] transition-colors font-medium">
          <i className="ti ti-device-floppy text-lg" />
          Salvar Alterações
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Card 1: Autenticação & Acesso */}
        <Card className="p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--content-text)] mb-6 pb-4 border-b border-[var(--content-border)]">
            <i className="ti ti-login text-[#6f5fea]" />
            Autenticação & Acesso
          </h3>
          <div className="space-y-6">
            {/* Autenticação */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Métodos de Autenticação</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Autenticação por email', key: 'authEmail' },
                  { label: 'Autenticação por CPF', key: 'authCpf' },
                  { label: 'Autenticação por número de telefone', key: 'authPhone' },
                  { label: 'Autenticação por nickname', key: 'authNickname' },
                ].map(({ label, key }) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-[var(--content-text-secondary)]">{label}</span>
                    <Toggle
                      id={key}
                      checked={config[key as keyof typeof config] as boolean}
                      onChange={() => setConfig({ ...config, [key]: !config[key as keyof typeof config] })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Fingerprint */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Fingerprint</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--content-text-secondary)]">Habilitar fingerprint</span>
                <Toggle
                  id="fingerprint"
                  checked={config.fingerprint}
                  onChange={() => setConfig({ ...config, fingerprint: !config.fingerprint })}
                />
              </div>
            </div>

            {/* Bloqueios */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Restrições de Acesso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Bloquear autenticação com VPN', key: 'blockVpn' },
                  { label: 'Bloquear autenticação em aba anônima', key: 'blockIncognito' },
                ].map(({ label, key }) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-[var(--content-text-secondary)]">{label}</span>
                    <Toggle
                      id={key}
                      checked={config[key as keyof typeof config] as boolean}
                      onChange={() => setConfig({ ...config, [key]: !config[key as keyof typeof config] })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Política de cookies */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Política de Cookies</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--content-text-secondary)]">Habilitar modal de política de cookies</span>
                <Toggle
                  id="cookiesModal"
                  checked={config.cookiesModal}
                  onChange={() => setConfig({ ...config, cookiesModal: !config.cookiesModal })}
                />
              </div>
            </div>

            {/* Autenticação multifatorial */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Autenticação Multifatorial</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6f5fea] font-semibold">Habilitar multifatorial obrigatório a cada dia</span>
                <Toggle
                  id="mfaDaily"
                  checked={config.mfaDaily}
                  onChange={() => setConfig({ ...config, mfaDaily: !config.mfaDaily })}
                />
              </div>
            </div>

            {/* Reset de senha & Tentativas de login */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Controle de Acesso</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2">
                    Número de dias para solicitar reset de senha dos usuários
                  </label>
                  <input
                    type="number"
                    value={config.passwordResetDays}
                    onChange={(e) => setConfig({ ...config, passwordResetDays: parseInt(e.target.value) })}
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] focus:ring-1 focus:ring-[#6f5fea] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2">
                    Tentativas máximas de login
                  </label>
                  <input
                    type="number"
                    value={config.maxLoginAttempts}
                    onChange={(e) => setConfig({ ...config, maxLoginAttempts: parseInt(e.target.value) })}
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] focus:ring-1 focus:ring-[#6f5fea] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2: Regras de Cadastro */}
        <Card className="p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--content-text)] mb-6 pb-4 border-b border-[var(--content-border)]">
            <i className="ti ti-user-plus text-[#6f5fea]" />
            Regras de Cadastro
          </h3>
          <div className="space-y-6">
            {/* Dados */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Dados</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'E-mail', key: 'authEmail' },
                  { label: 'Celular', key: 'authPhone' },
                  { label: 'Instagram', key: 'authInstagram' },
                ].map(({ label, key }) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-[var(--content-text-secondary)]">{label}</span>
                    <Toggle
                      id={key}
                      checked={config[key as keyof typeof config] as boolean}
                      onChange={() => setConfig({ ...config, [key]: !config[key as keyof typeof config] })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Requisitos de Senhas */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Requisitos de Senhas</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                      Número mínimo de caracteres
                    </label>
                    <input
                      type="number"
                      value={config.minChars}
                      onChange={(e) => setConfig({ ...config, minChars: parseInt(e.target.value) })}
                      className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] focus:ring-1 focus:ring-[#6f5fea] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                      Número máximo de caracteres
                    </label>
                    <input
                      type="number"
                      value={config.maxChars}
                      onChange={(e) => setConfig({ ...config, maxChars: parseInt(e.target.value) })}
                      className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] focus:ring-1 focus:ring-[#6f5fea] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Deve conter números', key: 'requireNumbers' },
                    { label: 'Deve conter letra minúscula', key: 'requireLowercase' },
                    { label: 'Deve conter letra maiúscula', key: 'requireUppercase' },
                    { label: 'Deve conter caracter especial', key: 'requireSpecial' },
                  ].map(({ label, key }) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                        {label}
                      </label>
                      <select
                        value={config[key as keyof typeof config] ? 'SIM' : 'NÃO'}
                        onChange={(e) => setConfig({ ...config, [key]: e.target.value === 'SIM' })}
                        className={`w-full bg-[var(--content-bg)] border ${config[key as keyof typeof config] ? 'border-[#6f5fea]' : 'border-[var(--content-border)]'} rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] outline-none`}
                      >
                        <option>NÃO</option>
                        <option>SIM</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Validação Captcha */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Validação Captcha</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--content-text-secondary)]">Habilitado</span>
                  <Toggle
                    id="captchaEnabled"
                    checked={config.captchaEnabled}
                    onChange={() => setConfig({ ...config, captchaEnabled: !config.captchaEnabled })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Seleção do verificador
                  </label>
                  <select
                    value={config.captchaProvider}
                    onChange={(e) => setConfig({ ...config, captchaProvider: e.target.value })}
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] outline-none"
                  >
                    <option value="cloudflare">Cloudflare Turnstile</option>
                    <option value="recaptcha">Google reCaptcha</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Card: Verificação & Compliance (KYC) */}
        <Card className="p-6 xl:col-span-2">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--content-text)] mb-6 pb-4 border-b border-[var(--content-border)]">
            <i className="ti ti-checkup-list text-[#6f5fea]" />
            Verificação & Compliance (KYC)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Background Check */}
            <div className="p-5 border-2 border-[var(--content-border)] rounded-xl bg-[var(--content-surface)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--content-border)]">
                <h4 className="text-base font-semibold text-[var(--content-text)] flex items-center gap-2">
                  <i className="ti ti-user-check text-[#6f5fea]" />
                  Verificação de Antecedentes
                </h4>
                <span className="bg-[#1b3322] text-[#2ecc71] px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider">
                  ATIVO
                </span>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                  Seleção do provedor
                </label>
                <select className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2.5 text-[var(--content-text)] focus:border-[#6f5fea] focus:ring-2 focus:ring-[#6f5fea]/20 outline-none">
                  <option>Exato Digital</option>
                  <option>Datavalid</option>
                </select>
              </div>
            </div>

            {/* KYC Settings */}
            <div className="p-5 border-2 border-[var(--content-border)] rounded-xl bg-[var(--content-surface)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--content-border)]">
                <h4 className="text-base font-semibold text-[var(--content-text)] flex items-center gap-2">
                  <i className="ti ti-shield-check text-[#6f5fea]" />
                  Verificação de KYC Principal
                </h4>
                <Toggle
                  id="kycEnabled"
                  checked={config.kycEnabled}
                  onChange={() => setConfig({ ...config, kycEnabled: !config.kycEnabled })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                  Seleção do provedor
                </label>
                <select className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2.5 text-[var(--content-text)] focus:border-[#6f5fea] focus:ring-2 focus:ring-[#6f5fea]/20 outline-none">
                  <option>Legitimuz</option>
                  <option>Sumsub</option>
                </select>
              </div>
              <div className="pt-4 border-t border-[var(--content-border)] grid grid-cols-3 gap-4">
                {[
                  { label: 'Ativo no Saque', key: 'kycOnWithdraw' },
                  { label: 'Ativo no Cadastro', key: 'kycOnRegister' },
                  { label: 'Ativo no Login', key: 'kycOnLogin' },
                ].map(({ label, key }) => (
                  <div key={key} className="flex flex-col items-center gap-3 p-3 bg-[var(--content-hover)] rounded-lg border border-[var(--content-border)]">
                    <span className="text-xs font-semibold text-[var(--content-text)] text-center uppercase tracking-wide">
                      {label}
                    </span>
                    <input
                      type="checkbox"
                      checked={config[key as keyof typeof config] as boolean}
                      onChange={() => setConfig({ ...config, [key]: !config[key as keyof typeof config] })}
                      className="w-5 h-5 text-[#6f5fea] bg-[var(--content-bg)] border-[var(--content-border)] rounded focus:ring-[#6f5fea] focus:ring-2 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Card 3: Validação & Segurança de Conteúdo */}
        <Card className="p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--content-text)] mb-6 pb-4 border-b border-[var(--content-border)]">
            <i className="ti ti-shield-check text-[#6f5fea]" />
            Validação & Segurança de Conteúdo
          </h3>
          <div className="space-y-6">
            {/* Política de segurança de conteúdo */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Política de segurança de conteúdo</h4>
              <div>
                <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                  Content Security Policy
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-[#121212] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text-secondary)] font-mono text-xs focus:border-[#6f5fea] outline-none resize-none"
                  defaultValue="default-src 'self' challenges.cloudflare.com *.zdassets.com progressier.com *.alea.com *.firebaseapp.com *.sportradar.com *.spribe.io *.spribegaming.com *.ingest.sentry.io *.googleapis.com *.google-analytics.com s3.amazonaws.com *.vaidebet.site *.obabet.com *.ipify.org *.twinfo.io *.vaidebet.com; frame-src 'self' *.smartico.ai *.dweygitlen.net *.jtmmizms.net *.onetouch.io chat.joinustech.com.br *.njvqobbxhm.net *.jbivdncagb.net pg-aleaplay.rpd.cloud *.onlyplaygames.net *.ig-onlyplay.net *.ig-onlyplay.ne *.onlyplay.net  launchdigi.net *.endorphina.network d10zgitni74b5t.cloudfront.net *.evoplay.games d3q81lcs2d9s77.cloudfront.net d3kg3jb5dnvv3b.cloudfront.net *.7777gaming.xyz *.risemi.net *.mascot.games *.kalamba.net *.doubleclick.net *.wingene.games *.realisticgames.co.uk *.gameassists.co.uk *.livetables.io *.valueactive.eu *.njoybingo.com *.com *.bestra.net *.systems *.voltent.com *.vsslots.com *.onegameslink.com *.betsolutions.com app-e.insvr.com www.facebook.com app.grooveteam.biz aleaplay.evo-games.com m.pgr-nmga.com m.pg-nmga.com cf-iomeu-cdn.relaxg.com obabet.os.tc *.gv-gamespace.com *.groovegaming.com *.spribegaming.com *.redrakegaming.com *.wazdan.com *.spribe.io www.google.com *.pplivedealer.com *.pragmaticplaylive.net *.prerelease-env.biz *.aleaplay.com *.pragmaticplay.net *.sportradar.com *.obabet.com *.twinfo.io *.vaidebet.com s3.amazonaws.com *.obabet.com *.twinfo.io *.vaidebet.site data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.ads-twitter.com *.sportradarserving.com dna.blacktrack.cloud *.googleadservices.com libs.smartico.ai cdn.amplitude.com js-agent.newrelic.com chat.joinustech.com.br imageproxy.obabet.com *.obabet.com ads.kwai.com *.doubleclick.net *.cloudflare.com *.cloudflareinsights.com *.adsnebula.com *.kwai.net *.antillephone.com connect.facebook.net *.zopim.com *.zendesk.com *.zdassets.com *.chatwoot.com obabet.com progressier.com onesignal.com pushalert.co *.pushalert.co *.hotjar.com *.onesignal.com pushalert.co *.pushalert.co cdn.gtranslate.net *.google-analytics.com *.ipify.org *.sportradar.com obabet.com *.obabet.com *.twinfo.io *.google.com *.gstatic.com *.googleapis.com *.googletagmanager.com *.vaidebet.com s3.amazonaws.com *.vaidebet.site *.obabet.com *.ipify.org *.twinfo.io; style-src 'self' libs.smartico.ai www.googletagmanager.com onesignal.com pushalert.co *.pushalert.co *.gstatic.com *.googleapis.com *.sportradar.com *.obabet.com *.twinfo.io *.vaidebet.com s3.amazonaws.com *.vaidebet.site 'unsafe-inline'; img-src * imageproxy.obabet.com thumbs.alea.com *.alea.com data:; font-src 'self' libs.smartico.ai *.gstatic.com *.sportradar.com *.obabet.com *.twinfo.io *.vaidebet.com s3.amazonaws.com *.vaidebet.site data:; connect-src 'self' facebook.com dna.blacktrack.cloud *.googleadservices.com  wss://api5.smartico.ai/websocket/services wss://pod-20.zendesk.com/sc/faye api2.amplitude.com chat.joinustech.com.br bam.nr-data.net wss://ws.obabet.com google.com *.metebet.com.br *.googlesyndication.com *.adsnebula.com *.llnwd.net *.mythad.com logsdk.kwai-pro.com *.zopim.com wss://widget-mediator.zopim.com wss://ws.hotjar.com/api/v2/client/ws *.zendesk.com *.hotjar.io *.zdassets.com *.hotjar.com progressier.com onesignal.com pushalert.co *.pushalert.co api.ipify.org *.googleapis.com *.alea.com *.google.com fonts.googleapis.com *.ipify.org *.googletagmanager.com *.gstatic.com *.sportradar.com *.google-analytics.com *.obabet.com *.twinfo.io *.vaidebet.com s3.amazonaws.com *.vaidebet.site *.obabet.com *.twinfo.io; worker-src 'self' obabet.com blob:; media-src 'self' *.llnwd.net blob:;"
                />
              </div>
            </div>

            {/* Google reCaptcha */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Google reCaptcha</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Secret key
                  </label>
                  <input
                    type="password"
                    placeholder="Insira a chave secreta"
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Site key
                  </label>
                  <input
                    type="text"
                    placeholder="Insira a chave do site"
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Verify URL
                  </label>
                  <input
                    type="text"
                    defaultValue="https://www.google.com/recaptcha/api/siteverify"
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] font-mono text-xs focus:border-[#6f5fea] outline-none"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Cloudflare Turnstile */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Cloudflare Turnstile</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Secret key
                  </label>
                  <input
                    type="password"
                    placeholder="Insira a chave secreta"
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Site key
                  </label>
                  <input
                    type="text"
                    placeholder="Insira a chave do site"
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] focus:border-[#6f5fea] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                    Verify URL
                  </label>
                  <input
                    type="text"
                    defaultValue="https://challenges.cloudflare.com/turnstile/v0/siteverify"
                    className="w-full bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] font-mono text-xs focus:border-[#6f5fea] outline-none"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Sport Radar */}
            <div className="border-t border-[var(--content-border)] pt-4">
              <h4 className="text-sm font-semibold text-[var(--content-text)] mb-3 uppercase tracking-wide">Sport Radar</h4>
              <div>
                <label className="block text-xs font-medium text-[var(--content-text-secondary)] mb-2 uppercase tracking-wide">
                  Client ID
                </label>
                <input
                  type="text"
                  defaultValue="97903a9c0d4e4db5a5cf285b72536d28"
                  className="w-full md:w-1/2 bg-[var(--content-bg)] border border-[var(--content-border)] rounded-lg px-3 py-2 text-[var(--content-text)] font-mono text-sm focus:border-[#6f5fea] outline-none"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
