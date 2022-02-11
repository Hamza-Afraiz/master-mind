import React from 'react';
import './colorCircle.scss'
function ColorCircle(props) {
    return (
        <div onClick={props.onPress}className='circle' style={{backgroundColor:props.color}}>
           
        </div>
    );
}

export default ColorCircle;