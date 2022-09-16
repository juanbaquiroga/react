import React, {useState, useEffect} from 'react';
import { Products } from '../../../assets/Products';
import ItemList from './ItemList'






const ItemListContainer = ({greeting}) =>{
    
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    const myPromise =(prod)=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(prod)
                setIsLoading(false)
            },2000)
        })
    }

    useEffect(() => {
        myPromise(Products)
            .then((res)=>{setProducts(res)})
            
    }, [])


    return(
        <>
            <h1>{greeting}</h1>
            {isLoading ?
                <h1>cargando...</h1>
            :(products.length > 0) ?
                <ItemList products={products}/>
            :
                <h1>'no existen productos'</h1>
            }
        </>
    )
}

export default ItemListContainer
