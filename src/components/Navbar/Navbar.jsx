import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget';
import './Navbar.css';


const Navbar = () => {
  return (
    <header>
      <h1>Licorstore</h1>

      <nav>
        <ul>
          <li>Vinos</li>
          <li>Whiskies</li>
          <li>Gin</li>
          <li>Cervezas</li>
          <li>Aperitivos</li>
        </ul>
      </nav>

      <Cartwidget/>
    </header>
  )
}

export default Navbar