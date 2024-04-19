import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import "./Header.css"

// component to display header on every page
function Header() {
return (
    <div className='header'>
       
        <nav>
        <img src={logo} alt="logo" />
            <Link to="/" >Accueil</Link>
            <Link to="/">Profil</Link>
            <Link to="/reglage">Réglage</Link>
            <Link to="/communaute">Communauté</Link>
        </nav>
    </div>
    );
}

export default Header