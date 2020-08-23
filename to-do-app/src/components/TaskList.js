import React from "react";
import Task from "./Task.js";

const TaskList = (props) => {
  //   const tasks = props.tasks.map((task) => <Task key={task.id} task={task} />);
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  done.sort((a, b) => {
    if (a.finishDate < b.finishDate) return -1;
    if (a.finishDate > b.finishDate) return 1;
    return 0;
  });
  active.sort((a, b) => {
    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  });
  console.log(done);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));

  return (
    <div>
      <div>{activeTasks}</div>
      <hr />
      <div>{doneTasks}</div>
    </div>
  );
};

export default TaskList;
