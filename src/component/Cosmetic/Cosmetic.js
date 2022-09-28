import React from 'react';
import { addToDb, removeFromDb } from '../Utilities/fackdb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    
    const addToCart = (_id) =>{
        addToDb(_id);
    }

    const removeFromCart = _id =>{
        removeFromDb(_id);
    }

    return (
        <div className='product'>
            <h1>Buy: {name}</h1>
            <p>Price: {price}</p>
            <p> <small>ID:{_id}</small> </p>

            <button onClick={() => addToCart(_id)}>Add to Cart: Shortcut</button>
            <button onClick={ () => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;