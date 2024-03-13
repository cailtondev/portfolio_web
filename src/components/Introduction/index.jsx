import React from 'react';
import useConnectApi from '../useConnectApi';

const Introduction = () => {
  const { data, error } = useConnectApi('home');

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
      {data.map((home) => (
        <section className="introduction container" key={home.id}>
          <h1>
            {home.title}
            <span>_</span>
          </h1>

          <button
            className="btn-contact"
            onClick={() => {
              window.open('https://wa.me/77998249382');
              window.scrollTo(0, 0);
            }}
          >
            Fale comigo
          </button>
        </section>
      ))}
    </>
  );
};

export default Introduction;
