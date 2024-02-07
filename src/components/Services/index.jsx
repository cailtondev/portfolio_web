import React from 'react';
import useConnectApi from '../useConnectApi';
import Card from './card';

function Services() {
  const { data, isLoading, error } = useConnectApi('offers');

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
      {data.map((service) => (
        <section key={service.id} className="services">
          <div className="container">
            <h2 className="title-services">{service.title}</h2>
            <p className="paragraph-services">{service.paragraph}</p>

            <Card />
          </div>
        </section>
      ))}
    </>
  );
}

export default Services;
