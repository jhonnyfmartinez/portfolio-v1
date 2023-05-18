import { PropsWithChildren } from 'react';
import { Arvo, Source_Code_Pro } from 'next/font/google';
import Header from './components/Header';
import './styles/index.css';

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
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}
