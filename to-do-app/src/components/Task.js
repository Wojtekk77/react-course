import React from "react";

const Task = (props) => {
  const { id, text, date, important, active } = props.task;
  return (
    <div>
      {text} do {date}
      <button onClick={() => props.change(id)}> Deactivate</button>
    </div>
  );
};

export default Task;
