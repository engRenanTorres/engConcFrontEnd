import { ReactNode } from 'react';
import PersistedThemeProvider from './PersistedThemeProvider';

interface PageProviderProps {
  children: ReactNode;
}
const GeneralProvider = ({ children }: PageProviderProps) => {
  return <PersistedThemeProvider>{children}</PersistedThemeProvider>;
};
export default GeneralProvider;
