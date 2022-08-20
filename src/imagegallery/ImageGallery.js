import { Component } from "react";
import { PureComponent } from "react";
import ImageGalleryItem from "../galleryEl/ImageGalleryItem";
import React from "react";
import styles from "./gallery.module.scss";
import PropTypes, { array } from "prop-types";
export const ImageContext = React.createContext();
export default class ImageGallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("image gallery");
    return (
      <>
        <ul className={styles.gallery}>
          {this.props.pictures.map((picture) => (
            <ImageContext.Provider key={picture.id} value={picture}>
              <ImageGalleryItem
                key={picture.id}
                picture={picture}
              ></ImageGalleryItem>
            </ImageContext.Provider>
          ))}
        </ul>
      </>
    );
  }
}
ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
      ])
    )
  ),
};
