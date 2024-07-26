import markdown from '../../../Content/app/generated/Markdown';

export function _getMarkdownItem(path: string): any {
  const res: any = path
    .split('.')
    .reduce((acc: any, cur) => acc[cur], markdown);
  if (!res || typeof res !== 'object') {
    throw new Error(
      `Was looking for content: "${path}", but no object was found!`,
    );
  }

  return res;
}

export function getMarkdownItem(path: string): any {
  const _markdown = _getMarkdownItem(path);

  let content = null;
  let documentation = null;

  try {
    content = _markdown.content as string;
  } catch (e) {}

  try {
    documentation = _markdown.documentation as string;
  } catch (e) {}

  return {
    content,
    documentation,
  };
}

export function getMessage(path: string): string | null {
  try {
    const _markdown = getMarkdownItem(path);
    return _markdown.content;
  } catch (e) {
    return null;
  }
}

export function getDocumentation(path: string): string | null {
  try {
    const _markdown = getMarkdownItem(path);
    return _markdown.documentation ?? '';
  } catch (e) {
    return null;
  }
}

export function getLessonItems(path: string): any {
  const _markdown = _getMarkdownItem(path);

  let template = null;
  let explanation = null;

  try {
    template = _markdown.template as string;
  } catch (e) {}

  try {
    explanation = _markdown.explanation as string;
  } catch (e) {}

  return {
    template,
    explanation,
  };
}

export function getLessonTemplate(path: string): string | null {
  try {
    const _markdown = getLessonItems(path);
    return _markdown.template;
  } catch (e) {
    return null;
  }
}

export function getLessonExplanation(path: string): string | null {
  try {
    const _markdown = getLessonItems(path);
    return _markdown.explanation;
  } catch (e) {
    return null;
  }
}

export function getTitle(path: string): string | null {
  try {
    const _markdown = _getMarkdownItem(path);
    return _markdown.title ?? null;
  } catch (e) {
    return null;
  }
}
