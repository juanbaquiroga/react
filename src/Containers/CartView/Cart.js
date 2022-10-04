import React,{useContext} from 'react'
import { Context } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { CartItem } from './cartItem'
import { border, margin } from '@mui/system'

export const Cart = () => {
    const {cart, totalAmount} = useContext(Context)
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
                    <p style={styles.total}>Total: ${totalAmount}</p>
                </table>
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
        margin:'20px 5%',
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
        width:'100%',
        margin:'0',
        padding:'7px',
        textAling:'right',
        fontWeight:'800',
        fontSize:'20px'
    }
}
