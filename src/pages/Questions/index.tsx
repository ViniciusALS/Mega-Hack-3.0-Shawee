import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

interface Disponibilidade {
    id: Number; 
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

    return (
        <div id="container">
            <div className="title">
                <h1>Precisamos saber mais sobre o que você espera da sua experiência nos nossos bares parceiros</h1>
                <p>QUE TIPO DE COMODIDADES VOCÊ GOSTARIA DE ENCONTRAR NO BAR? </p>
            </div>
            <div className="atrativos">
                {items.map(item => (

                    <div key={item.id.toString()} className="item">
                        <div className="botao">
                            <img src={item.imageURL} alt={item.nome}/>
                        </div>
                        <p>{item.nome}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Questions;