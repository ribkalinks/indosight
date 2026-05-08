function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src="/src/assets/logo1.png" alt="logo" />

          <span className="brand-text">
            <span className="red">indo</span>
            <span className="gray">sight</span>
          </span>
        </div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar