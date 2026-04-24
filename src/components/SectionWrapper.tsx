import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary';
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  background = 'white',
}: SectionWrapperProps) {
  const bgClasses: Record<string, string> = {
    white: 'bg-surface',
    light: 'bg-surface-alt',
    dark: 'bg-primary text-text-inverse',
    primary: 'bg-primary-light text-text-inverse',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
