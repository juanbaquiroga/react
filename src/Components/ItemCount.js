import React, {useState}from 'react';

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial);

    const sumarCountador = () =>{
        if(contador < stock){
            setContador(contador +1)
        }
    }
    const restarCountador = () =>{
        if(contador > initial){
            setContador(contador - 1)
        }
    }
    const agregar = () =>{
        onAdd(contador)
    }
    return(
        <>
            <div style={styles.container}>
                <div style={styles.itemCounter}>
                    <button style={styles.buttonCounter} onClick={sumarCountador}>+</button>
                    <h1 style={styles.counter}>{contador}</h1>
                    <button style={styles.buttonCounter}  onClick={restarCountador}>-</button>
                </div>
                <button style={styles.buttonAdd} onClick={agregar}>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount

const styles={
    container:{
        minWidth:'15rem',
        display: 'flex',
        flexFlow: 'column nowrap',
        maxWidth: '100%',
    },
    itemCounter:{
        height: '2rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.4rem',
        borderRadius: '0.4rem 0.4rem 0 0',
        backgroundColor: 'rgba(46, 46, 46, 0.71)',
    },
    counter:{
        fontSize: '1.5rem',
        margin: '0',
    },
    buttonAdd:{
        backgroundColor: 'rgb(197, 197, 197)',
        borderRadius: '0 0 0.4rem 0.4rem',
        border: 'none',
        height: '1.6rem',
    },
    buttonCounter:{
        backgroundColor: 'rgb(197, 197, 197)',
        borderRadius: '0.4rem',
        border: 'none',
        height: '1.5rem',
        width: '3rem',
    },
}