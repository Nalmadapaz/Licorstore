import { useContext } from 'react';
import {CarritoContext} from "../../context/CarritoContext";
import {Link} from 'react-router-dom';
import './Cartwidget.css';

const Cartwidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  return (
    <div>
        <Link to="/cart">
        <img className='imgCarrito' src="../img/carrito.png" alt="Carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }

        </Link>
    </div>
  )
}

export default Cartwidget