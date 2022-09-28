import React from 'react';
import logo from '../../assets/logo.png';
import CartWidget from './cart/CartWidget';
import { Nav } from './Nav/Nav';
import { Link } from 'react-router-dom'

const Navbar = () =>{
    const categorias = [
        { id: 0, nombre: 'smartphones', ruta:'/category/smartphones' },
        { id: 1, nombre: 'laptops', ruta:'/category/laptops' },
        { id: 2, nombre: 'fragrances', ruta:'/category/fragrances' },
        { id: 4, nombre: 'skincare', ruta:'/category/skincare' },
        { id: 5, nombre: 'groceries', ruta:'/category/groceries' },
        { id: 6, nombre: 'home-decoration', ruta:'/category/home-decoration' },
    ]
    return(
        <>
            <header style={styles.header}>
                <Link to={'/'}>
                <img style={styles.logoNav} src={logo} alt="" />
                </Link>
                <h2 style={styles.titleNav}>E.store</h2>
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
    links: {
        display:'flex',
        flexFlow:'row nowrap',
    },
    cartWidget:{
        margin: '0 0 0 2rem',
        color: 'rgb(280,280,280)'
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
        backgroundColor: 'rgba(123, 123, 123, 0.818)',
        height: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:' 0 0 0 2rem',
    }

}