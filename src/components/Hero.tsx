import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import SectionContainer from './SectionContainer';

export default function Hero() {
  return (
    <SectionContainer
      id="about"
      ariaLabel="Presentación personal"
      className="flex-col sm:flex-row py-16"
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image src="/avatar.jpg" alt="Foto de Iñaki M. Fariñas, desarrollador Web Fullstack" width={150} height={150} className="rounded-full border-2 border-cyan-500" />
      </div>

      {/* Texto principal */}
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#06b6d4] to-[#3b82f6] 
          dark:from-[#60a5fa] dark:via-[#22d3ee] dark:to-[#93c5fd] drop-shadow-md dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            Hola, soy
          </span>{' '}
          <span className="relative inline-block text-gray-900 dark:text-gray-100 transition">
            Iñaki M. Fariñas
            <span
              className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full
              bg-gradient-to-r from-[#2563eb] to-[#06b6d4]
              dark:from-[#60a5fa] dark:to-[#22d3ee]
              animate-pulse motion-reduce:animate-none"
            ></span>
          </span>
          <div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm 
            dark:bg-[#161b22]/70 dark:border-emerald-500/30 dark:text-emerald-300 backdrop-blur-sm transition-colors"
          >
            {/* Indicador animado */}
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            Disponible
          </div>
        </h1>

        <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">Soy desarrollador Web Fullstack. Me enfoco en crear soluciones eficientes, escalables y de alto rendimiento. Estudiante de Tecnicatura en desarrollo de software. Bienvenido a mi portfolio.</h2>

        {/* Botones + Redes sociales */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 mt-4 self-center sm:self-start">
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#06b6d4] to-[#2563eb] 
              shadow-md transform transition ease-in-out hover:scale-105 hover:shadow-lg"
            >
              Ver CV
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-6 text-2xl text-blue-500">
            {' '}
            <a href="https://github.com/InakiFarinas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition transform ease-in-out hover:scale-110 hover:text-[#06b6d4]" title="Ir al repositorio de GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/fariñas-iñaki-manuel-0b88232b6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition transform ease-in-out hover:scale-110 hover:text-[#06b6d4]" title="Ir a mi perfil en LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/5491135959887?text=Hola%20Iñaki,%20quiero%20contactarte%20por%20tu%20portfolio" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition transform ease-in-out hover:scale-110 hover:text-green-500" title="Contactar por WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
