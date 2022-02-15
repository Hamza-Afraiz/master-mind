import React, { useState } from "react";
import { FourCirlce, SmallCircles, ColorsColumn } from "../../containers";
import Modal from "react-modal";
import { Modal1 } from "../../components";
import {
  verticalColors,
  colorsObject,
  circles1,
  correctColorsObject,
} from "../../Constants/Constants";
import "./rowsContainer.scss";
Modal.setAppElement("#root");
var tries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var triesForNewGame = [...tries];
var colorsCopyForNewGame = colorsObject.map((a) => ({ ...a }));

function RowsContainer(props) {
  const [isOpen, setIsOpen] = useState(false); //checking end game condition to open modal

  const [columnColorNumber, setColumnColorNumber] = useState(0); //to check which column has been selected to fill the color
  const [activeRow, setActiveRow] = useState(colorsObject); //maintainig selected row of different colors
  const [gameState, setGameState] = useState(""); //to maintain game end state

  const [previousRow, setPreviousRow] = useState([]); //maintaining the rows in which we have lost
  const [currentAttemptCounter, setCurrentAttemptCounter] = useState(0); //to allow user to check and go on next row if user loose.

  //handling the tick button to check what going to be next/
  const handleRowAttempt = () => {
    checkCirclesColorData(correctColorsObject, activeRow);

    tries.pop(); //user completed its one try.so oone index is decreasing

    //if users uses all his/her tries.
    if (tries.length === 0) {
      setGameState("loss");
      toggleModal();
      setPreviousRow([]);
      restartGame();
    }
  };

  //when we are going to give the empty circle some color.

  const PastingOneColor = (e) => {
    if (columnColorNumber !== 0) {
      //if user didnt select any color

      let temp = [...activeRow];
      temp[e - 1] = columnColorNumber;
      setActiveRow(temp); //changing the row according to selected color
      setCurrentAttemptCounter(currentAttemptCounter + 1);
    }
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  //resetting the state of game
  const restartGame = () => {
    tries = [...triesForNewGame]; //objects are referenced based so keeping a copy for next game.

    var colorsCopy2 = colorsCopyForNewGame.map((a) => ({ ...a }));
    setActiveRow(colorsCopy2);
  };

  //here is the logic to check that selected row of colors are equal to the demmanding row or not
  const checkCirclesColorData = (original, new1) => {
    let temp = circles1.map((a) => ({ ...a }));

    for (let i = 0; i < 4; i++) {
      let exist = Object.values(original).includes(new1[i].color); //checking if there is color or not.
      if (original[i].color === new1[i].color) {
        //checking both color and position

        temp[i].type = "full";
      } else if (exist) {
        temp[i].type = "small";
      } else {
        temp[i].type = "cross";
      }
    }

    //to check selected row result

    let counter = 0;

    //also  the game ending condition to check if all the inputs colors are correct
    for (let i = 0; i < 4; i++) {
      if (temp[i].type === "full") {
        counter += 1; 
        if(counter === 0 ){ //if even one is correct go to next row
          break;
        }
        if (counter === 4) {
          setGameState("congrats");
          toggleModal();
          setPreviousRow([]);
          restartGame();
          return;
        }
      }
    }

    //if user selected row is all the way correct
    

    //now if user hasnt selected the correct row then keeping track of previous results

    let circlesPreviousAttempts = new1; //big colored circles for previous
    let smallCirclesPreviousAttempts = temp; //small circles for previous
    let tempObj = {
      circlesPreviousAttempts,
      smallCirclesPreviousAttempts,
    };
    let temp2 = [...previousRow];
    temp2.push(tempObj);
    setPreviousRow(temp2);
    setActiveRow(colorsObject); //setting agian empty state for next row of game
    setCurrentAttemptCounter(0); //there is a new row so there is a new coounter
  };

  //method to handle child component called by a child component
  const handleColumnColorObject = (selectedColorObject) => {
    setColumnColorNumber(selectedColorObject);
  };

  const previousAttemptsContainer=()=>{
    return(
      <div>
  {previousRow?.map((item) => (
        <div className="previous">
          <FourCirlce colorsObject={item.circlesPreviousAttempts} />
          <SmallCircles circles={item.smallCirclesPreviousAttempts} />
        </div>
      ))}
      </div>
    

    )
  }
  const activeAndRemainingRows=()=>{
    return(

    
    <div>
      
      {tries.map((item) =>
          //  to check if we are on first index of tries.we ll always be on first .because if we loose we are decreasing the tries and mutating previous row

          item === 1 ? (
            <div className="active">
              <FourCirlce onPress={PastingOneColor} colorsObject={activeRow} />
              {currentAttemptCounter >= 4 ? (
                <div>
                  <img
                    className="image"
                    onClick={handleRowAttempt}
                    src="https://www.freepnglogos.com/uploads/tick-png/image-tick-mark-icon-png-good-luck-charlie-wiki-2.png"
                    alt="alternatetext"
                  />
                </div>
              ) : null}
              <SmallCircles circles={circles1} />
            </div>
          ) : (
            <div className="remaining">
              <FourCirlce onPress={PastingOneColor} colorsObject={colorsObject} />
              <SmallCircles circles={circles1} />
            </div>
          )
        )}
    </div>)

  }

  return (
    <div className="rowsContainer">
      {/* game end state */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        {gameState === "loss" && <Modal1 onToggleModal={toggleModal} type="loss" />}
        {gameState === "congrats" && (
          <Modal1 onToggleModal={toggleModal} type="congrats" />
        )}
      </Modal>

      {/* already attempted rows */}

      <div>


        {previousAttemptsContainer()}
        {activeAndRemainingRows()}
      </div>
      {/* colors column to select and pasting on row */}
      <div>
        <ColorsColumn
          onSelectingColor={handleColumnColorObject}
          verticalColors={verticalColors}
        />
      </div>
    </div>
  );
}

export default RowsContainer;
