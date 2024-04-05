import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul className="nav__list">
          <Link to="" className="nav__list-item">
            Accueil
          </Link>
          <Link to="" className="nav__list-item">
            A propos
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
