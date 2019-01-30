import React, { Component } from "react";

export default class TotoItemComponent extends Component {
  render() {
    return (
      <div className="todoItem">
        <span>{this.props.todo.id}</span>
        <span>{this.props.todo.desc}</span>
        <span onClick={this.props.onEditTodo.bind(null, this.props.todo)}>
          edit
        </span>
        <span>delete</span>
      </div>
    );
  }
}
