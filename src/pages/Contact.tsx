import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import { useScrollReveal } from '../hooks/useAnimations';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'info@websitework4less.com',
    subtitle: 'We respond within 24 hours',
    link: 'mailto:info@websitework4less.com',
  },
  {
    icon: Phone,
    title: 'Call / Text',
    detail: '848-368-8867',
    subtitle: 'Available 24/6 for support',
    link: 'tel:8483688867',
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'United States',
    subtitle: 'Serving clients nationwide',
    link: null,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    detail: 'Mon - Sat: 9AM - 9PM',
    subtitle: 'Eastern Time (ET)',
    link: null,
  },
];

const serviceOptions = [
  'Web Development',
  'Graphic Design',
  'Brand Development',
  'Content Strategy',
  'Digital Marketing',
  'Social Media Advertising',
  'SEO / SMO',
  'Google & Facebook Ads',
  'Other',
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Frontend only - no backend integration
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to start your project? Get in touch with our team and let's build something amazing together."
        breadcrumb="Contact"
      />

      {/* Contact Info Cards */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`group bg-brand-lightGray rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:shadow-black/5 border border-transparent hover:border-gray-100 transition-all duration-700 text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-heading font-bold text-navy-500 text-sm mb-1">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-navy-500 font-medium hover:text-gold-400 transition-colors block mb-1"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-navy-500 font-medium mb-1">{info.detail}</p>
                )}
                <p className="text-brand-bodyGray text-xs">{info.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-black/5">
                <h2 className="text-2xl font-heading font-bold text-navy-500 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-brand-bodyGray text-sm mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-navy-500 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-brand-bodyGray">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      }}
                      className="btn-primary mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightGray focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-200 text-navy-500 text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightGray focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-200 text-navy-500 text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightGray focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-200 text-navy-500 text-sm"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-navy-500 mb-1.5"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightGray focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-200 text-navy-500 text-sm appearance-none"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy-500 mb-1.5"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-lightGray focus:bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-200 text-navy-500 text-sm resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2">
              <div className="bg-navy-500 rounded-3xl p-8 text-white sticky top-28">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Let's Start Your Project
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Whether you need a brand new website, a redesign, or digital marketing services,
                  we're here to help. Get a free consultation and a transparent quote.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-400/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm mb-1">Free Consultation</h4>
                      <p className="text-white/40 text-xs">No obligation, just expert advice for your project.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-400/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm mb-1">Transparent Pricing</h4>
                      <p className="text-white/40 text-xs">Clear, fixed quotes with no hidden fees or surprises.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-400/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm mb-1">Fast Turnaround</h4>
                      <p className="text-white/40 text-xs">We deliver quality results quickly and efficiently.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-xs mb-3">Or reach us directly:</p>
                  <a
                    href="mailto:info@websitework4less.com"
                    className="text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors block mb-2"
                  >
                    info@websitework4less.com
                  </a>
                  <a
                    href="tel:8483688867"
                    className="text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors block"
                  >
                    848-368-8867
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
