import React, { useState } from "react";
import "./css/NumberSelector.css";
const NumberSelector = ({error,selectedNumber,setSelectedNumber,setError}) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];


  // console.log(selectedNumber);
  const handleNumberSelect = (value) =>{
    setSelectedNumber(value);
    setError("")
  }

  return (
    <div className="number_selctor_container">
      <h5 className="text-danger">{error}</h5>
        <div className="box_container">
            {arrayNum.map((value, index) => (
                <div
                className={`box ${value === selectedNumber ? "active" : ""}`}
                key={index}
                onClick={() => handleNumberSelect(value) }
                >
                {value}
                </div>
            ))}

        </div>
      <h5>Select Number</h5>
    </div>
  );
};

export default NumberSelector;
