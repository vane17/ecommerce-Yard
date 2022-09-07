import React, {useState} from 'react';
import '../styles/OrderItem.scss';
import icon from '../../public/assets/icons/icon_close.png';

const OrderItem = () => {
	

	return (
		<div className="OrderItem">
			<figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<figure onClick={handleClick}>
  				<img src={icon} alt="close" />
			</figure>
			
  

		</div>
	);
}

export {OrderItem};