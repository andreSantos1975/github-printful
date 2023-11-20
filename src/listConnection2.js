import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListCollection2 = ({ setPrintful }) => {

  const [data, setData] = useState(null);
  const productIds = ["326656640", "326613608", "326613366"]; // Defina productIds no escopo do componente

  useEffect(() => {
    // Fazer a chamada GET para o servidor intermediário
    axios.post('http://localhost:3001/printful/stores', { productIds })
      .then((response) => {
        const productInfoArray = response.data;
        // Exiba as informações dos produtos na página
        ///console.log('Informações dos produtos Array:', productInfoArray);//----------------------productInfoArray---log

        setData(response.data);
        setPrintful2(response.data); // Define os dados no estado do componente Home
      })
      .catch((error) => {
        console.error('Erro ao buscar informações dos produtos:', error);
      });
  }, [setPrintful2]);

  return (
    <></>
  );
};

export default ListCollection2;