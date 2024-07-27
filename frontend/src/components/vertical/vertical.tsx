import {
  ContentPageContentBase,
  ContentTypesSpacing,
} from '@frontend/components/_content-renderer';

export interface VerticalProperties {
  height: number;
}

export interface VerticalContent extends ContentPageContentBase {
  type: ContentTypesSpacing.Vertical;
  properties: VerticalProperties;
}

export interface VerticalProps {
  children?: React.ReactNode;
  properties: VerticalProperties;
}

export function Vertical({ children, properties }: VerticalProps) {
  return <span>Not implemented</span>;
}
