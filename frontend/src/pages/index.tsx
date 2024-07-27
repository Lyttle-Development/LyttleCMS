import { ContentPage } from '@frontend/types/content';
import Error404 from '@frontend/pages/404';
import { Lib } from '@frontend/libs';
import { GetStaticProps } from 'next';
import { ContentRenderer } from '@frontend/components/_content-renderer';

export interface PageProps {
  page: ContentPage | null;
}

export function Page({ page }: PageProps) {
  if (!page) {
    return <Error404 />;
  }

  return (
    <>
      {page?.contents?.map((contentItem, index) => (
        <ContentRenderer key={index} content={contentItem} />
      )) || null}
    </>
  );
}

export const getStaticProps: GetStaticProps = Lib.getStaticProps;

export default Page;
