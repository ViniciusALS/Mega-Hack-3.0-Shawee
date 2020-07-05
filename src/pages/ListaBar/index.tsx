import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';
import star from '../../resources/star.png';
import more from '../../resources/more.svg';
import dot from '../../resources/dot.svg';

interface Bar {
    id: number; 
    nome: string; 
    imageUrl: string; 
    nota: number;
    distancia: string;
    disponibilidades: Disponibilidade[];
}

interface Disponibilidade {
    id: number; 
    nome: string; 
    imageURL: string;
}

const ListaBar = () => {

    const [ bares, setBares ] = useState<Bar[]>([]);
    const [ total, setTotal ] = useState<number>(0);
    const [ stars, setStars ] = useState<number[]>([]);

    useEffect(() => {
        api.get('bares').then(res => {
            
            const arr = Array(3).fill(null).map((_, i) => i);

            setStars(arr);
            
            setBares(res.data);

            setTotal(res.data.length);
        });
    }, [])

    return (
        <div id="container-bares">
            <header>
                <h1>Bares perto de você</h1>
                <div className="filtro">
                    <a href="">+ filtros</a>
                </div>
                <div className="total">
                    <strong>{total} locais</strong>
                </div>
            </header>
            <main>
                <div className="grid-cards">
                {bares.map(bar => (
                    <div key={bar.id} className="card-bar">
                        <img src={bar.imageUrl} alt={bar.nome} />
                        <div className="bar-detail">
                            <div className="nome-bar">
                                <h3>{bar.nome}</h3>
                                <div className="more">
                                    <img src={more} alt="more"/>
                                </div>
                            </div>
                            <h4>
                                {stars.map(s => (

                                    <img key={s.toString()} src={star} alt="star"/>
                                ))}
                                <img className="dot" src={dot} alt="dot"/>
                                {bar.distancia}
                            </h4>
                            <div className="disponib">
                                {bar.disponibilidades.map(disp => (
                                    <img src={disp.imageURL} alt={disp.nome} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </main>

        </div>
    );
}

export default ListaBar;