import SimplePageProvider from '../../utils/providers/SimplePageProvider';
import CardContent from '../../components/layout/CardContent';
import NotFound from '../../containers/NotFound';

export default function LoginPage() {
  return (
    <SimplePageProvider>
      <CardContent>
        <NotFound />
      </CardContent>
    </SimplePageProvider>
  );
}
