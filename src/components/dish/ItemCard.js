import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useState } from 'react';

import './ItemCard.css';

function ItemCard({ imgSrc, name, ratings, price, itemId }) {


	const [isFavourite, setFavourite] = useState(false);	
	const [currentRatings, setCurrentRatings] = useState(Math.floor(ratings));

	const handleSetFavourite = () => {
		setFavourite(!isFavourite);
	}

	const handleRatings = (newRatings) => {
		setCurrentRatings(newRatings);
	}

	return (
    	<div className="item-card" id={itemId}>
			<div className={`is-favourite ${isFavourite ? 'active' : ''}`} onClick={() => { handleSetFavourite()}}>
				<Favorite />
			</div>
        	<div className="img-box">
            	<img src={imgSrc} alt="" className='item-img'/>
        	</div>
      
        	<div className="item-content">
				<h3 className="item-name">{name}</h3>
				<div className="bottom">
					<div className="ratings">
						{
							Array.apply(null, { length: 5 }).map((e, i) => (
								<i key={i} className={`rating ${currentRatings > i ? 'orange' : 'grey'}`} onClick={() => { handleRatings(i+1)}}>
									<StarRounded />
								</i>
							))
						}
						<h3 className="price">
							<span>$ {price}</span>
						</h3>
					</div>
					<div className="add-to-cart">
						<AddRounded />
					</div>
				</div>
        	</div>  
    	</div>
	);
}

export default ItemCard;
