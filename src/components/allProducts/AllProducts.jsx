import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './AllProducts.scss';
import Banner from '../slider/Banner';

export const AllProducts = () => {
  const [allProductsData, setAllProductsData] = useState(null);

  useEffect(() => {
    // Fazer a chamada GET para a nova rota que busca todos os produtos
    axios.get('http://localhost:3001/printful/allProducts')
      .then((response) => {
        setAllProductsData(response.data);
        console.log('Produtos recuperados com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar informações de todos os produtos:', error);
      });
  }, []);

  // Função para dividir os produtos em grupos de quatro
  const divideProdutosEmGrupos = (produtos) => {
    const grupos = [];
    for (let i = 0; i < produtos.length; i += 4) {
      grupos.push(produtos.slice(i, i + 4));
    }
    return grupos;
  };

  // Renderizar os grupos de produtos
  const renderizarGruposDeProdutos = (grupos) => {
    return grupos.map((grupo, index) => (
      <div key={index} className="grupo-de-produtos">
        {grupo.map((produto) => (
          <div key={produto.id} className="produto">
            <Link to={`/product/${produto.id}`}>
              <img src={produto.thumbnail_url} alt={produto.name} />
            </Link>
            <h2>{produto.name}</h2>
            {/* Renderize outras informações do produto conforme necessário */}
          </div>

        ))}
      </div>
    ));
  };

  if (allProductsData) {
    // Dividir os produtos em grupos de quatro
    const gruposDeProdutos = divideProdutosEmGrupos(allProductsData.result);

    return (
      <div className='allProducts'>
        {/*<Banner />*/}
        {renderizarGruposDeProdutos(gruposDeProdutos)}
      </div>
    );
  }

  return (
    <div className='allProducts'>
      <p>Carregando produtos...</p>
    </div>
  );
}
