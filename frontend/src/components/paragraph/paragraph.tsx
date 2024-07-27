import {
  ContentPageContentBase,
  ContentTypesText,
} from '@frontend/components/_content-renderer';
import styles from './paragraph.module.scss';

export interface ParagraphProperties {
  text: string;
}

export interface ParagraphContent extends ContentPageContentBase {
  type: ContentTypesText.Paragraph;
  properties: ParagraphProperties;
}

export interface ParagraphProps {
  properties: ParagraphProperties;
}

export function Paragraph({ properties }: ParagraphProps) {
  const text = properties.text || 'Empty paragraph';
  const noText = !properties.text;

  return <p className={`${noText && styles['no-text']}`}>{text}</p>;
}
