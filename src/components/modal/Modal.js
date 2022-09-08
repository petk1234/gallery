import { Component } from "react";
import styles from "./modal.module.css";
import PropTypes, { array } from "prop-types";
export default class Modal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  closeModal = (e) => {
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
Modal.propTypes = {
  url: PropTypes.string,
  deactiveModal: PropTypes.func,
};
