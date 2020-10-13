import React, { useState } from 'react';

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

    return (
        <CartContext.Provider value={{ addProduct, cart }}>
            {children}
        </CartContext.Provider>
    );
}