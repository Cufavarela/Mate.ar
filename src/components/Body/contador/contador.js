import React, { useState } from 'react';
import './contador.scss';


function Contador({initial, max, min, onAdd}) {


    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if (counter < max) setCounter(counter + 1) ;
    };

    const decrement = () => {
      if (counter > min) setCounter(counter - 1) ;
    };



    return (
      <div className="contadorWrapper">
        <div className="contador">
          <div className="botones">
            <button className="boton" onClick={increment}> + </button>
            <div>
              <button className="alCarrito" onClick={() => onAdd(counter)}>Quiero {counter} !</button>
            </div>
            <button className="boton" onClick={decrement} > - </button>
          </div>
        </div>
      </div>
    );
  }



  export default Contador;