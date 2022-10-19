import React,{useContext, useState} from 'react'
import { Context } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { CartItem } from './cartItem'


export const Cart = () => {
    const {cart, totalAmount, reset} = useContext(Context)

    return (
        <>
            {cart.length ? (
                <>
                <h1 style={styles.title}>Cart</h1>
                <table style={styles.table}>
                <tr style={styles.tableRow}>
                    <th style={styles.tableContent}>Producto</th>
                    <th style={styles.tableContent}>Precio Unitario</th>
                    <th style={styles.tableContent}>Cantidad</th>
                    <th style={styles.tableContent}>Subtotal</th>
                    <th style={styles.tableContent}></th>
                </tr>
                {cart.map((item) => <CartItem key={cart.id} product={item}/>)}
                </table>
                <div style={styles.finalRow}>
                    <p style={styles.total}>Total: ${totalAmount}</p>
                    <div>
                        <button style={styles.buyCart}><Link style={styles.link} to="/checkout">comprar carrito</Link></button>
                        <button style={styles.emptyCart} onClick={()=>(reset())}>vaciar carrito</button>
                    </div>
                    
                </div>
                </>
                ) : (
                    <>
                <h1 style={styles.title}>
                    No agregaste productos, puedes ver <Link to="/">aca</Link>
                </h1>    
                </>
            )}
        </>
    )
}

const styles={
    title:{
        textAlign:'center'
    },
    table:{
        border:' solid 2px #fbd1b0',
        width:'90%',
        margin:'20px 5% 0 5%',
        borderCollapse:'collapse',
        backgroundColor: '#fef0e2',
    },
    tableRow:{
        backgroundColor: '#fbd1b0',
        height:'30px',
        textAlign:'left'
    },
    tableContent:{
        width:'20%',
        padding:'5pxx',
        color:'#ffffff',
        fontWeight:'650',
        fontSize:'18px',
        textAling:'right',
    },
    total:{
        color:'#ffffff',
        margin:'0',
        textAling:'right',
        fontWeight:'700',
        fontSize:'25px'
    },
    finalContent:{
        width:'100%'
    },
    emptyCart:{
        backgroundColor: '#f9c197',
        padding:'10px 15px',
        border:'solid 1px #fbd1b0',
        borderRadius:'5px'
    },
    buyCart:{
        backgroundColor: '#fce0c9',
        padding:'10px 15px',
        border:'solid 1px #fbd1b0',
        borderRadius:'5px',
        fontWeight:'400'
    },
    link:{
        textDecoration:'none',
        color:'#000000'
    },
    finalRow:{
        backgroundColor: '#fbd1b0',
        width:'90%',
        margin:'0 5%',
        padding:'10px',
        display:'flex',
        justifyContent:'space-between'
    }
}
