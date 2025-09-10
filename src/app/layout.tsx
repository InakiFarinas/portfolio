import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ThemeProvider from '@/theme/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Iñaki.dev',
  description: 'Portfolio de Iñaki.dev, desarrollador Fullstack',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1 w-full font-sans px-8 sm:px-20 py-12 flex flex-col gap-40 bg-white dark:bg-black mx-auto transition-colors duration-500">{children}</main>
          <footer className="w-full py-8 px-6 mt-20 sm:px-20 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117] backdrop-blur-md shadow-sm transition-colors duration-500">© {new Date().getFullYear()} Iñaki M. Fariñas. Todos los derechos reservados.</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
