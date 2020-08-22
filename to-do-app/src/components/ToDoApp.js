import React from "react";
import "./ToDoApp.css";
import TaskList from "./TaskList.js";
import AddTask from "./AddTask.js";

class ToDoApp extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "clean house",
        date: "2021-08-22",
        active: true,
        important: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "make a bed",
        date: "2020-08-22",
        active: true,
        important: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "tank a car",
        date: "2020-09-22",
        active: false,
        important: true,
        finishDate: null,
      },
    ],
  };

  handleChangeStatus = (id) => {
    console.log(id);
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.active = false;
      }
      return task;
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          change={this.handleChangeStatus}
          delete={this.deleteTask}
        />
      </>
    );
  }
}

export default ToDoApp;
