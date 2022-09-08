import { Component } from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import TagButtons from "../tagButtons/TagButtons";
import LikeButton from "../likeButton/LikeButton";
class ImageInfoContainer extends Component {
  render() {
    return (
      <div className={styles.galleryItem__infoContainer}>
        <div className={styles.galleryItem__lineInfo}>
          <TagButtons />
          <LikeButton />
        </div>
      </div>
    );
  }
}
export default ImageInfoContainer;
