import React from 'react';
import './styles.css';

type Evento = {
	nome: string,
	imageURL: string,
  bar: {
    id: number,
    nome: string,
    distancia: string
  },
	data: string,
	hora: string
}

const CardEvento: React.FC<Evento> = ({ nome, imageURL, bar, data, hora }) => {

  console.log(imageURL);
	return (
		<div className="card-evento">
			<img className='card-evento-img' src={imageURL} alt='Foto do evento' />
      <span className='card-evento-titulo'>{nome}</span>
			<span className='card-evento-distancia'>{bar.nome}</span>
			<div className='card-evento-distance-division'></div>
      <span className='card-evento-distancia'>{bar.distancia}</span>
      <span className='card-evento-data-hora'>{data} {hora}</span>
		</div>
	);
}

export default CardEvento;
