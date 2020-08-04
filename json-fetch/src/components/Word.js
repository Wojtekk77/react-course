import React from "react";
import "./Word.css";

const Word = (props) => (
  <li>
    {props.pl} {props.en}
  </li>
);

export default Word;
