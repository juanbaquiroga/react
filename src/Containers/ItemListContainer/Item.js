import React from 'react'
import { Link } from "react-router-dom";

const Item = ({product}) =>{
    return(
        <div style={styles.itemCard}>
            <img  style={styles.imgCard} src={product.image} alt={product.title}/>
            {product.stock !== 0?
                <h2 style={styles.titleCard}>{product.title}</h2>
            :   <h2 style={styles.titleStock}>Sin stock</h2>}
            <h4 style={styles.priceCard}>{'$'+product.price}</h4>
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
        borderRadius: '.5rem .5rem 0 0',
        margin:'0',
        objectFit:'cover'
    },
    itemCard:{
        Width:' 17rem',
        borderRadius: '.5rem',
        backgroundColor:'#fffffb',
        boxShadow:'0px 0px 20px 10px rgba(0,0,0,0.05)',
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'space-between',
        height:'350px'
    },
    titleCard:{
        fontSize: '20px',
        fontWeight:'150',
        margin: '0',
        height: '2rem',
        textAlign:'center'
    },
    titleStock:{
        color:'#f9c197',
        fontSize: '20px',
        fontWeight:'350',
        margin: '0',
        height: '2rem',
        textAlign:'center'
    },
    detailBtn:{
        width:'100%',
        height:'2rem',
        color:'#ffffff',
        fontSize:'15px',
        fontWeight:'500',
        border:'none',
        borderRadius:'0 0 .5rem .5rem',
        backgroundColor:'#f9c197'
    },
    priceCard:{
        fontSize:'15px',
        textAlign:'right',
        padding:'0 7px 0 0'
    }
};