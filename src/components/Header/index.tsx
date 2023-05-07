import { ReactElement } from 'react';
import Jumbotron from '../Jumbotron';

type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: Props): ReactElement {
  return (
    <header className="container">
      {/*<div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex flex-row justify-content-around">
          <a className="p2 text-muted" href="#">
            <span>Engenharia Civil</span>
          </a>
          <a className="p2 text-muted" href="#">
            <span>Engenharia de Segurança</span>
          </a>
        </nav>
      </div> */}

      <Jumbotron title={title} subtitle={subtitle} />
    </header>
  );
}
