import { Component } from "react";
import React from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
import styles_ from "./videoGalleryEl.module.scss";
import Loader from "../loader/Loader";
import withContext from "../withContext";
import baseVideo from "../videos/index.mp4";
class VideoGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isLoaded: false,
    };
  }
  getPreloadImage = (e) => {
    e.target.pause();
  };
  handleLoadedData = (e) => {
    this.setState({ isLoaded: true });
    this.props.contextUser.loadedCounter();
  };

  handleShouldPlay = (e) => {
    if (this.state.isLoaded === true) {
      if (
        e.type === "mouseenter" ||
        e.type === "touchstart" ||
        e.type === "click"
      ) {
        this.myRef.current.play();
      } else if (e.type === "mouseleave" || e.type === "touchend") {
        this.myRef.current.pause();
      }
    }
  };
  render() {
    const { video } = this.props;
    return (
      <>
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
              loop
              autoPlay={true}
              onCanPlayThrough={this.getPreloadImage}
              onLoadedData={this.handleLoadedData}
            >
              <source src={video.videos.tiny.url} />
              <source src={baseVideo} type="video/mp4" />
            </video>
            <ImageInfoContainer picture={video} />
          </>
          {this.state.isLoaded === false && (
            <div className={styles_.div}>
              Is Loading...
              <div className={styles_.divDiv}>
                <Loader />
              </div>
            </div>
          )}
        </li>
      </>
    );
  }
}
export default withContext(VideoGalleryItem, "user");
