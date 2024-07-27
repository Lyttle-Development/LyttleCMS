import {
  ContentPageContentBase,
  ContentTypesSpacing,
} from '@frontend/components/_content-renderer';

interface LineProperties {
  thickness: number;
}

export interface LineContent extends ContentPageContentBase {
  type: ContentTypesSpacing.Line;
  properties: LineProperties;
}

export interface LineProps {
  children?: React.ReactNode;
  properties: LineProperties;
}

export function Line({ children, properties }: LineProps) {
  return <span>Not implemented</span>;
}
