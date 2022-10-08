import React from "react";

import classes from "./CurrentPlayer.module.css";

const CurrentPlayer = (props) => {
  return (
    <div className={classes["current-player"]}>
      <span className={classes.label}>Current Player</span>
      <span>{props.player}</span>
    </div>
  );
};

export default CurrentPlayer;
