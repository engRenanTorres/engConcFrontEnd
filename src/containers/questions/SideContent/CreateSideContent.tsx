import { Container } from './styles';

const HomeSideContent: React.FC = () => {
  return (
    <Container role="main">
      <div className="row">
        <aside className="col-md-4 question-sidebar">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">Sobre nós</h4>
            <p className="mb-0">
              <em>
                Somos uma equipe independente de engenheiros de diversas areas
                que visam contribuir no acesso ao conhecimento e preparo para
                formar engenheiros melhores. Para isso, buscamos selecionar as
                melhores questões dos concursos e bancas consagrados em cada
                área.
              </em>
            </p>
            <p className="mb-0">
              <em>sem malesuada magna</em>
            </p>
            <hr />
            <h4 className="font-italic">Mídias Sociais</h4>
            <ol className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/renan-torres-3ba43560/">
                  LinkedIn
                </a>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default HomeSideContent;
