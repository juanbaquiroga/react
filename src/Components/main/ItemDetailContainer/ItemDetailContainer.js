import React, {useState, useEffect} from 'react';
import { Products } from '../../../assets/Products';
import ItemDetail from './ItemDetail'
import { LinearProgress } from '@mui/material';


const ItemDetailContainer = ({greeting}) =>{
    
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState();
    
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
            .then((res)=>{
                setProduct(res[1])
            })
            
    }, [])


    return(
        <>
            <h1>{greeting}</h1>
            {isLoading ?
                <LinearProgress color='secondary'/>
            :product?
                <ItemDetail product={product}/>
            :
                <h1>'sin producto'</h1>
            }
        </>
    )
}

export default ItemDetailContainer
