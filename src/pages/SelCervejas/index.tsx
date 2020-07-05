import React, { useState } from 'react';

import './styles.css';
import logo from '../../resources/dubbel.png';

const SelCerveja = () => {

    const [ selectedItem, setSelectedItem ] = useState<boolean>(false);

    const handleSelectItem = () => {
        setSelectedItem(!selectedItem);
    }

    return (
        <>
        <div id="container">
            <div className="title">
                <h1>Que tipo de cerveja você mais gosta?</h1>
            </div>
            <div className="cerveja" onClick={handleSelectItem}>
                <img src={logo} alt="dubbel"/>
            </div>
        </div>
        <div id="card-container">
            <div className={selectedItem ? 'card-selected' : 'card' } >
                <h2>Dubbel</h2>
                <p>Cerveja com bastante malte,  sabor torrado de nozes e chocolate, e pouco  lúpulo e  baixo amargor</p>
            </div>
            <div className="confirmar">
                <a href="/">Confirmar seleção</a>
            </div>
        </div>
        </>
    );


}

export default SelCerveja;