import React, { Component } from "react";
import { Layout, Form, Input, Button } from "antd";
import "./login.less";
import Api from 'common/api';

const { Sider, Content } = Layout;
class Login extends Component {
  render() {
    return (
      <Layout className="nb-layout">
        <Sider style={{ backgroundColor: "#fff" }} className="nb-login-left">
          N O T E B O O K
        </Sider>
        <Content style={{ padding: "50px" }}>
          <Form>
            <Form.Item label="用户名">
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="密码">
              <Input placeholder="请输入密码" />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" onClick={this.login.bind(this)}>
                登入
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    );
  }
  login() {
    Api.login({
      username: '123',
      password: '456'
    }).then(() => {
      this.props.history.push("main");
    })
  }
}

export default Login;
