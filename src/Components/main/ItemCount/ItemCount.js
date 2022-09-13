import React, {useState}from 'react';

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial);

    const sumarCountador = () =>{
        if(contador < stock){
            setContador(contador +1)
        }
    }
    const restarCountador = () =>{
        if(contador > 0){
            setContador(contador - 1)
        }
    }
    const agregar = () =>{
        if ((stock != 0) & (contador < stock)){
            onAdd(contador)
        }
    }
    return(
        <>
            <div className='itemCount'>
                <div className='itemCounter'>
                    <button className='buttonCounter' onClick={sumarCountador}>+</button>
                    <h1 className='counter'>{contador}</h1>
                    <button className='buttonCounter' onClick={restarCountador}>-</button>
                </div>
                <button className='addCart' onClick={agregar}>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount