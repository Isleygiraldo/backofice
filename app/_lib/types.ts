export interface Operador {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  cpf: string;
  ultimoLogin: string;
  horario: string;
  mfa: boolean;
  status: 'ativo' | 'inativo' | 'pendente';
}

export interface Cargo {
  id: number;
  nome: string;
  icon: string;
  descricao: string;
}

export interface Metrica {
  label: string;
  valor: string;
  icon: string;
  trend?: string;
  subtitle?: string;
  accent?: boolean;
  critical?: boolean;
}
