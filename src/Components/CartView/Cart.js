import React,{useContext} from 'react'
import { Context } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { CartItem } from './cartItem'
import { border, margin } from '@mui/system'

export const Cart = () => {
    const {cart, totalAmount, reset} = useContext(Context)
    console.log(cart)
    return (
        <>
            {cart.length ? (
                <>
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
                    <button style={styles.emptyCart} onClick={()=>(reset())}>vaciar carrito</button>
                </div>
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

const styles={
    table:{
        border:' solid 2px #ab846e',
        width:'90%',
        margin:'20px 5% 0 5%',
        borderCollapse:'collapse',
        backgroundColor: '#b68e78',
    },
    tableRow:{
        backgroundColor: '#b68e78',
        height:'30px'
    },
    tableContent:{
        width:'20%',
        padding:'5pxx',
        color:'#ffffff',
        fontWeigh:'700',
        textAling:'right',
    },
    total:{
        backgroundColor: '#b68e78',
        color:'#ffffff',
        margin:'0',
        textAling:'right',
        fontWeight:'800',
        fontSize:'20px'
    },
    finalContent:{
        width:'100%'
    },
    emptyCart:{
        backgroundColor: '#ab846e',
        padding:'10px 15px',
        border:'solid 1px rgba(30, 30, 30, 0.4)',
        borderRadius:'5px'
    },
    finalRow:{
        backgroundColor: '#b68e78',
        width:'90%',
        margin:'0 5%',
        padding:'10px',
        display:'flex',
        justifyContent:'space-between'
    }
}
