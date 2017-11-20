import Component from 'inferno-component';
import HamburgerSVG from '../../assets/hamburger.svg';
import { Link } from 'inferno-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.collapseNav = this.collapseNav.bind(this);

    this.state = {
      navClass: 'navbar-container',
    };
  }

  handleClick() {
    if (this.state.navClass === 'navbar-container') {
      this.setState({ navClass: 'responsive-container' });
    } else {
      this.setState({ navClass: 'navbar-container' });
    }
  }

  collapseNav() {
    this.setState({ navClass: 'navbar-container' });
  }

  render() {
    return (
      <div className={this.state.navClass}>
        <div className="name-container">
          <Link to="/" onClick={this.collapseNav}>
            <p>Cats n Stuff</p>
          </Link>
        </div>
        <div className="menu-item-container">
          <div className="menu-item">
            <Link to="/about" onClick={this.collapseNav}>
              <p>About</p>
            </Link>
          </div>
        </div>
        <div className="hamburger">
          <div onClick={this.handleClick}>
            <img
              src={HamburgerSVG}
              alt="About"
              width="40px"
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
