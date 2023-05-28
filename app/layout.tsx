import { PropsWithChildren } from 'react';
import { Arvo, Source_Code_Pro } from 'next/font/google';
import Header from './components/Header';
import './styles/index.css';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

const arvo = Arvo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-arvo',
  preload: true,
});
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-scp',
  preload: true,
});

export const metadata = {
  title: 'Jhonny Martinez',
  description: 'Jhonny Martinez Portfolio',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${arvo.variable} ${sourceCodePro.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        <main className="pt-20">{children}</main>
        <div className="floating-links">
          <SocialLinks className="flex-col py-8 px-5 gap-6" />
        </div>{' '}
        <Footer />
      </body>
    </html>
  );
}
