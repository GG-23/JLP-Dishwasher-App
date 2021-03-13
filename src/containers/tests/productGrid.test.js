import React from 'react';
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom';

import * as api from "../../api/productGrid";
import ProductGrid from '../ProductGrid';


describe('ProductGrid', () => {
    jest.mock('../../api/productGrid');

    api.getProductGrid = jest.fn().mockImplementation(() => {
        return [];
    });

    it('calls getProductGrid on load', async() => {
        await act(async () => {
            render(<ProductGrid />);
        })
        expect( api.getProductGrid ).toBeCalled();
    });

    it('is empty if no products available', async() => {
        let wrapper;
        await act(async () => {
           wrapper = render(<ProductGrid />);
        })        
        expect( wrapper.container.firstChild ).toHaveTextContent('Dishwashers (0)');
    });

    it('calls containts GridProduct if results available', async() => {
        api.getProductGrid = jest.fn().mockImplementation(() => {
            return [{
                productId: 1001,
                title: 'Unit test',
                price: {
                    now: '123'
                }
            },{
                productId: 1002,
                title: 'Unit test 2',
                price: {
                    now: '99'
                }
            }];
        });

        let wrapper;
        await act(async () => {
           wrapper = render(<ProductGrid />);
        })        
        expect( wrapper.container.firstChild ).not.toBeEmptyDOMElement();
        expect( wrapper.container.getElementsByClassName('product').length ).toBe(2);
    });
});