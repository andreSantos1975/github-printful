import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { Cart } from '../cart/Cart';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item-img'>
                        <img src='../img/en.png' alt='' />
                    </div>
                    <div className='item-melzinha'>
                        <span className='span-melzinha'>PetPrints</span>
                    </div>
                </div>
                <div className='center center-custom' style={{ marginBottom: '-5px' }}>
                    <Link className='link' to='/'>PetPrints</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to='/'>Home</Link>
                    </div>
                    <div className='item'>
                        <Link className='link-blog' to='/'>Blog</Link>
                    </div>
                    <div className='item'>
                        <Link className='link-loja' to='/loja'>Loja</Link>
                    </div>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className='cartIcon' onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}
