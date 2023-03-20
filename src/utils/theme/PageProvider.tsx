import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import PersistedThemeContext from '../../context/ThemeContext';
import { themeDefault, themeDark } from '../../styles/theme';
import { usePersistedState } from '../hooks/usePersistedState';
interface PageProviderProps {
  children: ReactNode;
}
const PageProvider = ({ children }: PageProviderProps) => {
  const [themeTitle, setThemeTitle] = usePersistedState<'Default' | 'Dark'>(
    'theme',
    'Default',
  );
  const theme = themeTitle === 'Default' ? themeDefault : themeDark;

  const toggleTheme = (title: string) => {
    const newTheme = title === 'Default' ? 'Dark' : 'Default';
    setThemeTitle(newTheme);
  };
  return (
    <PersistedThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={themeTitle === 'Default' ? themeDefault : themeDark}
      >
        {children}
      </ThemeProvider>
    </PersistedThemeContext.Provider>
  );
};
export default PageProvider;
