import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useAnimations';

const projects = [
  { name: 'nlakehomes.com', url: 'http://nlakehomes.com', color: 'from-blue-500/10 to-indigo-500/10' },
  { name: 'vipnlines.com', url: 'http://vipnlines.com', color: 'from-purple-500/10 to-pink-500/10' },
  { name: 'mjenzi.com', url: 'http://mjenzi.com', color: 'from-emerald-500/10 to-teal-500/10' },
  { name: 'latotravelapp.com', url: 'https://www.latotravelapp.com/', color: 'from-gold-400/10 to-amber-500/10' },
  { name: 'goldstonem.com', url: 'http://goldstonem.com', color: 'from-rose-500/10 to-red-500/10' },
  { name: 'clovercareaba.com', url: 'http://clovercareaba.com', color: 'from-green-500/10 to-emerald-500/10' },
  { name: 'keynorstudios.com', url: 'https://keynorstudios.com/', color: 'from-cyan-500/10 to-blue-500/10' },
  { name: 'menachemsdips.com', url: 'http://menachemsdips.com', color: 'from-orange-500/10 to-amber-500/10' },
  { name: 'riverabycanoly.com', url: 'https://riverabycanoly.com/', color: 'from-pink-500/10 to-rose-500/10' },
  { name: 'ngpm.co.nz', url: 'https://ngpm.co.nz/', color: 'from-violet-500/10 to-purple-500/10' },
  { name: 'jrvinternational.com', url: 'https://jrvinternational.com/', color: 'from-sky-500/10 to-cyan-500/10' },
  { name: 'ajlead.com', url: 'http://ajlead.com', color: 'from-gold-400/10 to-yellow-500/10' },
];

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="section-badge mb-4 inline-block">Featured Projects</span>
          <h2 className="section-title">
            Projects we have <span className="gradient-text">done</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${project.color} rounded-2xl p-5 border border-transparent hover:border-gold-400/20 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-sm font-heading font-bold text-navy-500 uppercase">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-500 text-sm">
                      {project.name}
                    </h3>
                    <p className="text-brand-bodyGray text-xs">Website</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-brand-bodyGray opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
