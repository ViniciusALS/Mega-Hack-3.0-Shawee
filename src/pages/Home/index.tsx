import React, { useState, useEffect } from 'react';

import CardBar from '../../components/CardBar';
import Cervejas from '../../components/cervejas/index';

import api from '../../services/api';

import './styles.css';


interface Disponibilidade {
    id: number; 
    nome: string; 
    imageURL: string;
}

type Bar = {
    id: number; 
    nome: string; 
    imageUrl: string; 
    nota: number;
    distancia: string;
    disponibilidades: Disponibilidade[];
}

const Home = () => {

	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [bares, setBares] = useState<Bar[]>([]);
	
	const setItems = (id: number) => {
		const alreadySelected = selectedItems.findIndex(item => item === id)

		if ( alreadySelected >= 0) {
			const filteredItems = selectedItems.filter(item => item !== id);
			setSelectedItems(filteredItems);
		
		} else { 
			setSelectedItems([ ...selectedItems, id ]);
		}
	};

	useEffect(() => {
		api.get('bares').then(res => setBares(res.data));
	}, []);

	return (
		<div className='home'>
			<h2>Cervejas para você</h2>
			<Cervejas selected={setItems} />
			
			<h3>Bares perto de você</h3>

			<div className='home-bares'> {
				bares.slice(0, 2).map(bar => 
					<CardBar
						nome={bar.nome}
						imageURL={bar.imageUrl}
						nota={bar.nota}
						distance={bar.distancia}
						disponibilidades={bar.disponibilidades} />
				)
			} </div>
			
			<h3>O que vai rolar</h3>
			<h3>Promoções</h3>
		</div>		
	);
}

export default Home; 