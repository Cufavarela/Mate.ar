import React, { useContext, useState } from 'react';
import './contador.scss';
import {CartContext} from '../../../contexts/cartContext';


function Contador({initial, max, min, id}) {

    const [qty, setQty] = useContext(CartContext);
    const [productId, setProductId] = useContext(CartContext);



    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if (counter < max) setCounter(counter + 1) ;
    };

    const decrement = () => {
      if (counter > min) setCounter(counter - 1) ;
    };

    const addToCart = () => {
      setQty(counter);
      setProductId(id);
    }

    return (
      <div className="contadorWrapper">
        <div className="contador">
          <div className="botones">
            <button className="boton" onClick={increment}> + </button>
            <div>
              <button className="alCarrito" onClick={addToCart}>Agregar {counter} al carrito</button>
            </div>
            <button className="boton" onClick={decrement} > - </button>
          </div>
        </div>
      </div>
    );
  }

  export default Contador;