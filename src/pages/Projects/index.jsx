import React, { useState, useEffect } from 'react';
import useConnectApi from '../../components/useConnectApi';

import Pagination from './pagination';
import Card from './card';
import Filter from './filter';

import './style.scss';

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
        <h2 className="projects-page-title">Todos os trabalhos</h2>

        <p className="projects-page-paragraph">
          Por padrão, os projetos estão listados na ordem em que foram
          adicionados. Utilize o filtro para organizar por categoria.
        </p>

        <Filter
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />

        {filteredCards.length === 0 && (
          <p style={{ padding: '24px 0' }}>
            Ooops, nenhum projeto adicionado no momento.
          </p>
        )}

        <div className="container-projects row">
          {filteredCards.map((project) => (
            <Card key={project.id} project={project} />
          ))}

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              paginate={paginate}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
