import React from 'react'
import {Link} from 'react-router-dom'

export const Nav = ({ categorias }) => {
    return (
        <nav className='categories'>
            {categorias.map((categoria) => {
                return <Link key={categoria.id} className='categoryLink' to={categoria.ruta}>{categoria.nombre}</Link>
            })}
        </nav>
    )
};

