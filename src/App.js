import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';


const App = () => {
  const saludo = '¡Bienvenidos a Rosario Chocolates!'

  return (
    <>
      <Navbar />
      <Main />
      <ItemListContainer saludo={saludo}/>
      <Footer />
    </>
  );
};

export default App;

//Navbar()
//<Navbar/>