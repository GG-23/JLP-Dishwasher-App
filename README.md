# John Lewis Partnership UI Dev Test


### Instructions
First, download the repository and run `yarn install` to install the app.\
Then you can use `yarn start` to run the app in the development mode.\
Or `yarn test` to run the tests and view coverage.

You can then open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### Assumptions
For the purposes of this test, I am assuming that:

 * The stack I should be using includes JS(ES6+), React and SASS as per the job specification.
 * The app should work in all popular browsers.
 * API calls should be mocked for faster testing and to avoid any potential issues with the backend. 
 * If a product does not have an id, title or price, it should not be shown.
 * Features key in the ProductPage API refers to Details > Features.
 * All products need a 'Read more' option on landscape. 

 ### Notes

 * Axios has been used for API requests in order to provide backwards compatibility. 
 * Testing is carried out with react-testing-library.
 * Manually checked on Chrome dev tools and XCode Simulator. 