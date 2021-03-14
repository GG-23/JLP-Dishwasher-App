import React from 'react';
import { Link } from 'react-router-dom';


const GridProduct = ({productId, price, title, image}) => {

    if( !productId || !title || !price ) {
        return null;
    }

    return (
        <Link to={'/product/'+productId} className='product'>
            <img src={image} alt={title} />
            <div>{title}</div>
            <div className='price'>£{price.now}</div>
        </Link>
    )
};

export default GridProduct;