import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Detail from './pages/Details/index';
import Cadastro from './pages/Cadastro/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Detail} path="/details/:id" />
            <Route component={Cadastro} path="/cadastro" />
        </BrowserRouter>
    );
}

export default Routes;