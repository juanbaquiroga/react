import React from 'react';
import './Header.css'
import logo from '../../assets/logo.png';

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
                        <a href="" className='btnNav'>login</a>
                        <a href="" className='btnNav'>register</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
