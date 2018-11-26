import React, { Component } from "react";
import { Input } from "antd";

const ISearch = Input.Search;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: ""
    };
  }
  render() {
    return (
      <div className="nb-search" style={{ padding: "10px 20px" }}>
        <ISearch
          placeholder="Search"
          onSearch={value => this.handleSearch(value)}
        />
      </div>
    );
  }

  handleSearch(value) {
    value = value.trim();
    if (this.state.search_value === value) {
      return;
    }
    this.setState({
      search_value: value
    });
  }
}
export default Search;
