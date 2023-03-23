import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import styled from 'styled-components';
import PersistedThemeProvider from './PersistedThemeProvider';
import { GlobalStyles } from '../../styles/global-styles';

interface PageProviderProps {
  children: ReactNode;
}
const DefaultPageProvider = ({ children }: PageProviderProps) => {
  return (
    <PersistedThemeProvider>
      <div className="App">
        <GlobalStyles />
        <Container>
          <Sidebar />
          <div className="content">
            <Topbar />
            {children}
          </div>
        </Container>
      </div>
    </PersistedThemeProvider>
  );
};
export default DefaultPageProvider;

export const Container = styled.div`
  display: flex;
`;
