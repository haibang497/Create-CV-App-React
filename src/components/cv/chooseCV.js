import React from "react";
import { Component } from "react";

import "./chooseCV.scss";
import { CV1 } from "./cv1/cv1";
import { CV2 } from "./cv2/cv-2";

export default class ToggleCV extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <>
        <div>{(this.state.on && <CV1 />) || (!this.state.on && <CV2 />)}</div>
        <div className="changeCV">
          <button className="change" onClick={this.toggle}>
            Change CV
          </button>
        </div>
      </>
    );
  }
}
