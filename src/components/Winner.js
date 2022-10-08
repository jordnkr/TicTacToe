import React from 'react';

const Winner = (props) => {
  return ( 
    <div>
      <p>Winner is {props.winner}!</p>
      <button onClick={props.onReset}>Play Again</button>
    </div>
   );
}
 
export default Winner;