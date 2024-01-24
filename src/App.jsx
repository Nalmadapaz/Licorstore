import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
        <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
