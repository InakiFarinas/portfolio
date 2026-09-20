import { useEffect, useState } from "react";

export interface RepoStats {
	/** null cuando la API falló: no mostrar un 0 falso. */
	commits: number | null;
	loading: boolean;
}

function readCache(key: string): number | null {
	try {
		const cached = sessionStorage.getItem(key);
		return cached === null ? null : Number(cached);
	} catch {
		return null;
	}
}

export function useRepoCommits(owner: string, repo: string): RepoStats {
	const key = `commits:${owner}/${repo}`;
	const [commits, setCommits] = useState<number | null>(() => readCache(key));
	const [loading, setLoading] = useState(() => readCache(key) === null);

	useEffect(() => {
		if (readCache(key) !== null) return;

		let cancelled = false;
		fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
			.then(async (r) => {
				if (!r.ok) throw new Error(String(r.status));
				const match = (r.headers.get("Link") || "").match(
					/page=(\d+)>; rel="last"/,
				);
				const total = match
					? parseInt(match[1], 10)
					: ((await r.json()) as unknown[]).length;
				if (cancelled) return;
				setCommits(total);
				try {
					sessionStorage.setItem(key, String(total));
				} catch {
					/* storage unavailable */
				}
			})
			.catch(() => {
				if (!cancelled) setCommits(null);
			})
			.finally(() => {
				if (!cancelled) setLoading(false);
			});
		return () => {
			cancelled = true;
		};
	}, [owner, repo, key]);

	return { commits, loading };
}
