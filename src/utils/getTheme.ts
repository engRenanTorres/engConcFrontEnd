import { themeDark, themeDefault } from '../styles/theme';
import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { usePersistedState } from './hooks/usePersistedState';

export function toggleTheme(theme: string) {
  const newTheme = theme === 'Default' ? 'Dark' : 'Default';
  localStorage.setItem('theme', newTheme);
  console.log(newTheme);
}

export const GetTheme = (): DefaultTheme => {
  const [theme, setTheme] = usePersistedState<'Default' | 'Dark'>(
    'theme',
    'Default',
  );
  console.log('resolvedTheme', theme);

  const [fullTheme, setFullTheme] = useState(themeDefault);

  useEffect(() => {
    const rawStoregedData = localStorage.getItem('theme');
    if (rawStoregedData !== null) {
      theme === 'Default'
        ? setFullTheme(themeDefault)
        : setFullTheme(themeDark);
    } else setFullTheme(themeDefault);
  }, [fullTheme, theme]);
  return fullTheme;
};
