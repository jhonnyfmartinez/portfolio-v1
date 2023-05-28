import Button from '../components/Button';

export default function Hero() {
  return (
    <section
      className="section-container xl:px-[124px] xl:py-28 xl:gap-4"
      data-testid="hero-section">
      <pre className="text-accent">Hello world! 👋 My name is</pre>
      <h1 className="text-white hero-text leading-tight">
        Jhonny Martinez.
        <span className="block text-text">I craft software solutions.</span>
      </h1>
      <p className="sm:max-w-[450px] xl:max-w-[500px]">
        As a <span className="text-primary">Software Engineer</span>, I&apos;m passionate about
        creating unique products and digital experiences that solve real-world problems. I&apos;m
        currently on the lookout for my next challenge, where I can use my skills to make a positive
        impact.
      </p>
      <Button className="mt-[46px]" href="/resume.pdf" target="_blank" download>
        Download my resume
      </Button>
    </section>
  );
}
