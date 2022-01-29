import React from 'react';

import './BannerName.css';

function BannerName({name, discount, link}) {
  return (
      <div className="banner-content">
          <h3>Hello {name}</h3>
          <p>
              Get <span>${discount}</span> off for every order more than $100
          </p>
          <a href={link}>Learn More</a>
      </div>    
  );
}


export default BannerName;
