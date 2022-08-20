// import styles from "./videoGallery.module.scss";
// import React from "react";
// import VideoGalleryItem from "../videoGalleryEl/VideoGalleryItem";
// import { ImageContext } from "../imagegallery/ImageGallery";
// import PropTypes from "prop-types";
// function VideoGallery(props) {
//   // console.log("I rerendered");
//   return (
//     <>
//       <ul id="#videoContainer" className={styles.gallery}>
//         {props.videos.map((video) => (
//           <ImageContext.Provider key={video.id} value={video}>
//             <VideoGalleryItem key={video.id} kkk={video.id} />
//           </ImageContext.Provider>
//         ))}
//       </ul>
//     </>
//   );
// }
// VideoGallery.propTypes = {
//   videos: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
// export default React.memo(VideoGallery);
