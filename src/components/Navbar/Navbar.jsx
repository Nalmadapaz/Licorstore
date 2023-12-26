import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="./img/logo.jpg"
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Licorstore Logo"
          />
          LiquorStore
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Vinos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Whiskies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cervezas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aperitivos
              </a>
            </li>
          </ul>
        </div>

        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;
