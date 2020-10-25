import React, { useState } from 'react';
import { getFirestore } from '../../../firebase';
import './contacto.scss';
import insta from '../../../images/instagram.svg';
import wp from '../../../images/whatsapp.svg';
import logo from '../../../images/logoMate.svg';
import face from '../../../images/facebook.svg';



function Contacto () {

    const [estadoDeOrden, setEstadoDeOrden] = useState('');


    const traerOrder = (numOrden) => {

        if(!!!numOrden) return false;

        const db = getFirestore();
        const orders = db.collection("orders");
        const order = orders.doc(numOrden).get()
        .then((doc) => {
            if (!doc.exists) {
                setEstadoDeOrden('Hay un error en el número de pedido!');
                console.log('Eu, no existe!')
            } else {
                setEstadoDeOrden('Tu pedido esta siendo procesado, lo recibirás pronto!');
                console.log(doc.data())
            }
        })
        .catch((error) => {
            console.log('Error serching Items', error);
        });
    }


    return <div className="contactoWrapper">
        <div className="logo">
            <img src={logo}></img>
        </div>
        <div className="contacto">
            <div className="redes">
                <a href="#"><img src={insta}></img></a>
            </div>
            <div className="redes">
                <a href="#"><img src={wp}></img></a>
            </div>
            <div className="redes">
                <a href="#"><img src={face}></img></a>
            </div>
        </div>
        <div className="dudas">
            <p>Tenés dudas con tu pedido?</p>
            <input className="numOrden" placeholder="Ingresá tu código" onBlur={ (e) => traerOrder(e.target.value) }></input>
            <div className="answer">{estadoDeOrden}</div>
        </div>
    </div>
}

export default Contacto;