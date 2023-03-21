import React from 'react';
import { GlobalStyles } from './styles/global-styles';
import PersistedThemeProvider from './utils/providers/PersistedThemeProvider';
import DefaultPageProvider from './utils/providers/DefalutPageProvider';
import { CardMedia } from '@mui/material';

function App() {
  return (
    <PersistedThemeProvider>
      <div className="App">
        <GlobalStyles />
        <DefaultPageProvider>
          <CardMedia>Pagina inicial</CardMedia>
        </DefaultPageProvider>
      </div>
    </PersistedThemeProvider>
  );
}

export default App;
