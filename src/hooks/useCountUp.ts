import { useState, useEffect } from "react";

export function useCountUp(finalValue: number, duration: number = 800) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = finalValue / (duration / 16); // ~60fps
		const interval = setInterval(() => {
			start += increment;
			if (start >= finalValue) {
				setCount(finalValue);
				clearInterval(interval);
			} else {
				setCount(Math.floor(start));
			}
		}, 16);

		return () => clearInterval(interval);
	}, [finalValue, duration]);

	return count;
}
