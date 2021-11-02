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
        <div onClick={this.handleBack}> 回退</div>
        <div onClick={this.handleGo}>前进</div>
      </div>
    );
  }
}
export default withRouter(index);
