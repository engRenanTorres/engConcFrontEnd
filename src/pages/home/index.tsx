import PageContent from '../../components/PageContent';
import Jumbotron from '../../components/Jumbotron';
import DefaultPageProvider from '../../utils/providers/DefalutPageProvider';
import { StyledSection } from './styled';
import HomeSideContent from '../../containers/home/SideContent/HomeSideContent';

export default function Home() {
  return (
    <DefaultPageProvider>
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

          <Jumbotron
            title="Engenharia de concursos"
            subtitle="Simulador de concursos de engenharias"
          />
        </div>
        <PageContent sideContent={<HomeSideContent />}>
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
        </PageContent>
        <footer className="question-footer">
          <p>
            <a href="#">Voltar ao topo da página</a>
          </p>
        </footer>
      </StyledSection>
    </DefaultPageProvider>
  );
}
