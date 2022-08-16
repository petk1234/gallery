import axios from "axios";
const getServerResponse = (q, page, isVideo = "") => {
  const videos = isVideo === "Images" ? "" : `${isVideo}/`;
  const beginStr = `https://pixabay.com/api/${videos}`;
  const apiKey = "23263056-8420dc5c89144af04b2f7ac5b";

  const query =
    isVideo !== "videos"
      ? `${beginStr}?key=${apiKey}&q=${q}&image_type=photo&orientation=horizontal&per_page=${
          12 * page
        }`
      : `${beginStr}?key=${apiKey}&q=${q}&video_type=all&per_page=${12 * page}`;
  return axios.get(query).then((res) => {
    return res.data.hits;
  });
  // .catch(console.error());
  // .finally((data) => {
  //   console.log(data.hits);
  //   return data.hits;
  // });
};
export default getServerResponse;
