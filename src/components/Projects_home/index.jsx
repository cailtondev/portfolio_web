import React from 'react';
import { Link } from 'react-router-dom';

import Card1 from '../../images/cards/card-1.webp';
import Card2 from '../../images/cards/card-2.webp';
import Card3 from '../../images/cards/card-3.webp';

function Projects_home() {
  return (
    <section className="projects-home">
      <div className="container">
        <h2 className="title-projects-home">Veja os meus Trabalhos</h2>

        <p className="paragraph-projects-home">
          Clique em <b>“Veja Todos”</b> para conferir os projetos
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
              src={Card3}
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
        </div>

        <Link to={'/projects'} className="no-texdecoration">
          <button
            className="btn-projects-home"
            onClick={() => window.scrollTo(0, 0)}
          >
            Ver Todos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Projects_home;
