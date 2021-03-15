import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProductDetails from '../ProductDetails';

const product = {
    productId: 1,
    code:'xyz',
    title: 'Test Product',
    additionalServices:{
        includedServices: '2 year guarantee'
    },
    details:{
        productInformation: 'Product Details are shown here',
        features:[{
            attributes: [{
                name: 'test',
                value: 'test value'
            },
            {
                name: 'test2',
                value: 'test value2'
            }]
        }]
    },
    displaySpecialOffer: '10% off original price',
    price:{
        now: '123.00'
    },
    media: {
        alt: 'Alt text for all images',
        images: {
            urls: ['http://test1/','http://test2/','http://test3/']
        }
    }
};


describe('ProductDetails', () => {

    it('contains all required output', () => {
        const wrapper = render(<BrowserRouter><ProductDetails {...product} /></BrowserRouter>);        

        //heading
        expect( wrapper.getAllByRole('heading')[0] ).toHaveTextContent(product.title);  
        
        //image carousel
        const image = wrapper.getByRole('img');
        expect( wrapper.getAllByRole('img') ).toHaveLength(1);
        expect(image.src).toBe(product.media.images.urls[0]);        
        expect(wrapper.container.querySelectorAll('.dot') ).toHaveLength(3);

        //pricing
        expect(wrapper.container.querySelector('.price') ).toHaveTextContent('£'+product.price.now);
        expect(wrapper.container.querySelector('.specialOffer') ).toHaveTextContent(product.displaySpecialOffer);
        expect(wrapper.container.querySelector('.additionalServices') ).toHaveTextContent(product.additionalServices.includedServices);

        // product info
        expect( wrapper.getAllByRole('heading')[1] ).toHaveTextContent('Product information');  
        expect(wrapper.container.querySelector('.productInformation') ).toHaveTextContent(product.details.productInformation);
        expect(wrapper.container.querySelector('.productInformation') ).toHaveTextContent('Product code: '+ product.code);

        // product spec
        expect( wrapper.getAllByRole('heading')[2] ).toHaveTextContent('Product specification');  
        expect(wrapper.container.querySelectorAll('.feature') ).toHaveLength(2);
        expect(wrapper.container.querySelectorAll('.feature')[0] ).toHaveTextContent(product.details.features[0].attributes[0].name);
        expect(wrapper.container.querySelectorAll('.feature')[0] ).toHaveTextContent(product.details.features[0].attributes[0].value);
    }) ;
    
    
    it('can change the displayed image', () => {
        const wrapper = render(<BrowserRouter><ProductDetails {...product} /></BrowserRouter>);  

        const image = wrapper.getByRole('img');
        expect( wrapper.getAllByRole('img') ).toHaveLength(1);
        expect(image.src).toBe(product.media.images.urls[0]);        
        
        fireEvent.click(wrapper.container.querySelectorAll('.dot')[1]);

        expect( wrapper.getAllByRole('img') ).toHaveLength(1);
        expect(image.src).toBe(product.media.images.urls[1]);

        fireEvent.click(wrapper.container.querySelectorAll('.dot')[2]);

        expect( wrapper.getAllByRole('img') ).toHaveLength(1);
        expect(image.src).toBe(product.media.images.urls[2]);

        fireEvent.click(wrapper.container.querySelectorAll('.dot')[0]);

        expect( wrapper.getAllByRole('img') ).toHaveLength(1);
        expect(image.src).toBe(product.media.images.urls[0]);
    });


    it('can show more/less of the product info', () => {
        const wrapper = render(<BrowserRouter><ProductDetails {...product} /></BrowserRouter>); 

        expect( wrapper.container.querySelector('.minimiser') ).toHaveClass('active');  
        expect( wrapper.container.querySelector('.readMore') ).toHaveTextContent('Read more');  

        fireEvent.click(wrapper.container.querySelector('.readMore'));

        expect( wrapper.container.querySelector('.minimiser') ).not.toHaveClass('active');  
        expect( wrapper.container.querySelector('.readMore') ).toHaveTextContent('Show less');  
    
    });
    
});