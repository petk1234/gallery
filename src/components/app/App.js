import { Component } from "react";
import Searchbar from "../searchbar/Searchbar";
import Gallery from "../gallery/Gallery";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import getServerResponse from "../../serverResponse/getServerResponse";
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
      error: "",
      counter: 0,
    };
  }
  loadedCounter = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };
  handleClickInput = (input_, type) => {
    this.setState({ isLoading: "initial", input: input_, page: 1 });
    getServerResponse(input_, 1, type).then((data) => {
      if (data.length !== 0) {
        if (data[0].type === "photo") {
          this.setState({
            pictures: data,
            videos: [],
            isLoading: false,
            counter: 0,
          });
        } else {
          this.setState({
            pictures: [],
            videos: data,
            isLoading: false,
            counter: 0,
          });
        }
      } else {
        this.setState({ pictures: [], videos: [] });
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
        this.setState((prevState) => {
          const prevIds = prevState.pictures.map((picture) => picture.id);
          const notDoubleImage = data.filter(
            (picture) => prevIds.indexOf(picture.id) === -1
          );
          return {
            pictures: prevState.pictures.concat(notDoubleImage),
            isLoading: false,
          };
        });
      });
    } else {
      getServerResponse(this.state.input, pagee, "Videos").then((data) => {
        if (data !== "error") {
          this.setState((prevState) => {
            const prevIds = prevState.videos.map((video) => video.id);
            const notDoubleVideo = data.filter(
              (video) => prevIds.indexOf(video.id) === -1
            );
            return {
              videos: prevState.videos.concat(notDoubleVideo),
              isLoading: false,
            };
          });
        } else {
          this.setState({ error: data });
        }
      });
    }
  };
  render() {
    const { pictures, videos, page, input, isLoading, error, counter } =
      this.state;

    const initLoaderCond =
      isLoading === "initial" && (pictures.length > 0 || videos.length > 0);
    const addLoaderCond = isLoading === "add" && error === "";
    const loadButtonCond =
      (pictures.length > 0 || videos.length > 0) &&
      isLoading !== "add" &&
      isLoading !== "initial";
    return (
      <div className={styles.appContainer}>
        <UserContext.Provider
          value={{
            handleClickInput: this.handleClickInput,
            loadedCounter: this.loadedCounter,
          }}
        >
          <Searchbar onClickInput={this.handleClickInput} input={input} />
          {initLoaderCond ? (
            <Loader />
          ) : isLoading === "initial" ? (
            <p>Sorry, we couldn't find any matches for '{input}'</p>
          ) : (
            <Gallery pictures={pictures} videos={videos} />
          )}
          {addLoaderCond && <Loader />}
          {loadButtonCond && (
            <Button
              page={page}
              videos={videos}
              pictures={pictures}
              counter={counter}
              onClickAdd={this.handleClickAdd}
            />
          )}
        </UserContext.Provider>
      </div>
    );
  }
}
