'use client';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contacto" className="bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-[#0d1117] dark:via-[#161b22] dark:to-[#0d1117] max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-8 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80">
      
      {/* Formulario lado izquierdo */}
      <form className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contáctame</h2>

        <input
          type="text"
          placeholder="Nombre"
          className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
        />
        <textarea
          placeholder="Mensaje"
          className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
          rows={6}
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 shadow-md transition"
        >
          Enviar
        </button>
      </form>

      {/* Información y mapa lado derecho */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="text-gray-900 dark:text-gray-100 space-y-2">
          <p>📧 <Link href="mailto:inakifarinas04@gmail.com" className="underline text-blue-500 hover:text-cyan-500 transition">inakifarinas04@gmail.com</Link></p>
          <p>📞 +54 11 1234-5678</p>
          <p>🏢 Conurbano Bonaerense, Argentina</p>
        </div>

        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 shadow-sm">
          <iframe
            title="Conurbano BA"
            src="https://www.google.com/maps?q=conurbano+bonaerense&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
