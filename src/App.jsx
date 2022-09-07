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
    <>
    <BrowserRouter>
      <Navbar />
      <Main />
      <Routes>
        <Route path='/' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <ItemListContainer saludo={saludo}/>
      <ItemDetailContainer />
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

//Navbar()
//<Navbar/>