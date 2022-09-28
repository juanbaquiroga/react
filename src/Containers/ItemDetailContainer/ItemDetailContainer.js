import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { LinearProgress } from '@mui/material';
import {API} from '../../const/Api';


const ItemDetailContainer = ({greeting}) =>{

    // const myPromise =(prod)=>{
    //     return new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve(prod)
    //             setIsLoading(false)
    //         },2000)
    //     })
    // }

    // useEffect(() => {
    //     myPromise(Products)
    //         .then((res)=>{
    //             setProduct(res[1])
    //         })
            
    // }, [])

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);


    useEffect(() => {
        const url =`${API.PRODUCTO}${id}`;
        const getItems = async () => {
          try {
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setProduct(data);
          } catch (err) {
            console.error(err);
            setError(true);
          } finally {
            setIsLoading(false);
          }
        };
        getItems();
      }, [id]);

    return(
        <>
            <h1>{greeting}</h1>
            {isLoading ?(
                <LinearProgress color='secondary'/>
            ):error? (
                <h1>Ocurrio un error</h1>
            ):(
                <ItemDetail product={product}/>
            )}
        </>
    )
}

export default ItemDetailContainer
