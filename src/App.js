import React from 'react';
import './App.css';
import Header from './Components/header/header';
import ItemListContainer from './Components/main/ItemListContainer/ItemListContainer'
import ItemCount from './Components/main/ItemListContainer/ItemCount'


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
