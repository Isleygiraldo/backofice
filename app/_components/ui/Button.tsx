import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  children: ReactNode;
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export function Button({
  variant = 'filled',
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClass = variant === 'filled' ? 'md3-button-filled' : 'md3-button-outlined';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClass} flex items-center justify-center gap-[0.5rem] ${widthClass} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-[16px]">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-[16px]">{icon}</span>
      )}
    </button>
  );
}
