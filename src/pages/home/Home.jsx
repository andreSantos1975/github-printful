import React from 'react';
import './Home.scss';
import { Slider } from '../../components/slider/Slider';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
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
      <FeaturedProducts type='Produtos em' />
      <Contact />
    </div>
  )
}
