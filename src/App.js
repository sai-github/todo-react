import React from "react";
import Todo from "./components/Todo";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="col-layout">
        <Todo />
      </div>
    );
  }
}

export default App;
