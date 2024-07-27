import {
  ContentPageContentBase,
  ContentTypesSpacing,
} from '@frontend/components/_content-renderer';
import styles from './horizontal.module.scss';

interface HorizontalProperties {
  width: number;
}

export interface HorizontalContent extends ContentPageContentBase {
  type: ContentTypesSpacing.Horizontal;
  properties: HorizontalProperties;
}

export interface HorizontalProps {
  children: React.ReactNode;
  properties: HorizontalProperties;
}

export function Horizontal({ children, properties }: HorizontalProps) {
  return <section className={styles.horizontal}>{children}</section>;
}
