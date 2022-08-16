import { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imagegallery/ImageGallery";
import VideoGallery from "./videoGallery/VideoGallery";
import Button from "./button/Button";
import Loader from "./loader/Loader";
import getServerResponse from "./serverResponse/getServerResponse";
import React from "react";
import styles from "./app.module.scss";
export const UserContext = React.createContext();
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      videos: [],
      page: 1,
      input: "",
      isLoading: false,
    };
  }
  handleClickInput = (input_, type) => {
    console.log("dd");
    this.setState({ isLoading: "initial", input: input_, page: 1 });
    getServerResponse(input_, 1, type).then((data) => {
      console.log(data);
      if (data[0].type === "photo") {
        console.log("p h o t o");
        this.setState({ pictures: data, videos: [], isLoading: false });
      } else {
        console.log("oruuu");
        this.setState({ pictures: [], videos: data, isLoading: false });
      }
    });
  };
  handleClickAdd = (e) => {
    let pagee = this.state.page + 1;
    this.setState((prevState) => ({
      isLoading: "add",
      page: prevState.page + 1,
    }));
    if (this.state.pictures.length !== 0) {
      getServerResponse(this.state.input, pagee, "Images").then((data) => {
        console.log(data);
        this.setState({ pictures: data });
        setTimeout(() => this.setState({ isLoading: false }), 1000);
      });
    } else {
      getServerResponse(this.state.input, pagee, "Videos").then((data) => {
        console.log(data);
        this.setState({ videos: data });
        setTimeout(() => this.setState({ isLoading: false }), 1000);
      });
    }
  };
  render() {
    console.log(this.state.pictures);
    console.log(this.state.videos);
    return (
      <div className={styles.appContainer}>
        <UserContext.Provider
          value={{
            dj: this.handleClickInput,
          }}
        >
          <Searchbar
            onClickInput={this.handleClickInput}
            input={this.state.input}
          ></Searchbar>
          {this.state.isLoading === "initial" ? (
            <Loader />
          ) : this.state.pictures.length > 0 &&
            this.state.videos.length === 0 ? (
            <ImageGallery pictures={this.state.pictures} />
          ) : (
            <VideoGallery videos={this.state.videos}></VideoGallery>
          )}
          {this.state.isLoading === "add" && (
            <>
              <Loader></Loader>
            </>
          )}
          {(this.state.pictures.length > 0 || this.state.videos.length > 0) &&
            this.state.isLoading !== "add" && (
              <Button onClickAdd={this.handleClickAdd}></Button>
            )}
        </UserContext.Provider>
      </div>
    );
  }
}
