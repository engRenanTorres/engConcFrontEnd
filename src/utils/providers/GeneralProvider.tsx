import { ReactNode } from 'react';
import PersistedThemeProvider from './PersistedThemeProvider';
import { AuthProvider } from '../../contexts/AuthContext';

interface PageProviderProps {
  children: ReactNode;
}
const GeneralProvider = ({ children }: PageProviderProps) => {
  return (
    <PersistedThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </PersistedThemeProvider>
  );
};
export default GeneralProvider;
