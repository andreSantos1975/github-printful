import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrintfulTest = ({ setPrintfulData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fazer a chamada GET para o servidor intermediário
    axios.get('http://localhost:3001/printful/stores')
      .then((response) => {
        // Os dados de resposta estarão em response.data
        console.log('response.data no PrintfulTest', response.data);//---RESPONSE DATA----------------log

        setData(response.data);
        setPrintfulData(response.data); // Define os dados no estado do componente Home
      })
      .catch((error) => {
        console.error('Erro ao fazer a chamada para o servidor Printful:', error);
      });
  }, [setPrintfulData]);

  return (
    <div>
      <h2>Resposta do servidor Printful:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PrintfulTest;
