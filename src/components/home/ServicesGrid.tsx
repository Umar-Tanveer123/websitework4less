import {
  Monitor,
  Palette,
  Fingerprint,
  FileText,
  Megaphone,
  Share2,
  Search,
  BarChart3,
  Target,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useAnimations';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    desc: 'Custom websites built for performance and seamless user experience, tailored to your business needs.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creative and impactful designs that elevate your brand and engage your audience.',
  },
  {
    icon: Fingerprint,
    title: 'Brand Development',
    desc: 'Craft your unique brand identity that resonates with your audience to drive business growth.',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    desc: 'Create targeted, compelling content that drives engagement and supports your business objectives.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Comprehensive digital marketing strategies to expand your reach and boost conversions.',
  },
  {
    icon: Share2,
    title: 'Social Media Advertising',
    desc: 'Strategic social media campaigns that connect with your target audience and drive results.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    desc: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
  },
  {
    icon: BarChart3,
    title: 'Social Media Optimization',
    desc: 'Optimize your social presence for maximum visibility and engagement across platforms.',
  },
  {
    icon: Target,
    title: 'Google & Facebook Ads',
    desc: 'Boost your online visibility and sales with expert ad campaign management for maximum ROI.',
  },
];

export default function ServicesGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-brand-lightGray" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="section-badge mb-4 inline-block">Our Services</span>
          <h2 className="section-title max-w-3xl mx-auto text-balance">
            Transform Your Digital Presence and Achieve Your{' '}
            <span className="gradient-text">Business Goals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-400/30 card-hover relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-400/0 to-gold-400/0 group-hover:from-gold-400/5 group-hover:to-brand-peach/5 rounded-full -translate-y-16 translate-x-16 transition-all duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-navy-500 text-base mb-2">
                  {service.title}
                </h3>
                <div className="w-8 h-0.5 bg-gold-400/30 mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-brand-bodyGray text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
