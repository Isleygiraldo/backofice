import { ButtonHTMLAttributes, ReactNode } from 'react';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

export function Tab({ children, active = false, className = '', ...props }: TabProps) {
  return (
    <button
      className={`md3-tab ${active ? 'active' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
