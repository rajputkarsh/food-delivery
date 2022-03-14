import React from 'react';
import './DishItemContainer.css'
import ItemCard from './ItemCard';

function DishItemContainer({ isMainData }) {

    return (
        <div className="dish-item-container">

            {
                isMainData && isMainData.map(data => (
                    <ItemCard
                        key={data.id}
                        imgSrc={data.imgSrc}
                        name={data.name}
                        ratings={data.ratings}
                        price={data.price}
                        itemId={data.id}
                    />
                ))
            }

      </div>
  );
}

export default DishItemContainer;
