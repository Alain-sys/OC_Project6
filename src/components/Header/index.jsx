import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
  return (
    <header>
      <Logo logoColored={true} />
      <nav>
        <ul className="nav__list">
          <NavLink to="/" className="nav__list-item">
            Accueil
          </NavLink>
          <NavLink to="/About" className="nav__list-item">
            A propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
