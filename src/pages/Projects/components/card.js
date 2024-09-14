import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';

const Card = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="col-md-6 col-lg-4 body-project-card">
      <article className="project-card">
        <figure>
          <span className="category">{project.tag}</span>
          <img
            className="img-fluid"
            src={project.image_link}
            alt={project.alt_image}
          />

          <figcaption>
            Publicado em: <time>{project.created_at.substring(0, 10)}</time>.
          </figcaption>
        </figure>

        <header>
          <h2>{project.title}</h2>
          <p>{project.paragraph}</p>
        </header>

        <div className="body-buttons">
          <button
            className="button-Modal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={handleOpenModal}
          >
            Ver o trabalho
          </button>

          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.link_preview}
          >
            Ver o trabalho
          </a> */}
        </div>
      </article>

      {showModal && (
        <Modal project={project} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired,
    alt_image: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    link_preview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
