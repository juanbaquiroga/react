import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Components/CartView/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomProvider from './context/CartContext';

const App = () =>{
    const greeting='hola, bienvenido a mi E.store'

    
    return(
        <>
        <BrowserRouter>
            <CustomProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
                    <Route path='/category/:id' element={<ItemListContainer greeting={greeting}/>}/>
                    <Route path='/products/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </CustomProvider>
        </BrowserRouter>
        </>
    )
}

export default App
// https://usehooks.com/useLocalStorage/
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage