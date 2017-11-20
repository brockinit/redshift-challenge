import HamburgerSVG from '../../assets/hamburger.svg';
import { Link } from 'inferno-router';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="name-container">
        <Link to="/">
          <p>Stuff on Cats</p>
        </Link>
      </div>
      <div className="menu-item-container">
        <div className="menu-item">
          <Link to="https://www.reddit.com/r/StuffOnCats/">
            <p>Inspired by r/StuffOnCats</p>
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <div>
          <img src={HamburgerSVG} alt="About" width="40px" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
