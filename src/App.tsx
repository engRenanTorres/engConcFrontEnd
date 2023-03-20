import React from 'react';
import { GlobalStyles } from './styles/global-styles';
import PersistedThemeProvider from './utils/providers/PersistedThemeProvider';
import DefaultPageProvider from './utils/providers/DefalutPageProvider';

function App() {
  return (
    <PersistedThemeProvider>
      <div className="App">
        <GlobalStyles />
        <DefaultPageProvider>oi</DefaultPageProvider>
      </div>
    </PersistedThemeProvider>
  );
}

export default App;
