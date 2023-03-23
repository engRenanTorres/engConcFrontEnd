import React from 'react';
import DefaultPageProvider from './utils/providers/DefalutPageProvider';
import { CardMedia } from '@mui/material';

function App() {
  return (
    <DefaultPageProvider>
      <CardMedia>Pagina inicial</CardMedia>
    </DefaultPageProvider>
  );
}

export default App;
