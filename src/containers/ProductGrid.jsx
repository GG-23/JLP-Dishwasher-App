import React, {useState, useEffect}  from 'react';
import { getProductGrid } from '../api/productGrid';
import GridProduct from '../components/GridProduct';

const ProductGrid = ({}) => {

    const [products, setProducts] = useState([]);

    useEffect(async () => {        
        const products = await getProductGrid();
        setProducts( products );
    }, []);     

    return <div className='productGrid'>
            {products.map( product => 
                <GridProduct key={product.productId} {...product} />
            )}
    </div>;
}

export default ProductGrid;