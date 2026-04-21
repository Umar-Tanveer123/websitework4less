import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const services = [
  'Web Development',
  'Graphic Design',
  'Brand Development',
  'Digital Marketing',
  'SEO & SMO',
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-500 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-2 mb-5 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-300 rounded-xl flex items-center justify-center shadow-lg shadow-gold-400/20">
                  <span className="text-navy-500 font-heading font-extrabold text-lg">W</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-white text-lg leading-tight">WEBSITE</span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-gold-400 uppercase leading-tight">
                    Work 4 Less
                  </span>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Crafting quality websites without breaking the bank. Simple, fast, and guaranteed to impress.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-400 flex items-center justify-center transition-all duration-300 group"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold text-white/50 group-hover:text-navy-500 uppercase transition-colors">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-white text-base mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-white text-base mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {service}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-white text-base mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@websitework4less.com"
                    className="flex items-start gap-3 text-white/50 hover:text-gold-400 transition-colors group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                    <span className="text-sm">info@websitework4less.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8483688867"
                    className="flex items-start gap-3 text-white/50 hover:text-gold-400 transition-colors group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                    <span className="text-sm">848-368-8867</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-white/50">
                    <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                    <span className="text-sm">United States</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-sm">
              © 2025 Website Work 4 Less. All Rights Reserved
            </p>
            <p className="text-white/30 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-gold-400 fill-gold-400" /> for your business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
