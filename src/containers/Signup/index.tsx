import { FormEventHandler, useCallback } from 'react';
import { Container } from './styles';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import getEnv from '../../utils/GetEnv';

interface eventTarget extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignUpError extends Error {
  response: {
    data: {
      error: string;
      message: string;
      statusCode: number;
    };
  };
}

const Signup = () => {
  const backendAdress = getEnv.backendAdress();
  const navigate = useNavigate();
  const handleCreateUser: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { name, email, password } = (event.target as HTMLFormElement)
        .elements as eventTarget;
      /*try {*/
      const body = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      console.log(body);
      await axios
        .post(backendAdress + '/api/users', body)
        .then(() => {
          navigate('/login');
          //router.push('/');
        })
        .catch((error) => {
          if ((error as SignUpError)?.response?.data?.statusCode === 409) {
            return alert('Este e-mail de usuário já possui um cadastro.');
          }
          if ((error as SignUpError).response?.data?.message) {
            return alert((error as SignUpError).response?.data?.message);
          }
          alert(error.message);
        });
    },
    [navigate],
  );

  //if (!currentUser) return router.push('/');
  return (
    <Container>
      <h1>Novo por aqui?</h1>
      <form onSubmit={handleCreateUser}>
        <Input label="Nome" name="name" type="text" placeholder="Nome..." />
        <Input label="Email" name="email" type="email" placeholder="Email..." />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password..."
        />
        <div className="options">
          <Button type="submit">Cadastrar</Button>

          <hr />
          <Link to="/login" className="link">
            Já é cadastrado?
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default Signup;
