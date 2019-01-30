import React, { Component } from "react";
import TodoItemComponent from "./TodoItemComponent";
import { connect } from "react-redux";
class TotoListComponent extends Component {
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
const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotoListComponent);
