import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react';

import './MenuCard.css';

function MenuCard({ image, name, isActive }) {
  return (
    <div className={`row-menu-card ${isActive ? `active` : ``} `}>
      <div className="img-box">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="load-menu">
        <ChevronRightRounded />
      </i>
    </div>
  );
}

export default MenuCard;
