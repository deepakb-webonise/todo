import React, { Component } from "react";

export default class TotoItemComponent extends Component {
  render() {
    return (
      <div>
        <span>{this.props.todo.id}</span>
        <span>{this.props.todo.description}</span>
        <span>edit</span>
        <span>delete</span>
      </div>
    );
  }
}
