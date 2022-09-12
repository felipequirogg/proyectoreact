import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  const saludo = '¡Bienvenidos a Rosario Chocolates!'

  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo={saludo} />} />
        <Route path='/category/:categoriaId' element={<ItemListContainer />} />
        <Route path='/item/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

//Navbar()
//<Navbar/>