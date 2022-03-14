import React from 'react';

import './DishContainer.css';
import MenuCard from './MenuCard';
import SubMenuContainer from './SubMenuContainer';

import {MenuItems} from '../data';

function DishContainer({ setData }) {
  return (
      <div className="dish-container">
          <div className="menu-card">
                <SubMenuContainer name={"Menu Category"} />
                <div className="menu-row-container">

                    {
                        MenuItems && MenuItems.map(menuItem => (
                            <div onClick={() => { setData(menuItem.itemId) }}>
                                <MenuCard
                                    key={menuItem.id}
                                    image={menuItem.imgSrc}
                                    name={menuItem.name}
                                    isActive={menuItem.id === 1 ? true : false}
                                /> 
                            </div>
                        ))
                    }


                </div>
          </div>
      </div>
  );
}

export default DishContainer;
