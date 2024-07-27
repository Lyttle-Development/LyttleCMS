import { GetStaticProps } from 'next';
import { ContentPage, ContentPages } from '@frontend/types/content';
import { CONTENT } from '@frontend/_content';

export const getStaticProps: GetStaticProps = async (context) => {
  const findPage = (
    pages: ContentPages,
    slugs: string[],
  ): ContentPage | null => {
    let current = pages as ContentPages | ContentPage;
    for (const slug of slugs) {
      if (typeof current === 'object' && slug in current) {
        // @ts-expect-error This is safe because we checked if the key exists
        current = current[slug] as ContentPages | ContentPage;
      } else {
        return null;
      }
    }
    return current as ContentPage;
  };

  const params = context.params as { slug: string[] };
  const slug = params?.slug || ['home'];
  const page = findPage(CONTENT.pages, slug) || null;

  return { props: { page } };
};
