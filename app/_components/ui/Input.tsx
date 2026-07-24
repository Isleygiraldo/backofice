import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  error?: string;
}

export function Input({
  label,
  icon,
  iconPosition = 'left',
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-[0.25rem]">
      {label && (
        <label className="label-caps text-[var(--content-text-secondary)]">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <span className="material-symbols-outlined absolute left-[0.5rem] top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] text-[18px]">
            {icon}
          </span>
        )}
        <input
          className={`md3-input ${icon && iconPosition === 'left' ? 'pl-[2rem]' : ''} ${
            icon && iconPosition === 'right' ? 'pr-[2rem]' : ''
          } ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <span className="material-symbols-outlined absolute right-[0.5rem] top-1/2 -translate-y-1/2 text-[var(--content-text-secondary)] text-[18px]">
            {icon}
          </span>
        )}
      </div>
      {error && (
        <p className="body-sm text-red-500" style={{ fontSize: '11px' }}>
          {error}
        </p>
      )}
    </div>
  );
}
