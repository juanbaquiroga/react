import React from 'react'
import Item from "./Item";

const ItemList = ({products}) =>{
    return(
        <>
            <div style={styles.itemContainer}>
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
            </div>
        </>
    )
}

export default ItemList
const styles={
    itemContainer:{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent:'center',
        gap: '1rem',
        padding:'30px'
    },
}