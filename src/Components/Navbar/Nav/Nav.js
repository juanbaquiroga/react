import React from 'react'
import {Link} from 'react-router-dom'

export const Nav = ({ categorias }) => {
    return (
        <nav style={styles.nav}>
            {categorias.map((categoria) => {
                return <Link key={categoria.id} style={styles.links} to={categoria.ruta}>{categoria.nombre}</Link>
            })}
        </nav>
    )
};

const styles = {
    links: {
        padding: '10px',
        textDecoration:'none',
        color:'rgb(280,280,280)',
        fontWeight:'600'
    },
    nav:{
        display: 'flex',
        flexFlow: 'row nowrap',
    }
};
