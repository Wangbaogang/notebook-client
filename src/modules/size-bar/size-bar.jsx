import React, { Component } from "react";
import { Icon } from "antd";

class SizeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maximal: false
    };
  }
  render() {
    let icons = [
      { type: "minus", title: "最小化" },
      {
        type: this.state.maximal ? "shrink" : "arrows-alt",
        title: this.state.maximal ? "还原" : "最大化"
      },
      { type: "close", title: "关闭" }
    ];
    return (
      <div className="nb-sizebar" style={this.props.style}>
        {icons.map((icon, index) => {
          return (
            <Icon
              type={icon.type}
              className="nb-icon"
							key={index}
							title={icon.title}
              style={{ padding: "0 5px" }}
              onClick={this.handleIconClick(index)}
            />
          );
        })}
      </div>
    );
  }
  handleIconClick(index) {}
}

export default SizeBar;
