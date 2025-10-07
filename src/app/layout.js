import { Poppins } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Portafolio | Profesora de Idiomas',
  description: 'Aprende inglés, japonés y español con clases personalizadas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}