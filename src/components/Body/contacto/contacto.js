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
            <img src={logo} alt="logo"></img>
        </div>
        <div className="contacto">
            <div className="redes">
                <a href="https://www.instagram.com/mates.ar/"><img src={insta} alt="instagram"></img></a>
            </div>
            <div className="redes">
                <a href="https://api.whatsapp.com/send?phone=541169809120"><img src={wp} alt="whatsapp"></img></a>
            </div>
            <div className="redes">
                <a href="https://www.facebook.com/caroo.lezcano"><img src={face} alt="facebook"></img></a>
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