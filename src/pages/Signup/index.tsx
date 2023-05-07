import CardContent from '../../components/layout/CardContent';
import Signup from '../../containers/Signup';
import SimplePageProvider from '../../utils/providers/SimplePageProvider';

export default function SignupPage() {
  return (
    <SimplePageProvider>
      <CardContent>
        <Signup />
      </CardContent>
    </SimplePageProvider>
  );
}
