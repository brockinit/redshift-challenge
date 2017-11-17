import Component from 'inferno-component';
import { ImageCard } from '../../components';
import { fetchService } from '../../utils';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [1, 2, 3],
    };
  }
  render() {
    return (
      <div className="gallery-container outer">
        {this.state.images.map(image => <ImageCard />)}
      </div>
    );
  }
}

export default GalleryContainer;
