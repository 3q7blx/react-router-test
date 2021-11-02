import React, { Component } from "react";
import { NavLink, Link, Route, Switch, Redirect } from "react-router-dom";
import { Layout, Menu } from "antd";
import NavOne from "./Pages/NavOne";
import NavTwo from "./Pages/NavTwo";
import NavThree from "./Pages/NavThree";
import NavFour from "./Pages/NavFour";
import NavFive from "./Pages/NavFive";

import {
  BarChartOutlined,
  CloudOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="navone">nav 1 </NavLink>
              {/* 相比Link，NavLink有个activeClassName 属性，可以指定激活时的样式； */}
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="navtwo">nav 2 </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="navthree">nav 3 </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              <Link to="navfour">nav 4 </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              <Link to="navfive">nav 5 </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Switch>
              <Route path="/navone" component={NavOne}></Route>
              <Route path="/navtwo" component={NavTwo}></Route>
              <Route path="/navthree" component={NavThree}></Route>
              <Route path="/navfour" component={NavFour}></Route>
              <Route path="/navfive" component={NavFive}></Route>
              <Redirect to="/navone" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
