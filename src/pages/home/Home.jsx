import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Slider } from '../../components/slider/Slider';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { FeaturedProductsLancament } from '../../components/featuredProducts/FeaturedProductsLancament';
import { Categories } from '../../components/categories/Categories';
import { Contact } from '../../components/contact/Contact';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import { resetCart } from '../../redux/cartReducer'; // Importa resetCart
import PrintfulTest from '../../printfulTest';

export const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [printfulData, setPrintfulData] = useState(null); // Estado para armazenar os dados do servidor Printful

  useEffect(() => {
    console.log('LOCATION SEARCH', location.search);
    if (location.search.includes('success=true')) {
      dispatch(resetCart()); // Utiliza a action resetCart
    }
  }, [location.search, dispatch]);

    // Adicione o console.log para verificar se printfulData está definido
    console.log('printfulData no Home:', printfulData);//----------------PRINTFUL DATA NO HOME -------- log


  return (
    <div className='home'>
      <Slider />
      <PrintfulTest setPrintfulData={setPrintfulData} /> {/* Passa a função setPrintfulData como prop */}
      <FeaturedProducts type='nova' printfulData={printfulData} />
      <Categories />
      <FeaturedProductsLancament type='Destaque na'  printfulData={printfulData} />
      <Contact />
    </div>
  );
};

