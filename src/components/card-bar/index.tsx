import React from 'react';

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
			test
		</div>
	);
}

export default CardBar;
