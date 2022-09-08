import React from "react";
import { Component } from "react";
import { PureComponent } from "react";
import withContext from "../../withContext";
import baseVideo from "../../videos/index.mp4";
import styles_ from "../videoGalleryEl/videoGalleryEl.module.scss";
import PropTypes, { array } from "prop-types";
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      JSON.stringify(nextProps.contextUser) !==
        JSON.stringify(this.props.contextUser) ||
      JSON.stringify(nextProps.contextImage) !==
        JSON.stringify(this.props.contextImage) ||
      nextProps.reference !== this.props.reference ||
      nextProps.setLoaded.toString() !== this.props.setLoaded.toString()
    );
  };

  handleLoadedData = (e) => {
    e.target.pause();
    this.props.setLoaded();
  };
  getPreloadImage = (e) => {
    this.props.contextUser.loadedCounter();
  };
  render() {
    const { contextImage: video, reference } = this.props;
    return (
      <>
        <video
          ref={reference}
          className={styles_.video}
          width={video.videos.tiny.width}
          height={video.videos.tiny.height}
          muted
          playsInline
          loop
          autoPlay={true}
          onCanPlayThrough={this.handleLoadedData}
          onLoadedData={this.getPreloadImage}
        >
          <source src={video.videos.tiny.url} />
          <source src={baseVideo} type="video/mp4" />
        </video>
      </>
    );
  }
}
Video.propTypes = {
  reference: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  video: PropTypes.object,
};
export default withContext(withContext(Video, "data"), "user");
