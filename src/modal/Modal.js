import { Component } from "react";
import styles from "./modal.module.css";
export default class Modal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  closeModal = (e) => {
    console.log(e);
    if (e.keyCode === 27) {
      this.props.deactiveModal();
      document.removeEventListener("keydown", this.closeModal);
    }
    if (e._reactName === "onClick") {
      document.removeEventListener("keydown", this.closeModal);
      this.props.deactiveModal();
      document.removeEventListener("onclick", this.closeModal);
    }
  };
  componentDidMount = () => {
    document.addEventListener("keydown", this.closeModal);
  };
  render() {
    return (
      <div className={styles.overlay} value="overlay" onClick={this.closeModal}>
        <div className={styles.modal}>
          <img className={styles.img} src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
