import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodoCommponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";
import { saveTodo, getTodos } from "./actions/index";
import "./App.css";
class App extends Component {
  id = 0;
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      description: "",
      todoId: null,
      isUpdate: false
    };

    //this.onAddTodo = this.onAddTodo.bind(this);
    this.setValue = this.setValue.bind(this);
    this.onEditTodo = this.onEditTodo.bind(this);
  }
  componentDidMount() {
    this.props.loadTodos();
  }
  setValue(event) {
    let desc = event.target.value;
    this.setState({
      description: desc
    });
  }
  onAddTodo = desctipion => {
    let isUpdate = this.state.isUpdate;
    let todos = this.state.todos;
    if (isUpdate) {
      //find element
      let id = this.state.todoId;
      todos = todos.map(todo => {
        if (todo.id === id) {
          todo.description = desctipion;
        }
        return todo;
      });
      //update the state
    } else {
      this.props.addTodo(desctipion);
    }
    this.setState({
      todos: todos,
      description: "",
      isUpdate: false
    });
  };
  onEditTodo(todo) {
    this.setState({
      description: todo.text,
      isUpdate: true,
      todoId: todo.id
    });
  }
  render() {
    return (
      <div className="App">
        <AddTodoCommponent
          onAddTodo={this.onAddTodo}
          description={this.state.description}
          isUpdate={this.state.isUpdate}
          setValue={this.setValue}
        />
        <TodoListComponent onEditTodo={this.onEditTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(saveTodo(text)),
  loadTodos: () => dispatch(getTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
