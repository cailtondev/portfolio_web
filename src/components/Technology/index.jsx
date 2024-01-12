import React from 'react';
import useConnectApi from '../useConnectApi';

function Technology() {
  const { data } = useConnectApi('technologies');

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
