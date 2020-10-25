import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';


export const CartContext = React.createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addProduct = (id, name, price) => {

        setCart([
            ...cart,
            {
                id: id,
                name: name,
                price: price
            }
        ])
    }

    /* ------------------------------- */

    const [user, setUser] = useState({});

    /* ------------------------------- */

    const [order, setOrder] = useState({});

    const crearOrden = () => {
        let totalPrice = 0;

        cart.forEach(function(elemento) {
            totalPrice += elemento["price"];
        });

        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: user,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice,
        };
        orders.add(newOrder).then(({ id }) => {
            console.log(id);
            setOrder({id: id, ...newOrder});
        }).catch((error) => {
            console.log('Error creating order', error);
        });
    }

    /*----------------------------------------*/

    return (
        <CartContext.Provider value={{ addProduct, cart, setCart, crearOrden, order, setOrder, user, setUser }}>
            {children}
        </CartContext.Provider>
    );
}