import CardWidget from '../CardWidget/CardWidget';
import HiShoppingCart from '../CardWidget/CardWidget'
import logorosario from '../img/iconorosario.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <img src={logorosario} className="logoimagen" alt="Logo Chocolates Rosario" />
                <ul>
                    <li>
                        <a href="https://plataforma.coderhouse.com/cursos/37080/reactjs">Inicio</a>
                    </li>
                    <li>
                        <NavLink to='/category/categoryId'>Productos</NavLink>
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