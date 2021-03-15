import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = (product) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isMinimised, setIsMinimised] = useState(true);

    const features = product.details.features[0].attributes.map( (feature, i) => 
        <div className='feature' key={`feature${i}`}>
            <p>{feature.name}</p> <p>{feature.value}</p>
        </div>
    );

    const dots = product.media.images.urls.map( (image,i) => 
        <div 
            key={`dot${i}`}
            className={`dot ${i === currentImage && 'active'}`}
            onClick={()=>setCurrentImage(i)}
        ></div>
    );

    return <div className='productDetails'>
                <div className='heading'>
                    <Link to='/'>
                        {'<'} 
                    </Link>
                    <h1>{product.title}</h1>
                </div>
                <div className='imageContainer'>
                    <div className='image'>
                        <img src={product.media.images.urls[currentImage]} alt={product.media.images.altText} />                            
                    </div>
                    <div className='dots'>
                        {dots}
                    </div>
                </div>
                <div className='detailsContainer'>
                    <div className='productInformation'>
                        <h2>Product information</h2>
                        <div className={`minimiser ${isMinimised && 'active'}`}>
                            <p dangerouslySetInnerHTML={{ __html: product.details.productInformation }} />
                            <p>Product code: {product.code}</p>
                        </div>
                    </div>
                    <div className={`readMore ${isMinimised?'closed':'open'}`} onClick={()=>setIsMinimised(!isMinimised)}>
                        { isMinimised?
                            <div>Read more <div className='chevron'>{'>'}</div></div>
                        :
                            <div>Show less <div className='chevron'>{'>'}</div></div>
                        }
                    </div>
                    <div className='productSpecification'>
                        <h2>Product specification</h2>
                        {features}
                    </div>
                </div>
                <div className='priceContainer'>
                    <p className='price'>£{product.price.now}</p>
                    <p className='specialOffer'>{product.displaySpecialOffer}</p>
                    <p className='additionalServices'>{product.additionalServices.includedServices}</p>
                </div>                
         </div>;
}

export default ProductDetails;