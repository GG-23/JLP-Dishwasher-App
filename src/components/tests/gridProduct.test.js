import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import GridProduct from '../GridProduct';


describe('GridProduct', () => {


    it('renders GridProduct', () => {    
        const wrapper = render(<GridProduct />);
        expect( wrapper.container.firstChild ).toHaveClass('product')
    })
});