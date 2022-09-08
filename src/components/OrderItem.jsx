import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import '../styles/OrderItem.scss';
import icon from '../../public/assets/icons/icon_close.png';

const OrderItem = (props) => {
	const {removeFromCart} = useContext(AppContext);
	const { product, indexValue } = props;

	const handleRemove = product =>{
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<figure>
  				<img src={icon} alt="close" onClick= {()=> handleRemove(indexValue)}/>
			</figure>
			
  

		</div>
	);
}

export {OrderItem};