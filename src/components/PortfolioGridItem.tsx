interface PortfolioGridItemProps {
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

export default function PortfolioGridItem({
  title,
  category,
  imageUrl,
  className = '',
}: PortfolioGridItemProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-light">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {/* Subtle border overlay */}
      <div className="absolute inset-0 rounded-2xl border border-border/50 transition-colors duration-300 group-hover:border-accent/30" />
    </div>
  );
}
