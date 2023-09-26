import React from 'react';
import Icon from '../../images/icons/html.svg';
import Icon_2 from '../../images/icons/css.svg';
import Icon_3 from '../../images/icons/js.svg';
import Icon_4 from '../../images/icons/react.svg';
import Icon_5 from '../../images/icons/figma-2.svg';
import Icon_6 from '../../images/icons/python.svg';
import Icon_7 from '../../images/icons/django.svg';
import Icon_8 from '../../images/icons/postgreesql.svg';

const technologies = [
  { icon: Icon, title: 'Html' },
  { icon: Icon_2, title: 'Css' },
  { icon: Icon_3, title: 'JavaScript' },
  { icon: Icon_6, title: 'Python' },
  { icon: Icon_4, title: 'ReactJS' },
  { icon: Icon_7, title: 'Django' },
  { icon: Icon_8, title: 'PostgreSQL' },
  { icon: Icon_5, title: 'Figma' },
];

function Technology() {
  return (
    <section className="container technology">
      <h2 className="title-technology">
        Principais tecnologias que utilizo no desenvolvimento web
        {/* Tecnologias que vou utilizar no desenvolvimento do seu site */}
      </h2>

      <div className="container-technology-icons">
        {technologies.map((tech, index) => (
          <figure className="technology-icons" key={index}>
            <img
              width="57"
              height="57"
              src={tech.icon}
              alt="Ícone da Tecnologia"
            />
            <figcaption className="title-technology-icons">
              {tech.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Technology;
