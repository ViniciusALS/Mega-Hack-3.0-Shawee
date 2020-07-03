import React, { useState, useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

import logo from '../../resources/cervejas/leffe-blonde-blond.png';

interface Cerveja {
    id: number;
    title: string;
    imageUrl: string;
}

const Cervejas = () => {

    const [ cervejas, setCervejas ] = useState<Cerveja[]>([]);

    useEffect(() => {
        api.get('/cervejas').then(res => setCervejas(res.data));
    }, []);

    return (
        <>
        <ul className="items-grid">
            {cervejas.map( cerveja => (
                <li key={cerveja.id}>
                   {/* <img src={logo} alt={cerveja.title} /> */}
                   <img src={cerveja.imageUrl} alt={cerveja.title} />
                   <span>
                       {cerveja.title}
                    </span> 
                </li>
            ))}
        </ul>
        </>
    );
}

export default Cervejas;