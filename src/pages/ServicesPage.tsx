import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Card from '../components/Card';
import { AnimatedSection, useStaggerReveal, useScrollToTop } from '../hooks/useAnimations';
import { services } from '../data/services';
import {
  CheckCircleIcon,
  ArrowRightIcon,
} from '../components/Icons';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,499',
    description: 'Perfect for small businesses getting started online.',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '30-day support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$5,999',
    description: 'For growing businesses that need a robust online presence.',
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'CMS integration',
      'Advanced SEO optimization',
      'Analytics dashboard',
      '90-day support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale solutions for established businesses.',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce integration',
      'API & third-party integrations',
      'Dedicated project manager',
      'Ongoing support & maintenance',
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  useScrollToTop();
  const [servicesRef, servicesVisible] = useStaggerReveal(services.length, 120);
  const [pricingRef, pricingVisible] = useStaggerReveal(pricingTiers.length, 150);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
              Our Services
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
              Everything You Need to
              <br />
              <span className="text-accent">Succeed Online</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              From design to development to ongoing optimization, we provide
              end-to-end web solutions tailored to your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <AnimatedSection>
          <SectionHeading
            label="What We Offer"
            title="Comprehensive Digital Services"
            description="Each service is designed to work independently or as part of a complete digital strategy."
          />
        </AnimatedSection>

        <div ref={servicesRef} className="grid gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`transition-all duration-500 ${
                servicesVisible[i]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card
                icon={service.icon}
                title={service.title}
                description={service.longDescription}
                className="h-full"
              >
                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper background="light">
        <AnimatedSection>
          <SectionHeading
            label="Pricing"
            title="Transparent Pricing, No Surprises"
            description="Choose a package that fits your needs, or contact us for a custom quote."
          />
        </AnimatedSection>

        <div ref={pricingRef} className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-surface p-8 transition-all duration-500 ${
                tier.popular
                  ? 'border-accent shadow-xl shadow-accent/10 scale-[1.02]'
                  : 'border-border hover:border-accent/20 hover:shadow-lg'
              } ${
                pricingVisible[i]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-text-primary">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-text-primary">
                  {tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className="text-text-muted">/project</span>
                )}
              </div>
              <p className="mt-3 text-sm text-text-secondary">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                as="link"
                to="/contact"
                variant={tier.popular ? 'primary' : 'outline'}
                className="mt-8 w-full"
              >
                {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Schedule a free consultation and we'll help you identify the right
              solution for your business goals.
            </p>
            <Button as="link" to="/contact" size="lg" className="mt-8">
              Schedule Free Consultation
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
