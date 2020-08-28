import React, { useState } from 'react';
import './contador.scss';


function Contador() {
    const [count, setCount] = useState(0);


    return (
      <div className="contadorWrapper">
        <p>Clicks: {count} </p>
        <button id="suma" onClick={() => count < 10 ? setCount(count + 1) & activarBoton() : null}>
          +
        </button>
        <button id="resta" onClick={() => count !== 0 ? setCount(count - 1) : desactivarBoton()}>
          -
        </button>
      </div>
    );
  }

  function desactivarBoton () {
    document.getElementById('resta').classList.add('desactivado');
  }
  function activarBoton () {
    document.getElementById('resta').classList.remove('desactivado');
  }

  export default Contador;