import { color } from '@mui/system';
import React, { useContext } from 'react'
import { Context } from '../../context/CartContext'

export function CartItem({product}){
    const {remove} = useContext(Context)
    const subtotal = product.product.price * product.quantity
    return(
        <>
        <tr style={styles.tableRow}>
            <td style={styles.tableContent}>{product.product.title}</td>
            <td style={styles.tableContent}>${product.product.price}</td>
            <td style={styles.tableContent}>{product.quantity}</td>
            <td style={styles.tableContent}>${subtotal}</td>
            <td style={styles.tdRemove} onClick={() => remove(product.product.id)}><button style={styles.buttonRemove}>eliminar</button></td>
        </tr>
        </>
    );
}
const styles ={
    tableContent:{
        with:'20%',
        fontWeigh:'500',
        padding:'5px 7px',
        textAling:'right'
    },
    tableRow:{
        backgroundColor: '#fbd1b0',
        borderBottom:'solid 2px #f9c197'
    },
    buttonRemove:{
        border:'none',
        background:'none'
    },
    tdRemove:{
        backgroundColor:'#f9c197',
        padding:'0 10px'
    }
}