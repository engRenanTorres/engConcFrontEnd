import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import styled from 'styled-components';

interface PageProviderProps {
  children: ReactNode;
}
const DefaultPageProvider = ({ children }: PageProviderProps) => {
  return (
    <Container>
      <Sidebar />
      <div className="content">
        <Topbar />
        {children}
      </div>
    </Container>
  );
};
export default DefaultPageProvider;

export const Container = styled.div`
  display: flex;
`;
