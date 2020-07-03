import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Cervejas from './components/cervejas/index';
import Home from './pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Cervejas} path="/" exact />
			<Route component={Home} path="/home" />
        </BrowserRouter>
    );
}

export default Routes;