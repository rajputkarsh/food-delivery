import React from 'react';
import BannerName from '../banner/BannerName';
import DebitCard from '../debit-card/DebitCard';
import DishContainer from '../dish/DishContainer';
import DishItemContainer from '../dish/DishItemContainer';
import SubMenuContainer from '../dish/SubMenuContainer';
import CartItem from '../cart/CartItem';

import './MainBody.css';

function MainBody({ isMainData, setData }) {


  return (
      <main>
          <div className="main-container">
            <div className="banner">
              <BannerName name={"karsh"} discount={"20"} link={"#"}/>
              <img className="banner-image" src="https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/delivery.png?alt=media&token=d19c3d53-f1c0-46a4-9e40-a72fb3bd6375" alt="" />
            </div>
          </div>

          <DishContainer setData={setData} />

          <DishItemContainer isMainData={isMainData} />

          <div className="right-menu">
            <div className="debit-card-container">
              <div className="debit-card">
                <DebitCard />  
              </div>  
            </div>

            <div className="cart-checkout-container">
              <SubMenuContainer name={"Cart Items"} />  
              <div className="cart-container">
                <div className="cart-items">
                  <CartItem
                    name   = {"Burger"}
                    imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0"}
                    qty    = {"4"}
                    price  = {"7.9"} 
                  />  
                </div>
              </div>  

              <div className="total-section">
                <h3>Total</h3>
                <p>
                  <span>$</span> 45.95
                </p>
              </div>
              <button className="check-out">Checkout</button>
            </div>

          </div>
      </main>      
  )
}

export default MainBody;
