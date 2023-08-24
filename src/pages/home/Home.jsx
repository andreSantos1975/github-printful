import React from 'react';
import './Home.scss';
import { Slider } from '../../components/slider/Slider';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { FeaturedProductsLancament } from '../../components/featuredProducts/FeaturedProductsLancament';
import { Categories } from '../../components/categories/Categories';
import { Contact } from '../../components/contact/Contact';


export const Home = () => {
  return (
    <div className='home'>
      <Slider />
      {/*Início do Título do Cart HomePage*/}
      <FeaturedProducts type='nova' />
      <Categories />
       {/*Início do Título do Cart HomaPage*/}
      <FeaturedProductsLancament type='Destaque na' />
      <Contact />
    </div>
  )
}
