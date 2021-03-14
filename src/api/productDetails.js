import axios from 'axios';

export const getProductDetails = async (productId) => {
  return await axios.get('/mobile-apps/api/v1/products/'+productId)
    .then( response => {
        if( response.productId !== productId ){
            throw('ProductId requested did not match returned');
        }
        return response 
    })
    .catch( () => {
        // send error to handler/tracker
        return {};
    });
}