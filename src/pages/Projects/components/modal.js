import React from 'react';
import PropTypes from 'prop-types';

// import Icon from '../../../images/icons/close.svg';

const Modal = ({ project, handleCloseModal }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.9)' }} // Transparência de fundo ao obter foco no modal
    >
      <div className="modal-dialog modal-dialog-centered">
        <section className="modal-content">
          <header className="modal-header">
            <h2 className="modal-title" id="staticBackdropLabel">
              {project.title}
            </h2>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              Fechar
              {/* <img src={Icon} alt="s" /> */}
            </button>
          </header>

          <section className="modal-body">
            <p>.</p>
          </section>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
