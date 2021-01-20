import React from 'react'
import './BackBlur.css';
function BackBlur(props) {
    return (

        <div className="backBlur">
            <div className="box" onClick={props.toggle}>

            </div>
        </div>

    )
}

export default BackBlur
