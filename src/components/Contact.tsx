'use client';
import { useForm, ValidationError } from '@formspree/react';
import { useRef, useState, useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import SectionContainer from './SectionContainer';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [state, handleSubmit] = useForm('mvgbldly');
  const [localError, setLocalError] = useState('');
  const nombreRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('inakifarinas04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const customSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError('');
    const nombre = nombreRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const mensaje = mensajeRef.current?.value.trim();

    if (!nombre || !email || !mensaje) {
      setLocalError('Todos los campos son obligatorios.');
      return;
    }
    handleSubmit(e);
  };

  // Limpiar el formulario cuando el envío fue exitoso
  useEffect(() => {
    if (state.succeeded) {
      if (nombreRef.current) nombreRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (mensajeRef.current) mensajeRef.current.value = '';
    }
  }, [state.succeeded]);

  return (
    <SectionContainer
      id="contacto"
      ariaLabel="Formulario de contacto"
      className="flex-col md:flex-row"
      animate
    >
      {/* Formulario lado izquierdo */}
      <form className="flex-1 flex flex-col gap-4" onSubmit={customSubmit} method="POST" noValidate>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contáctame</h2>

        <label htmlFor="nombre" className="sr-only">
          Nombre
        </label>
        <input ref={nombreRef} id="nombre" name="nombre" type="text" placeholder="Nombre" required aria-required="true" className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition" />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input ref={emailRef} id="email" name="email" type="email" placeholder="Email" required aria-required="true" className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="mensaje" className="sr-only">
          Mensaje
        </label>
        <textarea ref={mensajeRef} id="mensaje" name="mensaje" placeholder="Mensaje" required aria-required="true" className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition" rows={6} />
        <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        {localError && <p className="text-red-600 dark:text-red-400 font-semibold">{localError}</p>}

        <button type="submit" aria-label="Enviar mensaje de contacto" className={`px-6 py-3 rounded-lg font-semibold shadow-md transition ${state.submitting ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500'}`} disabled={state.submitting}>
          {state.submitting ? 'Enviando...' : 'Enviar'}
        </button>

        {state.succeeded && <p className="text-green-600 dark:text-green-400 font-semibold">¡Mensaje enviado correctamente!</p>}
      </form>

      {/* Información y mapa lado derecho */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="text-gray-900 dark:text-gray-100 space-y-2">
          <p>
            📧{' '}
            <a href="mailto:inakifarinas04@gmail.com" className="underline text-blue-500 hover:text-cyan-500 transition">
              inakifarinas04@gmail.com
            </a>
            <button type="button" onClick={handleCopyEmail} aria-label="Copiar email al portapapeles" aria-live="polite" title="Copiar email al portapapeles" className="ml-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <FaRegCopy className="inline text-lg" />
            </button>
            {copied && <span className="ml-2 text-green-600 dark:text-green-400 text-sm font-semibold">¡Copiado!</span>}
          </p>
          <p>📞 +54 9 11 3595-9887</p>
          <p>🏢 Conurbano Bonaerense, Argentina</p>
        </div>

        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 shadow-sm">
          <iframe title="Conurbano BA" src="https://www.google.com/maps?q=conurbano+bonaerense&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" aria-label="Mapa de ubicación Conurbano Bonaerense"></iframe>
        </div>
      </div>
    </SectionContainer>
  );
}
