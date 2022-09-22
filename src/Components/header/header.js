import React from 'react';
import logo from '../../assets/logo.png';
import CartWidget from './cart/CartWidget';
import { Nav } from './Nav/Nav';

const Header = () =>{
    const categorias = [
        { id: 0, nombre: 'Categoria 1', ruta:'/categoria/categoria1' },
        { id: 1, nombre: 'Categoria 2', ruta:'/categoria/categoria2' },
        { id: 2, nombre: 'Categoria 3', ruta:'/categoria/categoria3' },
        { id: 3, nombre: 'Categoria 4', ruta:'/categoria/categoria4' },
    ]
    return(
        <>
            <header>
                <img className='logoNav' src={logo} alt="" />
                <h2 className='titleNav'>Ecommerce</h2>
                <Nav categorias={categorias}/>
                <div className='userNav'>
                    <CartWidget/>
                </div>
                
            </header>
        </>
    )
}

export default Header
