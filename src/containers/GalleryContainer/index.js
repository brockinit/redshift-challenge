import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { ImageCard } from '../../components';
import { fetchImages, incrementPage } from '../../reducers/images';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.loadMoreImages = this.loadMoreImages.bind(this);

    this.state = {
      images: [],
      fetchingImages: false,
    };
  }

  componentDidMount() {
    const { fetchImages, currentPage } = this.props;
    fetchImages(currentPage);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.images !== this.props.images) {
      return this.setState({ images: nextProps.images });
    }
  }

  loadMoreImages() {
    this.setState({ fetchingImages: true });
    const { incrementPage, fetchImages } = this.props;

    incrementPage();
    fetchImages().then(() => {
      this.setState({ fetchingImages: false });
    });
  }

  render() {
    return (
      <div>
        <div className="grid-area-container">
          {this.state.images.map(image => <ImageCard {...image} />)}
        </div>
        {this.state.images.length > 0 ? (
          <div className="button-container">
            <button
              disabled={this.state.fetchingImages}
              className="load-more-button"
              onClick={this.loadMoreImages}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    images: state.images.items,
  };
}

export default connect(mapStateToProps, {
  fetchImages,
  incrementPage,
})(GalleryContainer);
