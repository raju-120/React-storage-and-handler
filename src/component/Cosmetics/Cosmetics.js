import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../Utilities/Calculator';

const Cosmetics = () => {
    const [cosmetics, setCosmetics]= useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    },[])

    const total = getTotal(cosmetics);
    return (
        <div>
            <h2>Bismillahi- rahmanir Rahim</h2>
            <p>Money Needed: {total}</p>
            <div>
            {
                cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic._id}
                cosmetic ={cosmetic}></Cosmetic>)
            }
            </div>
        </div>
    );
};

export default Cosmetics;