import React, { useState } from 'react';
import './Collection.scss';
import { Card } from '../card/Card';

export const Collection = ({ printful }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log('printful', printful);//--------printfulData FeaturedProducts-------log

    if (printful && Array.isArray(printful)) {
        // Mapear os dados e acessar a propriedade "result" de cada elemento
        const featuredProducts = printful.map(item => item.result);

        console.log('featuredProducts', featuredProducts); // Log dos produtos em destaque
        console.log(featuredProducts);//--------printfulData FeaturedProducts-----------------------------------log

        return (
            <div className='collection'>
                <div className='top'>
                 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                </div>
                <div className='bottom'>
                    {error ? "something went wrong!" : (loading ? "loading..." : <Card featuredProducts={featuredProducts} />)}
                </div>
            </div>
        );
    } else {
        // Lidar com o caso em que featuredProducts.sync_variants não é uma matriz ou está vazio
        return (
            <div className='collection'>
                <div className='top'>
                    <h1> coleção</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                </div>
                <div className='bottom'>
                    {error ? "something went wrong!" : (loading ? "loading..." : "No sync_variants data")}
                </div>
            </div>
        );
    }
};
