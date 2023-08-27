import React, { useEffect } from 'react';
import './Home.scss';
import { Slider } from '../../components/slider/Slider';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { FeaturedProductsLancament } from '../../components/featuredProducts/FeaturedProductsLancament';
import { Categories } from '../../components/categories/Categories';
import { Contact } from '../../components/contact/Contact';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import { resetCart } from '../../redux/cartReducer'; // Importa resetCart

export const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('LOCATION SEARCH', location.search);
    if (location.search.includes('success=true')) {
      dispatch(resetCart()); // Utiliza a action resetCart
    }
  }, [location.search, dispatch]);

  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type='nova' />
      <Categories />
      <FeaturedProductsLancament type='Destaque na' />
      <Contact />
    </div>
  );
};

