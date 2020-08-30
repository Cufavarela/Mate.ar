import React from 'react';
import './body.scss';
import Contador from './contador/contador';

function Body ({onAdd}) {

    const valores = {
        initial: 1,
        min: 0,
        max: 5,
    }

    const { initial, min, max } = valores;



    return <div className="body">
        <Contador initial={initial} max={max} min={min} onAdd={onAdd} />
    </div>
}

export default Body;