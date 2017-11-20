import Component from 'inferno-component';
import { GalleryContainer } from '../';
import { NavBar, Footer } from '../../components';

class AppContainer extends Component {
  render() {
    return (
      <div className="gallery-container outer">
        <NavBar />
        <GalleryContainer />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
