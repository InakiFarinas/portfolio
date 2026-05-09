import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SectionContainer from "./SectionContainer";

export default function Hero() {
	return (
		<SectionContainer
			id="about"
			ariaLabel="Presentación personal"
			className="flex-col sm:flex-row gap-12 py-16 items-center"
			animate
		>
			{/* Avatar */}
			<div className="flex-shrink-0">
				<img
					src="/avatar.jpg"
					alt="Foto de Iñaki M. Fariñas, desarrollador Web Fullstack"
					width={200}
					height={200}
					className="rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
				/>
			</div>

			{/* Texto principal */}
			<div className="flex flex-col gap-6 max-w-2xl">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
						Hola, soy{" "}
						<span className="text-blue-600 dark:text-blue-400">Iñaki</span>
					</h1>
					<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
						Desarrollador Frontend Junior
					</p>
				</div>

				<p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
					Me enfoco en crear soluciones eficientes, escalables y de alto
					rendimiento. Estudiante de Tecnicatura en desarrollo de software.
				</p>

				{/* Botones + Redes sociales */}
				<div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
					{/* Botones */}
					<div className="flex gap-3">
						<a
							href="/cv.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
						>
							Ver CV
						</a>
						<a
							href="#contacto"
							className="px-6 py-2 rounded-lg font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-900 transition-colors"
						>
							Contactar
						</a>
					</div>

					{/* Redes sociales */}
					<div className="flex gap-4 text-2xl">
						<a
							href="https://github.com/InakiFarinas"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
							title="GitHub"
						>
							<FaGithub />
						</a>
						<a
							href="https://linkedin.com/in/inaki-farinas"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
							title="LinkedIn"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://wa.me/5491135959887?text=Hola%20Iñaki,%20quiero%20contactarte%20por%20tu%20portfolio"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="WhatsApp"
							className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition"
							title="WhatsApp"
						>
							<FaWhatsapp />
						</a>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
