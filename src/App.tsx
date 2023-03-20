import React, { useState } from 'react';
import Topbar from './components/Topbar';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeDefault } from './styles/theme';
import { usePersistedState } from './utils/hooks/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<'Default' | 'Dark'>(
    'theme',
    'Default',
  );

  const toggleTheme = () => {
    const newTheme = theme === 'Default' ? 'Dark' : 'Default';
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'Default' ? themeDefault : themeDark}>
      <div className="App">
        <GlobalStyles />
        <Topbar toggleTheme={toggleTheme} />
        oi
      </div>
    </ThemeProvider>
  );
}

export default App;
