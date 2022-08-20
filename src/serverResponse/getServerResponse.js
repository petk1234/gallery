import axios from "axios";
const getServerResponse = (q, page, isVideo = "", controller__ = "") => {
  const videos = isVideo === "Images" ? "" : `${isVideo}/`;
  const beginStr = `https://pixabay.com/api/${videos}`;
  const apiKey = "23263056-8420dc5c89144af04b2f7ac5b";

  // let controller__ = new AbortController();
  // let signal = controller_.signal;
  // controller__.abort();
  // setTimeout(() => controller__.abort(), 1000);
  const query =
    isVideo !== "videos"
      ? `${beginStr}?key=${apiKey}&q=${q}&image_type=photo&orientation=horizontal&page=${page}&per_page=${12}`
      : `${beginStr}?key=${apiKey}&q=${q}&video_type=all&page=${page}&per_page=${12}`;

  return axios
    .get(query, { signal: controller__.signal })
    .then((res) => {
      console.log("fetching started");
      // controller__.abort();
      return res.data.hits;
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("REQUEST IS CANCELED");
      }
      console.log(error);
      return "error";
    });
};
export default getServerResponse;
