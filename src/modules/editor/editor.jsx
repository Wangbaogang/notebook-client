import React, { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;

class Editor extends Component {
  render() {
    return (
      <div className="nb-editor" style={this.props.style}>
        <TextArea rows={10}/>
      </div>
    );
  }
}

export default Editor;
