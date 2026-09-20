import {
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react";
import { I18nContext, type I18n } from "./context";
import { DICT, type Lang } from "./dictionary";

const STORAGE_KEY = "lang";

function initialLang(): Lang {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === "es" || saved === "en") return saved;
	} catch {
		/* storage unavailable */
	}
	return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
	const [lang, setLangState] = useState<Lang>(initialLang);

	useEffect(() => {
		document.documentElement.lang = lang;
		document.title = DICT[lang]["meta.title"];
		document
			.querySelector('meta[name="description"]')
			?.setAttribute("content", DICT[lang]["meta.description"]);
	}, [lang]);

	const setLang = useCallback((next: Lang) => {
		setLangState(next);
		try {
			localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* storage unavailable */
		}
	}, []);

	const value = useMemo<I18n>(
		() => ({
			lang,
			setLang,
			t: (key, vars) => {
				const raw = (DICT[lang] as Record<string, string>)[key] ?? key;
				return vars
					? raw.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`))
					: raw;
			},
		}),
		[lang, setLang],
	);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
