import React from 'react';

import './styles.css';

type CardBarProps = {
	nome: string,
	nota: number,
	latitude: number,
	longitude: number,
	disponibilidades: [ string, string ]
}

const CardBar: React.FC<CardBarProps> = ({nome, nota, latitude, longitude, disponibilidades}) => {
	
	return (
		<div className="card-bar">
			<img src="" alt='Foto do bar' />
			<h3>{nome}</h3>
			
		</div>
	);
}

export default CardBar;
