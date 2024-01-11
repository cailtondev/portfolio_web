import React from 'react';
import useConnectApi from '../useConnectApi';

const Introduction = () => {
  const { data } = useConnectApi('home');

  return (
    <>
      {data.map((home) => (
        <section className="introduction container" key={home.id}>
          <h1>{home.title}</h1>

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
