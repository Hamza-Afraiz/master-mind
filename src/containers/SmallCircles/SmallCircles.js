import React from 'react';
import { SmallCircle } from '../../components';
import './smallCircles.scss'
function SmallCircles(props) {
 
   const {circles}=props;
   //console.log("in small circle ",circles)
    return (
        <div className='smallCircles'>
            {circles.map((item)=>(
                <SmallCircle type={item.type} />
            ))}
            
        </div>
    );
}

export default SmallCircles;