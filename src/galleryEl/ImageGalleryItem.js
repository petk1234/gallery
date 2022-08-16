import { Component } from "react";
import Modal from "../modal/Modal";
import React from "react";
import styles from "./imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    const { picture } = this.props;
    return (
      <li className={styles.galleryItem}>
        <img
          src={picture.webformatURL}
          className={styles.galleryItem__img}
          alt=""
          onClick={this.toggleModal}
        />
        <ImageInfoContainer />
        {this.state.modal === true && (
          <Modal
            url={picture.webformatURL}
            deactiveModal={this.toggleModal}
          ></Modal>
        )}
      </li>
    );
  }
}
export default ImageGalleryItem;
