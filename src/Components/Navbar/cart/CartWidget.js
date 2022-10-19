import React,{ useContext, useState, useEffect} from 'react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Context } from '../../../context/CartContext';


const CartWidget = () =>{
    const {cart} =useContext(Context)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (cart.length) {
            let totalAmount = 0;
            cart.forEach(item => totalAmount += item.quantity);
            setTotal(totalAmount);
        }
    }, [cart]);
    return(
        <>
            <div style={styles.cartWidget}>
                {cart.length?(<p style={styles.cartQty}>{total}</p>):null}
                <ShoppingCartTwoToneIcon fontSize="large"/>
            </div>
        </>
    )
}
export default CartWidget
const styles={
    cartWidget:{
        display:'flex',
        alignItems:'flex-end'
    },
    cartQty:{
        backgroundColor: '#ffffff',
        color:'rgb(32,32,32',
        borderRadius:'100%',
        width:'23px',
        height:'23px',
        textAlign:'center',
    }
}