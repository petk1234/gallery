import { Component } from "react";
import styles from "./button.module.scss";
import withContext from "../../withContext";
import PropTypes, { array } from "prop-types";
class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.page !== this.props.page ||
      JSON.stringify(nextProps.pictures) !==
        JSON.stringify(this.props.pictures) ||
      JSON.stringify(nextProps.videos) !== JSON.stringify(this.props.videos) ||
      nextProps.counter !== this.props.counter ||
      nextProps.onClickAdd.toString() !== this.props.onClickAdd.toString()
      ? true
      : false;
  };
  handleClick = (e) => {
    this.props.onClickAdd();
  };
  render() {
    const { pictures, videos, counter } = this.props;
    const isAble =
      (videos.length !== 0 &&
        pictures.length === 0 &&
        counter >= 0.9 * videos.length) ||
      (videos.length === 0 &&
        pictures.length !== 0 &&
        counter >= 0.9 * pictures.length)
        ? false
        : true;
    return (
      <button
        className={styles.button}
        onClick={this.handleClick}
        disabled={isAble}
      >
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
      ])
    )
  ),
  videos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
      ])
    )
  ),
  counter: PropTypes.number,
};
export default withContext(Button, "user");
