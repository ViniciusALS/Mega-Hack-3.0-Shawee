import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../services/api';

import './styles.css';
import star from '../../resources/star.png';

interface Disponibilidade {
    id: Number; 
    nome: string; 
    imageURL: string;
}

interface Bar {
    id: Number; 
    nome: string; 
    imageUrl: string; 
    nota: Number;
    distancia: string;
    descricao: string;
    endereco: string; 
    disponibilidades: Disponibilidade[];
}

const Detail = () => {

    const { id } = useParams();

    const [ bar, setBar ] = useState<Bar>( { id: 0, 
                                            nome: "", 
                                            imageUrl: "", 
                                            nota: 0, 
                                            distancia: "", 
                                            descricao: "", 
                                            endereco: "", 
                                            disponibilidades: [] });
    const [ atrativos, setAtrativos ] = useState<Disponibilidade[]>([]);
    const [ stars, setStars ] = useState<number[]>([]);

    useEffect(() => {
        if(id) {
            api.get(`bares/${id}`).then((res) => {
                
                setBar(res.data);
                setAtrativos(res.data.disponibilidades);
                const arr = Array(res.data.nota).fill(null).map((_, i) => i);

                setStars(arr);
            });
        }
    }, [id]);

    return (
        <>
            <div id="detail-container">
                <header>
                    <img src={bar.imageUrl} alt={bar.nome} className="bar-image"/>
                </header>
                <main>
                    <div className="bar-nome">
                        <div className="title">
                            <h1>
                                {bar.nome}
                            </h1>
                            <div className="nome-detail">
                                <h4>
                                    {bar.distancia}
                                </h4>
                                <strong>
                                    {stars.map(s => (

                                        <img key={s.toString()} src={star} alt="star"/>
                                    ))}
                                </strong>
                            </div>
                        </div>
                        <div className="menu">
                            <a href="">MENU</a>
                        </div>
                    </div>
                    <hr className="divisor-line"/>
                    <div className="endereco">
                        <h3>
                            Endereço
                        </h3>
                        <div className="endereco-detalhe">
                            <p>
                                {bar.endereco}
                            </p>
                            <p className="delivery">
                                Possui serviço de delivery
                            </p>
                        </div>
                    </div>
                    <div className="reserva">
                        <a href="" className="reserva">Reserve uma mesa</a>
                    </div>
                    <div className="descricao">
                        <p>
                            {bar.descricao}
                        </p>
                    </div>
                    <div className="atrativos">
                        {atrativos.map(atrativo => (
                            <div className="atrativos-items" key={atrativo.id.toString()}>
                                <div className="item-img">
                                    <img src={atrativo.imageURL} alt={atrativo.nome}/>
                                </div>
                                <div className="item-nome">
                                    <strong>{atrativo.nome}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );

}

export default Detail;