import React from "react";
import "./Task.css";
const Task = (props) => {
  const { id, text, date, important, active, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <strong className={important ? "colorRed" : null}>{text}</strong> till{" "}
        <i>{date}</i>
        <button onClick={() => props.change(id)}> set as done</button>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  } else {
    return (
      <div className="task">
        <strong>{text}</strong> done <i>{finishDate.slice(0, 10)}</i>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  }
};

export default Task;
