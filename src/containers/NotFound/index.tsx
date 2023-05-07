import { Container } from './styles';
import { Link } from 'react-router-dom';

const NotFound = () => {
  //if (!currentUser) return router.push('/');
  return (
    <Container>
      <h1>Foi mal! 404 =( </h1>
      <h2>Página não encontrada...</h2>
      <hr />
      <section className="options">
        Deseja voltar para a página inicial?
        <Link className="link" to="/">
          Voltar a página inicial
        </Link>
      </section>
    </Container>
  );
};

export default NotFound;
