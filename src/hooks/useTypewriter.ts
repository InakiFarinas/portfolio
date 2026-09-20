import { useEffect, useState } from "react";

/** Escribe `text` letra por letra cuando `active` pasa a true. Con movimiento reducido muestra todo de una vez. */
export function useTypewriter(text: string, active: boolean, speed = 28) {
	const reduce =
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!active || reduce) return;
		let i = 0;
		const id = setInterval(() => {
			i += 1;
			setCount(i);
			if (i >= text.length) clearInterval(id);
		}, speed);
		return () => clearInterval(id);
	}, [active, reduce, text, speed]);

	if (reduce) return text;
	return active ? text.slice(0, count) : "";
}
