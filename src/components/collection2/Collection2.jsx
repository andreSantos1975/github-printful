import React, { useState } from 'react';
import './Collection2.scss';
import { Card } from '../card/Card';

export const Collection2 = ({ printful2 }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log('printful', printful2);//--------printfulData FeaturedProducts-------log

    if (printful2 && Array.isArray(printful2)) {
        // Mapear os dados e acessar a propriedade "result" de cada elemento
        const featuredProducts = printful2.map(item => item.result);

        console.log('featuredProducts', featuredProducts); // Log dos produtos em destaque
        console.log(featuredProducts);//--------printfulData FeaturedProducts-----------------------------------log

        return (
            <div className='featuredProducts'>
                <div className='top'>
                </div>
                <div className='bottom'>
                    {error ? "something went wrong!" : (loading ? "loading..." : <Card featuredProducts={featuredProducts} />)}
                </div>
            </div>
        );
    } else {
        // Lidar com o caso em que featuredProducts.sync_variants não é uma matriz ou está vazio
        return (
            <div className='featuredProducts'>
                <div className='top'>
                </div>
                <div className='bottom'>
                    {error ? "something went wrong!" : (loading ? "loading..." : "No sync_variants data")}
                </div>
            </div>
        );
    }
};
