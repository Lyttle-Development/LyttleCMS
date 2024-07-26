import { ContentPageContent } from '@frontend/types/content';

interface ContentRendererProps {
  content: ContentPageContent;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
}) => {
  switch (content.type) {
    case 'text':
      return <p>{content.properties.text}</p>;
    // Add more cases to handle different content types
    default:
      return null;
  }
};
