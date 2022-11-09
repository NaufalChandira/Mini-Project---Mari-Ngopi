import {Link} from "react-router-dom"

export default function Header () {
    return (
      <nav className="navbar navbar-dark bg-transparent fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <center><a className="navbar-brand header-title">Mari Ngopi</a></center>
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 btn-title">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/catalogue">Catalogue</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/komentar">Commentar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    );
}