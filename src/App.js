import React from 'react';
import './App.css';
import Header from './Components/header/header';
import ItemListContainer from './Components/main/ItemListContainer/ItemListContainer'


const App = () =>{
    const prop='hola, bienvenido'
    return(
        <>
        <Header/>
        <ItemListContainer greeting={prop}/>
        </>
        )
}

export default App
