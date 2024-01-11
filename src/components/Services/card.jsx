import React from 'react';
import useConnectApi from '../useConnectApi';

function Card() {
  const { data } = useConnectApi('card');

  return (
    <>
      <div className="container-card-services">
        {data.map((cardInfo) => (
          <div key={cardInfo.id} className="card-services">
            <h2 className="title-card-services">{cardInfo.card_title}</h2>
            <p className="paragraph-card-services">{cardInfo.card_paragraph}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
