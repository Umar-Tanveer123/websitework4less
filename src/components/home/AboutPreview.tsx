import { Link } from 'react-router-dom';
import { Star, ArrowRight, Trophy } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useAnimations';

export default function AboutPreview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Images/Visual */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-brand-lightYellow/40 via-brand-peach/30 to-brand-pink/30 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                      <path d="m9 10 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-bold text-navy-500 text-xl mb-1">Web Solutions</h4>
                  <p className="text-brand-bodyGray text-sm">Crafted for your brand</p>
                </div>
              </div>

              {/* Floating badge - Top Traffic */}
              <div className="absolute -top-4 -left-4 bg-navy-500 text-white rounded-2xl px-5 py-3 shadow-xl">
                <span className="text-gold-400 text-xs font-bold">#1 TOP TRAFFIC</span>
                <p className="font-heading font-bold text-sm">DEVELOPMENTS</p>
              </div>

              {/* Floating badge - Rating */}
              <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100">
                <div className="text-3xl font-heading font-extrabold text-navy-500">4.8</div>
                <p className="text-xs text-brand-bodyGray font-medium">Client Rating</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-300 rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="section-badge mb-4 inline-block">
              <Trophy className="w-4 h-4" />
              About Us
            </span>
            <h2 className="section-title mb-6 text-balance">
              Empowering Your Business with Affordable and Customized{' '}
              <span className="gradient-text">Web Solutions</span>
            </h2>
            <p className="text-brand-bodyGray leading-relaxed mb-6">
              We're a passionate team committed to providing affordable and high-quality web
              design solutions. With a focus on fast delivery, transparent pricing, and
              personalized service, we make sure your website meets all your needs. Our goal is
              to help businesses of all sizes create a strong online presence with ease and
              confidence.
            </p>

            <div className="bg-brand-lightGray rounded-2xl p-5 mb-8 border-l-4 border-gold-400">
              <h4 className="font-heading font-bold text-navy-500 mb-2">
                #1 Top Choice for Fast and Reliable Web Design
              </h4>
              <p className="text-brand-bodyGray text-sm">
                Whether you're starting fresh or revamping your site, we make it easy and
                stress-free.
              </p>
            </div>

            <Link
              to="/about"
              className="btn-primary inline-flex"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
