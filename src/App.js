import React from 'react';
import ProductGrid from './containers/ProductGrid';
import Product from './containers/Product';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route path="/">
                        <ProductGrid/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;