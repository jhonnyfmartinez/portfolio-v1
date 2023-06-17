// istanbul ignore file
import { Metadata } from 'next';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Featured from './sections/Featured';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const metaTitle = 'Jhonny Martinez | Software Engineer';
const metaDescription = `Jhonny Martinez is a Software Engineer who crafts unique software solutions and digital experiences that solve real-world problems.`;

const metaOgImages = [
  {
    url: 'https://jfmartinez.dev/og.jpg',
    width: 1200,
    height: 630,
    alt: metaTitle,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL('https://jfmartinez.dev/'),
  title: metaTitle,
  description: metaDescription,
  keywords: [
    'Jhonny Martinez',
    'Jhonny',
    'Martinez',
    'Software Engineer',
    'Software',
    'Engineer',
    'Full Stack',
    'Full Stack Engineer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://jfmartinez.dev',
    title: metaTitle,
    description: metaDescription,
    images: metaOgImages,
  },
  twitter: {
    site: '@jhotinez',
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: metaOgImages,
  },
};

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
