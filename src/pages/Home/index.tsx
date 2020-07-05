import React, { useState, useEffect } from 'react';

import Cervejas from '../../components/cervejas/index';
import CardBar from '../../components/CardBar';
import CardEvento from '../../components/CardEvento';

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

type Evento = {
	id: number
	nome: string,
	imageUrl: string,
	bar: {
		id: number,
		nome: string,
		distancia: string
	},
	data: string,
	hora: string
}

const Home = () => {

	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [bares, setBares] = useState<Bar[]>([]);
	const [eventos, setEventos] = useState<Evento[]>([]);
	
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
		api.get('eventos').then(res => setEventos(res.data));
	}, []);

	return (
		<div className='home'>
			<h2>Cervejas para você</h2>
			<Cervejas selected={setItems} />
			
			<h3>Bares perto de você</h3>

			<div className='home-bares'> {
				bares.slice(0, 2).map(bar => 
					<CardBar
						key={bar.id}
						nome={bar.nome}
						imageURL={bar.imageUrl}
						nota={bar.nota}
						distance={bar.distancia}
						disponibilidades={bar.disponibilidades} />
				)
			} </div>
			
			<h3>O que vai rolar</h3>
			
			<div className='home-bares'> {
				eventos.slice(0, 2).map(evento =>
					<CardEvento
						key={evento.id}
						nome={evento.nome}
						imageURL={evento.imageUrl}
						bar={evento.bar}
						data={evento.data}
						hora={evento.hora} />
				)
			} </div>
			
			<h3>Promoções</h3>

			<img
				className='promocoes'
				src='../../resources/propaganda.png'
				alt='Promoções' />
			
			<footer className='home-footer'></footer>

		</div>		
	);
}

export default Home; 