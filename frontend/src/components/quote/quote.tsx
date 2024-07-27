import {
  ContentPageContentBase,
  ContentTypesText,
} from '@frontend/components/_content-renderer';

export interface QuoteProperties {
  text: string;
  author?: string; // Optional property
}

export interface QuoteContent extends ContentPageContentBase {
  type: ContentTypesText.Quote;
  properties: QuoteProperties;
}

export interface QuoteProps {
  children?: React.ReactNode;
  properties: QuoteProperties;
}

export function Quote({ children, properties }: QuoteProps) {
  return <span>Not implemented</span>;
}
