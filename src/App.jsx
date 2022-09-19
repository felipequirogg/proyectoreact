import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import CartProvider from './Context/CartContext'
import Cart from './components/Cart/Cart';

function App () {
  const saludo = '¡Bienvenidos a Rosario Chocolates!'

  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Main />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo={saludo} />} />
        <Route path='/category/:categoriaId' element={<ItemListContainer />} />
        <Route path='/item/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartProvider>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

//Navbar()
//<Navbar/>