import React, { useEffect } from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';

import './Header.css';

function Header() {

    useEffect(() => {
        const toggleMenu = document.querySelector(".toggle-menu");
        
        toggleMenu.addEventListener('click', () => {
            document.querySelector('.right-menu').classList.toggle('active');
        })

    }, []);

  return (
      <header>
          <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/logo.jpg?alt=media&token=16c0e57b-76d0-420f-8a76-6b231ea25987" alt="Logo" className='header-logo' />

          <div className="header-input-box">
                <SearchRounded className="search-icon" />
              <input type="text" placeholder='Search' />
          </div>

          <div className="shopping-cart">
              <ShoppingCartRounded className="cart"/>
              <div className="cart-content">
                <p>2</p>
              </div>
          </div>

          <div className="profile-container">
              <div className="img-box">
                  <img src="https://avatars.dicebear.com/api/human/male.svg?mood[]=happy" alt="" className="profile-picture" />
              </div>

              <h2 className="user-name">
                  Karsh
              </h2>
          </div>

          <div className="toggle-menu">
              <BarChart className='toggle-icon'/>
          </div>
      </header>
  );
}

export default Header;
