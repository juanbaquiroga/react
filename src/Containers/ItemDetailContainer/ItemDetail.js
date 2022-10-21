import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import { Context } from '../../context/CartContext'



const Item = ({product}) =>{

    const [isButtonpPressed, setIsButtonpPressed] = useState(false);
    const {add} = useContext(Context)

    const onAdd = (counter) =>{
        setIsButtonpPressed(true)
        add(product, counter)
    }
    

    return(
        Object.values(product).length === 1?(<h1>El producto no existe</h1>):(
        <div style={styles.body}>
            <div style={styles.container}>
                <img style={styles.img}  src={product.image}/>
                <div style={styles.content}>
                    <h2 style={styles.name}>{product.title}</h2>
                    <p style={styles.description}>{product.description}</p>
                    <div style={styles.buy}>
                        <h4>{'$'+ product.price}</h4>
                        {product.stock !== 0?(
                            !isButtonpPressed?(
                                <ItemCount  stock={product.stock} onAdd={onAdd} initial={1}/>
                                ):(
                                    <Link to={'/cart'}>
                                    <button  style={styles.buttonBuy}>finalizar compra</button>
                                </Link>
                            )
                        ):(
                            <h1>sin stock</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
        ))

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
        width:'450px',
        borderRadius:' 10px 0 0 10px',
    },
    container: {
        display: 'flex',
        flexFlow:'row nowrap',
        justifyContent: 'center',
        borderRadius:'10px',
        gap:'2rem',
        boxShadow:'0px 0px 20px 10px rgba(0,0,0,0.066)',
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