import React, { useState } from "react";

import Board from "./Board";
import CurrentPlayer from "./CurrentPlayer";
import classes from "./Game.module.css";
import Winner from "./Winner";

const Game = () => {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [squares, setSquares] = useState(Array(9));

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const onMoveHandler = (i) => {
    if (!squares[i] && !winner) {
      let newArray = squares;
      newArray[i] = player;
      setSquares(newArray);

      const winner = calculateWinner();

      winner
        ? setWinner(winner)
        : player === "X"
        ? setPlayer("O")
        : setPlayer("X");
    }
  };

  const onResetHandler = () => {
    setPlayer("X");
    setWinner("");
    setSquares(Array(9));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.game}>
        <h1>Tic Tac Toe</h1>
        <CurrentPlayer player={player} />
        <Board onMove={onMoveHandler} squares={squares} />
        <div className={classes["winner-section"]}>
          {winner && <Winner winner={winner} onReset={onResetHandler} />}
        </div>
      </div>
    </div>
  );
};

export default Game;
