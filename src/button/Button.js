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
    return (
      <button className={styles.button} onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
