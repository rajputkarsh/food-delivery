import React, { useState } from 'react';
import BannerName from '../banner/BannerName';
import DebitCard from '../debit-card/DebitCard';
import DishContainer from '../dish/DishContainer';
import DishItemContainer from '../dish/DishItemContainer';
import SubMenuContainer from '../dish/SubMenuContainer';
import CartItem from '../cart/CartItem';
import { useStateValue } from '../../reducer/StateProvider';

import './MainBody.css';

function MainBody({ isMainData, setData }) {

  const [{cart}, dispatch] = useStateValue();

  const [totalPrice, setTotalPrice] = useState(0);

  return (
      <main>
          <div className="main-container">
            <div className="banner">
              <BannerName name={"karsh"} discount={"20"} link={"#"}/>
              <img className="banner-image" src="https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/delivery.png?alt=media&token=d19c3d53-f1c0-46a4-9e40-a72fb3bd6375" alt="" />
            </div>

            <DishContainer setData={setData} />
            <DishItemContainer isMainData={isMainData} />

          </div>


          <div className="right-menu">
            <div className="debit-card-container">
              <div className="debit-card">
                <DebitCard />  
              </div>  
            </div>

            {
              !cart 
              ? <div></div>
              : (
                <div className="cart-checkout-container">
                  <SubMenuContainer name={"Cart Items"} />
                  <div className="cart-container">
                    <div className="cart-items">
                      {
                        cart && cart.map(data => (
                          <CartItem
                            key={data.id}
                            itemId={data.id}
                            name={data.name}
                            imgSrc={data.imgSrc}
                            price={data.price}
                            
                          />                          
                        ))
                      }
                    </div>
                  </div>

                  <div className="total-section">
                    <h3>Total</h3>
                    <p>
                    <span>$</span> {totalPrice}
                    </p>
                  </div>
                  <button className="check-out">Checkout</button>
                </div>
              )
            }



          </div>
      </main>      
  )
}

export default MainBody;
