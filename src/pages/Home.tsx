import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutPreview from '../components/home/AboutPreview';
import ServicesGrid from '../components/home/ServicesGrid';
import HowItWorks from '../components/home/HowItWorks';
import Stats from '../components/home/Stats';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutPreview />
      <ServicesGrid />
      <HowItWorks />
      <Stats />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
