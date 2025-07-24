import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top p-3 navbar-expand-lg px-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-3 fw-bold text-white" to="/">Start Framework</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fw-bolder fs-5 text-white ${isActive ? 'active' : ''}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fw-bolder fs-5 text-white ${isActive ? 'active' : ''}`
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link fw-bolder fs-5 text-white ${isActive ? 'active' : ''}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
