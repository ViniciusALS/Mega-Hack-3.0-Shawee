import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

interface Disponibilidade {
    id: number; 
    nome: string; 
    imageURL: string;
}

const Questions = () => {

    const [ items, setItems ] = useState<Disponibilidade[]>([]);
    const [ selectedItems, setSelectedItems ] = useState<number[]>([]);

    useEffect(() => {

        api.get('/disponibilidades').then((res) => {
            
            setItems(res.data);
        });

    }, []);

    function handleSelectItem(id: number) {

        const alreadySelected = selectedItems.findIndex(item => item === id)

        if ( alreadySelected >= 0) {

            const filteredItems = selectedItems.filter(item => item !== id);
            
            setSelectedItems(filteredItems);
        } else {

            setSelectedItems([
                ...selectedItems, id
            ]);
        }

    }

    return (
        <div id="container">
            <div className="title">
                <h1>Tenha uma melhor experiência nos nossos bares parceiros</h1>
                <p>QUE TIPO DE COMODIDADES VOCÊ GOSTARIA DE ENCONTRAR NO BAR? </p>
            </div>
            <ul className="atrativos">
                {items.map(item => (
                    <li key={item.id} 
                        onClick={() => handleSelectItem(item.id)}
                        className={selectedItems.includes(item.id) ? 'selected' : '' }
                        >
                        <div className="botao">
                            <img src={item.imageURL} alt={item.nome}/>
                        </div>
                        <p>{item.nome}</p>
                    </li>
                ))}
            </ul>
            <div className="confirmar">
                <a href="/sel-cervejas">Confirmar seleção</a>
            </div>
        </div>

    );
}

export default Questions;