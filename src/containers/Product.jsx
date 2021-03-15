import React, {useState, useEffect}  from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductDetails } from '../api/productDetails';
import ProductDetails from  '../components/GridProduct';

const Product = () => {

    const [product, setProduct] = useState({});
    const [currentImage, setCurrentImage] = useState(0);
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