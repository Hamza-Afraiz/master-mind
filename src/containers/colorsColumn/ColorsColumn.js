import React, { useState, useEffect } from 'react';
import { ColorCircle } from '../../components'
import './colorsColumn.scss'
function ColorsColumn(props) {
    const [selected, setSelected] = useState(0);
    const onHandle = (e) => {
        console.log('colorssssColumn is', selected)
    }
    useEffect(() => {
        console.log("useeffext is", selected);
    })
    return (
        <div className='colorsColumn'>

            {props.verticalColors.map((item) => (
                item.id != selected ?
                    <div onClick={() => {
                        props.onPress(item);
                        setSelected(item.id)
                    }}>
                        <ColorCircle onPress={onHandle} color={item.color} />
                    </div> : <div className='selected' onClick={() => {
                        props.onPress(item);
                        setSelected(item.id)
                    }}>
                        <ColorCircle onPress={onHandle} color={item.color} />
                    </div>


            ))}

        </div>
    );
}

export default ColorsColumn;