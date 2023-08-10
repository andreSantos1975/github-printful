import React from 'react';
import './Categories.scss';
import image1 from '../categories/image/melzinha12.jpg';
import image2 from '../categories/image/melzinha13.jpg';
import image3 from '../categories/image/melzinha15.jpg';
import image4 from '../categories/image/melzinha7.jpg';
import image5 from '../categories/image/melzinha19.png';
import image6 from '../categories/image/melzinha18.jpg';
import { Link } from 'react-router-dom';



export const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src={image1} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Bonés</Link>
                </button>
            </div>
            <div className='row'>
            <img src={image2} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Mochilas</Link>
                </button>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
            <img src={image3} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Camisetas</Link>
                </button>
            </div>
        </div>
        <div className='col col-l'>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                    <img src={image4} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Acessórios</Link>
                </button>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                    <img src={image5} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Novos lançamentos</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className='row'>
            <img src={image6} alt="" />
                <button>
                    <Link className='link' to='/products/1' >Calças</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
