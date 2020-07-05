import React from 'react';
import './styles.css';

import NotaDoBar from '../NotaDoBar';
import { useHistory } from 'react-router';

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

const CardBar: React.FC<CardBarProps> = ({ nome, imageURL, nota, distance, disponibilidades}) => {

	const history = useHistory();

	const handleSelectBar = () => {
		history.push('/details/1');
	}

	return (
		<div className="card-bar">
			<img className='card-bar-img' src={imageURL} alt='Foto do bar' onClick={handleSelectBar}/>
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

export default CardBar;
