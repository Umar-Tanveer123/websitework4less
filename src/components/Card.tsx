import { ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export default function Card({
  icon,
  title,
  description,
  className = '',
  children,
}: CardProps) {
  return (
    <div
      className={`group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-500 ease-[var(--ease-out-premium)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 ${className}`}
    >
      {/* Premium Border Reveal */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-accent/20 group-hover:scale-[1.02] pointer-events-none" />
      
      {icon && (
        <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/5 text-accent transition-all duration-500 ease-[var(--ease-out-premium)] group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-xl font-bold text-text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
