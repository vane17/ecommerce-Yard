import React, {useState, useContext} from 'react'
import {Menu} from './Menu';
import {MenuMobile} from './MenuMobile';
import {AppContext} from '../context/AppContext';
import {MyOrder} from '../containers/MyOrder';
import icon from '../../public/assets/icons/icon_menu.svg';
import logo from '../../public/assets/logos/logo_yard_sale.svg';
import icontwo from '../../public/assets/icons/icon_shopping_cart.svg';

import '../styles/Header.scss';

const Header = () => {

    const { state } = useContext(AppContext);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [mobile, setMenuMobile] = useState(false);
    
    const handleToogle = () => {
        setToggle(!toggle) //cambia el valor que tiene
    }

    return (
        <nav>
            <img src={icon} alt="menu" className="menu" onClick = {()=>setMenuMobile(!mobile)}/>
    
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logoheader" />
                <ul>
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li>
                        <a href="#">Clothes</a>
                    </li>
                    <li>
                        <a href="#">Electronics</a>
                    </li>
                    <li>
                        <a href="#">Furnitures</a>
                    </li>
                    <li>
                        <a href="#">Toys</a>
                    </li>
                    <li>
                        <a href="#">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick = {handleToogle}>platzi@example.com</li>
                    <li className="navbar-shopping-cart" onClick = {()=>setToggleOrders(!toggleOrders)}>
                        <img src={icontwo} alt="shopping cart" />
                        {state.cart.length >0 ? <div>{state.cart.length}</div>:null}
                    </li>
                </ul>
            </div>
            {toggle  && <Menu toggleOrders={toggleOrders}/>}
            {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
            {mobile  && <MenuMobile mobile={mobile} setMenuMobile={setMenuMobile}/>}
        </nav>

    )
}

export {Header}