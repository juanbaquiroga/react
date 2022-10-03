import React,{useContext} from 'react'
import { Context } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { CartItem } from './cartItem'

export const Cart = () => {
    const {cart, totalAmount} = useContext(Context)
    return (
        <>
            {cart.length ? (
                <>
                <table>
                <tr>
                    <th>producto</th>
                    <th>precio unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                {cart.map((item) => <CartItem key={cart.id} product={item}/>)}
                </table>
                <h1>{totalAmount}</h1>
                </>
                ) : (
                    <>
                <h1>
                    No agregaste productos, puedes ver <Link to="/">aca</Link>
                </h1>    
                </>
            )}
        </>
    )
}
