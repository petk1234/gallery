import { Component } from "react";
import Buttons from "../buttons/Buttons";
import styles from "./searchbar.module.scss";
import React from "react";
export const SearchbarContext = React.createContext();
export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      type: "Images",
      isActive: false,
    };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleType = (e) => {
    this.setState({ type: e.target.value, isActive: false });
  };
  handlePopUpWindow = (e) => {
    e.preventDefault();
    this.setState({ isActive: !this.state.isActive });
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.type, this.state.input);
    if (this.state.type === "Images") {
      this.props.onClickInput(this.state.input, "Images");
    } else {
      this.props.onClickInput(this.state.input, "Videos");
    }
    this.setState({ input: this.props.input });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.type !== prevState.type) {
      if (this.state.type === "Images") {
        this.props.onClickInput(this.state.input, "Images");
      } else {
        this.props.onClickInput(this.state.input, "Videos");
      }
    }
    if (this.props.input !== prevProps.input) {
      this.setState({ input: this.props.input });
    }
  };
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <form className={styles.form}>
            <button
              className={styles.form__searchButton}
              type="submit"
              onClick={this.handleClick}
            ></button>
            <SearchbarContext.Provider value={{ djj: this.handleType }}>
              <input
                className={styles.form__searchbar}
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
              <button
                className={styles.form__button}
                onClick={this.handlePopUpWindow}
              >
                {this.state.type}
              </button>
              <Buttons isActive={this.state.isActive} />
            </SearchbarContext.Provider>
          </form>
        </div>
      </header>
    );
  }
}
