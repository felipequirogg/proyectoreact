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
                        <NavLink to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/chocolate1'>Chocolates artesanales</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/chocolate2'>Chocolates prefabricados</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Contacto</NavLink>
                    </li>
                    <HiShoppingCart size={30} color="#473a3b" />
                </ul>
            </nav>
            
        </header>
    );
};

export default Navbar;