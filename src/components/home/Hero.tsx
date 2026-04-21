import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const clientLogos = ['PICCASO', 'SkyCloud.', 'TALK & ACTION', 'essential*', 'OUAKEE', 'TOTB+'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-lightYellow via-brand-peach to-brand-pink animate-gradient bg-300%" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-gold-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl" />
        
        {/* Geometric decorations */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-32 right-[20%] w-20 h-20 border-2 border-navy-500/10 rounded-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-[15%] w-16 h-16 border-2 border-gold-400/20 rounded-full"
        />
        <div className="absolute top-60 right-[35%] w-3 h-3 bg-gold-400 rounded-full animate-float-fast" />
        <div className="absolute bottom-60 left-[30%] w-4 h-4 bg-navy-500/20 rounded-full animate-float" />
      </div>

      {/* Content */}
      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/40">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-navy-500/80">240+ Businesses Trust Us</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-navy-500 mb-3 tracking-tight"
          >
            WEBSITE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-4"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy-500/80 tracking-wide">
              WORK 4 LESS
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl font-heading font-semibold text-gold-400 tracking-[0.3em] uppercase mb-8"
          >
            Faster · Cheaper · Smoother
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-navy-500/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Website Work 4 Less offers fast, affordable, and reliable website solutions with upfront
            quotes and no hidden fees. Join the 240+ businesses and organizations that we are proud
            to have worked with.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-gold-400/20">
              Start Building
              <div className="w-8 h-8 bg-navy-500/10 rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link to="/services" className="btn-secondary text-base px-10 py-4 border-navy-500/20 text-navy-500/70 hover:bg-navy-500 hover:text-white hover:border-navy-500">
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Client Logo Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-navy-500/40 mb-6 font-medium uppercase tracking-wider">
            Trusted by leading brands
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-lightYellow/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-peach/80 to-transparent z-10" />
            <div className="flex animate-ticker">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-10 py-4"
                >
                  <span className="text-lg font-heading font-bold text-navy-500/30 whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
