import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
class index extends Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  handleGo = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div className="headerClass">
        <div onClick={this.handleBack}> ει</div>
        <div onClick={this.handleGo}>εθΏ</div>
      </div>
    );
  }
}
export default withRouter(index);
