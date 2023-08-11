import React from 'react';
import Logo from "./Logo";
import Signupbutton from './Signupbutton';
import './Header.css';
import Searchbar from './Searchbar';
import Cart from './Cart';
import Menu from './Menu';

export default function Header() {
  return (
    <div className='HeaderContainer'>
      <div className='logoContainer'>
        <Logo />
      </div>
      <Menu/>
      <Searchbar/>
      <Signupbutton/>
      <Cart/>
    </div>
  );
}
