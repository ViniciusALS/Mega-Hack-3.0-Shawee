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
	distance: number,
	disponibilidades: disponibilidade[]
}

const CardBar: React.FC<CardBarProps> = ({ nome, imageURL, nota, distance, disponibilidades}) => {

	return (
		<div className="card-bar">
			<img className='card-bar-img' src={imageURL} alt='Foto do bar' />
			<span className='card-bar-titulo'>{nome}</span>
			<NotaDoBar nota={nota} />
			<span className='card-bar-distancia'>{distance}m</span>
			<div>
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

export default CardBar;
