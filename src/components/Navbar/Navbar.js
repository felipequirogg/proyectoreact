import CardWidget from '../CardWidget/CardWidget';
import HiShoppingCart from '../CardWidget/CardWidget'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <h1 className="titulo">Rosario chocolates</h1>
                <ul>
                    <li>
                        <a href="https://plataforma.coderhouse.com/cursos/37080/reactjs">Inicio</a>
                    </li>
                    <li>
                        <a href="https://plataforma.coderhouse.com/cursos/37080/reactjs">Productos</a>
                    </li>
                    <li>
                        <a href="https://plataforma.coderhouse.com/cursos/37080/reactjs">Contacto</a>
                    </li>
                    <HiShoppingCart size={30} color="#473a3b" />
                </ul>
            </nav>
            
        </header>
    );
};

export default Navbar;