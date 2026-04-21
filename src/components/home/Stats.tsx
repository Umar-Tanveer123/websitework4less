import { Briefcase, Users, Clock } from 'lucide-react';
import { useCountUp } from '../../hooks/useAnimations';

function StatItem({
  icon: Icon,
  end,
  suffix,
  label,
}: {
  icon: React.ElementType;
  end: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(end);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-gold-400" />
      </div>
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
        {count}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <p className="text-white/50 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-navy-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem icon={Briefcase} end={285} suffix="+" label="Projects Completed" />
          <StatItem icon={Users} end={10} suffix="+" label="Team Members" />
          <StatItem icon={Clock} end={7} suffix="+" label="Years Of Experience" />
        </div>
      </div>
    </section>
  );
}
