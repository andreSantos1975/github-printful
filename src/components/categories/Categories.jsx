import React from 'react';
import './Categories.scss';
import image1 from '../categories/image/melzinha12.jpg';
import { Link } from 'react-router-dom';



export const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src={image1} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Sales</Link>
                </button>
            </div>
            <div className='row'>r2</div>
        </div>
        <div className='col'>
            <div className='row'>r3</div>
        </div>
        <div className='col col-l'>
            <div className='row'>
                <div className='col'>
                    <div className='row'>r4</div>
                </div>
                <div className='col'>
                    <div className='row'>r5</div>
                </div>
            </div>
            <div className='row'>r6</div>
        </div>
    </div>
  )
}
