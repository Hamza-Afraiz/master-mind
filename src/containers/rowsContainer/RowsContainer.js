import React, { useState, useEffect } from 'react';
import { FourCirlce, SmallCircles, ColorsColumn } from '../../containers';
import Modal from "react-modal";
import { Modal1 } from '../../components';
import { verticalColors, colorsObject, circles1, correctColorsObject } from '../../Constants/Constants';
import './rowsContainer.scss';
Modal.setAppElement("#root");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [...array];
var colorsCopy = colorsObject.map(a => ({ ...a }));

function RowsContainer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [rowNumber, setRowNumber] = useState(1);
    const [elementNumber, setElementNumber] = useState(0);
    const [columnColorNumber, setColumnColorNumber] = useState(0);
    const [activeRow, setActiveRow] = useState(colorsObject);
    const [gameState, setGameState] = useState('')

    const [previousRow, setPreviousRow] = useState([]);
    const [counterNext, setCounterNext] = useState(0);
    const handleRow = () => {

        checkRow(correctColorsObject, activeRow)
        array.pop()
        if (array.length === 0) {
            setGameState('loss');
            toggleModal()
            setPreviousRow([]);
            restart();
        }
    }
    useEffect(() => {
        // console.log(" component re rendered");
        // console.log('colors object is ',colorsObject)


    }, [gameState])
    const handleItem = (e) => {
        // console.log("element is", e);
        // console.log('column color number is', columnColorNumber)
        if (columnColorNumber !== 0) {
            // console.log('if worked')
            setElementNumber(e);
            let temp = [...activeRow];
            temp[e - 1] = columnColorNumber;
            setActiveRow(temp);
            setCounterNext(counterNext + 1);
        }



    }
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const restart = () => {

        //    console.log('prevosu row is ',previousRow);

        array = [...array2];
        //    console.log('array is ',array)
        var colorsCopy2 = colorsCopy.map(a => ({ ...a }));
        setActiveRow(colorsCopy2);

    }
    const checkRow = (original, new1) => {
        // console.log("newone is ", new1, "orignal one is", original)
        let temp = circles1.map(a => ({ ...a }));
        for (let i = 0; i < 4; i++) {
            let exist = Object.values(original).includes(new1[i].color);
            if (original[i].color === new1[i].color) {
                // console.log('yes its true')
                temp[i].type = 'full'
            }
            else if (exist) {
                temp[i].type = 'small'

            }
            else {
                temp[i].type = 'cross'

            }


        }
        let counter = 0;
        for (let i = 0; i < 4; i++) {
            if (temp[i].type === 'full') {
                counter += 1;


            }
        }
        if (counter === 4) {
            setGameState('congrats');
            toggleModal()
            setPreviousRow([]);
            restart();
            return
        }

        let circlesPrevious = new1;
        let smallCirclesPrevious = temp;
        let tempObj = {
            circlesPrevious, smallCirclesPrevious
        };
        let temp2 = [...previousRow];
        temp2.push(tempObj);
        setPreviousRow(temp2);
        // console.log('temp end is ', temp);
        // console.log('tempObj is', temp2)
        setActiveRow(colorsObject);
        setCounterNext(0);


    }
    const handleColumnColor = (e) => {
        // console.log("column is", e)
        setColumnColorNumber(e);
    }
    return (<div className='rowsContainer'>
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
        >

            {gameState === 'loss' ? <Modal1 onPress={toggleModal} type='loss' /> : gameState == 'congrats' ? <Modal1 onPress={toggleModal} type='congrats' /> : null}

        </Modal>


        <div>
            {previousRow && previousRow.map((item) => (
                (<div className='previous'>
                    <FourCirlce colorsObject={item.circlesPrevious} />

                    <SmallCircles circles={item.smallCirclesPrevious} />
                </div>)


            ))}
            {array.map((item) => (
                (rowNumber === item) ? (<div className='active'>
                    <FourCirlce onPress={handleItem} colorsObject={activeRow} />
                    {counterNext >= 4 ? <div ><img className='image' onClick={handleRow} src="https://www.freepnglogos.com/uploads/tick-png/image-tick-mark-icon-png-good-luck-charlie-wiki-2.png" alt="alternatetext" /></div>
                        : null}
                    <SmallCircles circles={circles1} />
                </div>) : <div className='remaining'>
                    <FourCirlce onPress={handleItem} colorsObject={colorsObject} />
                    <SmallCircles circles={circles1} />
                </div>






            ))}



        </div>
        <div>
            <ColorsColumn onPress={handleColumnColor} verticalColors={verticalColors} />


        </div>
    </div>
    );
}

export default RowsContainer;