import { Layout } from '@frontend/layouts';
import React from 'react';
import { Theme } from '@radix-ui/themes';

export interface DefaultProps {
  children: React.ReactNode;
}

export function Default({ children }: DefaultProps) {
  return (
    <Layout.Base>
      <Theme>{children}</Theme>
    </Layout.Base>
  );
}

export function getDefault(page: React.ReactNode) {
  return <Default>{page}</Default>;
}
