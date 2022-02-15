import React from "react";
import "./modal.scss";

function Modal1(props) {
  function modal() {
    if (props.type === "congrats") {
      return (
        <div className="modal">
          <p className="congrats">CONGRAGULATIONS</p>
          <div onClick={props.onToggleModal} className="playButton">
            <p className="play">PLAY</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal2">
          <p className="loss">GAME OVER!</p>
          <div onClick={props.onToggleModal} className="playButton">
            <p className="play">PLAY AGAIN</p>
          </div>
        </div>
      );
    }
  }
  return <div>{modal()}</div>;
}

export default Modal1;
