import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const{ cart } = props;
    let total = 0;
    
    for(const poet of cart){
         total = total + poet.booksnumber;
    }
    
    return (
        <div className="cart-content">
            <h5>Selected: {props.cart.length}</h5>
            <h5>total Books number: {total}</h5>
            
        </div>
    );
};

export default Cart;