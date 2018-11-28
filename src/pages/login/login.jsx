import React, { Component } from "react";
import { Layout, Form, Input, Button, message } from "antd";
import "./login.less";
import Api from 'common/api';

const { Sider, Content } = Layout;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <Layout className="nb-layout">
        <Sider style={{ backgroundColor: "#fff" }} className="nb-login-left">
          N O T E B O O K
        </Sider>
        <Content style={{ padding: "50px" }}>
          <Form>
            <Form.Item label="用户名">
              <Input placeholder="请输入用户名" value={this.state.username} onChange={this.setUserName.bind(this)} />
            </Form.Item>
            <Form.Item label="密码">
              <Input placeholder="请输入密码" value={this.state.password} onChange={this.setPassWord.bind(this)} />
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
  setUserName(evt) {
    evt.persist();
    this.setState({
      username: evt.target.value
    })
  }
  setPassWord(evt) {
    evt.persist();
    this.setState({
      password: evt.target.value
    })
  }
  login() {
    Api.login({
      username: this.state.username,
      password: this.state.password
    }).then(() => {
      this.props.history.push("main");
    }, (data) => {
      message.info(data.failureMessage);
    })
  }
}

export default Login;
