import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useAnimations';

const testimonials = [
  {
    name: 'Michael R.',
    role: 'Small Business Owner',
    text: 'Website Work 4 Less transformed our online presence completely. Their team was professional, responsive, and delivered beyond our expectations. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    role: 'Startup Founder',
    text: 'Incredible value for money. They built us a stunning website in record time. The transparent pricing meant no surprises, and the quality was top-notch.',
    rating: 5,
  },
  {
    name: 'David L.',
    role: 'Restaurant Owner',
    text: 'From design to launch, the whole experience was smooth and stress-free. Our new website has significantly increased our online orders. Thank you!',
    rating: 5,
  },
  {
    name: 'Amanda T.',
    role: 'E-commerce Manager',
    text: 'Their SEO and digital marketing services doubled our traffic within months. The team is knowledgeable, dedicated, and truly cares about results.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-brand-lightGray" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="section-badge mb-4 inline-block">Testimonials</span>
          <h2 className="section-title">
            Client feedback & <span className="gradient-text">reviews</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Crafting quality websites without breaking the bank. Simple, fast, and guaranteed to
            impress. Let's build something amazing together!
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Active testimonial */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 border border-gray-100 mb-8 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-gold-400/10" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-navy-500 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-300 rounded-full flex items-center justify-center">
                  <span className="text-navy-500 font-heading font-bold text-lg">
                    {testimonials[active].name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-navy-500">
                    {testimonials[active].name}
                  </h4>
                  <p className="text-brand-bodyGray text-sm">{testimonials[active].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 bg-gold-400'
                    : 'w-2.5 bg-navy-500/15 hover:bg-navy-500/30'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
