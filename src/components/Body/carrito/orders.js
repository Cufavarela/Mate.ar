import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../../../firebase';
import {CartContext} from '../../../contexts/cartContext';
import { useEffect } from 'react';


const db = getFirestore();

const { cart }  = useContext(CartContext);


const orders = db.collection("orders");
const newOrder = {
    buyer: useInfo,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: price (),
};

useEffect (() => {
    orders.add(newOrder).then(({ id }) => {
        setOrderId(id);
    }).catch(err => {
        setError(err);
    }).finally(() => {
        setLoading(false);
    })

}, []);