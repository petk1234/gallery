import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
export default class Loader extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log("isLoading");
    return <TailSpin color="#00BFFF" height={80} width={80} />;
  }
}
