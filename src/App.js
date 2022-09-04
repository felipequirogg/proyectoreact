import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const saludo = '¡Bienvenidos a Rosario Chocolates!'

  return (
    <>
      <Navbar />
      <Main />
      <ItemListContainer saludo={saludo}/>
      <ItemDetailContainer />
      <Footer />
    </>
  );
};

export default App;

//Navbar()
//<Navbar/>