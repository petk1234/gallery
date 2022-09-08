import styles from "./gallery.module.scss";
import React from "react";
import VideoGalleryItem from "../videoGalleryEl/VideoGalleryItem";
import ImageGalleryItem from "../galleryEl/ImageGalleryItem";
import PropTypes from "prop-types";
export const GalleryContext = React.createContext();
function Gallery({ pictures, videos }) {
  const contents =
    pictures.length > 0 && videos.length === 0 ? pictures : videos;
  const ContentComponent =
    pictures.length > 0 && videos.length === 0
      ? ImageGalleryItem
      : VideoGalleryItem;
  return (
    <>
      <ul className={styles.gallery}>
        {contents.map((content) => (
          <GalleryContext.Provider key={content.id} value={content}>
            <ContentComponent key={content.id} kkk={content.id} />
          </GalleryContext.Provider>
        ))}
      </ul>
    </>
  );
}
Gallery.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default React.memo(Gallery);
