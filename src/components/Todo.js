import React from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";
import taskData from "../mock-data/tasks.data";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: taskData,
    };
    this.handleChange = this.handleChange.bind(this);
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
        {taskItemComponents}
      </div>
    );
  }
}

export default Todo;
