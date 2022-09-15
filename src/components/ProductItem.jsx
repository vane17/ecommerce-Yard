import React, {useState, useContext } from 'react';
import {AppContext} from '../context/AppContext';

import '../styles/ProductItem.scss';
import bt_add_to_cart from '../../public/assets/icons/bt_add_to_cart.svg';
import bt_add_to_cart_two from '../../public/assets/icons/bt_added_to_cart.svg';


const ProductItem = ({product}) => {
	const {state, addToCard, removeFromCart } = useContext(AppContext);

	/* const [turnOn, setTurnOn] = useState(false); */
	
	const handleClick = (item) => {
		itsProductAdded() ? removeFromCart(item) : addToCard(item);
	};

	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>

					{ itsProductAdded() ? <img src={bt_add_to_cart_two} alt="" /> : <img src={bt_add_to_cart} alt="" />}
				</figure>
			</div>
		</div>
	);
}

export  {ProductItem};



/* const ProductItem = ({product}) => {
	const {state, addToCard, removeFromCart } = useContext(AppContext);

	/* const [turnOn, setTurnOn] = useState(false); 
	
	const handleClick = (item) => {
		addToCard(item);
	}

	const handleTurnOn = (item) => {
		setTurnOn(!item);
	}


	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => {handleClick(product)/* ; handleTurnOn(turnOn)} }}>

					{/* {turnOn ? <img src={bt_add_to_cart_two} alt="" className= "product-info-on"/> : <img src={bt_add_to_cart} alt="" />} }
					<img src={bt_add_to_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export  {ProductItem}; */


