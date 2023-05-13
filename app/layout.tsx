import './styles/index.css';
import { Arvo, Source_Code_Pro } from 'next/font/google';

const arvo = Arvo({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-arvo' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-scp' });

export const metadata = {
  title: 'Jhonny Martinez',
  description: 'Jhonny Martinez Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${arvo.variable} ${sourceCodePro.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
