import React from 'react';
import './styles.css';

import NotaDoBar from '../NotaDoBar';

type CardBarProps = {
  nome: string,
  imageURL: string,
	nota: number,
	distance: number,
	disponibilidades: [ string, string ]
}

const CardBar: React.FC<CardBarProps> = ({ nome, imageURL, nota, distance, disponibilidades}) => {
	
	return (
		<div className="card-bar">
			<img src={imageURL} alt='Foto do bar' />
      <h3>{nome}</h3>
      <NotaDoBar nota={nota} />
      <span>{distance}m</span>
		</div>
	);
}

export default CardBar;
