import styles from './container.module.scss';
import {
  ContentPageContentBase,
  ContentTypesSpacing,
} from '@frontend/components/_content-renderer';

interface ContainerProperties {
  width: number;
}

export interface ContainerContent extends ContentPageContentBase {
  type: ContentTypesSpacing.Container;
  properties: ContainerProperties;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  properties: ContainerProperties;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <section className={`container ${styles.container} ${className}`}>
      {children}
    </section>
  );
}
