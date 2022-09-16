import React from 'react'
import ItemCount from './ItemCount'

const Item = ({product}) =>{
    console.log(product?.id, product?.title)

    const onAdd = (contador) =>{
        console.log('agregaste con exito ', contador, ' items')
    }

    return(
        <div className='itemCard'>
            <img className='imgCard' src={product?.img}/>
            <h2 className='titleCard'>{product?.title}</h2>
            <h4 className='priceCard'>{product?.price}</h4>
            <ItemCount stock={product?.stock} onAdd={onAdd} initial={1}/>
        </div>
    )

}

export default Item;