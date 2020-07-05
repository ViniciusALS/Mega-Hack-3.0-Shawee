import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Detail from './pages/Details';
import Cadastro from './pages/Cadastro';
import Questions from './pages/Questions';
import SelCerveja from './pages/SelCervejas';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Detail} path="/details/:id" />
            <Route component={Cadastro} path="/cadastro" />
            <Route component={Questions} path="/questions" />
            <Route component={SelCerveja} path="/sel-cervejas" />
        </BrowserRouter>
    );
}

export default Routes;