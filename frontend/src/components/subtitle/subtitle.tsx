import {
  ContentPageContentBase,
  ContentTypesText,
} from '@frontend/components/_content-renderer';

export interface SubtitleProperties {
  text: string;
}

export interface SubtitleContent extends ContentPageContentBase {
  type: ContentTypesText.Subtitle;
  properties: SubtitleProperties;
}

export interface SubtitleProps {
  children?: React.ReactNode;
  properties: SubtitleProperties;
}

export function Subtitle({ children, properties }: SubtitleProps) {
  return <span>Not implemented</span>;
}
