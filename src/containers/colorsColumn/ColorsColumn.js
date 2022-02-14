import React, { useState } from 'react';
import { ColorCircle } from '../../components'
import './colorsColumn.scss'
function ColorsColumn(props) {
    const [selected, setSelected] = useState(0);
   
  
    return (
        <div className='colorsColumn'>

            {props.verticalColors.map((item) => (
                item.id !== selected ?
                    <div onClick={() => {
                        props.onPress(item);
                        setSelected(item.id)
                    }}>
                        <ColorCircle  color={item.color} />
                    </div> : <div className='selected' onClick={() => {
                        props.onPress(item);
                        setSelected(item.id)
                    }}>
                        <ColorCircle O color={item.color} />
                    </div>


            ))}

        </div>
    );
}

export default ColorsColumn;