import PageContent from '../../components/layout/PageContent';
import DefaultPageProvider from '../../utils/providers/DefalutPageProvider';
import { StyledMain } from './styled';
import HomeSideContent from '../../containers/home/SideContent/HomeSideContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewQuestion() {
  return (
    <DefaultPageProvider>
      <StyledMain>
        <Header title="criar nova questão" />
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

              <hr />

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
              <p>
                O foco do projeto são os aplicativos mobile. No entando, também
                será possível realizar simulados mais simplificados aqui na web.
                O cadastro é gratuito e opcional. Ele será utilizado em breve
                apenas para uma área de estatísticas para auxiliar nos estudos.
              </p>
              <blockquote>
                <p>
                  {' '}
                  {/* eslint-disable-next-line react/no-unescaped-entities  */}
                  "Coragem! Mais vale errar, se arrebentando, do que poupar-se
                  {/* eslint-disable-next-line react/no-unescaped-entities  */}
                  para nada."{' '}
                </p>
              </blockquote>
              <p>Darcy Ribeiro.</p>
            </div>
          </div>
        </PageContent>
        <Footer />
      </StyledMain>
    </DefaultPageProvider>
  );
}
