import { ContentPage } from '@frontend/types/content';
import { Component } from '@frontend/components';
import Error404 from '@frontend/pages/404';
import { Lib } from '@frontend/libs';
import { GetStaticProps } from 'next';

interface PageProps {
  page: ContentPage | null;
}

export function Page({ page }: PageProps) {
  if (!page) {
    return <Error404 />;
  }

  return (
    <>
      {page?.contents?.map((contentItem, index) => (
        <Component.ContentRenderer key={index} content={contentItem} />
      )) || null}
    </>
  );
}

export const getStaticProps: GetStaticProps = Lib.getStaticProps;

export default Page;
