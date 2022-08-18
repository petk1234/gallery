import { Component } from "react";
import Modal from "../modal/Modal";
import React from "react";
import Loader from "../loader/Loader";
import styles from "./imageGallery.module.scss";
import ImageInfoContainer from "../imageInfoContainer/ImageInfoContainer";
import withContext from "../withContext";
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
    const { picture } = this.props;
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
          <Modal
            url={picture.webformatURL}
            deactiveModal={this.toggleModal}
          ></Modal>
        )}
        {this.state.isLoaded === false && (
          <div className={styles.div}>
            Is Loading...
            <div className={styles.divDiv}>
              <Loader />
            </div>
          </div>
        )}
      </li>
    );
  }
}
export default withContext(ImageGalleryItem, "user");
