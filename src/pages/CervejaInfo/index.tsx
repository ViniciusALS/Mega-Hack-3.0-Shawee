import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../../services/api';

import './styles.css';

interface Cerveja {
    id: number;
    estilo: string;
    familia: string;
    cor: string;
    title: string;
    garrafaImgUrl: string;
    imageUrl: string;
    desc: string;
}

const CervejaInfo = () => {

    const { id } = useParams();

    const [ cerveja, setCerveja ] = useState<Cerveja>({id: 0, estilo: '', familia: '', cor: '', title: '', garrafaImgUrl: '', imageUrl: '', desc: ''});

    useEffect(() => {

        api.get(`cervejas/${id}`).then(res => {
            setCerveja(res.data);
        });

    }, []);

    return (
        <>  
            <div className="garrafa">
                <img src={cerveja.garrafaImgUrl} alt={cerveja.title}/>
            </div>
            <div id="container-cerveja-info">
                <header>
                    <h1>Cerveja para você</h1>
                    <p>ganhe 1 ponto</p>
                </header>
                <main>
                    <div className="title">
                        <h2>{cerveja.title}</h2>
                    </div>
                    <div className="caract">
                        <p>Estilo: <strong>{cerveja.estilo}</strong></p>
                        <p>Família: <strong>{cerveja.familia}</strong></p>
                        <p>Cor: <strong>{cerveja.cor}</strong></p>
                        <p className="desc">
                            Encorpada e produzida com maltes nobres, a Cerveja Leffe Brown tem um aroma torrado com toque de caramelo. De sabor leve e notas de chocolate e toffe, esta é uma saborosa Belgian Dubbel de coloração âmbar escura. Uma cerveja bem carbonatada com evidente amargor em seu retrogosto. Experimente harmonizar o sabor da Leffe Brown com m porco assado ou um frango ao vinho. Criada em 1240 por clérigos da abadia de Leffe, a marca teve sua produção interrompida após a Revolução Francesa, até que, na década de 1950, Abbot Nys e Albert Lootvoet reviveram a tradição.
                        </p>
                    </div>
                </main>
                <footer>
                    <div className="actions">
                        <a className="confirmar" href="/">Beber no bar mais próximo</a>
                        <a className="confirmar-ze" href="https://www.ze.delivery/" target="_blank">Pedir no Zé Delivery</a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default CervejaInfo;