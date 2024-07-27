import {
  ContentPageContentBase,
  ContentTypesText,
} from '@frontend/components/_content-renderer';

export interface ParagraphProperties {
  text: string;
}

export interface ParagraphContent extends ContentPageContentBase {
  type: ContentTypesText.Paragraph;
  properties: ParagraphProperties;
}

export interface ParagraphProps {
  children?: React.ReactNode;
  properties: ParagraphProperties;
}

export function Paragraph({ children, properties }: ParagraphProps) {
  return <span>Not implemented</span>;
}
