import React from 'react';
import { Link } from 'react-router-dom';

import Card1 from '../../images/cards/card-1.webp';
import Card2 from '../../images/cards/card-2.webp';
import Card3 from '../../images/cards/card-3.webp';
import Arrow from '../../images/icons/arrow-icon.svg';

function Projects_home() {
  return (
    <section className="projects-home">
      <div className="container">
        <h1 className="title-projects-home">
          Veja os meus <span>Trabalhos</span>
        </h1>

        <p className="paragraph-projects-home">
          Clique em <i>“Veja Todos”</i> para conferir os projetos
          detalhadamente.
        </p>

        <div
          className="container-cards-projects-home row row-cols-sm-2
        row-cols-md-3 g-4"
        >
          <div className="card h-100">
            <img
              src={Card1}
              className="card-img-top"
              alt="Imagem do meu projeto."
            />
          </div>

          <div className="card h-100">
            <img
              src={Card2}
              className="card-img-top"
              alt="Imagem do meu projeto."
            />
          </div>

          <div className="card h-100">
            <img
              src={Card3}
              className="card-img-top"
              alt="Imagem do meu projeto."
            />
          </div>
        </div>

        <Link to={'/projects'} className="no-texdecoration">
          <button className="btn-projects-home">
            <img src={Arrow} alt="Icone do botão" />
            Veja Todos
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Projects_home;
