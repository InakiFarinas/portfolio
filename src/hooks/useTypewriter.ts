import { useEffect, useState } from "react";

/**
 * Escribe `text` cuando `active` pasa a true, en `duration` ms totales.
 * Se calcula por tiempo transcurrido, así termina aunque el navegador frene los timers.
 * Con movimiento reducido muestra todo de una vez.
 */
export function useTypewriter(text: string, active: boolean, duration = 450) {
	const reduce =
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!active || reduce) return;
		const start = Date.now();
		const id = setInterval(() => {
			const next = Math.min(
				text.length,
				Math.ceil(((Date.now() - start) / duration) * text.length),
			);
			setCount(next);
			if (next >= text.length) clearInterval(id);
		}, 30);
		return () => clearInterval(id);
	}, [active, reduce, text, duration]);

	if (reduce) return text;
	return active ? text.slice(0, count) : "";
}
