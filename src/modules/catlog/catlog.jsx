import React, { Component } from "react";
import { List } from "antd";
import Api from 'common/api';

class CatLog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
  render() {
    return (
      <div className="nb-catlog" style={this.props.style}>
				{(() => {
					return this.state.list.length ?
						<List 
							dataSource={this.state.list}
							renderItem={ item => (<List.Item>{item.record}</List.Item> )}
						/>
						:
						<p>啥都没有</p>
				})()}
      </div>
    );
	}
	componentDidMount() {
		Api.records().then(res => {
			this.setState({
				list: res.data
			})
		})
	}
}

export default CatLog;
