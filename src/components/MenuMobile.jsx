import React from 'react';
import '../styles/MenuMobile.scss';
import icon_close from '../../public/assets/icons/icon_close.png';

const MenuMobile = ({mobile, setMenuMobile}) => {
  return (
    <div class="mobile-menu">
        <img src={icon_close} alt="Close" className='mobile-menu--img' onClick = {()=>setMenuMobile(!mobile)}/>
        <ul>
        <li>
            <a href="/">CATEGORIES</a>
        </li>
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
            <a href="/">Other</a>
        </li>
        </ul>

        <ul>
        <li>
            <a href="/">My orders</a>
        </li>
        <li>
            <a href="/">My account</a>
        </li>
        </ul>

        <ul>
        <li>
            <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
            <a href="/" class="sign-out">Sign out</a>
        </li>
        </ul>
    </div>
)
}

export {MenuMobile};