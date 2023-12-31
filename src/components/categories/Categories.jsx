import React from 'react';
import './Categories.scss';
import image1 from '../categories/image/melzinha12.jpg';
import image2 from '../categories/image/melzinha13.jpg';
import image3 from '../categories/image/melzinha15.jpg';
import image4 from '../categories/image/melzinha7.jpg';
import image5 from '../categories/image/cate.jpg';
import image6 from '../categories/image/melzinha18.jpg';
//import { Link } from 'react-router-dom';

export const Categories = () => {
    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img src={image1} alt="" />
                    {/*<button>
                        <Link className='link' to='/products/1' >Bonés</Link>
                    </button>*/}
                </div>
                <div className='row'>
                    <img src={image2} alt="" />
                    {/*<button>
                        <Link className='link' to='/products/2' >Mochilas</Link>
                </button>*/}
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src={image3} alt="" />
                    {/*<button>
                        <Link className='link' to='/products/3' >Camisetas</Link>
                    </button>*/}
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img className='img-category' src={image4} alt="" />
                             {/*<button className='button-category'>
                               <Link className='link' to='/products/4' >Acessórios</Link>
                            </button>*/}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img className='img-category' src={image5} alt="" />
                            {/*<button className='button-category'>
                                <Link className='link' to='/products/5' >Lançamentos</Link>
                        </button>*/}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img className='img-category' src={image6} alt="" />
                            {/*<button className='button-category'>
                                <Link className='link' to='/products/6' >Decoração</Link>
                            </button>*/}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src={image6} className='row' alt="" />
                    {/*<button>
                        <Link className='link' to='/products/1' >Calças</Link>
                    </button>*/}
                </div>
            </div>
        </div>
    )
}
