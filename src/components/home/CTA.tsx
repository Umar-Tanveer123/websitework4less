import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-brand-peach" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_70%)]" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-[20%] w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-8 right-[20%] w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-navy-500" />
          <span className="text-sm font-semibold text-navy-500">Ready to get started?</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy-500 mb-4 max-w-3xl mx-auto">
          Let's build something amazing together!
        </h2>
        <p className="text-navy-500/60 text-lg mb-8 max-w-xl mx-auto">
          Get a free consultation and discover how we can transform your digital presence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:bg-navy-600 hover:shadow-xl active:scale-95 font-heading text-base"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:8483688867"
            className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm text-navy-500 font-semibold px-10 py-4 rounded-full border-2 border-navy-500/20 transition-all duration-300 hover:bg-white/50 active:scale-95 font-heading text-base"
          >
            Call: 848-368-8867
          </a>
        </div>
      </div>
    </section>
  );
}
