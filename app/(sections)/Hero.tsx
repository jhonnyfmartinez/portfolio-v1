import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="hero-container py-12 px-[124px] gap-6">
      <pre className="text-accent">Hello world! 👋 My name is</pre>
      <h1 className="text-white hero-text">
        Jhonny Martinez
        <span className="block text-headings">I create software products.</span>
      </h1>
      <p>
        I’m a <span className="text-primary">Software Engineer</span> with the mission of create{' '}
        <br />
        unique products and digital experiences. I’m currently <br /> on the chase of my next role.
      </p>
      <Button className="mt-[46px]" href="/resume.pdf" target="_blank" download>
        Download my resume
      </Button>
    </section>
  );
}
