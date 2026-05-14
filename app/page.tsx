import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParaQuem from '@/components/ParaQuem';
import About from '@/components/About';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ParaQuem />
      <About />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
}
