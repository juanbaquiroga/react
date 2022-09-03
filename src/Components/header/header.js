import React from 'react';
import logo from '../../assets/logo.png';
import CartWidget from './cart/CartWidget';

const Header = () =>{
    return(
        <>
            <header>
                <img className='logoNav' src={logo} alt="" />
                <h2 className='titleNav'>Ecommerce</h2>
                <nav>
                    <a href="" className='linkNav'>categoria 1</a>
                    <a href="" className='linkNav'>categoria 2</a>
                    <div className='userNav'>
                        <CartWidget/>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
