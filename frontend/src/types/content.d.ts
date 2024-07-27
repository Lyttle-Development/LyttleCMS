import { ContentPageContent } from '@frontend/components/_content-renderer';

export interface Content {
  properties: ContentProperties;
  pages: ContentPages;
}

export interface ContentProperties {
  title: string;
}

export interface ContentPages {
  [key: string]: ContentPage | ContentPages;
}

export interface ContentPage {
  properties: ContentPageProperties;
  contents: ContentPageContent[];
}

export interface ContentPageProperties {
  title: string;
}

export interface ContentPageContentProperties {
  [key: string]: string | number | boolean | null;
}
