import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </>
  )
}

export default App
