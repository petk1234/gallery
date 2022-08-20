import { Component } from "react";
import styles from "./button.module.scss";
import withContext from "../withContext";
import { HashLink } from "react-router-hash-link";
import PropTypes, { array } from "prop-types";
class Button extends Component {
  constructor() {
    super();
    this.state = {};
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    // console.log(
    //   nextProps.page !== this.props.page ||
    //     JSON.stringify(nextProps.pictures) !==
    //       JSON.stringify(this.props.pictures) ||
    //     JSON.stringify(nextProps.videos) !==
    //       JSON.stringify(this.props.videos) ||
    //     nextProps.counter !== this.props.counter ||
    //     nextProps.onClickAdd.toString() !== this.props.onClickAdd.toString()
    //     ? true
    //     : false
    // );
    // console.log(nextProps.page, this.props.page);
    // console.log(
    //   JSON.stringify(nextProps.pictures),
    //   JSON.stringify(this.props.pictures),
    //   JSON.stringify(nextProps.pictures) === JSON.stringify(this.props.pictures)
    // );
    // console.log(
    //   JSON.stringify(nextProps.videos),
    //   JSON.stringify(this.props.videos),
    //   JSON.stringify(nextProps.videos) === JSON.stringify(this.props.videos)
    // );
    // console.log(nextProps.counter, this.props.counter);
    return nextProps.page !== this.props.page ||
      JSON.stringify(nextProps.pictures) !==
        JSON.stringify(this.props.pictures) ||
      JSON.stringify(nextProps.videos) !== JSON.stringify(this.props.videos) ||
      nextProps.counter !== this.props.counter ||
      nextProps.onClickAdd.toString() !== this.props.onClickAdd.toString()
      ? true
      : false;
  };
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log(nextProps.counter, this.props.counter);
  //   return JSON.stringify(nextProps.contextUser) !==
  //     JSON.stringify(this.props.contextUser) ||
  //     nextProps.counter !== this.props.counter
  //     ? true
  //     : false;
  // };
  handleClick = (e) => {
    this.props.onClickAdd();
  };
  render() {
    // console.log(JSON.stringify(this.props.pictures));
    // console.log(this.props.onClickAdd.toString());
    // const { contextUser, counter } = this.props;
    // const { pictures, videos } = contextUser;
    const { pictures, videos, counter } = this.props;
    console.log("load button");
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
      // <HashLink smooth to="#header">
      <button
        className={styles.button}
        onClick={this.handleClick}
        disabled={isAble}
      >
        Load more
      </button>
      // </HashLink>
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
