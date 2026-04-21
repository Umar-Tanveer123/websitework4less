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
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import HowItWorks from '../components/home/HowItWorks';
import CTA from '../components/home/CTA';
import { useScrollReveal } from '../hooks/useAnimations';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    desc: 'Custom websites built for performance and seamless user experience, tailored to your business needs.',
    features: ['Responsive Design', 'Fast Load Times', 'SEO-Friendly Code', 'Custom Functionality'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creative and impactful designs that elevate your brand and engage your audience.',
    features: ['Logo Design', 'Marketing Materials', 'Social Media Graphics', 'Brand Identity'],
  },
  {
    icon: Fingerprint,
    title: 'Brand Development',
    desc: 'Craft your unique brand identity that resonates with your audience to drive business growth.',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Competitor Analysis'],
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    desc: 'Create targeted, compelling content that drives engagement and supports your business objectives.',
    features: ['Content Planning', 'Copywriting', 'Blog Management', 'Content Calendars'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Comprehensive digital marketing strategies to expand your reach and boost conversions.',
    features: ['Campaign Management', 'Analytics & Reporting', 'Lead Generation', 'Email Marketing'],
  },
  {
    icon: Share2,
    title: 'Social Media Advertising',
    desc: 'Strategic social media campaigns that connect with your target audience and drive results.',
    features: ['Ad Creative', 'Audience Targeting', 'A/B Testing', 'Performance Tracking'],
  },
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
  },
  {
    icon: BarChart3,
    title: 'Social Media Optimization (SMO)',
    desc: 'Optimize your social presence for maximum visibility and engagement across platforms.',
    features: ['Profile Optimization', 'Content Strategy', 'Community Management', 'Growth Tactics'],
  },
  {
    icon: Target,
    title: 'Google & Facebook Ads Management',
    desc: 'Boost your online visibility and sales with expert ad campaign management. We create, optimize, and monitor Google and Facebook ads to ensure maximum performance and ROI.',
    features: ['Campaign Setup', 'Budget Optimization', 'Conversion Tracking', 'Monthly Reports'],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive web solutions designed to transform your digital presence and drive measurable results."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="section-badge mb-4 inline-block">What We Offer</span>
            <h2 className="section-title max-w-3xl mx-auto">
              Transform Your Digital Presence with Our{' '}
              <span className="gradient-text">Expert Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-2xl p-7 border border-gray-100 hover:border-gold-400/20 card-hover relative overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold-400/0 to-gold-400/0 group-hover:from-gold-400/5 group-hover:to-brand-peach/5 rounded-full -translate-y-20 translate-x-20 transition-all duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gold-400/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 text-lg mb-3">
                    {service.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-gold-400/30 mb-4 group-hover:w-14 transition-all duration-300" />
                  <p className="text-brand-bodyGray text-sm leading-relaxed mb-5">{service.desc}</p>
                  
                  {/* Features list */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-brand-bodyGray">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      <CTA />
    </>
  );
}
