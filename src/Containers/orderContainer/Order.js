import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'

const Order =({order})=>{
    console.log(order)
    return(
        <div style={styles.body}>
            <h1 style={styles.title}>orden de compra</h1>
            <div style={styles.container}>
                    <h2 style={styles.order}>Orden: {order.id}</h2>
                    <h3 style={styles.comprador}>Comprador: {order.client.name}</h3>
                    <h3 style={styles.comprador}>Comprador: {order.client.email}</h3>
                    <div style={styles.content}>
                    {order.items.map((item, index)=>{
                        return(
                            <div style={styles.product}>
                                <h3>{item.quantity}x {item.product.title}</h3>
                                <p>${item.product.price}</p>
                            </div>
                        )
                    })}
                    </div>
                    <div style={styles.buy}>
                        <h4 style={styles.total}>total: {order.total}</h4>
                    </div>
            </div>
        </div>
    )
}
const styles = {
    body:{
        display: 'flex',
        flexFlow:'column nowrap',
        justifyContent: 'center',
        alignItems:'center',
        margin:'40px 0',
        padding:'20px',
        gap: '15px',
    },
    title:{
        fontSize: '35px',
        marginBottom: '10px'
    },
    total:{
        fontSize: '25px',
        fontWeight:'250',
    },
    container: {
        display: 'flex',
        flexFlow:'column nowrap',
        justifyContent: 'center',
        borderRadius:'10px',
        gap:'5px',
        boxShadow:'0px 0px 20px 10px rgba(0,0,0,0.066)',
        padding:'2rem',
        backgroundColor:'#fbd1b0'
    },
    content:{
        with:'100px',
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'space-around',
        margin: '15px 0',
        gap: '10px',
    },
    description:{
        fontSize:'1rem',
        margin:'0.7rem',
        textAlign:'center',
        maxWidth:'23rem'

    },
    order:{
        fontSize:'30px',
        fontWeight:'200',
    },
    comprador:{
        fontSize:'20px',
        fontWeight:'300',
    },
    buttonBuy:{
        backgroundColor:'#f9c197',
        color:'#ffffff',
        height:'30px',
        width:'200px',
        border:'none',
        borderRadius:'15px',
        margin:'15px 0 0 0'

    },
    product:{
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-between',
        backgroundColor:'#f9c197',
        padding:'15px',
        borderRadius:'15px'
    }
}
export default Order;
