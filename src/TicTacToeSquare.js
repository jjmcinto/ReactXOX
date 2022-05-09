import React from 'react';

const TicTacToeSquare = () => {
  
  function markX() {
      document.getElementById("0").innerHTML = "X";
  }
  
  return (
      <label id="0" onClick={() => markX()}>_</label>
  );
};

export default TicTacToeSquare;
