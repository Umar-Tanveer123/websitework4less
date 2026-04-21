import { useScrollReveal } from '../../hooks/useAnimations';

const steps = [
  {
    num: '01',
    title: 'Free Consulting',
    desc: 'Get expert advice tailored to your business needs.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    num: '02',
    title: 'Launch Project',
    desc: 'Find the perfect solution for your business to drive success.',
    color: 'from-gold-400 to-amber-500',
  },
  {
    num: '03',
    title: 'Sketch & Design',
    desc: 'Bring your ideas to life with creative and unique designs.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Powerful, scalable solutions to bring your vision to reality.',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="section-badge mb-4 inline-block">How It Works</span>
          <h2 className="section-title">
            4 simple steps to your{' '}
            <span className="gradient-text">perfect results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500/20 via-gold-400/20 to-purple-500/20" />

          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step number circle */}
              <div className="relative inline-flex mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}
                >
                  <span className="text-white font-heading font-bold text-lg">{step.num}</span>
                </div>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-xl opacity-30`}
                />
              </div>

              <h3 className="font-heading font-bold text-navy-500 text-lg mb-2">{step.title}</h3>
              <p className="text-brand-bodyGray text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
