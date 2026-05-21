function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#" className="logo">

          <img
            src="/src/assets/logo2.png"
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