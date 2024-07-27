import Head from 'next/head';
import { CONSTANTS } from '@frontend/constants';

interface PageTitleProps {
  children?: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  const title = `${children ?? 'Home'} - ${CONSTANTS.APP_NAME}`;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
