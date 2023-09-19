import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function Projects() {
  return (
    <div className="container projects-page">
      <h1>Oops</h1>

      <p>
        Desculpe, não há projetos recentes disponíveis no momento. Assim que um
        novo projeto for concluído, ele será exibido aqui.
      </p>

      <Link to={'/'}>
        <button onClick={() => window.scrollTo(0, 0)}>Voltar</button>
      </Link>
    </div>
  );
}

export default Projects;
