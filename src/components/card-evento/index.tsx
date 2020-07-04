import React from 'react';
import './styles.css';

import NotaDoBar from '../NotaDoBar';

type disponibilidade = {
	id: number,
	nome: string,
	imageURL: string
}

type CardBarProps = {
	nome: string,
	imageURL: string,
	nota: number,
	distance: string,
	disponibilidades: disponibilidade[]
}

const CardEvento: React.FC<CardBarProps> = ({ nome, imageURL, nota, distance, disponibilidades}) => {

	return (
		<div className="card-bar">
			<img className='card-bar-img' src={imageURL} alt='Foto do bar' />
			<span className='card-bar-titulo'>{nome}</span>
			<NotaDoBar nota={nota} />
			<div className='card-bar-distance-division'></div>
			<span className='card-bar-distancia'>{distance}</span>
			<div className='card-bar-disponibilidades'>
				{disponibilidades.map(disponibilidade => {
					return (
						<img
							key={disponibilidade.id}
							className='card-bar-disponibilidade-img'
							src={disponibilidade.imageURL}
							alt={disponibilidade.nome} />
					);
				})}
			</div>
		</div>
	);
}

export default CardEvento;
