import React, { useState, useContext, Fragment } from "react";
import {Context} from '../../context/CartContext'
import {db} from '../../firebase/firebase'
import {collection, addDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore'


const Checkout = ()=>{
    const{totalAmount, cart, reset,}= useContext(Context)
    const [client, setClient] = useState({name:'',email:'',phone:''})
    const [saleId, setSaleId] = useState('')
    
    const clientData = (e)=>{
        setClient({
            ...client,
            [e.target.name]:e.target.value
        })
    }
    const endBuy=(e)=>{
        e.preventDefault ()
        if(Object.values(client).length !==3){
        }else{
            const sellsCollection = collection (db, "sells")
            addDoc (sellsCollection,{
            client,
            items: cart,
            date: serverTimestamp(),
            total: `$${totalAmount}`
        })
        .then(result=>{
            setSaleId(result.id); 
            console.log('hola')
            console.log(cart)
            cart.forEach(producto => {
                console.log(producto)
                updateStock(producto)
            });
            reset()
        })}
    }
    
    const updateStock =(producto)=>{
         const prod = doc (db, "products", producto.product.id)
         updateDoc(prod, {stock: (producto.product.stock - producto.quantity)})
    }

    return(
        <>
        <div style={styles.container}>
            <Fragment>
            {!saleId ?
                <div style={styles.container}>
                    <h2>¡Casi terminamos!</h2>
                    <h4>Por favor complete todos los campos</h4>
                    <form onSubmit={endBuy}>
                        <div>
                            <input type="text" placeholder="Nombre" name="name" onChange={clientData} value={client.name}></input>
                            <input type="number" placeholder="Telefono" name="phone" onChange={clientData} value={client.phone}></input>
                            <input type="email" placeholder="Email" name="email" onChange={clientData} value={client.email}></input>
                        </div>
                        <button>Enviar orden</button>
                    </form>
                </div>
            :
                <div>
                    <h2>Muchas gracias por su compra!</h2>
                    <h4>Su orden de compra es : {saleId}</h4>
                </div> 
            }
            </Fragment>
        </div>
    </>
    )
}
export default Checkout

const styles={
    title:{
        fontSize:'300px'
    },
    container:{
        display:'flex',
        flexFlow:'column nowrap',
        backgroundColor:'#fce0c9',
        alignItems:'center',
        margin:'40px 0',
    }
}