import React, { useEffect, useState } from 'react';
import './Home.scss';
//import { Slider } from '../../components/slider/Slider';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { Categories } from '../../components/categories/Categories';
import { Contact } from '../../components/contact/Contact';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import { resetCart } from '../../redux/cartReducer'; // Importa resetCart
import ListProduct from '../../listProduct';


export const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [printfulData, setPrintfulData] = useState(null); // Estado para armazenar os dados do servidor Printful
  const [dataLancament, setDataLancament] = useState(null); // Estado para armazenar os dados do servidor Printful

  useEffect(() => {
   // console.log('LOCATION SEARCH HOME', location.search home);//------------------LOCATION SEARCH-----------log
    if (location.search.includes('success=true')) {
      dispatch(resetCart()); // Utiliza a action resetCart
    }
  }, [location.search, dispatch]);

    //Console.log para verificar se printfulData está definido
   // console.log('printfulData no Home:', printfulData);//----------------PRINTFUL DATA NO HOME -------- log


  return (
    <div className='home'>
      {/*<Slider />*/}
      <ListProduct setPrintfulData={setPrintfulData} /> {/* Passa a função setPrintfulData como prop */}
      {/*<ListProductLancament setDataLancament={setDataLancament} />*/} {/* Passa a função setPrintfulData como prop */}
      <FeaturedProducts type='nova' printfulData={printfulData} />
      <Categories />
      <FeaturedProductsLancament type='nova' printfulData={printfulData}/>
      <Contact />
    </div>
  );
};