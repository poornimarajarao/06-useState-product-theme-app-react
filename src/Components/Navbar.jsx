function Navbar({ theme, handleTheme }) {
  return (
    <nav className={`navbar ${theme ? "navbar-dark bg-dark" : "navbar-light bg-light"} px-3`}>
      <span className="navbar-brand p-1">
        <h4>Theme App</h4>
      </span>

      <button onClick={handleTheme} className="btn btn-light btn-sm rounded-circle">
        <i className={`bi ${theme ? "bi-moon-stars-fill" : "bi-brightness-high-fill"}`}></i>
      </button>
    </nav>
  );
}
export default Navbar;
