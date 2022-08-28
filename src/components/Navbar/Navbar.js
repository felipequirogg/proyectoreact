import CardWidget from '../CardWidget/CardWidget';
import HiShoppingCart from '../CardWidget/CardWidget'
import logorosario from '../img/iconorosario.png';

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