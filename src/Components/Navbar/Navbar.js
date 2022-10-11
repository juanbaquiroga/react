import React from 'react';
import logo from '../../assets/logo.png';
import CartWidget from './cart/CartWidget';
import { Nav } from './Nav/Nav';
import { Link } from 'react-router-dom'

const Navbar = () =>{
    const categorias = [
        { id: 1, nombre: 'Nike', ruta:'/category/nike' },
        { id: 2, nombre: 'Adidas', ruta:'/category/adidas' },
        { id: 3, nombre: 'Converse', ruta:'/category/converse'}
    ]
    return(
        <>
            <header style={styles.header}>
                <div style={styles.home}>
                    <Link to={'/'}>
                    <img style={styles.logoNav} src={logo} alt="" />
                    </Link>
                    <h2 style={styles.titleNav}>Juanba</h2>
                </div>
                <div style={styles.links}>
                    <Nav categorias={categorias}/>
                    <Link to={'/cart'} style={styles.cartWidget}>
                        <CartWidget/>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar

const styles = {
    home:{
        display:'flex',
        flexFlow:'row nowrap',
        alignItems:'center',
        gap:'20px'
    },
    links: {
        display:'flex',
        flexFlow:'row nowrap',
    },
    cartWidget:{
        margin: '0 0 0 2rem',
        color: '#fffffb'
    },
    titleNav:{
        color: 'rgb(271, 271, 271)',
    },
    logoNav:{
        width: '3.5rem',
        height: '3.5rem',
    },
    header:{
        display: 'flex',
        flexFlow:' row nowrap',
        backgroundColor: '#f9c197',
        height: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:' 0 0 0 2rem',
    }

}