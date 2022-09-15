import React, {useContext} from 'react';
import {OrderItem} from '../components/OrderItem';
import {AppContext} from '../context/AppContext';
import '../styles/Orders.scss';

const Orders = () => {
	const  {state} = useContext(AppContext);
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
				{state.cart.map((product, index) => (
					<OrderItem  product={product} key={index} indexValue={index}/>
				))}
				</div>
			</div>
		</div>
	);
}

export {Orders};