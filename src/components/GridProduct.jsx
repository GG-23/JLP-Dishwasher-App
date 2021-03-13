import React from 'react';
import PropTypes from 'prop-types';


const GridProduct = ({productId, price, title, image}) => {

    return <div className='product'>
       

    </div>
};

GridProduct.propTypes = {
    id: PropTypes.string,
    price: PropTypes.shape({
        was: PropTypes.string,
        then1: PropTypes.string,
        then2: PropTypes.string,
        now: PropTypes.string,
        uom: PropTypes.string,
        currency: PropTypes.string
    }),
    title: PropTypes.string,
    image: PropTypes.string

}

export default GridProduct;