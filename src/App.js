import React from 'react';
import './App.css';
import Header from './Components/header/header';
import ItemListContainer from './Components/Main/ItemListContainer/ItemListContainer'
import ItemCount from './Components/Main/ItemListContainer/ItemCount'
import Item from './Components/Main/ItemListContainer/Item';

const App = () =>{
    const greeting='hola, bienvenido a ecommerce'

    const onAdd = (contador) =>{
        console.log('agregaste con exito ', contador, ' items')
    }

    return(
        <>
        <Header/>
        <ItemListContainer greeting={greeting}/>
        <ItemCount stock = {5} onAdd={onAdd} initial={1}/>

        </>
    )
}

export default App
