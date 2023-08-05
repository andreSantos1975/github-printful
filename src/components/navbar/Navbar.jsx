import React from 'react';


import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss"

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'></div>
                <div className='item'>
                   <img src='img/en.png' alt='' />
                   <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                  <span>USD</span>
                  <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                  <Link to='/product/1'>Women</Link>
                </div>
                <div className='item'>
                  <Link to='/product/2'>Men</Link>
                </div>
                <div className='item'>
                  <Link to='/product/3'>Children</Link>
                </div>
                <div className='center'>
                    <Link to='/'>Melzinha</Link>
                </div>
                <div className='right'>
                <div className='center'>
                    <Link to='/'>Homepage</Link>
                </div>
                <div className='center'>
                    <Link to='/'>About</Link>
                </div>
                <div className='center'>
                    <Link to='/'>Contact</Link>
                </div>
                <div className='center'>
                    <Link to='/'>Stores</Link>
                </div>
                <div className='icons'>
                   <SearchIcon />
                   <PersonOutlineOutlinedIcon />
                   <FavoriteBorderOutlinedIcon />
                   <div className='cartIcon'>
                    <ShoppingCartOutlinedIcon />
                    <span>0</span>
                   </div>
                </div>
                </div>
            </div>
        </div>
    )
}
