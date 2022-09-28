import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Containers/CartView/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () =>{
    const greeting='hola, bienvenido a mi ecommerce'

    const onAdd = (contador) =>{
        console.log('agregaste con exito ', contador, ' items')
    }

    return(
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
                <Route path='/category/:id' element={<ItemListContainer greeting={greeting}/>}/>
                <Route path='/products/:id' element={<ItemDetailContainer/>}/>
                <Route path='7cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
// https://usehooks.com/useLocalStorage/
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage