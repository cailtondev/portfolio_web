/* eslint-disable prettier/prettier */
import Logo from '../../images/logo/logo.svg';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container">
        <a href="/">
          <img src={Logo} alt="Logo do site" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
