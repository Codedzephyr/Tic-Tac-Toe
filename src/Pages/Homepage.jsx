import React, { useState } from "react";
import Board from "../Components/Board";
import Players from "../Components/Players";
import "./homepage.css";

const Homepage = () => {
  const [reset, setReset] = useState(false);

  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  };
  return (
    <div className="homepage">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>

        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>

      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Players />
    </div>
  );
};

export default Homepage;
