import "./style.scss";

function Navbar() {
  return (
    <div className="container">
      <a className="navbar-brand" href="/#">
        <span>{}</span>
      </a>

      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
        <span className="navbar-toggler-icon"></span>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/#">
              <span className="nav-style">#</span>Loja
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/#">
              <span className="nav-style">#</span>Trabalhos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/#">
              <span className="nav-style">#</span>Contato
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle active"
              href="/#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Idioma
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/#">
                  Português-Br
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/#">
                  Inglês-EN
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="/#">
                  Japanese-Jp
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
