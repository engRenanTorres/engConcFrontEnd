import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import PersistedThemeContext from '../../contexts/ThemeContext';
import { themeDefault, themeDark } from '../../styles/theme';
import { usePersistedState } from '../hooks/usePersistedState';
import { ProSidebarProvider } from 'react-pro-sidebar';

interface PageProviderProps {
  children: ReactNode;
}
const PersistedThemeProvider = ({ children }: PageProviderProps) => {
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
        <ProSidebarProvider>{children}</ProSidebarProvider>
      </ThemeProvider>
    </PersistedThemeContext.Provider>
  );
};
export default PersistedThemeProvider;
