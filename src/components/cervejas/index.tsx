import React, { useState, useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

interface Cerveja {
    id: number;
    title: string;
    imageUrl: string;
}

interface Props {
    selected: (items: number) => void;
}

const Cervejas: React.FC<Props> = ({ selected }) => {

    const [ cervejas, setCervejas ] = useState<Cerveja[]>([]);
    const [ selectedItems, setSelectedItems ] = useState<number[]>([]);

    useEffect(() => {
        api.get('cervejas').then(res => setCervejas(res.data));
    }, []);

    function handleSelectItem(id: number) {

        const alreadySelected = selectedItems.findIndex(item => item === id)

        if ( alreadySelected >= 0) {

            const filteredItems = selectedItems.filter(item => item !== id);
            
            setSelectedItems(filteredItems);
            selected(id);
        } else {

            setSelectedItems([
                ...selectedItems, id
            ]);
            selected(id);
        }

    }

    return (
        <>
        <ul className="items-grid">
            {cervejas.map( cerveja => (
                <li key={cerveja.id}
                    onClick={() => handleSelectItem(cerveja.id)}
                    >
                   <img src={cerveja.imageUrl} alt={cerveja.title} />
                   <span className={selectedItems.includes(cerveja.id) ? 'selected' : '' }>
                       {cerveja.title}
                    </span> 
                </li>
            ))}
        </ul>
        </>
    );
}

export default Cervejas;