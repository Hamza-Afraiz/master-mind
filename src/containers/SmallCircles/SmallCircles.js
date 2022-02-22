import React from 'react';
import { SmallCircle } from '../../components';
import './smallCircles.scss'
function SmallCircles(props) {
 
   const {circles}=props;
  
    return (
        <div className='smallCircles'>
            {circles.map((item,index)=>(
                <div key={index}>
                    <SmallCircle type={item.type} />
                    </div>
                
            ))}
            
        </div>
    );
}

export default SmallCircles;