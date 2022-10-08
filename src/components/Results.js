import React from "react";

const Results = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      <button onClick={props.onReset}>Play Again</button>
    </div>
  );
};

export default Results;
