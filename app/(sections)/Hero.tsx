import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="section-container xl:px-[124px] xl:py-28 xl:gap-6">
      <pre className="text-accent">Hello world! 👋 My name is</pre>
      <h1 className="text-white hero-text">
        Jhonny Martinez
        <span className="block text-headings">I create software products.</span>
      </h1>
      <p className="sm:max-w-[320px] xl:max-w-[500px]">
        I’m a <span className="text-primary">Software Engineer</span> with the mission of create
        unique products and digital experiences. I’m currently on the chase of my next role.
      </p>
      <Button className="mt-[46px]" href="/resume.pdf" target="_blank" download>
        Download my resume
      </Button>
    </section>
  );
}
