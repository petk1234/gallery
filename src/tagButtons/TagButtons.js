import withContext from "../withContext";
import { Component } from "react";
import styles from "../galleryEl/imageGallery.module.scss";
import PropTypes, { array } from "prop-types";
class TagButtons extends Component {
  state = {
    tags: [],
  };
  componentDidMount = () => {
    const { contextImage: data } = this.props;
    let tagsArr = data.tags.split(", ");
    this.setState({
      tags: this.state.tags.concat(tagsArr),
    });
  };
  handleTag = (e) => {
    if (this.props.contextImage.type !== "photo") {
      this.props.contextUser.handleClickInput(e.target.name, "videos");
    } else {
      this.props.contextUser.handleClickInput(e.target.name);
    }
  };
  render() {
    return (
      <ul className={styles.galleryItem__tagsContainer}>
        {this.state.tags.map((tag) => (
          <li key={tag} className={styles.galleryItem__tagItem}>
            <button
              className={styles.galleryItem__tag}
              name={tag}
              onClick={this.handleTag}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
TagButtons.propTypes = {
  contextUser: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func])),
  contextImage: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ),
};
export default withContext(withContext(TagButtons, "user"), "data");
