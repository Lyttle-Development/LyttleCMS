import { Component } from '@frontend/components';
import { ParagraphContent } from '@frontend/components/paragraph';
import { TitleContent } from '@frontend/components/title';
import { HorizontalContent } from '@frontend/components/horizontal';
import { ImageContent } from '@frontend/components/image';
import { SubtitleContent } from '@frontend/components/quote';
import { QuoteContent } from '@frontend/components/subtitle';
import { VerticalContent } from '@frontend/components/vertical';
import { LineContent } from '@frontend/components/line';
import { ContainerContent } from '@frontend/components/container';

export type ContentTypes =
  | ContentTypesVisual
  | ContentTypesText
  | ContentTypesSpacing;

export type ContentPageContent =
  | ParagraphContent
  | TitleContent
  | SubtitleContent
  | QuoteContent
  | ImageContent
  | HorizontalContent
  | VerticalContent
  | ContainerContent
  | LineContent;

export enum ContentTypesText {
  Paragraph = 'paragraph',
  Title = 'title',
  Subtitle = 'subtitle',
  Quote = 'quote',
}

export enum ContentTypesVisual {
  Image = 'image',
}

export enum ContentTypesSpacing {
  Container = 'container',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Line = 'line',
}

export interface ContentPageContentBase {
  type: ContentTypes;
  contents?: ContentPageContent[];
}

export interface ContentRendererProps {
  content: ContentPageContent;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({
  content,
}): React.ReactNode => {
  // Check if content has attribute content elso just null
  const contents = content.contents ? content.contents : [];

  const children =
    contents.length > 0 ? (
      <>
        {contents.map((c, i) => (
          <ContentRenderer key={i} content={c} />
        ))}
      </>
    ) : undefined;

  switch (content.type) {
    // Text
    case ContentTypesText.Paragraph:
      return <Component.Paragraph properties={content.properties} />;
    case ContentTypesText.Title:
      return <Component.Title properties={content.properties} />;
    case ContentTypesText.Subtitle:
      return <Component.Subtitle properties={content.properties} />;
    case ContentTypesText.Quote:
      return <Component.Quote properties={content.properties} />;

    // Visual
    case ContentTypesVisual.Image:
      return <Component.Image properties={content.properties} />;

    // Spacing
    case ContentTypesSpacing.Container:
      return (
        <Component.Container properties={content.properties}>
          {children}
        </Component.Container>
      );
    case ContentTypesSpacing.Horizontal:
      return (
        <Component.Horizontal properties={content.properties}>
          {children}
        </Component.Horizontal>
      );
    case ContentTypesSpacing.Vertical:
      return <Component.Vertical properties={content.properties} />;
    case ContentTypesSpacing.Line:
      return <Component.Line properties={content.properties} />;

    // Default
    default:
      return null;
  }
};
