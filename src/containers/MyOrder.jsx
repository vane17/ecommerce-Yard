import React, {useContext, useState}from 'react';
import {OrderItem} from '../components/OrderItem';
import {AppContext} from '../context/AppContext';
import flecha from '../../public/assets/icons/flechita.svg';
import '../styles/MyOrder.scss';

const MyOrder = ({toggleOrders,setToggleOrders}) => {
	const  {state} = useContext(AppContext);
	
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}




	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flecha} alt="arrow"  onClick={() => setToggleOrders(!toggleOrders)}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{/*iterar por cada uno de los elementos del carro*/}
				{state.cart.map((product, index) => (
					<OrderItem  product={product} key={index} indexValue={index}/>
				))} 

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export {MyOrder};