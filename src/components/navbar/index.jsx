import Logo from '../../images/logo/logo.svg';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="container">
        <img src={Logo} />
      </nav>
    </header>
  );
}

export default Navbar;
