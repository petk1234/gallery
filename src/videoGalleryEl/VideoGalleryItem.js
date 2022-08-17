import { Component } from "react";
import React from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
import styles_ from "./videoGalleryEl.module.scss";
class VideoGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isLoaded: false,
    };
  }
  getPreloadImage = (e) => {
    // if (this.state.isLoaded === true) {
    e.target.pause();
    // }
  };
  handleLoadedData = (e) => {
    this.setState({ isLoaded: true });
  };

  handleShouldPlay = (e) => {
    if (this.state.isLoaded === true) {
      if (
        e.type === "mouseenter" ||
        e.type === "touchstart" ||
        e.type === "click"
      ) {
        console.log(e.type);
        this.myRef.current.play();
      } else if (e.type === "mouseleave" || e.type === "touchend") {
        console.log(e.type);
        this.myRef.current.pause();
      }
    }
  };
  render() {
    const { video } = this.props;
    return (
      <>
        {video.videos.tiny.url !== "" && video.videos.tiny.size <= 5000000 && (
          <li
            onMouseEnter={this.handleShouldPlay}
            onMouseLeave={this.handleShouldPlay}
            onClick={this.handleShouldPlay}
            onTouchStart={this.handleShouldPlay}
            onTouchEnd={this.handleShouldPlay}
            className={styles.galleryItem}
          >
            <>
              <video
                ref={this.myRef}
                className={styles_.video}
                width={video.videos.tiny.width}
                height={video.videos.tiny.height}
                muted
                playsInline
                // preload={true}
                loop
                autoPlay={true}
                onCanPlayThrough={this.getPreloadImage}
                onLoadedData={this.handleLoadedData}
              >
                <source src={video.videos.tiny.url} />
                {/* //type="video/mp4" /> */}
                {/* <source src={video.videos.tiny.url} type="video/webm" />
              <source src={video.videos.tiny.url} type="video/ogg" /> */}
              </video>
              <ImageInfoContainer picture={video} />
            </>
          </li>
        )}
      </>
    );
  }
}
export default VideoGalleryItem;
