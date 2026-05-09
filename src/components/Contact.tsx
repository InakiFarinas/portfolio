"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import SectionContainer from "./SectionContainer";

export default function Contact() {
	const [copied, setCopied] = useState(false);
	const [state, handleSubmit] = useForm("mvgbldly");
	const [localError, setLocalError] = useState("");
	const nombreRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const mensajeRef = useRef<HTMLTextAreaElement>(null);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("inakifarinas04@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	const customSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLocalError("");
		const nombre = nombreRef.current?.value.trim();
		const email = emailRef.current?.value.trim();
		const mensaje = mensajeRef.current?.value.trim();

		if (!nombre || !email || !mensaje) {
			setLocalError("Todos los campos son obligatorios.");
			return;
		}
		handleSubmit(e);
	};

	// Limpiar el formulario cuando el envío fue exitoso
	useEffect(() => {
		if (state.succeeded) {
			if (nombreRef.current) nombreRef.current.value = "";
			if (emailRef.current) emailRef.current.value = "";
			if (mensajeRef.current) mensajeRef.current.value = "";
		}
	}, [state.succeeded]);

	return (
		<SectionContainer
			id="contacto"
			ariaLabel="Formulario de contacto"
			className="flex-col"
			animate
		>
			<div className="flex flex-col gap-2 mb-2">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
					Contáctame
				</h2>
				<p className="text-gray-600 dark:text-gray-400 text-base">
					Estoy disponible para nuevos proyectos y colaboraciones.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-12 mt-8">
				{/* Formulario */}
				<form
					className="flex flex-col gap-4"
					onSubmit={customSubmit}
					method="POST"
					noValidate
				>
					<label htmlFor="nombre" className="sr-only">
						Nombre
					</label>
					<input
						ref={nombreRef}
						id="nombre"
						name="nombre"
						type="text"
						placeholder="Tu nombre"
						required
						aria-required="true"
						className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
					/>
					<ValidationError
						prefix="Nombre"
						field="nombre"
						errors={state.errors}
					/>

					<label htmlFor="email" className="sr-only">
						Email
					</label>
					<input
						ref={emailRef}
						id="email"
						name="email"
						type="email"
						placeholder="Tu email"
						required
						aria-required="true"
						className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />

					<label htmlFor="mensaje" className="sr-only">
						Mensaje
					</label>
					<textarea
						ref={mensajeRef}
						id="mensaje"
						name="mensaje"
						placeholder="Tu mensaje"
						required
						aria-required="true"
						className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
						rows={5}
					/>
					<ValidationError
						prefix="Mensaje"
						field="mensaje"
						errors={state.errors}
					/>
					{localError && (
						<p className="text-red-600 dark:text-red-400 font-semibold">
							{localError}
						</p>
					)}

					<button
						type="submit"
						aria-label="Enviar mensaje de contacto"
						className={`px-6 py-2 rounded-lg font-medium shadow-md transition-colors ${state.submitting ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"}`}
						disabled={state.submitting}
					>
						{state.submitting ? "Enviando..." : "Enviar"}
					</button>

					{state.succeeded && (
						<p className="text-green-600 dark:text-green-400 font-semibold">
							¡Mensaje enviado correctamente!
						</p>
					)}
				</form>

				{/* Información de contacto */}
				<div className="flex flex-col gap-6">
					<div className="space-y-4">
						<div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
							<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
								Email
							</p>
							<p className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
								<a
									href="mailto:inakifarinas04@gmail.com"
									className="text-blue-600 dark:text-blue-400 hover:underline"
								>
									inakifarinas04@gmail.com
								</a>
								<button
									type="button"
									onClick={handleCopyEmail}
									aria-label="Copiar email al portapapeles"
									aria-live="polite"
									title="Copiar email"
									className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
								>
									<FaRegCopy className="text-gray-600 dark:text-gray-400 text-sm" />
								</button>
								{copied && (
									<span className="text-green-600 dark:text-green-400 text-xs font-semibold">
										¡Copiado!
									</span>
								)}
							</p>
						</div>

						<div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
							<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
								Teléfono
							</p>
							<p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
								+54 9 11 3595-9887
							</p>
						</div>

						<div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
							<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
								Ubicación
							</p>
							<p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
								Conurbano Bonaerense, Argentina
							</p>
						</div>
					</div>

					<div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
						<iframe
							title="Conurbano BA"
							src="https://www.google.com/maps?q=conurbano+bonaerense&output=embed"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							loading="lazy"
							aria-label="Mapa de ubicación Conurbano Bonaerense"
						></iframe>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
