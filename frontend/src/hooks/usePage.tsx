import { useEffect } from 'react';
import { useApp } from '@frontend/contexts/App.context';
import { getMessage, getTitle } from '@frontend/utils';

export function usePage(
  path: string,
  recursive: boolean = false,
  startRecursive: string | null = null,
): string {
  const app = useApp();
  let title = '';
  const titles: string[] = [];

  if (recursive) {
    const paths: string[] = [];
    path.split('.').forEach((p) => {
      paths.push(p);
      if (startRecursive && !paths.includes(startRecursive)) return;
      const pathsStr = paths.join('.');
      const t = getTitle(pathsStr) || null;
      if (t) titles.push(t);
    });
    title = titles.join(' ~ ');
  }

  if (titles.length < 1) {
    title = getMessage(path) ?? 'Unknown';
    title = getTitle(path) ?? 'Unknown';
  }

  if (!title) title = 'Unknown';

  // Set selected guild id from router, on initial load
  useEffect(() => {
    app?.setPageTitle(title || 'Unknown');
  }, []);

  return title || 'Unknown';
}
