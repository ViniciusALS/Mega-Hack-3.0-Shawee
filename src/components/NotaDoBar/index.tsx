import React from 'react';
import './styles.css';

import Star from '../../resources/star.png';

type NotaProps = {
	nota: number
}

type className = string;

const NotaDoBar: React.FC<NotaProps> = ({nota}, {className = ''}) => {
	
	const value = Math.round(nota);

	let stars = [];

	for (let i = 0; i < 3; i++) {

		if (i < value) {
			stars.push(
				<img
					key={i}
					className='notas-estrela'
					src={Star}
					alt='Nota do bar' />
			);
		}
		else {
			stars.push(
				<img
					key={i}
					className='notas-estrela'
					src={Star}
					alt='Nota do bar' />
			);
		}
	}

	return (
		<div className={`notas ${className}`}> {stars} </div>
	);
}

export default NotaDoBar;