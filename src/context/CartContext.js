import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();


const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('CART')) || []);
    const [totalAmount, setTotalAmount] = useState(0)
    
    const inCart = (id) => cart.some((product) => product.id === id);
    
    useEffect(() => {
        localStorage.setItem("CART", JSON.stringify(cart));
    
        let total = 0;
        cart.forEach(product => {
            total += product.quantity * product.product.price;
        })
        setTotalAmount(total);
        console.log(cart)
        console.log(totalAmount)
    }, [cart])
    
    
    const add = (product, quantity) => {
        if (inCart(product.id)) {
            setCart(cart.map (prod=>{
                return prod.id === product.id?{...prod, quantity: prod.quantity + quantity} : prod
            }));
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };
    
    
    const remove = (id) => setCart(cart.filter(product => product.product.id !== id));
    
    
    const reset = () => {
        setCart([]);
    };
    
    
    return (
        <Context.Provider
        value={{
            totalAmount,
            cart,
            add,
            remove,
            reset,
        }}
        >
        {children}
        </Context.Provider>
    );
};

export default CustomProvider;
