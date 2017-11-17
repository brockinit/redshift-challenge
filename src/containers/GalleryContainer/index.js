import Component from 'inferno-component';
import { ImageCard } from '../../components';

class GalleryContainer extends Component {
  render() {
    return (
      <div className="gallery-container outer">
        {[1, 2, 3].map(image => <ImageCard />)}
      </div>
    );
  }
}

export default GalleryContainer;
