import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import ItemList from './ItemList';
import { LinearProgress } from '@mui/material';
import {API} from '../../const/Api'


const ItemListContainer = ({greeting}) =>{
    
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);


    useEffect(() => {
        const url = id ? `${API.CATEGORY}${id}` : API.LIST;
        const getItems = async () => {
          try {
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setProducts(data.products);
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
              <>
                <LinearProgress />
              </>
            ):error ?(
                <h1>'ocurrio un error'</h1>
            ):(
                <ItemList products={products}/>
            )
            }
        </>
    )
}

export default ItemListContainer
