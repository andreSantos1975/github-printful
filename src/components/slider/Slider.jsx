import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss';

export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/16652420/pexels-photo-16652420/free-photo-of-animal-bicho-fofo-bonitinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

    return (
        <div className='slider'>
            <div className='container' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                <img src={data[1]} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                <img src={data[2]} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>

            <div className='icons'>
                <div className='icon' onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className='icon' onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>

        </div>
    )
}
