import axios from 'axios';
import { getProductDetails } from '../productDetails';
import mockedData from './__mocks__/productDetails';

jest.mock('axios')
axios.mockResolvedValue();

describe( 'product details api' , () => {

    it('should return a valid response for a product', async () =>{
        axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));
        const productDetails = await getProductDetails("3244905");   

        expect(axios.get).toHaveBeenCalled();   
        expect(axios.get).toHaveBeenCalledWith('/mobile-apps/api/v1/products/3244905');          
        expect(productDetails).toEqual(mockedData.data);
    });

    it( 'returns empty object if endpoint errs', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject());     

        const productDetails = await getProductDetails("3244905");   

        expect(axios.get).toHaveBeenCalled();   
        expect(productDetails).toEqual({});
    });

    it( 'rejects if requested id does not match returned', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));

        const productDetails = await getProductDetails("1234");   
        expect(axios.get).toHaveBeenCalled();   
        expect(productDetails).toEqual({});
    });

});