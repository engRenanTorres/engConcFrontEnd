import { Container } from './styles';

type Props = {
  title: string;
  subtitle?: string;
};

const Jumbotron: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <Container>
      <div>
        <h1 className="jumbotron-title">{title}</h1>
        <p className="jumbotron-subtitle">{subtitle}</p>
      </div>
    </Container>
  );
};

export default Jumbotron;
