import React from "react";
import "./ToDoApp.css";
import TaskList from "./TaskList.js";
import AddTask from "./AddTask.js";

class ToDoApp extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "paint a wall",
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
        important: false,
        finishDate: null,
      },
      {
        id: 3,
        text: "tank a car",
        date: "2020-09-22",
        active: false,
        important: true,
        finishDate: "2019-09-22",
      },
      {
        id: 4,
        text: "make a breakfast",
        date: "2020-09-11",
        active: true,
        important: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "clean house",
        date: "2020-11-04",
        active: true,
        important: true,
        finishDate: null,
      },
    ],
    counter: 5,
  };

  handleChangeStatus = (id) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().toISOString();
      }
      return task;
    });
    this.setState({
      tasks,
    });
  };
  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const counter = this.state.counter;
    const task = {
      id: counter + 1,
      text: text,
      date: date,
      active: true,
      important: important,
      finishDate: null,
    };
    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks,
      counter: counter + 1,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <h1>TO DO APP</h1>
            <div className="col-md-10  text-center">
              <AddTask add={this.addTask} />
              <hr />
              <TaskList
                tasks={this.state.tasks}
                change={this.handleChangeStatus}
                delete={this.deleteTask}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ToDoApp;
