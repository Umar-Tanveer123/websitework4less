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
      className={`group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 ${className}`}
    >
      {icon && (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-xl font-bold text-text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
