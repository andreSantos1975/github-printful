const axios = require('axios');

// Array com os IDs dos produtos que você deseja exibir
const productIds = ["319853612", "319853618"]; // Substitua pelos IDs reais

// Fazer uma chamada para o servidor com os IDs dos produtos
axios.post('http://localhost:3001/printful/stores', { productIds })
  .then((response) => {
    const productInfoArray = response.data;
    // Exiba as informações dos produtos na página
    console.log('Informações dos produtos Array:', productInfoArray);
  })
  .catch((error) => {
    console.error('Erro ao buscar informações dos produtos:', error);
  });
