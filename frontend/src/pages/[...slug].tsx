import { GetStaticPaths, GetStaticProps } from 'next';
import { CONTENT } from '@frontend/_content';
import {
  ContentPage,
  ContentPageContent,
  ContentPages,
} from '@frontend/types/content';

interface PageProps {
  page: ContentPage | null;
}

const Page: React.FC<PageProps> = ({ page }) => {
  if (!page) {
    // If the page is not found, render the error component or redirect to 404
    return <ErrorPage />;
  }

  return (
    <div>
      <h1>{page.properties.title}</h1>
      {page.contents.map((contentItem, index) => (
        <ContentRenderer key={index} content={contentItem} />
      ))}
    </div>
  );
};

const ErrorPage: React.FC = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

interface ContentRendererProps {
  content: ContentPageContent;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  switch (content.type) {
    case 'text':
      return <p>{content.properties.text}</p>;
    // Add more cases to handle different content types
    default:
      return null;
  }
};

const findPage = (pages: ContentPages, slugs: string[]): ContentPage | null => {
  let current = pages as ContentPages | ContentPage;
  for (const slug of slugs) {
    if (typeof current === 'object' && slug in current) {
      current = current[slug] as ContentPages | ContentPage;
    } else {
      return null;
    }
  }
  return current as ContentPage;
};

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
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string[] };
  const page = findPage(CONTENT.pages, slug) || null;

  return { props: { page } };
};

export default Page;
