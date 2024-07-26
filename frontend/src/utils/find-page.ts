import { ContentPage, ContentPages } from '@frontend/types/content';

export const findPage = (
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
