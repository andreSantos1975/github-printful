import React, { useState, useEffect } from 'react';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import getPrintfulData from '../../printfulApi';

export const Product = () => {
  const id = useParams().id;
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chame a função getPrintfulData para buscar os dados do produto, passando o "id"
        const response = await getPrintfulData(id);
        console.log('response.data no Product', response);//-----------------------------------------------------------------log
        
        // Defina os dados do produto no estado
        setProductData(response);

        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API Printful:', error);
        setLoading(false);
      }
    };

    // Chame a função fetchData para buscar os dados do produto
    fetchData();
  }, [id]);

  // Resto do seu componente
}
