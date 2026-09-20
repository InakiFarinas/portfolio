import { createContext, useContext } from "react";
import type { Key, Lang } from "./dictionary";

export interface I18n {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: (key: Key | (string & {}), vars?: Record<string, string | number>) => string;
}

export const I18nContext = createContext<I18n | null>(null);

export function useI18n(): I18n {
	const ctx = useContext(I18nContext);
	if (!ctx) throw new Error("useI18n must be used inside <LangProvider>");
	return ctx;
}
