import React from 'react';
import Logo from "./Logo";
import Signupbutton from './Signupbutton';
import './Header.css';
import Searchbar from './Searchbar';
import Cart from './Cart';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='HeaderContainer'>
      <div className='logoContainer'>
        <Link to="/"><Logo /></Link>
      </div>
      <Menu/>
      <Searchbar/>
      <Signupbutton/>
      <Cart/>
    </div>
  );
}
