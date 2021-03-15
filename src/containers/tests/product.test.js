import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom';

import * as api from "../../api/productDetails";
import Product from '../Product';


describe('Product', () => {
    jest.mock('../../api/productDetails');

    api.getProductDetails = jest.fn().mockImplementation(() => {
        return {};
    });

    it('calls getProductDetails on load', async () => {
        await act( async () => {
            render(<MemoryRouter><Product /></MemoryRouter>);
        })
       expect( api.getProductDetails ).toBeCalled();
    });

    it('is empty if no product available', async () => {
        let wrapper;
        await act( async () => {
            wrapper = render(<MemoryRouter><Product /></MemoryRouter>);
        })
       expect( wrapper.container ).toBeEmptyDOMElement();
    });

    it('returns product container if match returned', async () => {
    
        api.getProductDetails = jest.fn().mockImplementation(() => {
            return {
                productId: 1,
                title: 'Test Product'
            };
        });

        let wrapper;
        await act( async () => {
            wrapper = render(<MemoryRouter initialEntries={["/product/1"]}><Product /></MemoryRouter>);
        });
        
        expect( wrapper.container.firstChild ).toHaveClass('productDetailsPage');
    });

});