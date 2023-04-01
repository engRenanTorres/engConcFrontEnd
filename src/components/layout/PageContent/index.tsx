import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  children: ReactNode;
  sideContent?: ReactNode;
};

const PageContent: React.FC<Props> = ({ children, sideContent }: Props) => {
  return (
    <Container role="main">
      <div>{children}</div>
      {!!sideContent && <aside>{sideContent}</aside>}
    </Container>
  );
};

export default PageContent;
