import './globals.css';
import { Poppins, Quantico } from 'next/font/google';
import Navbar from '@/components/Navbar';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
});

export const quantico = Quantico({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quantico',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${quantico.variable}`}>
      <body className={`antialiased`} cz-shortcut-listen="false">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
