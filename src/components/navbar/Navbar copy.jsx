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
                <div className='left'>
                    <div className='item'>
                        <img src='../img/en.png' alt='' />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <span>Melzinha</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className='item'>
                        <Link className='link' to='/product/1'>Mulher</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/product/2'>Homen</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/product/3'>Criança</Link>
                    </div>
                </div>
                <div className='center center-custom' style={{ marginBottom: '-5px' }}>
                    <Link className='link' to='/'>Melzinha</Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to='/'>Homepage</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Sobre</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Contatos</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Loja</Link>
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
