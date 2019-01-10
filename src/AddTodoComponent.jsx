import React, { Component } from "react";

export default class AddTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
    this.setValue = this.setValue.bind(this);
  }

  setValue(event) {
    let desc = event.target.value;
    this.setState({
      description: desc
    });
  }
  render() {
    let description = this.state.description;
    return (
      <div>
        <input type="text" value={description} onChange={this.setValue} />
        <button onClick={this.props.onAddTodo.bind(null, description)}>
          Add
        </button>
      </div>
    );
  }
}
