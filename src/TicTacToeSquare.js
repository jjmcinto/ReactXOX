import React from 'react';

const TicTacToeSquare = index => {
  
  function markX(obj) {
      //document.getElementById({index}).innerHTML = "X";
      obj.innerHTML = "X";
  }
  
  return (
      <label id={index} onClick={() => markX(this.obj)}>_</label>
  );
};

export default TicTacToeSquare;
