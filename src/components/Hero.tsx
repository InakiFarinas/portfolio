import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-8 py-16 px-6 sm:px-20 max-w-6xl mx-auto rounded-xl border border-accent/20 shadow-lg shadow-accent/30 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image src="/avatar.jpg" alt="Iñaki" width={150} height={150} className="rounded-full border-2 border-accent" />
      </div>

      {/* Texto principal */}
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Hola, soy Iñaki M. Fariñas 👋</h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">Soy desarrollador Fullstack con experiencia en Next.js, React, Tailwind, Node.js y bases de datos MySQL. Me apasiona crear aplicaciones web modernas, optimizadas y con buen diseño. Bienvenido a mi portfolio.</p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 self-center sm:self-start">
          <a href="#proyectos" className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Ver proyectos
          </a>
          <a href="#contacto" className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Contactame
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 mt-6 justify-center sm:justify-start self-center sm:self-start text-2xl text-accent">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="transition transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="transition transform duration-300 ease-in-out hover:scale-110 hover:text-cyan-500">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
