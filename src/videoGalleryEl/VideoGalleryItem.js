import { Component } from "react";
import { PureComponent } from "react";
import React from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
import Video from "../video/Video";
import withContext from "../withContext";
import failedVideo from "../images/galleryItem/loadFailure.png";
import PropTypes, { array } from "prop-types";
import ContentLoader from "../contentLoader/ContentLoader";
class VideoGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isLoaded: false,
      shouldBeRendered: true,
    };
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      JSON.stringify(nextProps.contextUser) !==
        JSON.stringify(this.props.contextUser) ||
      nextState.isLoaded !== this.state.isLoaded ||
      nextState.shouldBeRendered !== this.state.shouldBeRendered
    );
  };

  componentDidMount = () => {
    // console.log("hi");
    setTimeout(() => {
      // console.log("hihohy");
      if (this.state.isLoaded === false) {
        this.props.contextUser.loadedCounter();
        this.setState({ shouldBeRendered: false });
      }
    }, 60000);
  };
  setLoaded = () => {
    this.setState({ isLoaded: true });
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
    console.log("I rerendered rerendered", this.props.kkk);
    return (
      <>
        {this.state.shouldBeRendered === true ? (
          <li
            onMouseEnter={this.handleShouldPlay}
            onMouseLeave={this.handleShouldPlay}
            onClick={this.handleShouldPlay}
            onTouchStart={this.handleShouldPlay}
            onTouchEnd={this.handleShouldPlay}
            className={styles.galleryItem}
          >
            <Video reference={this.myRef} setLoaded={this.setLoaded} />
            <ImageInfoContainer />
            {this.state.isLoaded === false && <ContentLoader />}
          </li>
        ) : (
          <li className={styles.galleryItem}>
            <img src={failedVideo} className={styles.galleryItem__img} alt="" />
          </li>
        )}
      </>
    );
  }
}
VideoGalleryItem.propTypes = {
  contextUser: PropTypes.objectOf(PropTypes.func).isRequired,
  kkk: PropTypes.number,
};
export default withContext(VideoGalleryItem, "user");
