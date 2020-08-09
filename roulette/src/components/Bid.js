import React from "react";
import "./Bid.css";

const Bid = (props) => {
  return (
    <>
      <input onChange={props.onChange} type="number" value={props.bid}></input>
      <div className="bid">You bid {props.bid} juros</div>
    </>
  );
};

export default Bid;
