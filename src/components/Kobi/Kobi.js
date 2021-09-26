import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Poet from '../Poet/Poet';
import './Kobi.css'

const Kobi = () => {
    const [poets, setPoets] = useState([]);
    const [cart, setCart] =useState([]);
   
    useEffect( () => {
        fetch('./Poets.JSON')
        .then(res => res.json())
        .then(data => setPoets(data))
    },[])
//handle cart
    const addToCart = (poet) => {
         const newCart = [...cart, poet];
         setCart(newCart);
    }
    return (
        <div className="kobi-container">
            <div className="kobi-info">
               {
                   poets.map(poet => <Poet
                   key={poet.name}
                   poet = {poet}
                   addToCart = {addToCart}
                   ></Poet>)
               }
        
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Kobi;