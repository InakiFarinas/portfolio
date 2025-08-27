export default function Contact() {
  return (
    <section className="flex flex-col gap-4 max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-md border border-accent/20 transition-colors duration-300">
      {/* Título */}
      <h2 className="text-3xl font-bold text-foreground">Contacto</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Podés escribirme a{" "}
        <a
          href="mailto:inaki@example.com"
          className="text-accent hover:underline transition-colors duration-300"
        >
          inaki@example.com
        </a>{" "}
        o visitar mis redes:
      </p>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/InakiFarinas"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/inaki/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
