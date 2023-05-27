import About from './sections/About';
import Experience from './sections/Experience';
import Featured from './sections/Featured';
import Hero from './sections/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Featured />
    </>
  );
}
