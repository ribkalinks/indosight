import logo from "../assets/logo2.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <a href="#" className="logo">

          <img
            src={logo}
            alt="Indosight Logo"
            className="logo-image"
          />

        </a>

        {/* NAVIGATION */}
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

    </nav>
  )
}

export default Navbar