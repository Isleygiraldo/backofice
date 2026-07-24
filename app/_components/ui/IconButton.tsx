import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  variant?: 'default' | 'danger';
}

export function IconButton({
  icon,
  variant = 'default',
  className = '',
  ...props
}: IconButtonProps) {
  const variantClass = variant === 'danger' ? 'hover:text-red-500' : '';

  return (
    <button
      className={`md3-icon-button ${variantClass} ${className}`}
      {...props}
    >
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </button>
  );
}
