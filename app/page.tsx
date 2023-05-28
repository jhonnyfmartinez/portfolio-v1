// istanbul ignore file
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Featured from './sections/Featured';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Featured />
      <Projects />
      <Contact />
    </>
  );
}
