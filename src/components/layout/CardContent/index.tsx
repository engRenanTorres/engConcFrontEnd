import { ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';
import { Container } from './styles';

type Props = {
  children: ReactNode;
};

const CardContent: React.FC<Props> = ({ children }: Props) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  return (
    <Container role="main">
      <section className="card">
        {!!isNonMobile && <div className="bg-login-image"></div>}
        <div className="card-content">{children}</div>
      </section>
    </Container>
  );
};

export default CardContent;
