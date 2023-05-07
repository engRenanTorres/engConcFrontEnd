import Login from '../../containers/Login';
import SimplePageProvider from '../../utils/providers/SimplePageProvider';
import CardContent from '../../components/layout/CardContent';

export default function LoginPage() {
  return (
    <SimplePageProvider>
      <CardContent>
        <Login />
      </CardContent>
    </SimplePageProvider>
  );
}
