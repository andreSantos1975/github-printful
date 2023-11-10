import React, { useState, useEffect } from 'react';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import getPrintfulData from '../../printfulApi';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Product = () => {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade
  const [productData, setProductData] = useState([]); // Inicialize como um array vazio
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chame a função getPrintfulData do arquivo printfulApi.js para buscar os dados do produto, passando o "id"
        const response = await getPrintfulData(id);
        console.log('data no Product', response); // --------------------------------------------------------log 

        // Verifique se response é um array e tem pelo menos um item
        if (Array.isArray(response) && response.length > 0) {
          // Acesse os objetos sync_product e sync_variants dentro de cada elemento do array
          const productDataArray = response.map(item => ({
            syncProduct: item.result.sync_product,
            syncVariants: item.result.sync_variants,
          }));
          console.log('productDataArray no Product:', productDataArray);

          // Defina os dados do produto no estado
          setProductData(productDataArray);
        }

        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API Printful:', error);
        setLoading(false);
      }
    };

    // Chame a função fetchData para buscar os dados do produto
    fetchData();
  }, [id]);

  return (
    <div className='product'>
      {loading ? "loading..." : (
        <>
          <div className='left'>
            <div className="images">
            </div>
            <div className="manImg">
              {productData.map((item, index) => (
                <div key={index}>
                  <h1>{item.syncProduct.name}</h1>
                  <img src={item.syncProduct.thumbnail_url} alt="" className='mainImg' />
                </div>
              ))}
            </div>
          </div>
          <div className='right'>
            {productData.map((item, index) => (
              <div key={index}>
                <h5>{item.syncProduct.name}</h5>
                <span className='price'>R${item.syncVariants[0].product && item.syncVariants[0].retail_price}</span>
                <p>{item.syncVariants[0].product && item.syncVariants[0].product.name}</p>
                <div className="quantity">
                  <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                  {quantity}
                  <button onClick={() => setQuantity((prev) => (prev + 1))}>+</button>
                </div>
                <button
                  className='add'
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.syncProduct.id,
                        title: item.syncProduct.name,
                        desc: item.syncVariants[0].product.name,
                        price: item.syncVariants[0].retail_price,
                        img: item.syncProduct.thumbnail_url,
                        quantity
                      })
                    )
                  }
                >
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="link">
                  <div className="item">
                    <FavoriteBorderIcon />  ADD TO WIST LIST
                  </div>
                  <div className="item">
                    <BalanceIcon />  ADD TO COMPARY
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
