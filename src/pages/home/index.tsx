import { StyledSection } from './styled';

export default function Home() {
  return (
    <StyledSection>
      <div className="container">
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex flex-row justify-content-around">
            <a className="p2 text-muted" href="#">
              <span>Engenharia Civil</span>
            </a>
            <a className="p2 text-muted" href="#">
              <span>Engenharia de Segurança</span>
            </a>
          </nav>
        </div>

        <div className="jumbotron p-4 p-md-5 text-white rounded bg-green-light">
          <div className="col-md-6 px-0">
            <h1 className="font-italic">Engenharia de concursos</h1>
            <p className="lead my-3">Simulador de concursos de engenharias</p>
          </div>
        </div>
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 question-main">
            <div className="question-post">
              <h2 className="question-post-title">
                Simulador de concursos de engenharias
              </h2>
              <p className="question-post-meta">
                {' '}
                <span>1 de maio de 2023 por</span> <a href="#">Renan Torres</a>
              </p>

              <p>
                {' '}
                Este é um projeto independente que pretende contribuir com a
                engenharia. Não só para concurseiros, mas para todos que queiram
                praticar seus conhecimentos.
              </p>
              <span> divisória cinza </span>
              <p>
                Este é um projeto que está em desenvolvimento. Por se tratar de
                um projeto colaborativo sem pretenção real de sustento
                financeiro, a disponibilidade de recursos se dá de forma
                gradativa de acordo com a disponibilidade dos voluntários.
              </p>
              <blockquote>
                <p>
                  {' '}
                  O foco do projeto são os aplicativos mobile. No entando,
                  também será possível realizar simulados mais simplificados
                  aqui na web. O cadastro é gratuito e opcional. Ele será
                  utilizado em breve apenas para uma área de estatísticas para
                  auxiliar nos estudos.{' '}
                </p>
              </blockquote>
            </div>
          </div>

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
      </main>

      <footer className="question-footer">
        <p>
          <a href="#">Voltar ao topo da página</a>
        </p>
      </footer>
    </StyledSection>
  );
}
