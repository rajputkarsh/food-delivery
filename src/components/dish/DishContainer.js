import React from 'react';

import './DishContainer.css';
import MenuCard from './MenuCard';
import SubMenuContainer from './SubMenuContainer';

function DishContainer() {
  return (
      <div className="dish-container">
          <div className="menu-card">
                <SubMenuContainer name={"Menu Category"} />
                <div className="menu-row-container">
                    <MenuCard 
                        image={"https://firebasestorage.googleapis.com/v0/b/food-delivery-69e51.appspot.com/o/burger.png?alt=media&token=9d48dd4f-ddc6-4859-9506-f103a28e34ce"} 
                        name={"Burger"} 
                        isActive
                    /> 
                </div>
          </div>
      </div>
  );
}

export default DishContainer;
