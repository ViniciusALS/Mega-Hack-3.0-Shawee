import React, { useState, useEffect } from 'react';

import api from '../../services/api';

interface Cerveja {
    id: number;
    title: String;
    imageUrl: String;
}

const Cervejas = () => {

    const [ cervejas, setCervejas ] = useState<Cerveja[]>([]);

    useEffect(() => {
        api.get('/cervejas').then(res => setCervejas(res.data));
    }, []);

    return (
        <ul>
            {cervejas.map( cerveja => (
                <li key={cerveja.id}>
                    {cerveja.title}
                </li>
            ))}
        </ul>
    );
}

export default Cervejas;