import Component from 'inferno-component';
import './AppContainer.css';
import { GalleryContainer } from '../';
import { NavBar, Footer } from '../../components';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <GalleryContainer />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
