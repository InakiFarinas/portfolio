import { useEffect, useState } from "react";

export interface RepoStats {
  commits: number;
  loading: boolean;
}

export function useRepoCommits(owner: string, repo: string): RepoStats {
  const [commits, setCommits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`
    )
      .then((r) => {
        const link = r.headers.get("Link") || "";
        const match = link.match(/page=(\d+)>; rel="last"/);
        if (match) setCommits(parseInt(match[1], 10));
        return r.json();
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [owner, repo]);

  return { commits, loading };
}
