import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime rerum sint voluptatem praesentium est placeat totam dolorum! Maiores, assumenda quasi perferendis laborum, sint amet corrupti laudantium doloremque enim officiis corporis.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail