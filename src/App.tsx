import React from 'react';
import Topbar from './components/Topbar';
import { GlobalStyles } from './styles/global-styles';
import PageProvider from './utils/theme/PageProvider';

function App() {
  return (
    <PageProvider>
      <div className="App">
        <GlobalStyles />
        <Topbar />
        oi
      </div>
    </PageProvider>
  );
}

export default App;
