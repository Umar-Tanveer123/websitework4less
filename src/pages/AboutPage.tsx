import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { AnimatedSection, useStaggerReveal, useScrollToTop } from '../hooks/useAnimations';
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years in Business' },
  { value: '50+', label: 'Team Members' },
];

const values = [
  {
    title: 'Quality First',
    description:
      'We never compromise on quality. Every project receives the same level of care, attention, and craftsmanship regardless of scope.',
  },
  {
    title: 'Transparent Communication',
    description:
      "Open, honest communication is the foundation of every successful project. You'll always know where things stand.",
  },
  {
    title: 'Results-Driven',
    description:
      'Beautiful design means nothing without results. We measure success by the impact our work has on your business.',
  },
  {
    title: 'Continuous Innovation',
    description:
      'The web never stops evolving, and neither do we. We stay at the forefront of technology to deliver modern solutions.',
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
];

const milestones = [
  { year: '2012', event: 'Founded as a freelance web design studio' },
  { year: '2015', event: 'Expanded to a full-service agency with 10 team members' },
  { year: '2018', event: 'Reached 100+ clients milestone, opened second office' },
  { year: '2021', event: 'Launched enterprise solutions division' },
  { year: '2024', event: 'Serving 200+ global clients with a 50+ person team' },
];

export default function AboutPage() {
  useScrollToTop();
  const [valuesRef, valuesVisible] = useStaggerReveal(values.length, 120);
  const [teamRef, teamVisible] = useStaggerReveal(team.length, 100);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
              The People Behind
              <br />
              <span className="text-accent">Your Success</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              We&apos;re a team of designers, developers, and strategists passionate
              about helping businesses thrive in the digital world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-surface-alt py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-accent lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection animation="slide-in-left">
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Our Story
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl text-text-primary leading-tight">
              From a Small Studio to a
              <br />
              Full-Service Agency
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              What started as a one-person freelance operation in 2012 has grown
              into a thriving agency serving businesses of all sizes. Our journey
              has been driven by a simple belief: every business deserves a
              world-class online presence, without the hassle. We make sure that we perfect your job until fully satisfied.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Today, our team of 50+ professionals combines diverse skills and
              backgrounds to deliver innovative digital solutions. We&apos;ve helped
              over 200 clients transform their online presence and achieve
              measurable growth.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right" delay={200}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-accent/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our team collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-surface p-5 shadow-xl hidden sm:block">
                <p className="text-3xl font-extrabold text-accent">12+</p>
                <p className="text-sm text-text-secondary">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper background="light">
        <AnimatedSection>
          <SectionHeading
            label="Our Journey"
            title="Key Milestones"
            description="A look back at the moments that shaped who we are today."
          />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl">
          {milestones.map((milestone, i) => (
            <AnimatedSection
              key={milestone.year}
              delay={i * 100}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Line */}
              {i < milestones.length - 1 && (
                <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-border" />
              )}
              {/* Dot */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md">
                {milestone.year}
              </div>
              <div className="pt-2.5">
                <p className="text-lg font-medium text-text-primary">
                  {milestone.event}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <AnimatedSection>
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="The principles that guide every decision we make and every project we deliver."
          />
        </AnimatedSection>

        <div ref={valuesRef} className="grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`flex gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-accent/20 ${
                valuesVisible[i]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper background="light">
        <AnimatedSection>
          <SectionHeading
            label="Our Team"
            title="Meet the Experts"
            description="A talented group of professionals dedicated to your success."
          />
        </AnimatedSection>

        <div ref={teamRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-500 ${
                teamVisible[i]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative mx-auto mb-5 h-56 w-56 overflow-hidden rounded-2xl">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl border border-border/50 transition-colors duration-300 group-hover:border-accent/30" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Want to Work With Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              We&apos;d love to hear about your project. Reach out and let&apos;s explore
              how we can bring your vision to life.
            </p>
            <Button as="link" to="/contact" size="lg" className="mt-8">
              Get in Touch
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
