import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import useConnectApi from '../../components/useConnectApi';

function Projects() {
  const { data, error } = useConnectApi('projects');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('');
  const smallScreenThreshold = 768;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= smallScreenThreshold) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(6);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const filteredCards = selectedCategory
    ? data.filter((card) => card.tag === selectedCategory)
    : data.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  if (error) {
    console.error('Erro ao buscar dados da API:', error);
    return (
      <p style={{ textAlign: 'center' }}>
        Ocorreu um erro ao buscar os dados, recarregue a página.
      </p>
    );
  }

  return (
    <>
      <section className="container projects-page">
        <h2 className="projects-page-title">Principais trabalhos</h2>

        <p className="projects-page-paragraph">
          Por padrão, os projetos estão listados na ordem em que foram
          adicionados. Utilize o filtro para organizar por categoria.
        </p>

        <form className="filter-form">
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Todos</option>
            <option value="#Front-End">Front-End</option>
            <option value="#Back-End">Back-End</option>
            <option value="#Full-Stack">Full-Stack</option>
            <option value="#UX/UI">UX/UI</option>
          </select>
        </form>

        {filteredCards.length === 0 && (
          <p style={{ padding: '24px 0' }}>
            Ooops, nenhum projeto Full-Stack adicionado no momento.
          </p>
        )}

        <div className="container-projects row">
          {filteredCards.map((project) => (
            <div
              key={project.id}
              className="col-md-6 col-lg-4 body-project-card"
            >
              <article className="project-card">
                <figure>
                  <span className="category">{project.tag}</span>
                  <img
                    className="img-fluid"
                    src={project.image_link}
                    alt={project.alt_image}
                  />

                  <figcaption>
                    Publicado em:{' '}
                    <time>{project.created_at.substring(0, 10)}</time>.
                  </figcaption>
                </figure>

                <header>
                  <h2>{project.title}</h2>
                  <p>{project.paragraph}</p>
                </header>

                <div className="body-buttons">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link_preview}
                  >
                    Ver o trabalho
                  </a>
                </div>
              </article>
            </div>
          ))}

          {totalPages > 1 && (
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-end">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? 'active' : ''
                    }`}
                  >
                    <Link
                      to={'#'}
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
