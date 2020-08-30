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
        <div>
          <h5>Producto</h5>
          <div className="botones">
            <button className="boton" onClick={decrement} > - </button>
            <h3 className="num"> {counter} </h3>
            <button className="boton" onClick={increment}> + </button>
          </div>
        </div>
        <div>
          <button onClick={() => onAdd(counter)}>Agregar al Carrito</button>
        </div>
      </div>
    );
  }



  export default Contador;