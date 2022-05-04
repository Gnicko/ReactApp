import React, { Component } from "react";
import Menu from "./Menu";
import Body from "./Body";

export default class Proyecto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMenu: 0,
      searchText: "",
    };
    this.handledItemClicked = this.handledItemClicked.bind(this);
    this.handleSerch = this.handleSerch.bind(this);
  }
  handledItemClicked(itemClickeado) {
    this.setState({
      itemMenu: itemClickeado,
      searchText: "",
    });
  }
  handleSerch(inputValue) {
    this.setState({
      searchText: inputValue,
      itemMenu: 2,
    });
  }

  render() {
    return (
      <div>
        <Menu doSearch={this.handleSerch} handler={this.handledItemClicked} />
        <Body
          inputValue={this.state.searchText}
          itemClicked={this.state.itemMenu}
        />
      </div>
    );
  }
}
