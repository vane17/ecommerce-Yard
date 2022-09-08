import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';

import '../styles/ProductItem.scss';
import bt_add_to_cart from '../../public/assets/icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const {state, addToCard } = useContext(AppContext);

	const handleClick = item => {
		addToCard(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={bt_add_to_cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export  {ProductItem};


