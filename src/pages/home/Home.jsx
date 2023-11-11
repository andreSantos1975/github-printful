import React, { useEffect, useState } from 'react';
import './Home.scss';
//import { Slider } from '../../components/slider/Slider';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { FeaturedProducts2 } from '../../components/FeaturedProducts2/FeacturedProduct2';
import { Categories } from '../../components/categories/Categories';
import { Contact } from '../../components/contact/Contact';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import { resetCart } from '../../redux/cartReducer'; // Importa resetCart
import ListProduct from '../../listProduct';
import ListProduct2 from '../../listProduct2';
import Banner from '../../components/slider/Banner';
import ListCollection from '../../listCollection';
import ListCollection2 from '../../listConnection2';
import { Collection } from '../../components/collection/Collection';
import { Collection2 } from '../../components/collection2/Collection2';



export const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [printfulData, setPrintfulData] = useState(null); 
  const [printfulData2, setPrintfulData2] = useState(null); 
  const [printful, setPrintful] = useState(null);
  const [printful2, setPrintful2] = useState(null);


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
      <Banner />
      <ListProduct setPrintfulData={setPrintfulData} /> 
      <ListProduct2 setPrintfulData2={setPrintfulData2}/>
      <ListCollection setPrintful={setPrintful}/>
      <ListCollection2 setPrintful2={setPrintful2}/>

      <FeaturedProducts printfulData={printfulData} />
      <FeaturedProducts2 printfulData2={printfulData2} />
      <Categories />
      <Collection printful={printful}/>
      <Collection2  printful2={printful2}/>
      <Contact />
    </div>
  );
};