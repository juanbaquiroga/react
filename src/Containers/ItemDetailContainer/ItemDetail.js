import { fontSize, margin } from '@mui/system'
import React from 'react'
import ItemCount from '../../Components/ItemCount'

const Item = ({product}) =>{
    console.log(product?.id, product?.title)

    const onAdd = (contador) =>{
        console.log('agregaste con exito ', contador, ' items')
    }

    return(
        <div style={styles.container}>
            <h2 style={styles.title}>Detalle de producto</h2>
            <div className='itemCard'>
                <img className='imgCard' src={product.images[0]}/>
                <h2 className='titleCard'>{'detalle'+ product.title}</h2>
                <p style={styles.description}>{product.description}</p>
                <h4 className='priceCard'>{'$'+ product.price}</h4>
                <ItemCount stock={product?.stock} onAdd={onAdd} initial={1}/>
            </div>
        </div>
    )

}
const styles = {
    container: {
        display: 'flex',
        flexFlow:'column nowrap',
        justifyContent: 'center',
        alignItems:'center',
        border:'solid 2px black',
        borderRadius:'1rem',
        margin:'0 2rem 3rem 2rem',
        padding:'1rem',
    },
    title:{
        fontSize:'2rem'
    },
    description:{
        fontSize:'0.7rem',
        margin:'0.7rem',
        textAlign:'center'
    }
}
export default Item;