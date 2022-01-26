import React from 'react';
import BannerName from '../banner/BannerName';

import './MainBody.css';

function MainBody() {
  return (
      <main>
          <div className="main-container">
            <div className="banner">
              <BannerName name={"karsh"} discount={"20"} link={"#"}/>
          <img className="banner-image" src="https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/delivery.png?alt=media&token=d19c3d53-f1c0-46a4-9e40-a72fb3bd6375" alt="" />
            </div>
          </div>
          <div className="right-menu"></div>
      </main>      
  )
}

export default MainBody;
