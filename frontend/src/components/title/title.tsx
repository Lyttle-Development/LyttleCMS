import Head from 'next/head';
import { CONSTANTS } from '@frontend/constants';

interface TitleProps {
  children?: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  const title = `${children ?? 'Home'} - ${CONSTANTS.APP_NAME}`;
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
