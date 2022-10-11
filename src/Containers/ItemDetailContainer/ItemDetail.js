import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Context } from '../../context/CartContext'
import { height, padding } from '@mui/system'


const Item = ({product}) =>{
    console.log(product?.id, product?.title)

    const [isButtonpPressed, setIsButtonpPressed] = useState(false);
    const {add} = useContext(Context)

    const onAdd = (counter) =>{
        setIsButtonpPressed(true)
        add(product, counter)
    }
    const notificacion = (counter) =>{
        Toastify({
            text: `compraste  ${product.title}`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            close: true,
        }).showToast();
    }

    return(
        <div style={styles.body}>
            <div style={styles.container}>
                <img style={styles.img}  src={product.image}/>
                <div style={styles.content}>
                    <h2 style={styles.name}>{product.title}</h2>
                    <p style={styles.description}>{product.description}</p>
                    <div style={styles.buy}>
                        <h4>{'$'+ product.price}</h4>
                            {!isButtonpPressed?(
                                <ItemCount stock={product.stock} onAdd={onAdd} initial={1}/>
                                ):(
                                    <Link to={'/cart'}>
                                    <button onClick={notificacion} style={styles.buttonBuy}>finalizar compra</button>
                                </Link>
                            )}
                    </div>
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
        padding:'20px'
    },
    
    img:{
        width:'450px'
    },
    container: {
        display: 'flex',
        flexFlow:'row nowrap',
        justifyContent: 'center',
        gap:'2rem',
        paddingRight:'2rem',
        backgroundColor:'#fef0e2'
    },
    content:{
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'space-around',
        with:'100px',
        padding:'30px'
    },
    description:{
        fontSize:'1rem',
        margin:'0.7rem',
        textAlign:'center',
        maxWidth:'23rem'

    },
    name:{
        textAlign:'center'
    },
    buttonBuy:{
        backgroundColor:'#f9c197',
        color:'#ffffff',
        height:'30px',
        width:'200px',
        border:'none',
        borderRadius:'1rem',
        margin:'15px 0 0 0'

    },
    buy:{
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
    }
    
}
export default Item;