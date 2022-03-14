import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Items } from '../data';
import { useStateValue } from '../../reducer/StateProvider';
import { actionType } from '../../reducer/reducer';

import './ItemCard.css';

let cartData = [];

function ItemCard({ imgSrc, name, ratings, price, itemId }) {


	const [isFavourite, setFavourite] = useState(false);	
	const [currentRatings, setCurrentRatings] = useState(Math.floor(ratings));

	const [isCart, setCart] = useState(null);
	const [{}, dispatch] = useStateValue();

	useEffect(()=>{
		if(isCart){

			cartData.push(isCart);
			dispatch({
				type: actionType.SET_CART,
				cart: cartData,
			})
		}
	}, [isCart])

	const handleSetFavourite = () => {
		setFavourite(!isFavourite);
	}

	const handleRatings = (newRatings) => {
		setCurrentRatings(newRatings);
	}

	console.log(isCart);

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
					<div className="add-to-cart" onClick={ () => {setCart(Items.find(n => n.id == itemId))} }>
						<AddRounded />
					</div>
				</div>
        	</div>  
    	</div>
	);
}

export default ItemCard;
