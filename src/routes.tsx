import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Cervejas from './components/cervejas/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Cervejas} path="/" exact />
        </BrowserRouter>
    );
}

export default Routes;