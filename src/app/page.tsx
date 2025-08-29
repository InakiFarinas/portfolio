import Hero from '@/components/Hero';
import Techs from '@/components/Techs';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AnimatedSection from '@/components/UI/AnimatedSection';

export default function Home() {
  return (
    <>
      <AnimatedSection id="About">
        <Hero />
      </AnimatedSection>

      <AnimatedSection id="proyectos">
        <Projects/>
      </AnimatedSection>

      <AnimatedSection id="tecnologias">
        <Techs/>
      </AnimatedSection>

      <AnimatedSection id="contacto">
        <Contact />
      </AnimatedSection>
    </>
  );
}
