import Component from 'inferno-component';
import './AppContainer.css';
import { NavBar, Footer } from '../../components';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/AppContainer.js</code> and save to
          reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
