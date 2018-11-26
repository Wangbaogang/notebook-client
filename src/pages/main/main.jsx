import React, { Component } from "react";

import { Layout, Button } from "antd";

import Search from "../../modules/search";
import SizeBar from "../../modules/size-bar";
import Editor from "../../modules/editor";

const { Sider, Content, Footer, Header } = Layout;

class Main extends Component {
  render() {
    return (
      <Layout className="nb-layout">
        <Sider
          style={{
            backgroundColor: "#ffffff",
            width: "300px"
          }}
        >
          <Search />
        </Sider>
        <Content style={{ borderLeft: "1px solid #ccc" }}>
          <Layout style={{ height: "100%" }}>
            <Header style={{ background: "#ffffff" }}>
              <SizeBar style={{ float: "right" }} />
            </Header>
            <Content style={{ background: "#ffffff", position: 'relative' }}>
              <Editor style={{padding: '0 50px'}}/>
            </Content>
            <Footer style={{ background: "#ffffff" }}>
              <Button type="primary" style={{float:'right'}}>POST</Button>
            </Footer>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default Main;
