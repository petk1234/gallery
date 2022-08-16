import { Component } from "react";
import React from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
import styles_ from "./videoGalleryEl.module.scss";
class VideoGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  getPreloadImage = (e) => {
    // if (this.state.isLoaded) {
    e.target.pause();
    // }
  };
  handleLoadedData = (e) => {
    this.setState({ isLoaded: true });
  };
  handleMouse = (e) => {
    if (this.state.isLoaded) {
      e.type === "mouseenter" ? e.target.play() : e.target.pause();
    }
  };
  render() {
    const { video } = this.props;
    return (
      <>
        {video.videos.tiny.url !== "" ? (
          <li className={styles.galleryItem}>
            <video
              className={styles_.video}
              width={video.videos.tiny.width}
              height={video.videos.tiny.height}
              muted
              playsInline
              loop
              autoPlay={true}
              onCanPlayThrough={this.getPreloadImage}
              onLoadedData={this.handleLoadedData}
              onMouseEnter={this.handleMouse}
              onMouseLeave={this.handleMouse}
              onTouchStart={(e) => e.target.play()}
              onTouchEnd={(e) => e.target.pause()}
              // onTouchEnter={(e) => e.target.play()}
              // onTouchLeave={(e) => e.target.pause()}
            >
              <source src={video.videos.tiny.url} />
              {/* //type="video/mp4" /> */}
              {/* <source src={video.videos.tiny.url} type="video/webm" />
              <source src={video.videos.tiny.url} type="video/ogg" /> */}
            </video>
            <ImageInfoContainer picture={video} />
          </li>
        ) : (
          <p>JDDKDKKSJDJK</p>
        )}
      </>
    );
  }
}
export default VideoGalleryItem;
