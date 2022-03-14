import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { actionType } from '../../reducer/reducer';
import { useStateValue } from '../../reducer/StateProvider';

import './CartItem.css';

let cartItems = [];

function CartItem({ name, imgSrc, price, itemId, setTotalPrice }) {

    const [{cart}, dispatch] = useStateValue();
    const [qty, setQty]      = useState(1);
    const [itemPrice, setItemPrice]  = useState(parseInt(qty)*parseFloat(price)); 

    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price));
    }, [qty])

    const updateQuantity = (action, id) => {
        if(action === "add"){
            setQty(qty + 1);
        }
        else {
            cartItems.pop(id);
            dispatch({
                type: actionType.SET_CART,
                cart: cartItems
            });
            setQty(qty - 1);
        }
    }

    return (
    <div className="cart-item">
        <div className="img-box">
            <img src={imgSrc} alt="" />    
        </div>    

        <div className="item-section">
            <h2 className="item-name">{name}</h2>
            <div className="item-quantity">
                <span>x {qty}</span>
                <div className="quantity">
                    <RemoveRounded className="item-remove"onClick={() => {updateQuantity('remove', itemId)}}  />

                    <AddRounded  className="item-add" onClick={() => {updateQuantity('add', itemId)}}/>  
                </div>    
            </div>    
        </div>

        <div className="item-price">
            <span className="dollar-sign">$</span>
            <span className="item-price-value">{itemPrice}</span>
        </div>

    </div>

  )
}

export default CartItem