import React, { Component } from "react";

export default class AddTodoComponent extends Component {
  render() {
    let description = this.props.description;
    return (
      <div>
        <input type="text" value={description} onChange={this.props.setValue} />
        <button onClick={this.props.onAddTodo.bind(null, description)}>
          {this.props.isUpdate ? "Update" : "Add"}
        </button>
      </div>
    );
  }
}
