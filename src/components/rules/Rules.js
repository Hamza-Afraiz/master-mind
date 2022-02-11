import React,{useState} from 'react';
import './rules.scss'
function Rules(props) {
    const [toggleRules,setToggleRules]=useState(false);
    const handleToggle=()=>{
        setToggleRules(!toggleRules);
    }
    return (
        <div className='rules'>
            {toggleRules? <div>
                
                <button   onClick={handleToggle} type="button">Hide Rules</button>
                <ol>
                <li>
                Try to guess the pattern, in both order and color, within ten turns

                </li>
                <li>
                After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position.

                </li>
                <li>
                A white peg indicates the existence of a correct color code peg placed in the wrong position.

                </li>
                <li>
                And a cross represents the wrong color code.

                </li>
            </ol>
            </div>:<div><button onClick={handleToggle} type="button">Show Rules</button></div>}
          
            
        </div>
    );
}

export default Rules;