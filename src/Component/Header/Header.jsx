
import './Header.scss';
import mylogo from './../../img/logo.png';

const Header = () =>{
    return(
            <header >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#"
            ><img src={mylogo} alt="logo"
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">DISH</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CHEFS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">GENERIC</a></li>
                  <li><a className="dropdown-item" href="#">ELEMENTS</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Header;