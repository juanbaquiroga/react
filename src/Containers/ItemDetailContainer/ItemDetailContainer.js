import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { LinearProgress } from '@mui/material';
import {API} from '../../const/Api';
import { db } from '../../firebase/firebase';
import {doc, getDoc, collection} from 'firebase/firestore'


const ItemDetailContainer = ({greeting}) =>{

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);


    // useEffect(() => {
    //     const url =`${API.PRODUCTO}${id}`;
    //     const getItems = async () => {
    //       try {
    //         const respuesta = await fetch(url);
    //         const data = await respuesta.json();
    //         setProduct(data);
    //       } catch (err) {
    //         console.error(err);
    //         setError(true);
    //       } finally {
    //         setIsLoading(false);
    //       }
    //     };
    //     getItems();
    //   }, [id]);
    useEffect(()=>{
      const productsCollection = collection(db, 'products');
      const refDoc = doc(productsCollection, id)
      getDoc(refDoc)
        .then((result) => {
          setProduct({
            id: result.id,
            ...result.data(),
          });
        })
        .catch (()=>{
          setError(true);
        })
        .finally(()=>{
          setIsLoading(false)
        })
      },[id])

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
