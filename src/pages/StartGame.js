import React from "react";
import "./css/StartGame.css";
const StartGame = ({ toggle }) => {
  return (
    <div className="main_container">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-6 ">
            <div className="side1_img">
              <img
                src="https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img not found"
              ></img>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 ">
            <div className="content">
              <h1>Dice Game</h1>
              <button type="button" className="btn btn-dark" onClick={toggle}>
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
