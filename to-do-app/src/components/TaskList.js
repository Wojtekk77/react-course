import React from "react";
import Task from "./Task.js";

const TaskList = (props) => {
  //   const tasks = props.tasks.map((task) => <Task key={task.id} task={task} />);
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} change={props.change} />
  ));
  const doneTasks = done.map((task) => <Task key={task.id} task={task} />);

  return (
    <div>
      <div>{activeTasks}</div>
      <hr />
      <div>{doneTasks}</div>
    </div>
  );
};

export default TaskList;
