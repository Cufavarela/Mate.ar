import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addProduct = (id, quantity, name, price) => {

        setCart([
            ...cart,
            {
                id: id,
                quantity: quantity,
                name: name,
                price: price
            }
        ])
    }

    return (
        <CartContext.Provider value={{ addProduct, cart }}>
            {children}
        </CartContext.Provider>
    );
}