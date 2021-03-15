import React from 'react';
import { Link } from 'react-router-dom';


const GridProduct = ({productId, price, title, image}) => {

    if( !productId || !title || !price ) {
        return null;
    }

    return (
        <Link to={'/product/'+productId} className='product'>
            <div className='image'><img src={image} alt={title} /></div>
            <p className='title'>{title}</p>
            <p className='price'>£{price.now}</p>
        </Link>
    )
};

export default GridProduct;