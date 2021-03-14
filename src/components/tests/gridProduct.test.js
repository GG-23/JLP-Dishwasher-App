import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GridProduct from '../GridProduct';


describe('GridProduct', () => {

    it('returns null if no productId provided', () => {    

        const product = {
            title: 'Test Product',
            price: {
                now: '123.00'                
            },
            image: 'http://animageofadishwasher.png/'
        };        

        const wrapper = render(<BrowserRouter><GridProduct {...product} /></BrowserRouter>);
        expect( wrapper.container.firstChild ).toBeNull();
    });

    it('returns null if no title provided', () => {    

        const product = {
            productId: '1234',
            price: {
                now: '123.00'                
            },
            image: 'http://animageofadishwasher.png/'
        };        

        const wrapper = render(<BrowserRouter><GridProduct {...product} /></BrowserRouter>);
        expect( wrapper.container.firstChild ).toBeNull();
    });

    it('returns null if no price provided', () => {   

        const product = {
            productId: '1234',
            title: 'Test Product',
            image: 'http://animageofadishwasher.png/'
        };  

        const wrapper = render(<BrowserRouter><GridProduct {...product} /></BrowserRouter>);
        expect( wrapper.container.firstChild ).toBeNull();
    });
    
    
    it('renders GridProduct if required props provided', () => {    

        const product = {
            productId: '1234',
            title: 'Test Product',
            price: {
                now: '123.00'                
            },
            image: 'http://animageofadishwasher.png/'
        };
        
        const wrapper = render(<BrowserRouter><GridProduct {...product} /></BrowserRouter>);
        expect( wrapper.container.firstChild ).toHaveClass('product');

        const image = wrapper.getByRole('img');
        expect(image).toHaveAttribute('src');
        expect(image.src).toBe(product.image);

        const title = wrapper.getAllByText(product.title);
        expect( title ).toHaveLength(1);

        const price = wrapper.getAllByText('£'+product.price.now);
        expect( price ).toHaveLength(1);
    });

    it('should link to the product page', () => {
        const product = {
            productId: '1234',
            title: 'Test Product',
            price: {
                now: '123.00'                
            },
            image: 'http://animageofadishwasher.png/'
        };
        
        const wrapper = render(<BrowserRouter><GridProduct {...product} /></BrowserRouter>);
        
        expect( wrapper.container.firstChild ).toHaveAttribute('href', '/product/1234');

    });
    

});