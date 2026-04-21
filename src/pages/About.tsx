import { Target, Eye, Heart, Zap, Shield, Lightbulb, Users, Award } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';
import { useScrollReveal } from '../hooks/useAnimations';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide affordable, high-quality web design solutions that help businesses of all sizes establish a strong online presence and achieve their digital goals.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To become the go-to web design agency for businesses seeking quality, affordability, and reliability in their digital transformation journey.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    desc: 'Transparency, quality, affordability, and customer satisfaction drive everything we do. We believe every business deserves a great website.',
  },
];

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'We understand time is money. Our streamlined process ensures your website is delivered quickly without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    desc: 'No hidden fees, no surprises. You get a clear, fixed quote before we begin so you know exactly what you\'re investing.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    desc: 'Our team brings fresh, innovative ideas to every project, ensuring your website stands out from the competition.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: 'Our 24/6 support team is always available to help with updates, troubleshooting, and guidance for your website.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    desc: 'With 285+ completed projects and a 4.8 client rating, our results speak for themselves.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'We don\'t just build websites—we build tools that drive traffic, engagement, and revenue for your business.',
  },
];

export default function About() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollReveal();

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Get to know the passionate team behind Website Work 4 Less and our commitment to your success."
        breadcrumb="About"
      />

      {/* Our Story */}
      <section className="section-padding bg-white" ref={storyRef}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`transition-all duration-700 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-lightYellow/50 via-brand-peach/40 to-brand-pink/40 rounded-3xl aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-xl mx-auto mb-6 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-300 rounded-2xl flex items-center justify-center">
                        <span className="text-navy-500 font-heading font-extrabold text-3xl">W</span>
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-navy-500 text-2xl mb-2">Website Work 4 Less</h3>
                    <p className="text-brand-bodyGray">Faster · Cheaper · Smoother</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400/20 rounded-3xl blur-xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-pink/20 rounded-3xl blur-xl" />
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <span className="section-badge mb-4 inline-block">Our Story</span>
              <h2 className="section-title mb-6">
                Empowering Businesses with{' '}
                <span className="gradient-text">Affordable Web Solutions</span>
              </h2>
              <p className="text-brand-bodyGray leading-relaxed mb-6">
                We're a passionate team committed to providing affordable and high-quality web
                design solutions. With a focus on fast delivery, transparent pricing, and
                personalized service, we make sure your website meets all your needs.
              </p>
              <p className="text-brand-bodyGray leading-relaxed mb-6">
                Our goal is to help businesses of all sizes create a strong online presence with
                ease and confidence. Whether you're starting fresh or revamping your site, we
                make it easy and stress-free.
              </p>
              <p className="text-brand-bodyGray leading-relaxed">
                At Website Work 4 Less, we specialize in delivering high-impact digital marketing
                solutions with complete transparency and no hidden fees. Before we begin, you'll
                receive a clear, fixed quote—so you always know exactly what you're getting. Our team
                executes campaigns quickly and efficiently while maintaining top-tier quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-brand-lightGray" ref={valuesRef}>
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="section-badge mb-4 inline-block">What Drives Us</span>
            <h2 className="section-title">
              Our Mission, Vision & <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-8 border border-gray-100 card-hover text-center transition-all duration-700 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-navy-500 text-xl mb-3">{item.title}</h3>
                <p className="text-brand-bodyGray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Why Work With Us */}
      <section className="section-padding bg-white" ref={reasonsRef}>
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="section-badge mb-4 inline-block">Why Choose Us</span>
            <h2 className="section-title">
              Why Work With <span className="gradient-text">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group bg-brand-lightGray rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:shadow-black/5 border border-transparent hover:border-gray-100 transition-all duration-500 ${
                  reasonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-navy-500 text-base mb-2">
                  {reason.title}
                </h3>
                <p className="text-brand-bodyGray text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
