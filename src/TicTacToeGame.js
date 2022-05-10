import React from 'react';
//import TicTacToeSquare from './TicTacToeSquare';

const TicTacToeGame = () => {
    
    var xTurn = true; //X gets the first turn
    let dMoves = {}; //dictionary tracks moves
    
    //check which player has won (if one has)
    function boardEval(dMoves){
        var strResult = ""
        
        //check horizontal and vertical lines
        for (var i=0; i<3; i++){
            if(i*3 in dMoves &&
               dMoves[i*3]===dMoves[i*3+1] &&
               dMoves[i*3+1]===dMoves[i*3+2]){ //horizontal lines
                strResult = dMoves[i*3] + " wins!";
                break;
            } else if (i in dMoves &&
               dMoves[i] === dMoves[i+3] &&
               dMoves[i+3] === dMoves[i+6]){ //vertical lines
                strResult = dMoves[i] + " wins!";
                break;
            }
        }
        
        //check diagonals
        if (strResult === ""){ //diagonal
            if (0 in dMoves && dMoves[0] === dMoves[4] && dMoves[4] === dMoves[8]){
                strResult = dMoves[0] + " wins!";
            } else if (2 in dMoves && dMoves[2] === dMoves[4] && dMoves[4] === dMoves[6]){
                strResult = dMoves[2] + " wins!";
            }
        }
        
        //check for a tie
        if (strResult === "" && Object.keys(dMoves).length===9){
            strResult = "Cat's Game!"
        }
        
        return strResult
    }
    
    function markX(index) {
        let lblResult = document.getElementById("result");
        if (lblResult.innerHTML.substring(0, 4)==="Next"){
            let spot = document.getElementById(index);
            lblResult.innerHTML = "Next turn: "
            if (spot.innerHTML === "_"){
                if (xTurn){ //X's turn
                    spot.innerHTML = "X"; //mark an X
                    lblResult.innerHTML += "O"; //indicate next turn is O's
                } else {
                    spot.innerHTML = "O"; //mark an O
                    lblResult.innerHTML += "X"; //indicate next turn is X's
                }
                xTurn = !xTurn //activate opposite player
                dMoves[index] = spot.innerHTML //record moves as they happen
            }
            let strResult = boardEval(dMoves);
            if (strResult !== ""){
                lblResult.innerHTML = strResult
            }
        }
    }
    
    return <div><label id="0" onClick={() => markX("0")}>_</label>
    <label id="1" onClick={() => markX("1")}>_</label>
    <label id="2" onClick={() => markX("2")}>_</label><br/>
    <label id="3" onClick={() => markX("3")}>_</label>
    <label id="4" onClick={() => markX("4")}>_</label>
    <label id="5" onClick={() => markX("5")}>_</label><br/>
    <label id="6" onClick={() => markX("6")}>_</label>
    <label id="7" onClick={() => markX("7")}>_</label>
    <label id="8" onClick={() => markX("8")}>_</label><br/>
    <label id="result">Next turn: X</label></div>
    
    //let table = [];
    //for (let i=0; i<9; i++){
    //    table.concat(<label id={i} onClick={() => markX(i)}>_</label>)
    //}
    
    //var tifs = {1: 'Joe', 2: 'Jane'};
    //var tifOptions = Object.keys(tifs).map(function(key) {
    //    return <option value={key}>{tifs[key]}</option>
    //});
  //return (
  //    table
  //);
};

export default TicTacToeGame;
