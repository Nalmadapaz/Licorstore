import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import './Navbar.css';
import {Link, NavLink} from "react-router-dom";

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
          <Link to="/" > 
          Liquorstore
          </Link>
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
                <NavLink to="/categoria/1">
                Vinos
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <NavLink to="/categoria/2">
                Whiskies
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <NavLink to="/categoria/3">
                Gin
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <NavLink to="/categoria/4">
                Cervezas
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <NavLink  to="/categoria/5">
                Bebidas Blancas
                </NavLink>
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
