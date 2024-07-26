import React from 'react';
import styles from './code.module.scss';
import { Component } from '@frontend/components';

export interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

export const Code = ({ children, className }: CodeProps): JSX.Element => {
  const language = className?.replace('language-', '') || 'plaintext';

  return (
    <Component.Code
      language={language}
      className={styles.code}
      editable={false}
      code={children as string}
      copyable={true}
    ></Component.Code>
  );
};
