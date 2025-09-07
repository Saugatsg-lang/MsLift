// app/page.tsx
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import OurServices from '@/components/OurServices';
import OurProducts from '@/components/OurProducts';
import Career from '@/components/Career';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Section from '@/components/Section'; // <-- Scroll-offset wrapper

export default function Home() {
  return (
    <>
      <Section id="home">
        <Hero />
      </Section>

      <Section id="about-us">
        <AboutUs />
      </Section>

      <Section id="our-products">
        <OurProducts />
      </Section>

      <Section id="our-services">
        <OurServices />
      </Section>

      <Section id="career">
        <Career />
      </Section>

      <Section id="team">
        <Team />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}
