import React from "react";

import classes from "./Board.module.css";
import Square from "./Square";

const Board = (props) => {
  const renderSquare = (i) => (
    <Square value={props.squares[i]} onClick={() => props.onMove(i)} />
  );

  return (
    <>
      <div className={classes.board}>
        <div className={classes["board-row"]}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className={classes["board-row"]}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className={classes["board-row"]}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
};

export default Board;
