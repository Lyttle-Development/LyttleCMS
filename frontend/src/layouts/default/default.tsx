import { Layout } from '@frontend/layouts';
import React from 'react';
import { useStartup } from '@frontend/contexts/app-hooks';

export interface DefaultProps {
  children: React.ReactNode;
}

export function Default({ children }: DefaultProps) {
  const startup = useStartup();
  if (startup === null) return <></>;

  return <Layout.Base>{children}</Layout.Base>;
}

export function getDefault(page: React.ReactNode) {
  return <Default>{page}</Default>;
}
