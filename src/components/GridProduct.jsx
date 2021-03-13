import React from 'react';


const GridProduct = ({productId, price, title, image}) => {

    if( !productId || !title || !price ) {
        return null;
    }

    return <div className='product'>
        <img src={image} alt={title} />
        <div>{title}</div>
        <div className='price'>£{price.now}</div>
    </div>
};

export default GridProduct;