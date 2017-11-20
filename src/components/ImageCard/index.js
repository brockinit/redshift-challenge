const ImageCard = props => {
  return (
    <div className="grid-container-outer">
      <div
        className="grid-image-block"
        style={{ backgroundImage: `url(${props.link})` }}
      >
        <div className="grid-hover" />
      </div>
      <div>hello</div>
    </div>
  );
};

export default ImageCard;
