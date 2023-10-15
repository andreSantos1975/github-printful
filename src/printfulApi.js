import axios from 'axios';

//Responsável por mandar o id do produto para ser exibido no componente Product

const getPrintfulData = async (id) => {
  try {
    // Fazer a chamada POST para o seu servidor intermediário com o "id"
    const response = await axios.post('http://localhost:3001/printful/stores', { productIds: [id] }); 

    // Obter os dados do produto a partir da resposta do servidor intermediário
    const productData = response.data;
    console.log('productData getPrintfulData:', productData); // ----------------------------------------------log

    return productData; // Retorna os dados do produto e suas variantes
  } catch (error) {
    console.error('Erro ao buscar informações do produto:', error);
    throw error;
  }
};

export default getPrintfulData;
