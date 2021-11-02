import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import IconOne from "./IconOne";
import IconTwo from "./IconTwo";
import Header from "../../components/Header";

import "./index.css";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
export default class index extends Component {
  handleClick = (param) => {
    return (e) => {
      console.log(param, e, this);
      this.props.history.push(`/navone/${param}`);
    };
  };
  render() {
    console.log(this);
    return (
      <div>
        <Header></Header>
        <div className="icons-list">
          <HomeOutlined onClick={this.handleClick("iconone")} />
          <SettingFilled onClick={this.handleClick("icontwo")} />
          <SmileOutlined onClick={this.handleClick(3)} />
          <SyncOutlined spin onClick={this.handleClick(4)} />
          <SmileOutlined rotate={180} onClick={this.handleClick(5)} />
          <LoadingOutlined />
        </div>
        <div>
          {/* <Link to='/navone/iconone'></Link> */}
          <Switch>
            <Route path="/navone/iconone" component={IconOne}></Route>
            <Route path="/navone/icontwo" component={IconTwo}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
