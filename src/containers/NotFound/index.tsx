import { FormEventHandler, useCallback } from 'react';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button';
import { Container } from './styles';
import useAuth from '../../utils/hooks/useAuth';
import { Link } from 'react-router-dom';

interface eventTarget extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const Login = () => {
  const { signin } = useAuth();
  const handleLogin: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, password } = (event.target as HTMLFormElement)
        .elements as eventTarget;
      try {
        signin(email.value, password.value);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [signin],
  );

  //if (!currentUser) return router.push('/');
  return (
    <Container>
      <h1>Bem Vindo! </h1>
      <form onSubmit={handleLogin}>
        <Input label="Email" name="email" type="email" placeholder="Email..." />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password..."
        />
        <div className="options">
          <Button type="submit">Login</Button>

          <hr />

          <Link className="link" to={'#'}>
            Esqueceu a senha?{' '}
          </Link>
          <Link className="link" to="/signup">
            Ainda não é cadastrado?
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default Login;
