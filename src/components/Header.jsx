import React, {useState} from 'react'
import {Menu} from './Menu';
import icon from '../../public/assets/icons/icon_menu.svg';
import logo from '../../public/assets/logos/logo_yard_sale.svg';
import icontwo from '../../public/assets/icons/icon_shopping_cart.svg';

import '../styles/Header.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToogle = () => {
        setToggle(!toggle) //cambia el valor que tiene
    }

    return (
        <nav>
            <img src={icon} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logoheader" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick = {handleToogle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={icontwo} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            
        </nav>

    )
}

export {Header}