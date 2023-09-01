/* eslint-disable prettier/prettier */
import Logo from '../../images/logo/logo.svg';

function Navbar() {
  return (
    <nav className="container">
      <a href="/">
        <img src={Logo} alt="Logo do site" width="138" height="37" />
      </a>
    </nav>
  );
}

export default Navbar;
