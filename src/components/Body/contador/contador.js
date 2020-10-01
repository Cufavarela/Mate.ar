import React, { useContext, useEffect, useState } from 'react';
import './contador.scss';
import {CartContext} from '../../../contexts/cartContext';


function Contador ({ initial, max, min, setCount = () => {} }) {

    const [counter, setCounter] = useState(initial);

    useEffect(() => {
      setCount(counter);
    }, [counter])

    const increment = () => {
        if (counter < max) {
          setCounter(counter + 1);
        } ;
    };

    const decrement = () => {
      if (counter > min) {
        setCounter(counter - 1);
      } ;
    };

    return (
      <div className="contadorWrapper">
        <div className="contador">
          <div className="botones">
            <button className="boton" onClick={increment}> + </button>
            <div>
              <h3>Cantidad: {counter}</h3>
            </div>
            <button className="boton" onClick={decrement} > - </button>
          </div>
        </div>
      </div>
    );
  }

  export default Contador;