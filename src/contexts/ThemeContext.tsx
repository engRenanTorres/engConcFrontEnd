/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { themeDefault } from '../styles/theme';
import { DefaultTheme } from 'styled-components';

type ThemeTitle = 'Default' | 'Dark';

type ThemeContextProps = {
  theme: DefaultTheme;
  toggleTheme: (title: ThemeTitle) => void;
};

const PersistedThemeContext = createContext<ThemeContextProps>({
  theme: themeDefault,
  toggleTheme: () => {},
});

export const ThemeConsumer = PersistedThemeContext.Consumer;

export default PersistedThemeContext;
