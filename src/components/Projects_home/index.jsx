import React from 'react';
import { Link } from 'react-router-dom';
import useConnectApi from '../useConnectApi';

function Projects_home() {
  const { data, isLoading, error } = useConnectApi('projects');

  if (isLoading) {
    return <p style={{ textAlign: 'center' }}>Carregando...</p>;
  }

  if (error) {
    console.error('Erro ao buscar dados da API:', error);
    return (
      <p style={{ textAlign: 'center' }}>Ocorreu um erro ao buscar os dados.</p>
    );
  }

  return (
    <>
      <section className="projects-home">
        <div className="container">
          <h2 className="title-projects-home">Veja os meus trabalhos</h2>

          <p className="paragraph-projects-home">
            Clique em <b>veja todos</b> para conferir todos os trabalhos.
          </p>

          <div
            className="container-cards-projects-home row row-cols-sm-2
      row-cols-md-3 g-4"
          >
            {data.map((project) => (
              <div key={project.id} className="card h-100">
                <img
                  src={project.image_link}
                  className="card-img-top"
                  alt={project.alt_image}
                />
              </div>
            ))}
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
    </>
  );
}

export default Projects_home;
