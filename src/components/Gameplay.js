import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import "./css/Gameplay.css";
import RoleDice from "./RoleDice";
const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const generateRandomNumber = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setError("");
    setCurrentDice(Math.floor(Math.random() * 6) + 1);

    if (selectedNumber === currentDice) {
      setScore((prev) => prev + currentDice);
      console.log(score);
    } else {
      setScore((prev) => prev - 2);
      console.log(score);
    }
    setSelectedNumber(null);
    // console.log(currentDice)
    // const randomNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber); // Outputs a number between 1 and 6
  };

  const handleResetScore = () => {
    setScore(0);
  };
  return (
    <>
      <div className="gameplay_container">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      {/* <h1>Gameplay</h1> */}
      <RoleDice
        currentDice={currentDice}
        generateRandomNumber={generateRandomNumber}
      />

      <div className="btns">
        <button
          type="button"
          class="btn btn-outline-dark"
          onClick={handleResetScore}
        >
          Rest Score
        </button>
      </div>

      <div className="rulebox_container my-4">
        <div className="accordion accordion-flush border border-2" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Show Rules
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              <h4>How to play dice game</h4>
                <h6>Select any number</h6>
                <h6>Click on dice image </h6>
                <h6>
                  After click on dice if selected number is equal to dice number
                  you will get some point dice{" "}
                </h6>
                <h6>If you get wrong guess then 2 point will be dedcuted</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gameplay;
