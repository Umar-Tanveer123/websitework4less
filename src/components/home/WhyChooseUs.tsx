import { Shield, Settings, Headphones } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useAnimations';

const features = [
  {
    icon: Shield,
    title: 'Scalable & Secure',
    description:
      "Your website's security is our priority. We ensure that your website stands out and meets all of your goals.",
    gradient: 'from-blue-500/10 to-indigo-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description:
      'Every business is unique, and so are your website needs. We create tailored solutions that reflect your brand, ensuring your website stands out and meets all your goals.',
    gradient: 'from-gold-400/10 to-amber-500/10',
    iconBg: 'bg-gold-400/10',
    iconColor: 'text-gold-400',
  },
  {
    icon: Headphones,
    title: '24/6 Premium Support',
    description:
      'Whether you need updates, troubleshooting, or guidance, our team is always here to keep your website performing at its best. Call/Text: 848-368-8867.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="section-badge mb-4 inline-block">Why Choose Us</span>
          <h2 className="section-title text-balance">
            Allow us to take your business to the{' '}
            <span className="gradient-text">next level</span>
          </h2>
        </div>

        {/* Why Choose Us Description Card */}
        <div
          className={`bg-brand-lightGray rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-500 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-brand-bodyGray leading-relaxed">
              At Website Work 4 Less, we specialize in delivering high-impact digital marketing
              solutions with complete transparency and no hidden fees. Before we begin, you'll
              receive a clear, fixed quote—so you always know exactly what you're getting. Our team
              executes campaigns quickly and efficiently while maintaining top-tier quality. And if
              you're not fully satisfied, we continue refining your strategy until it's perfect. No
              pressure—just measurable results that help your business grow.
            </p>
          </div>
          <div className="flex-shrink-0">
            {/* Decorative SVG illustration */}
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-brand-peach/30 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-gold-400/20 rounded-3xl -rotate-3" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold-400/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-brand-bodyGray">Research · Design · Build</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-gradient-to-br ${feature.gradient} rounded-2xl p-7 border border-transparent hover:border-gold-400/20 card-hover transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div
                className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="font-heading font-bold text-navy-500 text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-bodyGray text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
