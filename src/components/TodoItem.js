import React from "react";

class TodoItem extends React.Component {
  render() {
    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0.5rem",
      margin: "0.5rem",
      borderBottom: "1px solid #cecece",
      color: "#333333",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 100,
      fontSize: 15,
    };

    const textStyle = {
      margin: "0.5rem",
    };

    return (
      <div style={containerStyle}>
        <input
          type="checkbox"
          checked={this.props.taskItem.status}
          onChange={() => {
            this.props.handleChange(this.props.taskItem.id);
          }}
        />
        <p style={textStyle}>{this.props.taskItem.task}</p>
      </div>
    );
  }
}

export default TodoItem;
