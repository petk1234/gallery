import { Component } from "react";
import styles from "./button.module.scss";
export default class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleClick = (e) => {
    this.props.onClickAdd();
  };
  render() {
    const isAble =
      (this.props.videos.length !== 0 &&
        this.props.pictures.length === 0 &&
        this.props.counter >= 0.9 * this.props.videos.length) ||
      (this.props.videos.length === 0 &&
        this.props.pictures.length !== 0 &&
        this.props.counter >= 0.9 * this.props.pictures.length)
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
