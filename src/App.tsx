import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Techs from "@/components/Techs";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ThemeProvider from "@/theme/theme-provider";

export default function App() {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<div className="antialiased flex flex-col min-h-screen">
				<Header />
				<main className="flex-1 w-full font-sans px-6 sm:px-20 py-16 flex flex-col gap-24 bg-white dark:bg-[#0d1117] mx-auto transition-colors duration-500">
					<Hero />
					<Projects />
					<Techs />
					<Contact />
				</main>
				<footer className="w-full py-6 px-6 sm:px-20 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0d1117] transition-colors duration-500">
					© {new Date().getFullYear()} Iñaki M. Fariñas. Todos los derechos
					reservados.
				</footer>
			</div>
		</ThemeProvider>
	);
}
