import HamburgerSVG from '../../assets/hamburger.svg';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="name-container">
        <a href>
          <p>Stuff on Cats</p>
        </a>
      </div>
      <div className="menu-item-container">
        <div className="menu-item">
          <a href="https://www.reddit.com/r/StuffOnCats/">
            <p>Inspired by r/StuffOnCats</p>
          </a>
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
