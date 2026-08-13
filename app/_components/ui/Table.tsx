interface TableColumn<T = any> {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T) => React.ReactNode;
}

interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}

export default function Table<T = any>({ columns, data, className = '' }: TableProps<T>) {
  return (
    <div className={`bg-[var(--content-surface)] border border-[var(--content-border)] rounded-xl overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F8F8F9] dark:bg-[#252329]">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 text-xs font-medium text-[var(--content-text-secondary)] uppercase tracking-wide ${
                    col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--content-border)]">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-[var(--content-hover)] transition-colors">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 text-sm text-[var(--content-text)] ${
                      col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {col.render ? col.render((row as any)[col.key], row) : (row as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export function TablePagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}: TablePaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between px-4 py-3 body-md text-[var(--content-text)]">
      <div className="flex items-center gap-2">
        <span className="text-[var(--content-text-secondary)]">Itens por página</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-3 py-1.5 border border-[var(--content-border)] rounded-lg bg-[var(--content-surface)] text-[var(--content-text)] focus:outline-none focus:ring-2 focus:ring-[var(--md-sys-color-secondary)]"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[var(--content-text-secondary)]">
          {startItem} - {endItem} de {totalItems}
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-[var(--content-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Primeira página"
          >
            <i className="ti ti-chevrons-left text-lg" />
          </button>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-[var(--content-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Página anterior"
          >
            <i className="ti ti-chevron-left text-lg" />
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-[var(--content-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Próxima página"
          >
            <i className="ti ti-chevron-right text-lg" />
          </button>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-[var(--content-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Última página"
          >
            <i className="ti ti-chevrons-right text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Badge({ children, variant = 'default', className = '' }: {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'default';
  className?: string;
}) {
  const variants = {
    success: 'bg-[var(--content-badge-success-bg)] text-[var(--content-badge-success-text)] border-[var(--content-badge-success-border)]',
    error: 'bg-[var(--content-badge-error-bg)] text-[var(--content-badge-error-text)] border-[var(--content-badge-error-border)]',
    warning: 'bg-[var(--content-badge-warning-bg)] text-[var(--content-badge-warning-text)] border-[var(--content-badge-warning-border)]',
    default: 'bg-[var(--content-hover)] text-[var(--content-text)] border-[var(--content-border)]',
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium uppercase rounded border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
