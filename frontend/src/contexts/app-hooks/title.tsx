import { useState } from 'react';

export function useTitle() {
  const homeTitle = 'home';
  const [pageTitle, setPageTitle] = useState(homeTitle);

  return {
    pageTitle,
    setPageTitle,
  };
}
