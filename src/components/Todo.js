import React from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";
import taskData from "../mock-data/tasks.data";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      newTaskText: "",
      todos: taskData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateNewText = this.updateNewText.bind(this);
    this.onAddNewText = this.onAddNewText.bind(this);
  }

  handleChange(id) {
    console.log(`Clicked ${id}`);
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map((item) => {
        console.log("--", item);
        const newItem = { ...item };
        if (item.id === id) {
          newItem.status = !item.status;
        }
        return newItem;
      });

      return {
        todos: updatedTodo,
      };
    });
  }

  updateNewText($event) {
    const { name, value } = $event.target;
    this.setState({ [name]: value });
  }

  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  onAddNewText() {
    this.setState((prevState) => {
      const updatedToDos = [
        ...prevState.todos,
        { id: this.uuidv4(), task: this.state.newTaskText, status: false },
      ];

      return {
        todos: updatedToDos,
      };
    });

    this.setState({ newTaskText: "" });
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "column",
    };

    const taskItemComponents = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        taskItem={item}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div className="card" style={containerStyle}>
        <div className="new-task-container">
          <input
            name="newTaskText"
            placeholder="Add task"
            value={this.state.newTaskText}
            onChange={this.updateNewText}
          />
          <button onClick={this.onAddNewText}>
            <span role="img" aria-label="Add new task">
              ➕
            </span>
          </button>
        </div>

        {taskItemComponents}
      </div>
    );
  }
}

export default Todo;
