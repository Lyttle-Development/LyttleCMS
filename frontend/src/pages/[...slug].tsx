import { GetStaticPaths, GetStaticProps } from 'next';
import { CONTENT } from '@frontend/_content';
import { ContentPage, ContentPages } from '@frontend/types/content';
import { Component } from '@frontend/components';
import { findPage } from '@frontend/utils/find-page';
import { ErrorPage } from '@frontend/pages/_error';

interface PageProps {
  page: ContentPage | null;
}

export function Page({ page }: PageProps) {
  if (!page) {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1>{page.properties.title}</h1>
      {page.contents.map((contentItem, index) => (
        <Component.ContentRenderer key={index} content={contentItem} />
      ))}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const generatePaths = (pages: ContentPages, basePath: string[] = []) => {
    let paths: { params: { slug: string[] } }[] = [];
    for (const key in pages) {
      const value = pages[key];
      if ('properties' in value && 'contents' in value) {
        paths.push({ params: { slug: [...basePath, key] } });
      } else {
        paths = paths.concat(
          generatePaths(value as ContentPages, [...basePath, key]),
        );
      }
    }
    return paths;
  };

  const paths = generatePaths(CONTENT.pages);
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string[] };
  const page = findPage(CONTENT.pages, slug) || null;

  return { props: { page } };
};

export default Page;
