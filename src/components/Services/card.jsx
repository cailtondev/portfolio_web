import React from 'react';
import useConnectApi from '../useConnectApi';

function Card() {
  const { data, error } = useConnectApi('card');

  if (error) {
    console.error('Erro ao buscar dados da API:', error);
    return (
      <p style={{ textAlign: 'center' }}>
        Ocorreu um erro ao buscar os dados, recarregue a página.
      </p>
    );
  }

  return (
    <div className="container-card-services">
      {data.map((cardInfo) => (
        <div key={cardInfo.id} className="card-services">
          <h2 className="title-card-services">{cardInfo.card_title}</h2>
          <p className="paragraph-card-services">{cardInfo.card_paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
