import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React from 'react'

import './CartItem.css';

function CartItem({ name, imgSrc, qty, price }) {
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
                    <RemoveRounded className="item-remove"  />

                    <AddRounded  className="item-add" />  
                </div>    
            </div>    
        </div>

        <div className="item-price">
            <span className="dollar-sign">$</span>
            <span className="item-price-value">{price}</span>
        </div>

    </div>

  )
}

export default CartItem