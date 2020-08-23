import React from "react";
import "./AddTask.css";
const myDate = new Date().toISOString().slice(0, 10);
class AddTask extends React.Component {
  state = {
    minDate: myDate,
    taskDate: myDate,
    taskText: "",
    taskId: 0,
    taskImportant: false,
  };

  handleTextInput = (e) => {
    this.setState({
      taskText: e.target.value,
    });
  };
  handleChecked = (e) => {
    this.setState({
      taskImportant: e.target.checked,
    });
  };
  handleChangeDate = (e) => {
    const taskDate = e.target.value;
    this.setState({
      taskDate,
    });
  };

  render() {
    const maxDate = this.state.minDate * 1 + 1;
    const { taskText, taskDate, taskImportant } = this.state;
    return (
      <>
        <div className="taskForm">
          <label>
            <input
              type="text"
              onChange={this.handleTextInput}
              value={this.state.taskText}
            />
            message text
          </label>
          <br />

          <label>
            <input
              type="date"
              value={this.state.taskDate}
              min={this.state.taskDate}
              max="2022-12-31"
              onChange={this.handleChangeDate}
            />
          </label>

          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.taskImportant}
              onChange={this.handleChecked}
            />
            Important
          </label>
          <button
            onClick={() => this.props.add(taskText, taskDate, taskImportant)}
          >
            add task
          </button>
        </div>
      </>
    );
  }
}

export default AddTask;
