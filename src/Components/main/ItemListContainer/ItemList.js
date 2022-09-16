import React from 'react'
import { Products } from '../../../assets/Products';
import Item from "./Item";

const ItemList = ({products}) =>{
    console.log(products)
    return(
        <>
            <div className="itemContainer">
            {products.map((prod, i) => (
          <Item key={`${prod.product}-${i}`} product={prod} />
        ))}
            </div>
        </>
    )
}

export default ItemList