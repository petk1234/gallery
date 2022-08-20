import { Component } from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import withContext from "../withContext";
import PropTypes, { array } from "prop-types";
class LikeButton extends Component {
  state = {
    likes: this.props.contextImage.likes,
  };
  counterIncrement = (e) => {
    if (this.props.contextImage.likes === this.state.likes) {
      this.setState({ likes: this.state.likes + 1 });
    } else {
      this.setState({ likes: this.state.likes - 1 });
    }
  };
  render() {
    const classChanger =
      this.props.contextImage.likes === this.state.likes
        ? `${styles.galleryItem__like} ${styles.notActive}`
        : `${styles.galleryItem__like} ${styles.active} `;
    return (
      <button className={classChanger} onClick={this.counterIncrement}>
        {this.state.likes}
      </button>
    );
  }
}
LikeButton.propTypes = {
  contextImage: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ),
};
export default withContext(LikeButton, "data");
