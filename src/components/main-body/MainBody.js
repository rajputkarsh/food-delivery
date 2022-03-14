import React from 'react';
import BannerName from '../banner/BannerName';
import DebitCard from '../debit-card/DebitCard';
import DishContainer from '../dish/DishContainer';
import DishItemContainer from '../dish/DishItemContainer';


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
          </div>
      </main>      
  )
}

export default MainBody;
