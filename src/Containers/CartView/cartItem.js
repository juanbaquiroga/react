import React, { useContext } from 'react'
import { Context } from '../../context/CartContext'

export function CartItem({product}){
    const {remove} = useContext(Context)
    const subtotal = product.product.price * product.quantity
    return(
        <>
        <tr>
            <td>{product.product.title}</td>
            <td>${product.product.price}</td>
            <td>{product.quantity}</td>
            <td>${subtotal}</td>
            <td onClick={() => remove(product.product.id)}><button>X</button></td>
        </tr>
        </>
    );
}