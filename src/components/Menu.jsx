import React from 'react';
import '../styles/Menu.scss';

const Menu = ({toggleOrders}) => {
    
	if(toggleOrders) {
		return (
			<div id="Menu-orders" className="Menu">
			
				<ul>
					<li>
						<a href="/" className="title">My orders</a>
					</li>
					<li>
						<a href="/">My account</a>
					</li>
					<li>
						<a href="/">Sign out</a>
					</li>
				</ul>
			</div>
		)
	}
	return (
		<div className="Menu">
		
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	)
}

export {Menu};