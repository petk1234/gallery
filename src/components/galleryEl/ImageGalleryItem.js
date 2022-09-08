import { Component } from "react";
import Modal from "../modal/Modal";
import React from "react";
import styles from "./imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
import withContext from "../../withContext";
import ContentLoader from "../contentLoader/ContentLoader";
import PropTypes, { array } from "prop-types";
class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoaded: false,
    };
  }
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleLoadedData = (e) => {
    this.setState({ isLoaded: true });
    this.props.contextUser.loadedCounter();
  };
  render() {
    const { contextImage: picture } = this.props;
    return (
      <li className={styles.galleryItem}>
        <img
          src={picture.webformatURL}
          className={styles.galleryItem__img}
          alt=""
          onClick={this.toggleModal}
          onLoad={this.handleLoadedData}
        />
        <ImageInfoContainer />
        {this.state.modal === true && (
          <Modal url={picture.webformatURL} deactiveModal={this.toggleModal} />
        )}
        {this.state.isLoaded === false && <ContentLoader />}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  picture: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.array,
    ])
  ),
};
export default withContext(withContext(ImageGalleryItem, "user"), "data");
