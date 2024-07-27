import {
  ContentPageContentBase,
  ContentTypesText,
} from '@frontend/components/_content-renderer';

interface TitleProperties {
  text: string;
  level: number; // Example additional property
}

export interface TitleContent extends ContentPageContentBase {
  type: ContentTypesText.Title;
  properties: TitleProperties;
}

export interface TitleProps {
  children?: React.ReactNode;
  properties: TitleProperties;
}

export function Title({ children, properties }: TitleProps) {
  return <span>Not implemented</span>;
}
