import React, { Component } from "react";
import AddTodoCommponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";
class App extends Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.onAddTodo = this.onAddTodo.bind(this);
  }
  onAddTodo(desctipion) {
    let id = ++this.id;
    let todoObj = {
      id: id,
      description: desctipion
    };
    let todos = this.state.todos;
    todos = todos.concat(todoObj);
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
      <div className="App">
        <AddTodoCommponent onAddTodo={this.onAddTodo} />
        <TodoListComponent todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
