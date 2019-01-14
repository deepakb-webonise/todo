import React, { Component } from "react";
import TodoItemComponent from "./TodoItemComponent";
export default class TotoListComponent extends Component {
  render() {
    let listOfTodos = this.props.todos.map(todo => {
      return (
        <TodoItemComponent
          todo={todo}
          key={todo.id}
          onEditTodo={this.props.onEditTodo}
        />
      );
    });
    return <div>{listOfTodos}</div>;
  }
}
