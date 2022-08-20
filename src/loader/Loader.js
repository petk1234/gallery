import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./loader.module.scss";
export default class Loader extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles.loaderContainer}>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
