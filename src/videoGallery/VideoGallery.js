import styles from "./videoGallery.module.scss";
import VideoGalleryItem from "../videoGalleryEl/VideoGalleryItem";
import { ImageContext } from "../imagegallery/ImageGallery";
function VideoGallery(props) {
  console.log(props);
  console.log("videoGallery");
  return (
    <>
      {/* {props.videos.length !== 0 ? ( */}
      <ul className={styles.gallery}>
        {props.videos.map((video) => (
          <ImageContext.Provider key={video.id} value={video}>
            <VideoGalleryItem key={video.id} video={video} />
          </ImageContext.Provider>
        ))}
      </ul>
      {/* ) : (
        <p>DJJDDMD</p>
      )} */}
    </>
  );
}
export default VideoGallery;
