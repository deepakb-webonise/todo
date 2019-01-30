import RequestService from "../restUtils";
export const addTodo = todo => ({
  type: "ADD_TODO",
  ...todo
});

export const saveTodo = text => {
  return dispatch => {
    return RequestService.save("http://localhost:5000/todos", { desc: text })
      .then(todo => {
        dispatch(addTodo(todo.data));
      })
      .catch(e => console.log("error", e));
  };
};

export const setTodos = todos => ({
  type: "SET_TODOS",
  todos
});
export const getTodos = () => {
  return dispatch => {
    return RequestService.fetch("http://localhost:5000/todos")
      .then(todos => {
        dispatch(setTodos(todos.data || []));
      })
      .catch(e => console.log(e));
  };
};
export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
