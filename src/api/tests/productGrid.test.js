import axios from 'axios';
import { getProductGrid } from '../productGrid';
import mockedData from './__mocks__/productGrid';

jest.mock('axios')
axios.mockResolvedValue();

describe( 'product grid api' , () => {

    it( 'should fetch products from grid endpoint', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(mockedData));

        const productGrid = await getProductGrid();   

        expect(axios.get).toHaveBeenCalled();   
        expect(axios.get).toHaveBeenCalledWith('/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI');          
        expect(productGrid).toEqual(mockedData.data.products);
    });

    it( 'should fetch 20 results at most', async () => {

        const twentyResults = {data:{products:[]}};
        const twentyOneResults = {data:{products:[]}};

        for( let i = 0; i < 20; i++ ) {
            const thisResult = {id: i};
            twentyResults.data.products.push(thisResult);
            twentyOneResults.data.products.push(thisResult);
        }

        twentyOneResults.data.products.push({id: 21});

        axios.get.mockImplementationOnce(() => Promise.resolve(twentyResults));
        const productGridTwentyPassedIn = await getProductGrid();  
        expect(productGridTwentyPassedIn).toHaveLength(20);
        
        axios.get.mockImplementationOnce(() => Promise.resolve(twentyOneResults));
        const productGridTwentyOnePassedIn = await getProductGrid();            
        expect(productGridTwentyOnePassedIn).toHaveLength(20); 
    })

    it( 'returns empty array of products if endpoint errs', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject());     

        const productGrid = await getProductGrid();   

        expect(axios.get).toHaveBeenCalled();   
        expect(productGrid).toEqual([]);
    })

});