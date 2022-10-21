import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const OrderView = () =>{
    const [orderId, setOrderId] = useState('');
    const order =(e)=>{
        e.preventDefault()
        setOrderId(e.target.value)
    }
    return (
        <>
            <div style={styles.container}>
                <form style={styles.content}>
                    <h1>ingrese el ID de su order</h1>
                    <input style={styles.input} type="text" placeholder="igrese su ID de order" name="id" onChange={order} ></input>
                    <Link to={`/order/${orderId}`}><button style={styles.button}>Enviar orden</button></Link>
                </form>
            </div>
        </>
    )
}
export default OrderView

const styles={
    container:{
        display:'flex',
        flexFlow:'row nowrap',
        maxWidth:'600px',
        padding:'30px 0',
        backgroundColor:'#f9c197',
        margin:'40px auto',
        borderRadius:'20px',
        boxShadow:'0px 0px 20px 10px rgba(0,0,0,0.066)',
        justifyContent:'center',
    },
    button:{
        backgroundColor:'#fef0e2',
        color:'#000000',
        height:'25px',
        width:'200px',
        border:'none',
        borderRadius:'12px',
        marginTop:'10px',
    
    },
    input:{
        borderRadius:'12px',
        height:'25px',
        width:'200px',
        paddingLeft:'7px',
        border:'solid 2px rgb(180, 180, 180)'
    },
    content:{
        with:'100px',
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'center',
        alignItems:'center',
        padding:'15px',
        margin: '15px 0',
        gap: '10px',
    },
}