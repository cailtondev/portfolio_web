import React from 'react';
import useConnectApi from '../useConnectApi';

function Technology() {
  const { data, isLoading, error } = useConnectApi('technologies');

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
    <section className="container technology">
      <h2 className="title-technology">
        Principais tecnologias que utilizo no desenvolvimento web
      </h2>

      <div className="container-technology-icons">
        {data.map((tecnologia) => (
          <figure key={tecnologia.id} className="technology-icons">
            <img
              width="57"
              height="57"
              src={tecnologia.icon_link}
              alt="Logo da tecnologia"
            />
            <figcaption className="title-technology-icons">
              {tecnologia.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Technology;
