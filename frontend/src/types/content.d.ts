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

export interface ContentPageContent {
  type: string;
  properties: ContentPageContentProperties;
}

export interface ContentPageContentProperties {
  [key: string]: string | number | boolean | null;
}
