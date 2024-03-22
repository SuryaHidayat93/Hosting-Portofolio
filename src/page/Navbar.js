import '../index1.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (

        <header class="header">
            <a href="#" class="logo"><span>S</span>urya</a>

            <nav class="navbar">
                <Link to="/Home">Home</Link>
                <Link to="/Biodata">Biodata</Link>
                <Link to="/Galeri">Galeri</Link>
                <Link to="/Portofolio">Portofolio</Link>
                <Link to="/Kontak">Kontak</Link>
            </nav>
        </header>


    );

}

export default Navbar;
