import React from 'react';
import useConnectApi from '../useConnectApi';
import Card from './card';

function Services() {
  const { data } = useConnectApi('offers');

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
