'use client';

import { useEffect } from 'react';

export default function ColorLoader() {
  useEffect(() => {
    const savedPaletteId = localStorage.getItem('selectedPalette');
    const savedColors = localStorage.getItem('paletteColors');

    if (savedColors) {
      const colors = JSON.parse(savedColors);

      // Aplica as cores salvas
      document.documentElement.style.setProperty('--md-sys-color-primary', colors.primary);
      document.documentElement.style.setProperty('--md-sys-color-secondary', colors.primary);
      document.documentElement.style.setProperty('--md-sys-color-primary-container', colors.primaryContainer);
      document.documentElement.style.setProperty('--md-sys-color-secondary-container', colors.primaryContainer);
      document.documentElement.style.setProperty('--content-hover', `${colors.primary}14`);
    }
  }, []);

  return null;
}
