import React from 'react'
import ItemCount from '../../Components/ItemCount'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { borderRadius } from '@mui/system';

const Item = ({product}) =>{
    console.log(product.id, product.title)

    const onAdd = (contador) =>{
        console.log('agregaste con exito ', contador, ' items')
    }

    return(
        <div style={styles.itemCard}>
            <img  style={styles.imgCard} src={product.images[0]}/>
            <h2 style={styles.titleCard}>{product.title}</h2>
            <h4 className='priceCard'>{'$'+product.price}</h4>
            <Link to={`/products/${product.id}`}>
                <button style={styles.detailBtn}>
                    Ver Detalles
                </button>
            </Link>
        </div>
        
    )

}

export default Item;
const styles={
    imgCard:{
        width: '15rem',
        height: '15rem',
        objectFit:'cover',
        borderRadius: '1rem 1rem 0 0',
        margin:'0',
    },
    itemCard:{
        maxWidth:' 15rem',
        borderRadius: '1rem',
        backgroundColor:'rgba(33, 33, 33, 0.362)' ,
    },
    titleCard:{
        fontSize: '1.2rem',
        margin: '0',
        height: '2rem',
    },
    detailBtn:{
        width:'100%',
        height:'2rem',
        color:'rgb(270,270,270)',
        fontSize:'1rem',
        fontWeight:'600',
        textDecoration:'none',
        borderRadius:'0 0 1rem 1rem',
        backgroundColor:'rgba(44,44,44,0.8)'
    }
};