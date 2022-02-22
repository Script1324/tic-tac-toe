import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let [blocks, setBlocks] = useState(Array(9).fill(""));
  let [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = ( number) => {
    if (blocks[number] !== "") {
      alert("invalid move");
      return;
    }

    if (currentPlayer === "X") {
      blocks[number] = "X";
      setCurrentPlayer("O");
    } else {
      blocks[number] = "O";
      setCurrentPlayer("X");
    }

     checkWinner();
  };

  const congratsWinner =() =>{
    setTimeout(() => {
      alert("Congrats Player" + " "+ currentPlayer)
      setBlocks(Array(9).fill(""))
      setCurrentPlayer("X")
    }, 500);
   
  }

  const checkWinner = () => {
    if (
      blocks[0] === currentPlayer &&
      blocks[1] === currentPlayer &&
      blocks[2] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[3] === currentPlayer &&
      blocks[4] === currentPlayer &&
      blocks[5] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[6] === currentPlayer &&
      blocks[7] === currentPlayer &&
      blocks[8] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[0] === currentPlayer &&
      blocks[3] === currentPlayer &&
      blocks[6] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[1] === currentPlayer &&
      blocks[4] === currentPlayer &&
      blocks[7] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[2] === currentPlayer &&
      blocks[5] === currentPlayer &&
      blocks[8] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[0] === currentPlayer &&
      blocks[4] === currentPlayer &&
      blocks[8] === currentPlayer
    ) {
      congratsWinner()
    } else if (
      blocks[2] === currentPlayer &&
      blocks[4] === currentPlayer &&
      blocks[6] === currentPlayer
    ) {
      congratsWinner()
    }
  };

  const Blocks = () => {
    return blocks.map((block, index) => {
      return (
        <div key={index} onClick={() => handleClick(index)}>
                {blocks[index] == 'X' ?  <h3 className="red"> {blocks[index]} </h3> :  <h3 className="blue"> {blocks[index]} </h3>}
           
        </div>
      );
    });
  };

  return (
    <>
        <div className="Header">   
                   
              <div className={currentPlayer == "X" ? "playerX active" : "playerX"}>
                    <h2>X</h2>
                    <h3>Player 1</h3>
              </div>
        
              <div className={currentPlayer == "O" ? "playerO active" : "playerO"}>
                    <h2>O</h2>
                    <h3>Player 2</h3>
              </div>

        </div>       
        
        <div className="App">
        <Blocks />
      </div>
    </>
  );
}

export default App;
