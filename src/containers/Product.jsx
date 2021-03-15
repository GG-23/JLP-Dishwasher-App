import React, {useState, useEffect}  from 'react';
import {  useParams } from 'react-router-dom';
import { getProductDetails } from '../api/productDetails';
import ProductDetails from  '../components/ProductDetails';

const Product = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(async () => {      
        const product = await getProductDetails(id);
        setProduct( product );
    }, []);        

    if ( Object.keys(product).length === 0 ){
        return null;
    }    
        
    return <div className='productDetailsPage'><ProductDetails {...product} /></div>;
}

export default Product;