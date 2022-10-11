import React, {useState}from 'react';

const ItemCount = ({stock, initial, onAdd}) =>{
    const [counter, setCounter] = useState(initial);

    const add = () =>{
        if(counter < stock){
            setCounter(counter +1)
        }
    }
    const substract = () =>{
        if(counter > initial){
            setCounter(counter - 1)
        }
    }
    
    return(
        <>
            <div style={styles.container}>
                <div style={styles.itemCounter}>
                    <button style={styles.buttonCounter} onClick={add}>+</button>
                    <h1 style={styles.counter}>{counter}</h1>
                    <button style={styles.buttonCounter}  onClick={substract}>-</button>
                </div>
                <button style={styles.buttonAdd} onClick={() => onAdd(counter)}>agregar al carrito</button>
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
        margin:'15px 0 0 0'
    },
    itemCounter:{
        height: '2rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.4rem',
        borderRadius: '0.4rem 0.4rem 0 0',
        backgroundColor: '#fbd1b0',
    },
    counter:{
        fontSize: '1.5rem',
        margin: '0',
    },
    buttonAdd:{
        backgroundColor: '#fffffb',
        borderRadius: '0 0 0.4rem 0.4rem',
        border: 'none',
        height: '1.6rem',
    },
    buttonCounter:{
        backgroundColor: '#fffffb',
        borderRadius: '0.4rem',
        border: 'none',
        height: '1.5rem',
        width: '3rem',
    },
}