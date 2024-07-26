import { useEffect } from 'react';
import { useApp } from '@frontend/contexts/App.context';

export function usePage(title: string): string {
  const app = useApp();

  if (!title) title = 'Unknown';

  // Set selected guild id from router, on initial load
  useEffect(() => {
    app?.setPageTitle(title || 'Unknown');
  }, []);

  return title || 'Unknown';
}
