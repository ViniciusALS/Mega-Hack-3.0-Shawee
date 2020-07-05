import React from 'react';
import './styles.css';

type Bar = {
  id: number,
  nome: string,
  distancia: string
}

type Evento = {
  id: number,
	nome: string,
	imageURL: string,
  bar: Bar,
	data: string,
	hora: string
}

const CardEvento: React.FC<Evento> = ({ id, nome, imageURL, bar, data, hora }) => {

	return (
		<div className="card-evento">
			<img className='card-evento-img' src={imageURL} alt='Foto do evento' />
      <span className='card-evento-titulo'>{nome}</span>
			<span className='card-evento-distancia'>{bar.nome}</span>
			<div className='card-evento-distance-division'></div>
			<span className='card-evento-distancia'>{bar.distancia}</span>
		</div>
	);
}

export default CardEvento;
