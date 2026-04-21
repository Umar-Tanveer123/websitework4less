import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500 via-navy-400 to-navy-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(243,183,0,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(243,183,0,0.05),transparent_50%)]" />

      {/* Decorations */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border border-white/5 rounded-3xl rotate-12" />
      <div className="absolute bottom-10 left-[10%] w-24 h-24 border border-gold-400/10 rounded-full" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <Link to="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gold-400">{breadcrumb}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/50 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
