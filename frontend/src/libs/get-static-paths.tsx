import { GetStaticPaths } from 'next';
import { ContentPages } from '@frontend/types/content';
import { CONTENT } from '@frontend/_content';

export interface StaticPaths {
  params: { slug: string[] };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const generatePaths = (
    pages: ContentPages,
    basePath: string[] = [],
  ): StaticPaths[] => {
    let paths: StaticPaths[] = [];
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
