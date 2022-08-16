import { Component } from "react";
import ImageGalleryItem from "../galleryEl/ImageGalleryItem";
import React from "react";
import styles from "./gallery.module.scss";
export const ImageContext = React.createContext();
export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("imagGaleery");
    console.log(this.props.pictures.length);
    let children = this.props.children;
    return (
      <>
        {/* {this.props.pictures.length !== 0 ? ( */}
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
