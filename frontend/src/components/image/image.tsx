import {
  ContentPageContentBase,
  ContentTypesVisual,
} from '@frontend/components/_content-renderer';

export interface ImageProperties {
  src: string;
  alt: string;
}

export interface ImageContent extends ContentPageContentBase {
  type: ContentTypesVisual.Image;
  properties: ImageProperties;
}

export interface ImageProps {
  children?: React.ReactNode;
  properties: ImageProperties;
}

export function Image({ children, properties }: ImageProps) {
  return <span>Not implemented</span>;
}
