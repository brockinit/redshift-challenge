import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { ImageCard } from '../../components';
import { fetchImages } from '../../reducers/images';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.loadMoreImages = this.loadMoreImages.bind(this);
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  loadMoreImages() {
    this.props.fetchImages();
  }

  render() {
    return (
      <div className="gallery-container outer">
        {this.props.images.map(image => <ImageCard {...image} />)}
        <button onClick={this.loadMoreImages}>Load more</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    images: state.images,
  };
}

export default connect(mapStateToProps, { fetchImages })(GalleryContainer);
