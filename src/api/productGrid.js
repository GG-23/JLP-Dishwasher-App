import axios from 'axios';

export const getProductGrid = async function (){
  return await axios.get('/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI')
    .then( response => {
        return response.data.products.slice(0,20)   
    })
    .catch( () => {
        // send error to handler/tracker
        return [];
    });
}