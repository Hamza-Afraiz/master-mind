import React from 'react';
import './smallCircle.scss'
function SmallCircle(props) {
    return (
        <div>
            {props.type === 'full' ? <div className='fullCircle'>

            </div> : props.type === 'cross' ?
                <div className='crossCircle'>
                    X
                </div> :
                <div className='smallCircle'>

                </div>}




        </div>
    );
}

export default SmallCircle;