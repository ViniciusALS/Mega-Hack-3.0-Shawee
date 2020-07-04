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
			<h3>{nome}</h3>
			<NotaDoBar nota={nota} />
			<span>{distance}m</span>
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
