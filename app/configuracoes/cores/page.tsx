'use client';

import { useState } from 'react';
import { Card, Button } from '@/app/_components/ui';

interface ColorPalette {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryContainer: string;
    accent: string;
    accentDark: string;
  };
  preview: string[];
}

const palettes: ColorPalette[] = [
  {
    id: 'navy-orange',
    name: 'Navy & Orange (Atual)',
    description: 'Paleta principal com Navy e Orange',
    colors: {
      primary: '#4A48A7',
      primaryContainer: '#0F0A57',
      accent: '#F88C34',
      accentDark: '#C96A28',
    },
    preview: ['#4A48A7', '#0F0A57', '#F88C34', '#C96A28'],
  },
  {
    id: 'navy-pink',
    name: 'Navy & Pink',
    description: 'Navy com acentos em Pink',
    colors: {
      primary: '#4A48A7',
      primaryContainer: '#0F0A57',
      accent: '#FF4D9E',
      accentDark: '#941659',
    },
    preview: ['#4A48A7', '#0F0A57', '#FF4D9E', '#941659'],
  },
  {
    id: 'orange-main',
    name: 'Orange Principal',
    description: 'Orange como cor principal',
    colors: {
      primary: '#F88C34',
      primaryContainer: '#C96A28',
      accent: '#4A48A7',
      accentDark: '#0F0A57',
    },
    preview: ['#F88C34', '#C96A28', '#4A48A7', '#0F0A57'],
  },
  {
    id: 'pink-main',
    name: 'Pink Principal',
    description: 'Pink como cor principal',
    colors: {
      primary: '#FF4D9E',
      primaryContainer: '#941659',
      accent: '#F88C34',
      accentDark: '#C96A28',
    },
    preview: ['#FF4D9E', '#941659', '#F88C34', '#C96A28'],
  },
];

export default function CoresPage() {
  const [selectedPalette, setSelectedPalette] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedPalette') || 'navy-orange';
    }
    return 'navy-orange';
  });

  const applyPalette = (palette: ColorPalette) => {
    setSelectedPalette(palette.id);

    // Salva no localStorage
    localStorage.setItem('selectedPalette', palette.id);
    localStorage.setItem('paletteColors', JSON.stringify(palette.colors));

    // Aplica as cores primárias
    document.documentElement.style.setProperty('--md-sys-color-primary', palette.colors.primary);
    document.documentElement.style.setProperty('--md-sys-color-secondary', palette.colors.primary);
    document.documentElement.style.setProperty('--md-sys-color-primary-container', palette.colors.primaryContainer);
    document.documentElement.style.setProperty('--md-sys-color-secondary-container', palette.colors.primaryContainer);

    // Hover com primary
    document.documentElement.style.setProperty('--content-hover', `${palette.colors.primary}14`);
  };

  return (
    <div className="p-[1rem] md:p-[1.5rem] space-y-[1rem] md:space-y-[1.5rem] max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[0.75rem]">
        <div>
          <p className="body-md text-[var(--content-text-secondary)]">
            Escolha uma paleta de cores para o sistema
          </p>
        </div>
      </div>

      {/* Paletas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
        {palettes.map((palette) => (
          <Card
            key={palette.id}
            className={`p-[1.5rem] cursor-pointer transition-all ${
              selectedPalette === palette.id
                ? 'ring-2 ring-[var(--md-sys-color-primary)]'
                : 'hover:shadow-lg'
            }`}
            onClick={() => applyPalette(palette)}
          >
            <div className="flex items-start justify-between mb-[1rem]">
              <div>
                <h3 className="headline-md text-[var(--content-text)] mb-[0.25rem]">
                  {palette.name}
                </h3>
                <p className="body-sm text-[var(--content-text-secondary)]">
                  {palette.description}
                </p>
              </div>
              {selectedPalette === palette.id && (
                <div className="w-[1.5rem] h-[1.5rem] shape-sm bg-[var(--md-sys-color-primary)] flex items-center justify-center flex-shrink-0">
                  <i className="ti ti-check text-white text-[14px]" />
                </div>
              )}
            </div>

            {/* Preview Colors */}
            <div className="flex gap-[0.5rem] mb-[1rem]">
              {palette.preview.map((color, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-[4rem] shape-md"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>

            {/* Color Labels */}
            <div className="grid grid-cols-2 gap-[0.5rem]">
              <div>
                <div className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
                  Primary
                </div>
                <div className="body-sm text-[var(--content-text)] font-mono">
                  {palette.colors.primary}
                </div>
              </div>
              <div>
                <div className="label-caps text-[var(--content-text-secondary)] mb-[0.25rem]">
                  Accent
                </div>
                <div className="body-sm text-[var(--content-text)] font-mono">
                  {palette.colors.accent}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Preview */}
      <Card className="p-[1.5rem]">
        <h3 className="headline-md mb-[1rem] text-[var(--content-text)]">Pré-visualização</h3>
        <div className="space-y-[1.5rem]">
          {/* Botões */}
          <div>
            <div className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem]">Botões</div>
            <div className="flex flex-wrap gap-[1rem]">
              <Button variant="filled">Botão Primary</Button>
              <Button variant="outlined">Botão Outlined</Button>
              <Button variant="text">Botão Text</Button>
            </div>
          </div>

          {/* Badges */}
          <div>
            <div className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem]">Badges</div>
            <div className="flex flex-wrap gap-[1rem]">
              <div className="px-[0.75rem] py-[0.375rem] shape-md bg-[var(--content-badge-success-bg)] border border-[var(--content-badge-success-border)]">
                <span className="label-md" style={{ color: 'var(--content-badge-success-text)' }}>
                  Success
                </span>
              </div>
              <div className="px-[0.75rem] py-[0.375rem] shape-md bg-[var(--content-badge-warning-bg)] border border-[var(--content-badge-warning-border)]">
                <span className="label-md" style={{ color: 'var(--content-badge-warning-text)' }}>
                  Warning
                </span>
              </div>
              <div className="px-[0.75rem] py-[0.375rem] shape-md bg-[var(--content-badge-error-bg)] border border-[var(--content-badge-error-border)]">
                <span className="label-md" style={{ color: 'var(--content-badge-error-text)' }}>
                  Error
                </span>
              </div>
            </div>
          </div>

          {/* Card Preview */}
          <div>
            <div className="label-caps text-[var(--content-text-secondary)] mb-[0.5rem]">Card</div>
            <Card className="p-[1rem] max-w-[300px]">
              <div className="flex items-center gap-[0.75rem] mb-[0.75rem]">
                <div className="w-[2.5rem] h-[2.5rem] shape-md bg-[var(--md-sys-color-primary)] flex items-center justify-center">
                  <i className="ti ti-chart-bar text-white" />
                </div>
                <div>
                  <div className="label-lg text-[var(--content-text)]">Card Title</div>
                  <div className="body-sm text-[var(--content-text-secondary)]">Subtitle</div>
                </div>
              </div>
              <Button variant="filled" fullWidth>Action</Button>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
