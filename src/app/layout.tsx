import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Contenedor principal */}
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">

          {/* Header */}
          <header className="w-full py-6 px-6 sm:px-20 flex justify-between items-center max-w-6xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl shadow-sm transition-colors duration-500">
            <h1 className="text-2xl font-bold text-foreground">Iñaki.dev</h1>
            <nav className="flex gap-6 text-gray-700 dark:text-gray-300">
              <a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a>
              <a href="#contacto" className="hover:text-accent transition-colors">Contacto</a>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-grow w-full font-sans min-h-screen px-8 sm:px-20 py-12 flex flex-col gap-20 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-inner transition-colors duration-500">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full py-8 px-6 sm:px-20 mt-12 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl shadow-sm transition-colors duration-500">
            © {new Date().getFullYear()} Iñaki M. Fariñas. Todos los derechos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
