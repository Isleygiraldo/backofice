import { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: ReactNode;
}

export function Select({
  label,
  error,
  children,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="space-y-[0.25rem]">
      {label && (
        <label className="label-caps text-[var(--content-text-secondary)]">
          {label}
        </label>
      )}
      <select
        className={`md3-select ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="body-sm text-red-500" style={{ fontSize: '11px' }}>
          {error}
        </p>
      )}
    </div>
  );
}
