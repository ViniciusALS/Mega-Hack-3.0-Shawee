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

    	if (i < value)
			  stars.push(<img src={Star} alt='Nota do bar' key={i} />);
    	else
			  stars.push(<img src={Star} alt='Nota do bar' key={i} />);
  	}

	return (
    <div className={`notas ${className}`}> {stars} </div>
	);
}

export default NotaDoBar;