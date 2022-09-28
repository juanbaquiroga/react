import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const Item = ({product}) =>{
    console.log(product?.id, product?.title)

    const [items, setItems] = useState(0)
    const [isButtonpPressed, setIsButtonpPressed] = useState(false);

    const onAdd = (contador) =>{
        setIsButtonpPressed(true)
        setItems(contador)
    }
    const notificacion = () =>{
        Toastify({
            text: `compraste ${items} ${product.title}`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            close: true,
        }).showToast();
    }

    return(
        <div style={styles.body}>
            <h2 style={styles.title}>Detalle de producto</h2>
            <div style={styles.container}>
                <img style={styles.img}  src={product.images[0]}/>
                <div style={styles.content}>
                    <h2 style={styles.name}>{product.title}</h2>
                    <p style={styles.description}>{product.description}</p>
                    <h4 className='priceCard'>{'$'+ product.price}</h4>
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
    )

}
const styles = {
    body:{
        display: 'flex',
        flexFlow:'column nowrap',
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        fontSize:'2rem',
    },
    container: {
        display: 'flex',
        flexFlow:'row nowrap',
        justifyContent: 'center',
        alignItems:'center',
        gap:'2rem',
        paddingRight:'2rem',
        backgroundColor:'rgba(50,50,50,0.5)'
    },
    content:{
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center'
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
        margin:'0 auto',
        backgroundColor:'rgba(46, 46, 46, 0.71)',
        color:'rgb(230,230,230)',
        height:'2rem',
        maxWidth:'10rem',
        border:'none',
        borderRadius:'1rem',

    }
}
export default Item;