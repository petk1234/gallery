import styles from "./contentLoader.module.scss";
import Loader from "../loader/Loader";
function ContentLoader() {
  return (
    <div className={styles.preLoadingArea}>
      Is Loading...
      <div className={styles.loader}>
        <Loader />
      </div>
    </div>
  );
}
export default ContentLoader;
